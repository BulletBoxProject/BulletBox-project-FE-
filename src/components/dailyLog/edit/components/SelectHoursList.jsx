import React, { useState } from "react";
import styled from "styled-components";

const SelectHoursList = ({
  showSelectTime,
  setShowSelectTime,
  selectTime,
  setSelectTime,
  AddTodoInput,
  setAddTodoInput,
}) => {
  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const selectHoursHandler = (e) => {
    // setSelectTime({ ...selectTime, hour: e.target.value });
    setAddTodoInput({
      ...AddTodoInput,
      time: { ...AddTodoInput.time, hour: e.target.value },
    });
    setShowSelectTime({ ...showSelectTime, hour: false });
  };
  let num = 0;
  return (
    <Container>
      {hours.map((hour) => (
        <HourBox key={num++} onClick={selectHoursHandler} value={hour}>
          {hour}
        </HourBox>
      ))}
    </Container>
  );
};

export default SelectHoursList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 4vh;
  border: 1px solid black;
  gap: 5px;
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 22vh;
  font-size: 13px;
  overflow: scroll;
`;
const HourBox = styled.option`
  padding: 2px 0;
`;
