import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getMainCalendar } from "../../../redux/modules/mainSlice";
import moment from "moment";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const DailyLogCalendar = ({ selectedDate, setSelectedDate }) => {
  const todayRef = useRef();
  const dayArray = ["일", "월", "화", "수", "목", "금", "토"];
  const dateChangeHandler = (e) => {
    setSelectedDate({
      ...selectedDate,
      year: e.getFullYear(),
      month: e.getMonth() + 1,
      day: e.getDate(),
      dayOfDate: dayArray[e.getDay()],
    });
  };
  const moveToStartDateHandler = () => {
    const todayCalendar = todayRef.current;
    const firstDayOfTodayMonth = moment().date(1).toDate();
    todayCalendar.setActiveStartDate(firstDayOfTodayMonth);
  };
  return (
    <Calendarcontainer>
      <TodayButton onClick={moveToStartDateHandler}>Today</TodayButton>
      <Calendar
        ref={todayRef}
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
        view={"month"}
      />
    </Calendarcontainer>
  );
};

export default DailyLogCalendar;

const TodayButton = styled.button`
  position: absolute;
  left: 268px;
  top: 14px;
  border: 0;
  width: 40px;
  height: 20px;
  background-color: inherit;
  font-weight: bold;
`;

const Calendarcontainer = styled.div`
  .react-calendar {
    width: 80%;
    background: var(--color-default);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    margin: 0 auto;
    height: 320px;
    border-radius: 8px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  }
  .react-calendar__navigation {
    display: flex;
    justify-content: center !important;
    width: 50%;
    margin-top: 15px;
  }
  .react-calendar__navigation__label {
    width: 100% !important;
    margin: 0 !important;
  }
  .react-calendar__navigation__label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100% !important;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-gray);
  }
  .react-calendar__month-view__weekdays {
    visibility: hidden;
    height: 0px !important;
  }
  .react-calendar__month-view__weekdays__weekday {
    background-color: white !important;
    padding: 5px 4px !important;
    font-size: 12px;
  }
  .react-calendar__month-view__days {
    margin-top: 5px !important;
    & > :focus {
      color: black;
      border: 0 !important;
    }
  }
  .react-calendar__month-view__days__day {
    display: flex !important;
    flex-basis: 40px !important;
    align-items: center !important;
    justify-content: center;
    height: 40px !important;
    padding: 0 !important;
    font-size: 12px;
    font-weight: bold;
    & > abbr {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24.64px;
      height: 24.64px;
      padding: 5px;
      border-radius: 50%;
    }
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
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
  .react-calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
  }
  .navigation__next-button {
    /* margin: 0; */
    min-width: 24px;
    padding: 0 !important;
  }
  .react-calendar__navigation button {
    min-width: 24px;
    background: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    & > svg {
      width: 2rem !important;
      height: 2.5vh !important;
      color: var(--color-gray) !important;
    }
  }
  .react-calendar__navigation button:disabled {
    /* background-color: #f0f0f0; */
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    /* background-color: #e6e6e6; */
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
    font-size: 14px !important;
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
    max-width: 100%;
    height: 45px;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 100%;
  }
  .react-calendar__tile:disabled {
    background-color: #e6e6e6;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    border-radius: 5px;
    border: 3px solid #e6e6e6;
    color: transparent;
    border: 0;
    & > abbr {
      color: white;
      background-color: var(--color-main);
    }
  }

  .react-calendar__tile--now {
    /* background-color: #e6e6e6; */
    border-radius: 5px;
    border: 2px solid var(--color-light-gray) !important;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    /* background-color: var(--color-main); */
    border-radius: 5px;
    /* border: 1px solid var(--color-main); */
    color: white;
  }
  .react-calendar__tile--hasActive {
    background: white;
    border-radius: 5px;
    border: 3px solid #e6e6e6;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: white;
    border-radius: 5px;
    border: 3px solid #e6e6e6;
  }
  .react-calendar__tile--active {
    /* background: white; */
    border-radius: 5px;
    /* border: 1px solid var(--color-main);
    background-color: var(--color-main); */
    /* color: white; */
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    border: 3px solid #e6e6e6;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;

const NextIcon = styled(IoIosArrowForward)`
  width: 1rem;
  height: 2.5vh;
  padding: 0 !important;
  color: var(--color-gray);
`;
const PrevIcon = styled(IoIosArrowBack)`
  width: 2rem;
  height: 2.5vh;
  /* margin-left: 3vw;
  margin-right: 1vw; */
  color: var(--color-gray);
`;
