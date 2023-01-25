import React, { useState } from "react";
import styled from "styled-components";

import BulletCalendar from "../../common/calendar/Calendar";
import { ReactComponent as angry } from "../../../img/emotion/angry.svg";
import { ReactComponent as excited } from "../../../img/emotion/excited.svg";
import { ReactComponent as happy } from "../../../img/emotion/happy.svg";
import { ReactComponent as sad } from "../../../img/emotion/sad.svg";
import { ReactComponent as soso } from "../../../img/emotion/soso.svg";
import { ReactComponent as check } from "../../../img/diary/check-2.svg";
import { ReactComponent as edit } from "../../../img/diary/edit.svg";

const DiaryContainer = () => {
  const [diaryText, setDiaryText] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  const onEditHandler = () => {
    setIsEdit(!isEdit);
  };
  const onDiaryHandler = (e) => {
    setDiaryText(e.target.value);
  };

  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${String(new Date().getFullYear()).substr(2, 2)}/${
    new Date().getMonth() + 1
  }/${new Date().getDate()}(${day[new Date().getDay()]})`;

  return (
    <Container>
      <CalendarDiv>
        <SelectDiv>Today</SelectDiv>
        <BulletCalendar />
      </CalendarDiv>
      <TodoDiv>
        <DateTitle>{today}</DateTitle>
        <EmotionDiv>
          <EmotionBtn>
            <ExcitedEmotion />
          </EmotionBtn>
          <EmotionBtn>
            <HappyEmotion />
          </EmotionBtn>
          <EmotionBtn>
            <SosoEmotion />
          </EmotionBtn>
          <EmotionBtn>
            <SadEmotion />
          </EmotionBtn>
          <EmotionBtn>
            <AngryEmotion />
          </EmotionBtn>
          {isEdit ? (
            <EditCheckBox>
              <EditBtn onClick={onEditHandler}>
                <CheckImg />
              </EditBtn>
            </EditCheckBox>
          ) : (
            <EditCheckBox>
              <EditBtn onClick={onEditHandler}>
                <EditImg />
              </EditBtn>
            </EditCheckBox>
          )}
        </EmotionDiv>
        <DiaryText
          placeholder="일기를 입력해주세요."
          onChange={(e) => onDiaryHandler(e)}
        />
        <DiaryLength>({diaryText.length}/200)</DiaryLength>
      </TodoDiv>
    </Container>
  );
};

export default DiaryContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 999;
`;
const CalendarDiv = styled.div`
  position: relative;
  height: 48vh;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;
const SelectDiv = styled.div`
  position: absolute;
  top: 3%;
  left: 88%;
  align-items: center;
  padding: 5px 0;
  font-weight: bold;
`;
const TodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 32vh;
  padding: 15px;
  border-radius: 16px;
  background-color: var(--color-default);
`;
const DateTitle = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  margin-top: 2%;
`;

const EmotionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5vh;
  margin-top: 2%;
`;
const EmotionBtn = styled.button`
  width: 10%;
  height: 3.8vh;
  border: none;
  background-color: transparent;
`;

const ExcitedEmotion = styled(excited)`
  height: 3.8vh;
`;
const HappyEmotion = styled(happy)`
  height: 3.8vh;
`;
const SosoEmotion = styled(soso)`
  fill: var(--color-gray);
  height: 3.8vh;
`;
const SadEmotion = styled(sad)`
  height: 3.8vh;
`;
const AngryEmotion = styled(angry)`
  height: 3.8vh;
`;

const EditCheckBox = styled.div`
  position: absolute;
  right: 0;
  margin-right: 8%;
`;

const EditBtn = styled.button`
  width: 29px;
  height: 3.8vh;
  border: none;
  background-color: transparent;
`;

const CheckImg = styled(check)`
  width: 7vw;
  height: 3.8vh;
`;

const EditImg = styled(edit)`
  height: 2.8vh;
`;

const DiaryText = styled.textarea.attrs({ maxLength: 200 })`
  margin-top: 5%;
  padding-left: 7px;
  border: none;
  background-color: var(--color-default);
  resize: none;
  font-size: 12px;
  font-weight: bold;
  height: 15vh;
  line-height: 17px;
  color: var(--color-dark-gray);
  ::placeholder {
    text-align: center;
    font-size: 12px;
    font-weight: bold;
  }
  :focus {
    outline: none;
  }
`;

const DiaryLength = styled.span`
  display: flex;
  align-items: center;
  justify-content: end;
  color: var(--color-gray);
  font-weight: bold;
`;
