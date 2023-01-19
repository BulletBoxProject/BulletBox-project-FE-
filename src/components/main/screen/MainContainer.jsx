import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import uuid from "react-uuid";

import { baseURLApiV1 } from "../../../core/api";

import NavigationMenu from "../../../layout/footer/components/NavigationMenu";

import SelectCategory from "../../common/SelectCategory";
import BulletDiv from "../components/BulletDiv";

import BulletCalendar from "../../common/calendar/Calendar";

export const BACK_API = process.env.REACT_APP_BACKAPI;

const MainContainer = () => {
  console.log(BACK_API);
  const [date, setDate] = useState(new Date());
  const bulletList = useSelector((state) => state.bullet_main.bulletList);
  console.log("리듀서 상태 저장 값", bulletList);

  const loadMainPage = async () => {
    try {
      const data = await baseURLApiV1.get("/main");
      if (data.data.httpStatusCode === 200) {
        return console.log(data.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadMainPage();
  }, []);

  return (
    <Container>
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
  justify-content: space-between;
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
