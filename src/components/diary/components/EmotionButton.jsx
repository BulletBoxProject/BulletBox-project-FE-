import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as angry } from "../../../img/emotion/angry-1.svg";
import { ReactComponent as excited } from "../../../img/emotion/excited-1.svg";
import { ReactComponent as happy } from "../../../img/emotion/happy-1.svg";
import { ReactComponent as sad } from "../../../img/emotion/sad-1.svg";
import { ReactComponent as soso } from "../../../img/emotion/soso-1.svg";

const EmotionButton = ({ emotion, setEmotion }) => {
  const onEmotionHandler = (e) => {
    setEmotion(e.target.id);
  };

  const buttons = [
    <ExcitedEmotion key="excited" />,
    <HappyEmotion key="happy" />,
    <SosoEmotion key="soso" />,
    <SadEmotion key="sad" />,
    <AngryEmotion key="angry" />,
  ];
  return (
    <>
      {buttons.map((btn, idx) => (
        <EmotionBtn
          aria-label="EmotionBtn"
          key={idx}
          id={btn.key}
          emotion={emotion}
          onClick={(e) => onEmotionHandler(e)}
        >
          {btn}
        </EmotionBtn>
      ))}
    </>
  );
};

export default EmotionButton;
const EmotionBtn = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background-color: transparent;
  fill: ${({ id, emotion }) =>
    id === emotion ? "var(--color-main)" : "var(--color-gray)"};
  & > svg {
    pointer-events: none;
  }
`;

const ExcitedEmotion = styled(excited)`
  height: 28px;
`;
const HappyEmotion = styled(happy)`
  height: 28px;
`;
const SosoEmotion = styled(soso)`
  height: 28px;
`;
const SadEmotion = styled(sad)`
  height: 28px;
`;
const AngryEmotion = styled(angry)`
  height: 28px;
`;
