import React, { useState } from "react";
import styled from "styled-components";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { ReactComponent as moreIcon } from "../../../../../img/myPage/more.svg";

import { ReactComponent as editIcon } from "../../../../../img/myPage/edit.svg";
import { ReactComponent as deleteIcon } from "../../../../../img/myPage/delete.svg";
import { ReactComponent as memoBullet } from "../../../../../img/myPage/memo-5.svg";
import { ReactComponent as todoBullet } from "../../../../../img/myPage/todo-1.svg";

const AlwaysTodo = () => {
  const [showSelectBox, setShowSelectBox] = useState(false);
  const [showTodoMemo, setShowTodoMemo] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const memoViewHandler = (e) => {
    setShowTodoMemo(!showTodoMemo);
  };

  const SelectOptionHandler = () => {
    setShowSelectBox(!showSelectBox);
  };
  const selectDeleteHandler = () => {
    setShowSelectBox(!showSelectBox);
    setShowDeleteModal(!showDeleteModal);
  };
  const deleteButtonHandler = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  const cancelButtonHandler = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  return (
    <>
      <CardContainer>
        <MainBulletTodo>
          <TodoBodyDiv>
            <span>
              <TodoBullet />
            </span>
            <span>컨텐츠</span>
          </TodoBodyDiv>
          <TodoMoreViewDiv>
            <TodoMoreViewButton onClick={memoViewHandler}>
              {showTodoMemo ? <OnlyTitleIcon /> : <MoreIcon />}
              {/* <OnlyTitleIcon />
              <MoreIcon /> */}
            </TodoMoreViewButton>
          </TodoMoreViewDiv>
          <OptionSelectDiv>
            <OptionButton onClick={SelectOptionHandler}>
              <OptionIcon />
            </OptionButton>
            {showSelectBox ? (
              <SelectDiv>
                <div
                  value="editTodo"
                  onClick={() => alert("수정하기페이지 이동")}
                >
                  수정하기 <EditIcon />
                </div>
                <SelectLine></SelectLine>
                <div value="deleteTodo" onClick={selectDeleteHandler}>
                  <span>삭제하기</span>
                  <span>
                    <DeleteIcon />
                  </span>
                </div>
              </SelectDiv>
            ) : null}
          </OptionSelectDiv>
        </MainBulletTodo>
        {showTodoMemo ? (
          <TodoMemoDiv>
            <MemoContent>
              <span>
                <MemoBullet />
              </span>
              <span>메모</span>
            </MemoContent>
            <MemoContent>
              <span>
                <MemoBullet />
              </span>
              <span>메모</span>
            </MemoContent>
            <MemoContent>
              <span>
                <MemoBullet />
              </span>
              <span>메모</span>
            </MemoContent>
            <MemoContent>
              <span>
                <MemoBullet />
              </span>
              <span>메모</span>
            </MemoContent>
            <MemoContent>
              <span>
                <MemoBullet />
              </span>
              <span>메모</span>
            </MemoContent>
            <MemoContent>
              <span>
                <MemoBullet />
              </span>
              <span>메모</span>
            </MemoContent>
          </TodoMemoDiv>
        ) : null}
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
    </>
  );
};

export default AlwaysTodo;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-default);
  /* border: 1px solid rgba(240, 161, 59, 0.2); */
  /* box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1); */
  padding: 12px;
  border-radius: 8px;
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
const MainBulletTodo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  & > input {
    width: 90%;
    padding: 0;
    margin: 0;
  }
`;
const TodoBodyDiv = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  font-size: 14px;
  font-weight: 600;
  gap: 10px;
`;
const TodoMemoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  background-color: inherit;
  padding: 8px 0;
`;
const MemoContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 5px;
`;
const TodoMoreViewDiv = styled.div``;
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
`;
const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35vw;
  left: -28vw;
  top: 5vh;
  gap: 3px;
  padding: 5px 14px;
  position: absolute;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  background-color: var(--color-default);
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: var(--color-gray);
    padding: 5px 0;
    &:hover {
      color: var(--color-main);
    }
  }
  z-index: 999;
`;
const SelectLine = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: #ebebeb;
  margin: 2px 0;
`;
const EditIcon = styled(editIcon)``;
const DeleteIcon = styled(deleteIcon)``;
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

const TodoBullet = styled(todoBullet)`
  width: 24px;
  height: 18px;
`;
