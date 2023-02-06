import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as angry } from "../../../img/emotion/angry-1.svg";
import { ReactComponent as excited } from "../../../img/emotion/excited-1.svg";
import { ReactComponent as happy } from "../../../img/emotion/happy-1.svg";
import { ReactComponent as sad } from "../../../img/emotion/sad-1.svg";
import { ReactComponent as soso } from "../../../img/emotion/soso-1.svg";

const EmotionButton = ({ setEmotion }) => {
  const onEmotionHandler = (e) => {
    setEmotion(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <EmotionBtn value={"excited"} onClick={(e) => onEmotionHandler(e)}>
        <ExcitedEmotion />
      </EmotionBtn>
      <EmotionBtn value={"happy"} onClick={(e) => onEmotionHandler(e)}>
        <HappyEmotion />
      </EmotionBtn>
      <EmotionBtn value={"soso"} onClick={(e) => onEmotionHandler(e)}>
        <SosoEmotion />
      </EmotionBtn>
      <EmotionBtn value={"sad"} onClick={(e) => onEmotionHandler(e)}>
        <SadEmotion />
      </EmotionBtn>
      <EmotionBtn value={"angry"} onClick={(e) => onEmotionHandler(e)}>
        <AngryEmotion />
      </EmotionBtn>
    </>
  );
};

export default EmotionButton;
const EmotionBtn = styled.button`
  width: 30px;
  height: 28px;
  padding: 0;
  border: none;
  background-color: transparent;
  fill: var(--color-gray);
  :focus {
    fill: var(--color-main);
  }
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
