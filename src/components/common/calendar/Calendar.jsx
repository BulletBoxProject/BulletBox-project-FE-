import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const BulletCalendar = () => {
  // const [value, onChange] = useState(new Date());

  const dateChangeHandler = (e) => {
    console.log(e);
  };

  return (
    <Calendarcontainer>
      <Calendar calendarType="US" onChange={dateChangeHandler} />
    </Calendarcontainer>
  );
};

export default BulletCalendar;

const Calendarcontainer = styled.div`
  .react-calendar {
    width: 95%;
    max-width: 100%;
    background: white;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    margin-left: 3%;
  }
  .react-calendar__navigation {
    display: flex;
    width: 80%;
    margin: 12px !important;
  }
  .react-calendar__navigation__label > span {
    width: 100px !important;
    font-size: 14px;
    font-weight: 700;
  }
  .react-calendar__month-view__weekdays {
    height: 30px !important;
  }
  .react-calendar__month-view__weekdays__weekday {
    background-color: white !important;
    border-top: 1px solid rgba(240, 161, 59, 0.5);
    border-left: 1px solid rgba(240, 161, 59, 0.5);
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    padding: 5px 4px !important;
    font-size: 14px;
  }
  .react-calendar__month-view__days {
    margin-top: 5px !important;
    & > :active,
    & > :hover {
      border: 0 !important;
      background-color: rgba(240, 161, 59, 0.2);
    }
  }
  .react-calendar__month-view__days__day {
    display: flex !important;
    align-items: flex-start !important;
    height: 48px !important;
    padding-top: 10px;
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
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    margin: 1rem;
  }
  .react-calendar__navigation button {
    min-width: 24px;
    background: none;
    font-size: 1rem;
    font-weight: bold;
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
    font-size: 0.85rem;
    width: 88%;
    height: 40px;
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
    color: red;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
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
  }

  .react-calendar__tile--now {
    background-color: #e6e6e6;
    border-radius: 5px;
    border: 3px solid #e6e6e6;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background-color: white;
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
    background: white;
    border-radius: 5px;
    border: 3px solid #e6e6e6;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    border: 3px solid #e6e6e6;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;
