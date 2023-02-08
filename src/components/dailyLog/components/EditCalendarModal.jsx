import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { __getSelectDateTodo } from "../../../redux/modules/dailysSlice";

import DailyLogCalendar from "../../common/calendar/DailyLogCalendar";

const EditCalendarModal = ({
  AddTodoInput,
  setAddTodoInput,
  setShowCalendar,
  setShowDate,
}) => {
  const [selectedDate, setSelectedDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    dayOfDate: "",
  });
  const cancelHandler = () => {
    setShowCalendar(false);
  };
  const selectDateHandler = () => {
    setShowDate(selectedDate);
    setAddTodoInput({
      ...AddTodoInput,
      year: selectedDate.year,
      month: selectedDate.month,
      day: selectedDate.day,
    });
    setShowCalendar(false);
  };
  return (
    <CalendarContents>
      <DailyLogCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <CalendarButtonGroup>
        <ComfirmButton onClick={selectDateHandler}>
          <span>확인</span>
        </ComfirmButton>
        <CancelButton onClick={cancelHandler}>
          <span>취소</span>
        </CancelButton>
      </CalendarButtonGroup>
    </CalendarContents>
  );
};

export default EditCalendarModal;

const CalendarContents = styled.div`
  /* margin-right: 10px; */
`;
const TodayButton = styled.button`
  position: absolute;
  transform: translate(680%, 155%);
  border: 0;
  background-color: transparent;
  font-weight: bolder;
`;
const CalendarButtonGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 80%;
  transform: translate(12.5%, -100%);
  border-radius: 0 0 8px 8px;
  & > button {
    background-color: var(--color-default);
    width: 50%;
    height: 45px;
    font-size: 14px;
    font-weight: bold;
  }
`;
const ComfirmButton = styled.button`
  border: 0;
  border-radius: 0 0 0 8px;
  pointer-events: none;
  color: var(--color-main);
  & > span {
    pointer-events: all;
  }
`;
const CancelButton = styled.button`
  border: 0;
  border-radius: 0 0 8px 0;
  pointer-events: none;
  & > span {
    pointer-events: all;
    color: gray;
  }
`;
