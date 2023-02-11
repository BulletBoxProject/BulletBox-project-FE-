import React, { useState, useRef } from "react";
import styled from "styled-components";
import useOutSideClick from "../../../../hooks/useOutSideClick";

const SelectMinutesList = ({
  showSelectTime,
  setShowSelectTime,
  selectTime,
  setSelectTime,
}) => {
  const selectMinute = useRef(null);
  const minutes = ["00", "10", "20", "30", "40", "50"];
  const selectMinutesHandler = (e) => {
    setSelectTime({ ...selectTime, minute: e.target.value });
    setShowSelectTime({ ...showSelectTime, minute: false });
  };
  useOutSideClick(selectMinute, () => {
    setShowSelectTime({ ...showSelectTime, minute: false });
  });
  let num = 0;
  return (
    <Container ref={selectMinute}>
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
  font-size: 13px;
`;
const Minutebox = styled.button`
  width: 100%;
  border: 0;
  background-color: transparent;
  padding: 3px 0;
  font-size: 13px;
`;
