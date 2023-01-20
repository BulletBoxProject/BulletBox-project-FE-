import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as moreIcon } from "../../../img/dailyLog/more.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { ReactComponent as todoBullet } from "../../../img/bullet/todo-1.svg";
import { ReactComponent as checkBullet } from "../../../img/bullet/check-2.svg";
import { ReactComponent as postphoneBullet } from "../../../img/bullet/postpone-3.svg";
import { ReactComponent as memoBullet } from "../../../img/bullet/memo-5.svg";
import { ReactComponent as importantBullet } from "../../../img/bullet/asterisk-6.svg";
import { ReactComponent as favoriteBullet } from "../../../img/bullet/star-7.svg";
import { ReactComponent as editIcon } from "../../../img/dailyLog/edit.svg";
import { ReactComponent as deleteIcon } from "../../../img/dailyLog/delete.svg";

const BulletTodoCard = () => {
  const [showSelectBox, setShowSelectBox] = useState(false);
  const [showTodoMemo, setShowTodoMemo] = useState(false);
  const memoViewHandler = () => {
    setShowTodoMemo(!showTodoMemo);
  };
  const SelectOptionHandler = () => {
    setShowSelectBox(!showSelectBox);
  };
  return (
    <div>
      <Container>
        <MainBulletTodo>
          <TodoBodyDiv>
            <span>
              <CheckBullet />
            </span>
            <span>추가한 할 일 목록입니다.</span>
          </TodoBodyDiv>
          <TodoMoreViewDiv>
            <TodoMoreViewButton onClick={memoViewHandler}>
              {showTodoMemo ? <OnlyTitleIcon /> : <MoreIcon />}
            </TodoMoreViewButton>
          </TodoMoreViewDiv>
          <OptionSelectDiv>
            <OptionButton onClick={SelectOptionHandler}>
              <OptionIcon />
            </OptionButton>
            {showSelectBox ? (
              <SelectDiv>
                <div value="editTodo" onClick={() => alert("자주쓰는할일")}>
                  수정하기 <EditIcon />
                </div>
                <SelectLine></SelectLine>
                <div value="deleteTodo" onClick={() => alert("삭제하기")}>
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
              <span>첫번째 메모</span>
            </MemoContent>
            <MemoContent>
              <span>
                <MemoBullet />
              </span>
              <span>두번째 메모</span>
            </MemoContent>
          </TodoMemoDiv>
        ) : null}
      </Container>
    </div>
  );
};

export default BulletTodoCard;

const Container = styled.div`
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
  /* top: -12.5vh;
  left: -28vw; */
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
`;
const OnlyTitleIcon = styled(IoIosArrowUp)`
  width: 24px;
  height: 24px;
`;
const TodoBullet = styled(todoBullet)`
  width: 24px;
  height: 18px;
`;
const CheckBullet = styled(checkBullet)`
  width: 24px;
  height: 18px;
`;
const PostphoneBullet = styled(postphoneBullet)`
  width: 24px;
  height: 18px;
`;
const MemoBullet = styled(memoBullet)`
  width: 24px;
  height: 18px;
`;
const ImportantBullet = styled(importantBullet)`
  width: 24px;
  height: 18px;
`;
const FavoriteBullet = styled(favoriteBullet)`
  width: 24px;
  height: 18px;
`;
