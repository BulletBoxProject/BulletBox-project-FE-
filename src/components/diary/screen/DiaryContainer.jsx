import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import BulletCalendar from "../../common/calendar/Calendar";
import EmotionButton from "../components/EmotionButton";

import { ReactComponent as edit } from "../../../img/diary/edit.svg";
import { ReactComponent as check } from "../../../img/diary/round-check.svg";
import { __getDiary } from "../../../redux/modules/emotiondiarySlice";
import { __postDiary } from "../../../redux/modules/emotiondiarySlice";

const DiaryContainer = () => {
  const diaryList = useSelector(
    (state) => state?.emotiondiary?.emotiondiary?.diary
  );
  // const emotions = useSelector(
  //   (state) => state?.emotiondiary?.emotiondiary?.emotions
  // );
  const dispatch = useDispatch();

  const [diaryContent, setDiaryContent] = useState(diaryList?.diaryContent);
  const [diaryId, setDiaryId] = useState(diaryList?.diaryId);
  const [emotion, setEmotin] = useState(diaryList?.emotion);
  const [disabled, setDisabled] = useState(true);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());

  const DiaryInfo = {
    diaryId: diaryId,
    diaryContent: diaryContent,
    year: year,
    month: month,
    day: date,
    emotion: emotion,
  };

  const onEditHandler = () => {
    setDiaryId(diaryList?.diaryId);
    setDisabled(false);
  };

  const onAddHandler = () => {
    dispatch(__postDiary(DiaryInfo));
    console.log(DiaryInfo);
    setDisabled(true);
  };

  const onDiaryHandler = (e) => {
    setDiaryContent(e.target.value);
  };

  useEffect(() => {
    dispatch(__getDiary());
  }, [dispatch]);

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
          <EmotionBox>
            <EmotionButton setEmotin={setEmotin} />
          </EmotionBox>
          {disabled ? (
            <EditCheckDiv>
              <EditCheckBox>
                <EditBtn onClick={() => onEditHandler()}>
                  <EditImg />
                </EditBtn>
                수정
              </EditCheckBox>
            </EditCheckDiv>
          ) : (
            <EditCheckDiv>
              <EditCheckBox>
                <EditBtn onClick={() => onAddHandler()}>
                  <CheckImg />
                </EditBtn>
                저장
              </EditCheckBox>
            </EditCheckDiv>
          )}
        </EmotionDiv>
        {diaryList && (
          <DiaryText
            disabled={disabled}
            value={diaryContent}
            placeholder="일기를 작성해보세요."
            onChange={(e) => onDiaryHandler(e)}
          />
        )}

        {diaryList && <DiaryLength>({diaryContent?.length}/200)</DiaryLength>}
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
  height: 310px;
  justify-content: center;
  align-items: center;
`;
const SelectDiv = styled.div`
  position: absolute;
  top: 5%;
  left: 88%;
  align-items: center;
  padding-top: 5px;
  font-weight: bold;
`;
const TodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 344px;
  height: 232px;
  margin-top: 50px;
  margin-left: 1px;
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
  height: 28px;
  margin-top: 5px;
`;
const EmotionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-left: 15px;
`;

const EditCheckDiv = styled.div`
  display: flex;
  width: 10%;
`;
const EditCheckBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 32px;
  font-size: 10px;
  font-weight: bold;
  color: var(--color-gray);
`;

const EditBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
`;

const CheckImg = styled(check)`
  width: 20px;
  height: 20px;
  fill: var(--color-gray);
`;

const EditImg = styled(edit)`
  width: 20px;
  height: 20px;
`;

const DiaryText = styled.textarea.attrs({ maxLength: 200 })`
  margin-top: 10px;
  padding-left: 7px;
  border: none;
  background-color: var(--color-default);
  resize: none;
  font-size: 12px;
  font-weight: bold;
  height: 120px;
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
