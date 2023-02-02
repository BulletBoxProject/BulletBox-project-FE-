import React from "react";
import styled from "styled-components";

import { ReactComponent as angry } from "../../../img/emotion/angry-1.svg";
import { ReactComponent as excited } from "../../../img/emotion/excited-1.svg";
import { ReactComponent as happy } from "../../../img/emotion/happy-1.svg";
import { ReactComponent as sad } from "../../../img/emotion/sad-1.svg";
import { ReactComponent as soso } from "../../../img/emotion/soso-1.svg";

const Emotions = ({ emotion }) => {
  const selectEmotion = () => {
    switch (emotion) {
      case "excited":
        return (
          <EmotionDiv>
            <ExcitedEmotion />
          </EmotionDiv>
        );
      case "happy":
        return (
          <EmotionDiv>
            <HappyEmotion />
          </EmotionDiv>
        );
      case "soso":
        return (
          <EmotionDiv>
            <SosoEmotion />
          </EmotionDiv>
        );
      case "sad":
        return (
          <EmotionDiv>
            <SadEmotion />
          </EmotionDiv>
        );
      case "angry":
        return (
          <EmotionDiv>
            <AngryEmotion />
          </EmotionDiv>
        );
    }
  };
  return <div>{selectEmotion()}</div>;
};

export default Emotions;

const ExcitedEmotion = styled(excited)`
  width: 28px;
  height: 28px;
  fill: var(--color-gray);
`;
const HappyEmotion = styled(happy)`
  width: 28px;
  height: 28px;
  fill: var(--color-gray);
`;
const SosoEmotion = styled(soso)`
  width: 28px;
  height: 28px;
  fill: var(--color-gray);
`;
const SadEmotion = styled(sad)`
  width: 28px;
  height: 28px;
  fill: var(--color-gray);
`;
const AngryEmotion = styled(angry)`
  width: 32px;
  height: 32px;
  fill: var(--color-gray);
`;

const EmotionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 20px;
  padding-left: 6px;
`;
