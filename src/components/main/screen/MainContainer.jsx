import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import uuid from "react-uuid";

import NavigationMenu from "../../common/NavigationMenu";

import SelectCategory from "../../common/SelectCategory";
import BulletCalendar from "../../calendar/Calendar";
import MainInputCard from "../components/MainInputCard";
import MainEditCard from "../components/MainEditCard";

const MainContainer = () => {
  const bulletList = useSelector((state) => state.bullet_main.bulletList);
  console.log("리듀서 상태 저장 값", bulletList);

  return (
    <Container>
      <NavigationMenu />
      <SelectDiv>
        <SelectCategory style={{ padding: "10px" }} />
      </SelectDiv>
      <CalendarDiv>
        <BulletCalendar />
      </CalendarDiv>
      <TodoDiv>
        <BulletDiv>
          <h3>불렛 목록</h3>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </BulletDiv>
        <InputDiv>
          <input style={{ marginTop: "10px" }} />
        </InputDiv>
      </TodoDiv>
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 30px;
`;
const SelectDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;
`;
const CalendarDiv = styled.div`
  border: 1px solid black;
  height: 43vh;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BulletDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 20%;
  height: 22vh;
  border: 1px solid gray;
  border-radius: 5px;
  gap: 5px;
`;
const InputDiv = styled.div`
  width: 62%;
  height: 22vh;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0 10px;
`;
