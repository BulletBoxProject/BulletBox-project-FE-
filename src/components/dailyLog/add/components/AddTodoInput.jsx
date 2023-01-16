import React, { useState } from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";

import ToggleSwitch from "../../../common/ToggleSwitch";

const AddTodoInput = () => {
  const [showBullet, setShowBullet] = useState(false);
  const [addBulletTodo, setAddBulletTodo] = useState({ bullet: "", todo: "" });
  const [addMemo, setAddMemo] = useState({ state: false, memos: [] });
  console.log(addBulletTodo);
  const showBulletHandler = () => {
    setShowBullet(!showBullet);
  };
  const selectBulletHandler = (e) => {
    setAddBulletTodo({ ...addBulletTodo, bullet: e.target.value });
    setShowBullet(!showBullet);
  };
  const addTodoHandler = () => {
    console.log("clicked");
  };
  const addMemoHanlder = () => {
    console.log();
    setAddMemo({ ...addMemo, state: !addMemo.state });
  };
  return (
    <Container>
      <BulletTodoForm>
        <BulletSelectButton type="button" onClick={showBulletHandler}>
          불렛
        </BulletSelectButton>
        {showBullet ? (
          <BulletList>
            <option onClick={selectBulletHandler} value={"bullet1"}>
              bullet1
            </option>
            <option onClick={selectBulletHandler} value={"bullet2"}>
              bullet2
            </option>
            <option onClick={selectBulletHandler} value={"bullet3"}>
              bullet3
            </option>
            <option onClick={selectBulletHandler} value={"bullet4"}>
              bullet4
            </option>
            <option onClick={selectBulletHandler} value={"bullet5"}>
              bullet5
            </option>
          </BulletList>
        ) : null}
        <TodoInput />
        <AddTodoButton type="button" onClick={addTodoHandler}>
          추가
        </AddTodoButton>
      </BulletTodoForm>
      <AddMemoDiv>
        {addMemo.state ? (
          <AddMemoInputDiv>
            <AddMemoInput />
            <MemoSubmitButton type="button">추가</MemoSubmitButton>
          </AddMemoInputDiv>
        ) : null}
        <AddTodoMemo type="button" onClick={addMemoHanlder}>
          <AddMemoIcon />
        </AddTodoMemo>
      </AddMemoDiv>
      <hr />
      <TimeSettingDiv>
        <ToggleDiv>
          <span>off</span>
          <ToggleSwitch />
          <span>on</span>
        </ToggleDiv>
      </TimeSettingDiv>
    </Container>
  );
};

export default AddTodoInput;

const Container = styled.div``;
const BulletTodoForm = styled.form`
  display: flex;
  justify-content: center;
`;
const BulletSelectButton = styled.button`
  width: 10%;
`;
const BulletList = styled.div`
  position: absolute;
  left: 4vw;
  top: 10vh;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
  margin-top: 5px;
  padding: 0 5px;
  font-size: 12px;
  & > option {
    margin: 5px 0;
    font-size: inherit;
  }
`;
const TodoInput = styled.input`
  width: 80%;
`;

const AddTodoButton = styled.button`
  width: 10%;
`;
const AddMemoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AddMemoInputDiv = styled.div``;
const AddMemoInput = styled.input``;
const MemoSubmitButton = styled.button``;
const AddTodoMemo = styled.button``;
const AddMemoIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-main);
  width: 24px;
  height: 24px;
`;
const TimeSettingDiv = styled.div`
  width: 100%;
`;
const ToggleDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
