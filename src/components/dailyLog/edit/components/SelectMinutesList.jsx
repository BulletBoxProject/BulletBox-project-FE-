import React, { useState } from "react";
import styled from "styled-components";

const SelectMinutesList = ({
  showSelectTime,
  setShowSelectTime,
  selectTime,
  setSelectTime,
}) => {
  const minutes = ["00", "10", "20", "30", "40", "50"];
  const selectMinutesHandler = (e) => {
    setSelectTime({ ...selectTime, minute: e.target.value });
    setShowSelectTime({ ...showSelectTime, minute: false });
  };
  let num = 0;
  return (
    <Container>
      {minutes.map((minute) => (
        <Minutebox key={num++} onClick={selectMinutesHandler} value={minute}>
          {minute}
        </Minutebox>
      ))}
    </Container>
  );
};

export default SelectMinutesList;

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
`;
const Minutebox = styled.option`
  padding: 2px 0;
`;
