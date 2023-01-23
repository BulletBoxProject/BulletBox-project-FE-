import React from "react";
import styled from "styled-components";

import BulletCalendar from "../../common/calendar/Calendar";

const DiaryContainer = () => {
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${String(new Date().getFullYear()).substr(2, 2)}/${
    new Date().getMonth() + 1
  }/${new Date().getDate()}(${day[new Date().getDay()]})`;

  return (
    <Container>
      <CalendarDiv>
        <SelectDiv>Today</SelectDiv>
        <BulletCalendar />
      </CalendarDiv>
      <TodoDiv>
        <DateTitle>{today}</DateTitle>
      </TodoDiv>
    </Container>
  );
};

export default DiaryContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CalendarDiv = styled.div`
  position: relative;
  height: 48vh;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;
const SelectDiv = styled.div`
  position: absolute;
  top: 3%;
  left: 88%;
  align-items: center;
  padding: 5px 0;
  font-weight: bold;
`;
const TodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 32vh;
  padding: 15px;
  border-radius: 16px;
  background-color: var(--color-default);
`;
const DateTitle = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 900;
  margin-top: 2%;
`;
