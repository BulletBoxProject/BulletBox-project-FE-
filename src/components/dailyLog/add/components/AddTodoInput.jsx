import React, { useState } from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";

import ToggleSwitch from "../../../common/ToggleSwitch";

const AddTodoInput = () => {
  const [showBullet, setShowBullet] = useState(false);
  const [showTimeSet, setShowTimeSet] = useState(false);
  const [addBulletTodo, setAddBulletTodo] = useState({
    todoContent: "",
    todoBulletName: "",
  });
  const [addMemo, setAddMemo] = useState({ state: false, memos: [] });
  console.log(addBulletTodo);
  const showBulletHandler = () => {
    setShowBullet(!showBullet);
  };
  const selectBulletHandler = (e) => {
    setAddBulletTodo({ ...addBulletTodo, todoBulletName: e.target.value });
    setShowBullet(!showBullet);
  };
  const addTodoHandler = () => {
    console.log("clicked");
  };
  const addMemoHanlder = () => {
    console.log();
    setAddMemo({ ...addMemo, state: !addMemo.state });
  };
  const bulletMemoHandler = (e) => {
    console.log("불렛메모", e.target.value);
  };
  const showSetTimeHandler = () => {
    setShowTimeSet(!showTimeSet);
  };
  const categorySelectHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container>
      <BulletTodoForm>
        <BulletSelectButton type="button" onClick={showBulletHandler}>
          불렛
        </BulletSelectButton>
        {showBullet ? (
          <BulletList>
            <option onClick={selectBulletHandler} value={"todo"}>
              todo
            </option>
            <option onClick={selectBulletHandler} value={"complete"}>
              complete
            </option>
            <option onClick={selectBulletHandler} value={"postpone"}>
              postpone
            </option>
            <option onClick={selectBulletHandler} value={"important"}>
              important
            </option>
            <option onClick={selectBulletHandler} value={"memo"}>
              memo
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
            <AddMemoInput
              type="text"
              placeholder="불렛메모를 추가하세요"
              onChange={bulletMemoHandler}
            />
            <MemoSubmitButton type="button">추가</MemoSubmitButton>
          </AddMemoInputDiv>
        ) : null}
        <AddTodoMemo type="button" onClick={addMemoHanlder}>
          <AddMemoIcon />
        </AddTodoMemo>
      </AddMemoDiv>
      <hr />
      <TimeSettingDiv>
        <TimeSetOnOffDiv>
          <SwitchDiv>
            <OnOffSwitchButton type="button" onClick={showSetTimeHandler}>
              {showTimeSet ? "ON" : "OFF"}
            </OnOffSwitchButton>
          </SwitchDiv>
          {showTimeSet ? null : <hr style={{ width: " 100%" }} />}
          {showTimeSet ? (
            <SetTimeSelectDiv>
              <SelectHoursDiv>
                <SelectHoursButton>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <SelectDownIcon />
                </SelectHoursButton>
                <span>시</span>
              </SelectHoursDiv>
              <SelectMinutesDiv>
                <SelectMinutesButton>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <SelectDownIcon />
                </SelectMinutesButton>
                <span>분</span>
              </SelectMinutesDiv>
            </SetTimeSelectDiv>
          ) : null}
          {showTimeSet ? <hr style={{ width: " 100%" }} /> : null}
        </TimeSetOnOffDiv>
      </TimeSettingDiv>
      <CategorySelectDiv>
        <CategoryButton
          type="button"
          value="카테고리1"
          onClick={categorySelectHandler}
        >
          카테고리1
        </CategoryButton>
        <CategoryButton type="button" value="카테고리2">
          카테고리2
        </CategoryButton>
        <CategoryButton type="button" value="카테고리3">
          카테고리3
        </CategoryButton>
        <CategoryButton type="button" value="카테고리4">
          카테고리4
        </CategoryButton>
        <CategoryButton type="button" value="카테고리5">
          카테고리5
        </CategoryButton>
        <CategoryButton type="button" value="카테고리6">
          카테고리6
        </CategoryButton>
      </CategorySelectDiv>
      <hr />
      <AddInputButtonGroup>
        <CancleButton type="button">취소</CancleButton>
        <SubmitButton type="button">확인</SubmitButton>
      </AddInputButtonGroup>
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
const TimeSetOnOffDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
const SwitchDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const OnOffSwitchButton = styled.button`
  display: flex;
  justify-self: flex-end;
`;
const SetTimeSelectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
const SelectHoursDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const SelectHoursButton = styled.button``;
const SelectDownIcon = styled(RxTriangleDown)`
  width: 15px;
  height: 15px;
`;
const SelectMinutesDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const SelectMinutesButton = styled.button``;
const CategorySelectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  flex-wrap: wrap;
  gap: 10px;
  width: 80%;
`;
const CategoryButton = styled.button`
  width: 30%;
  height: 3em;
`;
const AddInputButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 40%;
`;
const CancleButton = styled.button`
  width: 30%;
  height: 3em;
`;
const SubmitButton = styled.button`
  width: 30%;
  height: 3em;
  background-color: var(--color-main);
  border: 0;
`;
