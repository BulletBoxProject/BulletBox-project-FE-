import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import uuid from "react-uuid";

import NavigationMenu from "../../common/NavigationMenu";

import SelectCategory from "../../common/SelectCategory";
import BulletDiv from "../components/BulletDiv";

import BulletCalendar from "../../calendar/Calendar";
import MainInputCard from "../components/MainInputCard";
import MainEditCard from "../components/MainEditCard";

const MainContainer = () => {
  const bulletList = useSelector((state) => state.bullet_main.bulletList);
  console.log("리듀서 상태 저장 값", bulletList);

  return (
    <Container>
      <NavigationMenu />
      <CalendarDiv>
        <SelectDiv>
          <SelectCategory style={{ padding: "10px" }} />
        </SelectDiv>
        <BulletCalendar />
      </CalendarDiv>
      <TodoDiv>
        <DateTitle>23/01/04/목</DateTitle>
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
  justify-content: flex-start;
  padding: 0 3.9% 4.05vh 3.9%;
`;
const CalendarDiv = styled.div`
  position: relative;
  height: 320px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;
const SelectDiv = styled.div`
  position: absolute;
  top: 2%;
  left: 85%;
  align-items: center;
  padding: 5px 0;
`;
const TodoDiv = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 8px;
  background-color: var(--color-light-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
const DateTitle = styled.h2`
  text-align: center;
`;
const InputDiv = styled.div`
  width: 100%;
  padding: 0 10px;
`;
