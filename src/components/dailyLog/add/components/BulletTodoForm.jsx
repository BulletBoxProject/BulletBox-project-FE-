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
import { ReactComponent as undefinedBullet } from "../../../../img/bullet/triangle.svg";
import { ReactComponent as highLightBullet } from "../../../../img/bullet/circle-double.svg";

const BulletTodoForm = ({ AddTodoInput, setAddTodoInput }) => {
  const [showBullet, setShowBullet] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [isTodoInputDone, setIsTodoInputDone] = useState(false);
  const [inputLimit, setInputLimit] = useState("");
  const showBulletHandler = (e) => {
    e.preventDefault();
    setShowBullet(!showBullet);
  };
  const selectBulletHandler = (e) => {
    e.preventDefault();
    setAddTodoInput({
      ...AddTodoInput,
      todoBulletName: e.target.value,
    });
    setShowBullet(!showBullet);
  };
  const todoInputHandler = (e) => {
    e.preventDefault();
    setTodoInput(e.target.value);
    setInputLimit(e.target.value);
    setAddTodoInput({
      ...AddTodoInput,
      todoContent: e.target.value,
    });
  };

  return (
    <Container>
      <BulletSelectDiv>
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
            <button type="button" onClick={selectBulletHandler} value={"미정"}>
              <UndefinedBullet />
            </button>
            <button type="button" onClick={selectBulletHandler} value={"강조"}>
              <HighLightBullet />
            </button>
          </BulletList>
        ) : null}
      </BulletSelectDiv>
      <InputDiv>
        <TodoInput
          placeholder="할일을 입력해주세요"
          onChange={todoInputHandler}
          value={todoInput}
          maxLength={31}
          disabled={isTodoInputDone}
        />
        <InputLimitDiv>
          <span>{inputLimit.length}</span>
          <span>/32</span>
        </InputLimitDiv>
      </InputDiv>
    </Container>
  );
};

export default BulletTodoForm;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BulletSelectDiv = styled.div`
  position: relative;
`;
const BulletSelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 45px;
  background-color: inherit;
  border: 0;
  padding: 0;
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
  left: 10px;
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
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  gap: 5px;
`;
const TodoInput = styled.input`
  width: 88%;
  border: 0;
  background-color: inherit;
  padding-left: 0;
  :disabled {
    background-color: inherit;
    border: 0;
    color: black;
  }
  :focus {
    outline: none;
  }
`;
const InputLimitDiv = styled.div`
  width: 12%;
  & > span {
    color: var(--color-gray);
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
const UndefinedBullet = styled(undefinedBullet)`
  width: 24px;
  height: 24px;
`;
const HighLightBullet = styled(highLightBullet)`
  width: 24px;
  height: 24px;
`;
