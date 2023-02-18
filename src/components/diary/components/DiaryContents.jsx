import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { __postDiary } from "../../../redux/modules/emotiondiarySlice";
import EmotionButton from "./EmotionButton";
import AlertModal from "../../common/modal/AlertModal";

import { ReactComponent as edit } from "../../../img/diary/edit.svg";
import { ReactComponent as check } from "../../../img/diary/round-check.svg";

const DiaryContents = ({
  DiaryInfo,
  diaryContent,
  setDiaryContent,
  setEmotion,
  selectDate,
  emotion,
}) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const [alertMessage, setAlertMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onEditHandler = () => {
    setDisabled(false);
  };

  const onAddHandler = () => {
    dispatch(__postDiary(DiaryInfo));
    setDisabled(true);
    setIsOpen(true);
    setAlertMessage("일기내용이 저장되었습니다.");
  };

  const onDiaryHandler = (e) => {
    setDiaryContent(e.target.value);
  };

  return (
    <TodoDiv>
      <DateTitle>{selectDate}</DateTitle>
      <EmotionDiv>
        <EmotionBox>
          <EmotionButton emotion={emotion} setEmotion={setEmotion} />
        </EmotionBox>
        {disabled ? (
          <EditCheckDiv>
            <EditCheckBox>
              <EditBtn aria-label="EditBtn" onClick={() => onEditHandler()}>
                <EditImg />
              </EditBtn>
              작성
            </EditCheckBox>
          </EditCheckDiv>
        ) : (
          <EditCheckDiv>
            <EditCheckBox>
              <EditBtn aria-label="AddBtn" onClick={() => onAddHandler()}>
                <CheckImg />
              </EditBtn>
              저장
            </EditCheckBox>
          </EditCheckDiv>
        )}
      </EmotionDiv>
      {diaryContent && diaryContent === null ? (
        <DiaryText
          disabled={disabled}
          placeholder="일기를 작성해보세요."
          onChange={(e) => onDiaryHandler(e)}
        />
      ) : (
        <DiaryText
          disabled={disabled}
          value={diaryContent}
          placeholder="일기를 작성해보세요."
          onChange={(e) => onDiaryHandler(e)}
        />
      )}

      <DiaryLength>({diaryContent?.length}/200)</DiaryLength>

      {isOpen && (
        <AlertModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          {alertMessage}
        </AlertModal>
      )}
    </TodoDiv>
  );
};

export default DiaryContents;

const TodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 344px;
  height: 232px;
  margin-top: 70px;
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
  width: 100%;
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

const DiaryText = styled.textarea.attrs({ maxLength: 199 })`
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
