import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import BulletSwitchList from "../../components/BulletSwitchList";

import { __getEditTodo } from "../../../../redux/modules/dailysSlice";

import { ReactComponent as todoAddEditIcon } from "../../../../img/dailyLog/edit.svg";
import { ReactComponent as todoBullet } from "../../../../img/bullet/todo-1.svg";
import { ReactComponent as checkBullet } from "../../../../img/bullet/check-2.svg";
import { ReactComponent as postphoneBullet } from "../../../../img/bullet/postpone-3.svg";
import { ReactComponent as memoBullet } from "../../../../img/bullet/memo-5.svg";
import { ReactComponent as importantBullet } from "../../../../img/bullet/asterisk-6.svg";
import { ReactComponent as favoriteBullet } from "../../../../img/bullet/star-7.svg";

const EditTodoForm = ({ todoList, AddTodoInput, setAddTodoInput }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBullet, setShowBullet] = useState(false);
  const [editTodoInput, setEditTodoInput] = useState(todoList.todoContent);
  const [todoBullet, setTodoBullet] = useState(
    todoList ? todoList.todoBulletName : ""
  );
  const [inputLimit, setInputLimit] = useState("");
  const showBulletHandler = (e) => {
    setShowBullet(!showBullet);
  };
  const selectBulletHandler = (e) => {
    const editSelectBullet = e.target.value;
    setTodoBullet(editSelectBullet);
    setShowBullet(!showBullet);
    setAddTodoInput({ ...AddTodoInput, todoBulletName: editSelectBullet });
  };
  const todoInputHandler = (e) => {
    setEditTodoInput(e.target.value);
    setInputLimit(e.target.value);
    const editTodoInput = e.target.value;
    setAddTodoInput({ ...AddTodoInput, todoContent: editTodoInput });
  };
  return (
    <Container>
      <BulletSelectDiv>
        <BulletSelectButton type="button" onClick={showBulletHandler}>
          {todoList && todoList.todoBulletName === "불렛" ? (
            <span>선택</span>
          ) : (
            <BulletSwitchList bulletName={todoBullet} />
          )}
        </BulletSelectButton>
        {showBullet ? (
          <BulletList>
            <button type="button" onClick={selectBulletHandler} value={"할 일"}>
              <TodoBullet />
            </button>
            <button type="button" onClick={selectBulletHandler} value={"완료"}>
              <CheckBullet />
            </button>
            <button
              type="button"
              onClick={selectBulletHandler}
              value={"미룬 일"}
            >
              <PostphoneBullet />
            </button>
            <button type="button" onClick={selectBulletHandler} value={"중요"}>
              <ImportantBullet />
            </button>
            <button type="button" onClick={selectBulletHandler} value={"메모"}>
              <MemoBullet />
            </button>
          </BulletList>
        ) : null}
      </BulletSelectDiv>
      <TodoInput
        placeholder="할일을 입력해주세요"
        onChange={todoInputHandler}
        value={editTodoInput}
        maxLength={31}
        rows="2"
      />
      <InputLimitDiv>
        <span>{inputLimit.length}</span>
        <span>/32</span>
      </InputLimitDiv>
    </Container>
  );
};

export default EditTodoForm;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const BulletSelectDiv = styled.div`
  position: relative;
`;
const BulletSelectButton = styled.button`
  display: flex;
  align-items: flex-start;
  /* justify-content: flex-end; */
  width: 12%;
  background-color: inherit;
  border: 0;
  & > span {
    font-size: 12px;
    padding: 4px;
    color: var(--color-gray);
    border: 1px solid var(--color-gray);
    border-radius: 5px;
  }
`;
const BulletList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: -2px;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
  margin-top: 5px;
  padding: 0 5px;
  font-size: 12px;
  & > button {
    display: flex;
    align-items: center;
    border: 0;
    background-color: inherit;
    padding: 5px 2px;
    & > svg {
      pointer-events: none;
      width: 24px;
      height: 24px;
    }
  }
`;
const TodoInput = styled.textarea`
  width: 210px;
  margin-top: 2px;
  border: 0;
  word-break: break-all;
  resize: none;
  background-color: inherit;
  ::placeholder {
    transform: translate(0, 0);
  }
  :focus {
    outline: none;
  }
`;
const InputLimitDiv = styled.div`
  width: 12%;
  padding-top: 5px;
  & > span {
    color: var(--color-gray);
  }
`;
const TodoBullet = styled(todoBullet)`
  width: 24px;
  height: 18px;
  & > svg {
    pointer-events: none;
  }
`;
const CheckBullet = styled(checkBullet)`
  width: 24px;
  height: 18px;
  & > svg {
    pointer-events: none;
  }
`;
const PostphoneBullet = styled(postphoneBullet)`
  width: 24px;
  height: 18px;
  & > svg {
    pointer-events: none;
  }
`;

const ImportantBullet = styled(importantBullet)`
  width: 24px;
  height: 18px;
  & > svg {
    pointer-events: none;
  }
`;
const MemoBullet = styled(memoBullet)`
  width: 24px;
  height: 18px;
  & > svg {
    pointer-events: none;
  }
`;

const FavoriteBullet = styled(favoriteBullet)`
  width: 24px;
  height: 18px;
  & > svg {
    pointer-events: none;
  }
`;
