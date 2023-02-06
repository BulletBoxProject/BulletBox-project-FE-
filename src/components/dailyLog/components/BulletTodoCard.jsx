import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { ReactComponent as moreIcon } from "../../../img/dailyLog/more.svg";
import { ReactComponent as deleteIcon } from "../../../img/dailyLog/delete.svg";
import { ReactComponent as memoBullet } from "../../../img/bullet/memo-5.svg";

import BulletSwitchList from "./BulletSwitchList";
import Option from "./Option";
import useOutSideClick from "../../../hooks/useOutSideClick";

const BulletTodoCard = ({ dailyLog, dailyLogs, setDailyLogs }) => {
  const [showTodoMemo, setShowTodoMemo] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSelectBox, setShowSelectBox] = useState(false);
  const [showMemoBox, setShowMemoBox] = useState(false);
  const selectOptionRef = useRef(null);

  const selectOptionClose = () => {
    setShowSelectBox(false);
  };

  useOutSideClick(selectOptionRef, selectOptionClose);

  const memoViewHandler = (e) => {
    if (showTodoMemo.find((id) => id === Number(e.target.id)) === undefined) {
      setShowTodoMemo([...showTodoMemo, Number(e.target.id)]);
    } else {
      setShowTodoMemo(showTodoMemo.filter((id) => id !== Number(e.target.id)));
    }
    setShowMemoBox(!showMemoBox);
  };

  const deleteButtonHandler = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  const cancelButtonHandler = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  const selectOptionHandler = () => {
    setShowSelectBox(!showSelectBox);
  };
  let num = 0;
  return (
    <Container>
      <CardContainer key={num++}>
        <MainBulletTodo todoContent={dailyLog.todoContent}>
          <CategoryColorDiv
            showMemoBox={showMemoBox}
            categoryColor={dailyLog.categoryColor}
          />
          <TodoBodyDiv>
            <BulletDiv>
              <BulletSwitchList bulletName={dailyLog.todoBulletName} />
            </BulletDiv>
            <TodoContentDiv>
              <TodoTitle>{dailyLog.todoContent}</TodoTitle>
              <TimeDiv>
                {dailyLog.time === null ? null : (
                  <TodoSetTime>{dailyLog.time}</TodoSetTime>
                )}
              </TimeDiv>
            </TodoContentDiv>
          </TodoBodyDiv>
          {dailyLog && (
            <TodoMoreViewDiv>
              <TodoMoreViewButton
                id={dailyLog.todoId}
                onClick={memoViewHandler}
              >
                {showTodoMemo.find((id) => id === dailyLog.todoId) !==
                undefined ? (
                  <OnlyTitleIcon />
                ) : dailyLog?.todoMemos?.length === 0 ? null : (
                  <MoreIcon />
                )}
              </TodoMoreViewButton>
            </TodoMoreViewDiv>
          )}
          <OptionSelectDiv ref={selectOptionRef}>
            <OptionButton id={dailyLog.todoId} onClick={selectOptionHandler}>
              <OptionIcon />
            </OptionButton>
            {showSelectBox ? (
              <Option
                todoId={dailyLog.todoId}
                dailyLogs={dailyLogs}
                setDailyLogs={setDailyLogs}
                setShowSelectBox={setShowSelectBox}
              />
            ) : null}
          </OptionSelectDiv>
        </MainBulletTodo>
        <MemoDiv>
          <MomoCategoryColor categoryColor={dailyLog.categoryColor} />
          <MemoLsitDiv>
            {showTodoMemo.find((id) => id === dailyLog.todoId) !== undefined
              ? dailyLog.todoMemos.map((memo) => (
                  <TodoMemoDiv key={num++} id={memo.todoMemoId}>
                    <MemoContent>
                      <span>
                        <MemoBullet />
                      </span>
                      <span>{memo.todoMemoContent}</span>
                    </MemoContent>
                  </TodoMemoDiv>
                ))
              : null}
          </MemoLsitDiv>
        </MemoDiv>
      </CardContainer>
      {showDeleteModal ? (
        <ModalContainer>
          <ModalContent>
            <DeleteMsg>
              <span>
                <DeleteIcon />
              </span>
              <span>삭제하시겠습니까?</span>
            </DeleteMsg>
            <SelectLine></SelectLine>
            <ModalButtonGroup>
              <DeleteButton onClick={deleteButtonHandler}>삭제</DeleteButton>
              <CancelButton onClick={cancelButtonHandler}>취소</CancelButton>
            </ModalButtonGroup>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </Container>
  );
};

export default BulletTodoCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: var(--color-default);
  border-radius: 8px;
`;
const MainBulletTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${({ todoContent }) => (todoContent.length > 19 ? "60px" : "40px")};
  border-radius: ${(props) =>
    props.showMemoBox === true ? `8px 8px 0 0` : `8px`};
  background-color: var(--color-default);
`;
const CategoryColorDiv = styled.div`
  width: 8px;
  height: 100%;
  background-color: ${(props) => props.categoryColor};
  border-radius: ${(props) =>
    props.showMemoBox === true ? `8px 0 0 0` : `8px 0 0 8px`};
`;
const TodoBodyDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
  width: 80%;
  font-size: 14px;
  font-weight: 600;
  gap: 10px;
`;
const BulletDiv = styled.span`
  width: 24px;
`;
const TodoContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-right: 3%;
  height: 100%;
  padding-left: 6px;
  border-radius: 0 8px 8px 0;
  background-color: var(--color-default);
`;
const TimeDiv = styled.span`
  padding-top: 2px;
  font-size: 12px;
`;
const TodoSetTime = styled.span`
  color: var(--color-gray);
`;
const TodoTitle = styled.span`
  font-size: 12px;
  width: 90%;
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
const ModalContent = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 0;
  width: 200px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-default);
  border-radius: 8px;
  font-size: 14px;
`;
const DeleteMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: var(--color-gray);
  gap: 10px;
`;
const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > div {
    cursor: pointer;
  }
`;
const DeleteButton = styled.div`
  font-size: 14px;
  color: var(--color-main);
`;
const CancelButton = styled.div`
  font-size: 14px;
`;
const MemoDiv = styled.div`
  background-color: var(--color-default);
  display: flex;
  border-radius: 0 0 8px 8px;
  width: 100%;
`;
const MomoCategoryColor = styled.div`
  width: 8px;
  background-color: ${(props) => props.categoryColor};
  border-radius: 0 0 0 8px;
`;
const MemoLsitDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;
const TodoMemoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: inherit;
  padding-bottom: 4px;
`;
const MemoContent = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding-left: 24px;
  font-size: 12px;
  font-weight: bold;
  gap: 5px;
`;
const TodoMoreViewDiv = styled.div`
  display: flex;
  align-items: center;
  width: 36px;
  height: 100%;
`;
const TodoMoreViewButton = styled.button`
  position: relative;
  border: 0;
  background-color: inherit;
`;
const OptionSelectDiv = styled.div`
  position: relative;
`;
const OptionButton = styled.button`
  background-color: transparent;
  border: 0;
  & > svg {
    pointer-events: none;
  }
`;

const OptionIcon = styled(moreIcon)`
  width: 24px;
  height: 24px;
`;

const MoreIcon = styled(IoIosArrowDown)`
  width: 24px;
  height: 24px;
  pointer-events: none;
`;
const OnlyTitleIcon = styled(IoIosArrowUp)`
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const MemoBullet = styled(memoBullet)`
  width: 24px;
  height: 18px;
`;
const SelectLine = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: #ebebeb;
  margin: 2px 0;
`;
const DeleteIcon = styled(deleteIcon)``;
