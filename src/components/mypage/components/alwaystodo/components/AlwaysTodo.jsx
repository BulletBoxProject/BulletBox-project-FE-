import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { ReactComponent as moreIcon } from "../../../../../img/myPage/more.svg";
import { ReactComponent as editIcon } from "../../../../../img/myPage/edit.svg";
import { ReactComponent as deleteIcon } from "../../../../../img/myPage/delete.svg";
import { ReactComponent as memoBullet } from "../../../../../img/myPage/memo-5.svg";
import { ReactComponent as star } from "../../../../../img/myPage/round-star-outline.svg";

import AlwaysUpdateModal from "./AwaysUpdateModal";
import useOutSideClick from "../../../../../hooks/useOutSideClick";
import { __deleteFavorite } from "../../../../../redux/modules/favoriteSlice";

const AlwaysTodo = ({
  favoriteId,
  backgroundColor,
  content,
  memo,
  categoryId,
}) => {
  const [showSelectBox, setShowSelectBox] = useState(false);
  const [showTodoMemo, setShowTodoMemo] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateMoal, setShowUpdateMoal] = useState(false);

  const dispatch = useDispatch();
  const selectRef = useRef(null);
  const handleClose = () => {
    setShowSelectBox(false);
  };
  useOutSideClick(selectRef, handleClose);

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
    dispatch(__deleteFavorite(favoriteId));
  };
  const cancelButtonHandler = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const updateButtonHandler = () => {
    setShowUpdateMoal(true);
  };
  console.log(memo);

  return (
    <>
      <CardContainer categoryColor={backgroundColor}>
        <MainBulletTodo>
          <TodoBodyDiv>
            <TodoContainer>
              <StarBullet />
              {content}
            </TodoContainer>
          </TodoBodyDiv>
          {memo.length === 0 ? null : (
            <TodoMoreViewDiv>
              <TodoMoreViewButton onClick={memoViewHandler}>
                {showTodoMemo ? <OnlyTitleIcon /> : <MoreIcon />}
              </TodoMoreViewButton>
            </TodoMoreViewDiv>
          )}

          <OptionSelectDiv ref={selectRef}>
            <OptionButton onClick={SelectOptionHandler}>
              <OptionIcon />
            </OptionButton>
            {showSelectBox ? (
              <SelectDiv>
                <UpdateDiv
                  onClick={() => {
                    updateButtonHandler();
                  }}
                >
                  수정하기 <EditIcon />
                </UpdateDiv>
                <div value="deleteTodo" onClick={selectDeleteHandler}>
                  삭제하기
                  <DeleteIcon />
                </div>
              </SelectDiv>
            ) : null}
          </OptionSelectDiv>
        </MainBulletTodo>
        {showTodoMemo ? (
          <TodoMemoDiv>
            {memo.map((value) => (
              <MemoContent key={value.favoriteMemoId}>
                <MemoBullet />
                {value.favoriteMemoContent}
              </MemoContent>
            ))}
          </TodoMemoDiv>
        ) : null}
      </CardContainer>

      {showUpdateMoal && (
        <AlwaysUpdateModal
          favoriteId={favoriteId}
          categoryId={categoryId}
          backgroundColor={backgroundColor}
          content={content}
          memo={memo}
          onClose={() => {
            setShowUpdateMoal(false);
          }}
        />
      )}

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
  align-items: center;
  flex-direction: column;
  width: 328px;
  border: none;
  background-color: ${(props) => props.categoryColor || "var(--color-default)"};
  border-radius: 8px;
  padding-left: 8px;
  margin-left: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
`;
const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 8px;
  height: 30px;
  gap: 5px;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;
const ModalContent = styled.div`
  position: absolute;
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
  width: 100%;
  height: 40px;
  border-radius: 8px;
  & > input {
    width: 90%;
    padding: 0;
    margin: 0;
  }
`;
const TodoBodyDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  gap: 10px;
  background-color: var(--color-default);
`;

const TodoMemoDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-default);
  padding-left: 14px;
  width: 100%;
  padding-bottom: 5px;
`;
const MemoContent = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-default);
  font-size: 12px;
  font-weight: bold;
  gap: 10px;
  padding-left: 20px;
`;
const TodoMoreViewDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5%;
  height: 100%;
  background-color: var(--color-default);
`;
const TodoMoreViewButton = styled.button`
  border: 0;
  background-color: inherit;
`;
const OptionSelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--color-default);
  width: 15%;
  height: 100%;
`;

const OptionButton = styled.button`
  background-color: transparent;
  border: 0;
`;
const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 120px;
  height: 88px;
  gap: 3px;
  font-weight: bold;
  top: 100%;
  right: 0;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  background-color: var(--color-default);
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    gap: 10px;
    font-size: 14px;
    color: var(--color-gray);
    padding: 5px 0;
    &:hover {
      color: var(--color-main);
    }
  }
  z-index: 9999;
`;
const UpdateDiv = styled.div`
  width: 100%;
  margin-bottom: 3px;
  border-bottom: 1px solid #ebebeb;
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
  width: 20px;
  height: 20px;
  pointer-events: none;
`;
const OnlyTitleIcon = styled(IoIosArrowUp)`
  width: 20px;
  height: 20px;
  pointer-events: none;
`;

const MemoBullet = styled(memoBullet)`
  width: 24px;
  height: 24px;
`;

const StarBullet = styled(star)`
  width: 24px;
  height: 18px;
`;
