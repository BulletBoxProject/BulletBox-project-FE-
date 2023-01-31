import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getMainCalendar } from "../../../redux/modules/mainSlice";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const BulletCalendar = ({
  nowMonthView,
  selectDate,
  setSelectDate,
  setTodoList,
}) => {
  const dispatch = useDispatch();
  const [isTodo, setIsTodo] = useState({});

  const calendarCountList = useSelector(
    (state) => state?.mainTodo?.mainTodo?.calendar
  );
  console.log("셀럭터 값", calendarCountList);

  // const selectDateLog = async (e) => {
  //   const selectDateCalendar = `/main/dailys?year=${e.getFullYear()}&month=${
  //     e.getMonth() + 1
  //   }&day=${e.getDate()}`;
  //   dispatch(__getMainCalendar(selectDateCalendar));
  // };
  const dateChangeHandler = (e) => {
    const dateArr = ["일", "월", "화", "수", "목", "금", "토"];
    setSelectDate(
      `${String(e.getFullYear()).substr(2, 2)}/${
        e.getMonth() + 1
      }/${e.getDate()}(${dateArr[e.getDay()]})`
    );
    // selectDateLog(e);
  };
  return (
    <Calendarcontainer>
      {calendarCountList && (
        <Calendar
          calendarType="US"
          onChange={dateChangeHandler}
          nextLabel={<NextIcon />}
          prevLabel={<PrevIcon />}
          next2Label={null}
          prev2Label={null}
          formatDay={(locale, date) =>
            date.toLocaleString("en", { day: "numeric" })
          }
          formatShortWeekday={(locale, date) =>
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]
          }
          tileContent={({ activeStartDate, date, view }) =>
            date.getMonth() + 1 === nowMonthView &&
            calendarCountList.map((todo) =>
              todo.day === date.getDate() ? (
                <DateTodoCount key={todo.day}>+{todo.count}</DateTodoCount>
              ) : null
            )
          }
        />
      )}
    </Calendarcontainer>
  );
};

export default BulletCalendar;

const DateTodoCount = styled.p`
  font-size: 14px;
`;

const Calendarcontainer = styled.div`
  .react-calendar {
    width: 100%;
    height: 350px;
    background: transparent;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__navigation {
    display: flex;
    width: 35%;
    margin: 0 auto !important;
    margin-bottom: 10px !important;
    background-color: transparent !important;
    & > button {
      background-color: transparent !important;
    }
  }
  .react-calendar__navigation__label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100% !important;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-main);
    margin-bottom: 5%;
  }
  .navigation__next-button {
    margin: 0 !important;
    padding: 0 !important;
    & > svg {
      margin: 0 !important;
    }
  }
  .react-calendar__month-view__weekdays {
    height: 25px !important;
  }
  .react-calendar__month-view__weekdays__weekday {
    background-color: white !important;
    padding: 5px 4px !important;
    font-size: 12px;
    & > abbr[title] {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__days {
    margin-top: 5px !important;
    & > :active,
    & > :hover {
      color: black;
      border: 0 !important;
    }
  }
  .react-calendar__month-view__days__day {
    display: flex !important;
    flex-direction: column;
    justify-content: flex-start !important;
    height: 48px !important;
    padding-top: 10px;
    font-size: 10px;
    font-weight: bold;
    & > abbr {
      padding: 8px 7px;
      font-size: 10px;
      text-align: center;
    }
    & > p {
      font-size: 10px;
      padding: 6px 9px;
      border-radius: 4px;
      font-weight: bold;
      color: var(--color-gray);
      background-color: var(--color-default);
      margin: 5px 0 0 0;
    }
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
    padding: 0;
    & > svg {
      margin: 0 !important;
    }
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    margin: 1rem;
  }
  .react-calendar__navigation button:disabled {
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
  }
  .react-calendar__month-view__weekdays {
    font-weight: bold;
    font-size: 0.75rem;
    width: 88%;
    height: 40px;
    color: var(--color-gray);
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2%;
    background-color: #e6e6e6;
    border-radius: 5px;
    margin: 1%;
  }
  .react-calendar__month-view__weekdays__weekday--weekend {
    color: var(--color-main);
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.65em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #e6e6e6;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    height: 60px !important;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 100%;
    padding: 0;
  }
  .react-calendar__tile:disabled {
    background-color: #e6e6e6;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    border-radius: 5px;
    /* color: white; */
    & > abbr {
      padding: 8px 7px !important;
    }
  }

  .react-calendar__tile--now {
    border-radius: 5px;
    border: 3px solid #e6e6e6 !important;
    border: 0;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    border-radius: 5px;
    border: 3px solid #e6e6e6 !important;
    /* color: white; */
  }
  .react-calendar__tile--hasActive {
    background: white;
    border-radius: 5px;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: gray;
    border-radius: 5px;
  }
  .react-calendar__tile--active {
    background: transparent;
    border-radius: 5px;
    border: 0;
    & > abbr {
      background-color: var(--color-main);
      width: 26px;
      height: 26px;
      padding: 8px 7px;
      border-radius: 50%;
    }
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;

const NextIcon = styled(IoIosArrowForward)`
  width: 2rem;
  height: 2.5vh;
  margin-right: 28vw;
  margin-left: 1vw;
  color: var(--color-main);
`;
const PrevIcon = styled(IoIosArrowBack)`
  width: 2rem;
  height: 2.5vh;
  margin-left: 3vw;
  margin-right: 1vw;
  color: var(--color-main);
`;
