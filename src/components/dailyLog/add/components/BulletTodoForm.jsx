import React, { useState } from "react";
import { redirect } from "react-router-dom";
import styled from "styled-components";

import BulletSwitchList from "../../components/BulletSwitchList";

import { ReactComponent as todoAddEditIcon } from "../../../../img/dailyLog/edit.svg";
import { ReactComponent as todoBullet } from "../../../../img/bullet/todo-1.svg";
import { ReactComponent as checkBullet } from "../../../../img/bullet/check-2.svg";
import { ReactComponent as postphoneBullet } from "../../../../img/bullet/postpone-3.svg";
import { ReactComponent as memoBullet } from "../../../../img/bullet/memo-5.svg";
import { ReactComponent as importantBullet } from "../../../../img/bullet/asterisk-6.svg";
import { ReactComponent as favoriteBullet } from "../../../../img/bullet/star-7.svg";

const BulletTodoForm = ({ AddTodoInput, setAddTodoInput }) => {
  const [showBullet, setShowBullet] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [isTodoInputDone, setIsTodoInputDone] = useState(false);
  const showBulletHandler = (e) => {
    e.preventDefault();
    setShowBullet(!showBullet);
  };
  const selectBulletHandler = (e) => {
    e.preventDefault();
    setAddTodoInput({ ...AddTodoInput, todoBulletName: e.target.value });
    setShowBullet(!showBullet);
  };
  const todoInputHandler = (e) => {
    e.preventDefault();
    setTodoInput(e.target.value);
  };
  const addTodoHandler = (e) => {
    e.preventDefault();
    setAddTodoInput({ ...AddTodoInput, todoContent: todoInput });
    setIsTodoInputDone(!isTodoInputDone);
    /* 불렛 입력내용 초기화
    // setTodoInput("");
    // setAddTodoInput({ ...AddTodoInput, todoBulletName: "불렛" });
    */
  };

  return (
    <Container>
      <BulletSelectButton type="button" onClick={showBulletHandler}>
        {AddTodoInput.todoBulletName === "불렛" ? (
          <span>선택</span>
        ) : (
          <BulletSwitchList bulletName={AddTodoInput.todoBulletName} />
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
          <button type="button" onClick={selectBulletHandler} value={"미룬 일"}>
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
      <TodoInput
        placeholder="할일을 입력해주세요"
        onChange={todoInputHandler}
        value={todoInput}
        disabled={isTodoInputDone}
      />
      {isTodoInputDone ? (
        <AddTodoButton type="button" onClick={addTodoHandler}>
          <TodoAddEditIcon style={{ color: "var(--color-gray)" }} />
        </AddTodoButton>
      ) : (
        <AddTodoButton type="button" onClick={addTodoHandler}>
          <TodoAddEditIcon />
        </AddTodoButton>
      )}
    </Container>
  );
};

export default BulletTodoForm;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BulletSelectButton = styled.button`
  display: flex;
  align-items: center;
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
  left: 7.5vw;
  top: 13.2vh;
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
    }
  }
`;
const TodoInput = styled.input`
  width: 75%;
  border: 0;
  background-color: inherit;

  :disabled {
    background-color: inherit;
    border: 0;
    color: black;
  }
  :focus {
    outline: none;
  }
`;

const AddTodoButton = styled.button`
  width: 10%;
  background-color: inherit;
  border: 0;
`;
const TodoAddEditIcon = styled(todoAddEditIcon)`
  width: 16px;
  height: 16px;
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
