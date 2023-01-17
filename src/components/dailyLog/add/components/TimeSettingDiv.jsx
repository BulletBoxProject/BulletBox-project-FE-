import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SelectHoursList from "./SelectHoursList";
import SelectMinutesList from "./SelectMinutesList";

import { RxTriangleDown } from "react-icons/rx";

const TimeSettingDiv = ({ AddTodoInput, setAddTodoInput }) => {
  const [showTimeSet, setShowTimeSet] = useState(false);
  const [showSelectTime, setShowSelectTime] = useState({
    hour: false,
    minute: false,
  });
  const [selectTime, setSelectTime] = useState({ hour: 0, minute: 0 });
  console.log("입력된 시간", selectTime);

  useEffect(() => {
    setAddTodoInput({
      ...AddTodoInput,
      time: `${selectTime.hour}:${selectTime.minute}`,
    });
  }, [selectTime]);

  const showSetTimeHandler = () => {
    setShowTimeSet(!showTimeSet);
    setSelectTime({ hour: 0, minute: 0 });
  };
  const showSelectHourHandler = () => {
    setShowSelectTime({
      ...showSelectTime,
      hour: !showSelectTime.hour,
    });
  };
  const showSelectMinuteHandler = () => {
    setShowSelectTime({
      ...showSelectTime,
      minute: !showSelectTime.minute,
    });
  };

  return (
    <Container>
      <TimeSetOnOffDiv>
        <SwitchDiv>
          <OnOffSwitchButton type="button" onClick={showSetTimeHandler}>
            {showTimeSet ? "ON" : "OFF"}
          </OnOffSwitchButton>
        </SwitchDiv>
        {showTimeSet ? null : <hr style={{ width: " 100%" }} />}
        {showTimeSet ? (
          <SetTimeSelectDiv>
            <SelectHoursDiv>
              <SelectButtonDiv>
                <SelectHoursButton
                  id="hour"
                  type="button"
                  onClick={showSelectHourHandler}
                >
                  {selectTime.hour === 0 ? "선택" : selectTime.hour}

                  <SelectDownIcon />
                </SelectHoursButton>
                <span>시</span>
              </SelectButtonDiv>
              {showSelectTime.hour ? (
                <SelectHoursList
                  showSelectTime={showSelectTime}
                  setShowSelectTime={setShowSelectTime}
                  selectTime={selectTime}
                  setSelectTime={setSelectTime}
                />
              ) : null}
            </SelectHoursDiv>
            <SelectMinutesDiv>
              <SelectButtonDiv>
                <SelectMinutesButton
                  id="minute"
                  type="button"
                  onClick={showSelectMinuteHandler}
                >
                  {selectTime.minute === 0 ? "선택" : selectTime.minute}
                  <SelectDownIcon />
                </SelectMinutesButton>
                <span>분</span>
              </SelectButtonDiv>
              {showSelectTime.minute ? (
                <SelectMinutesList
                  showSelectTime={showSelectTime}
                  setShowSelectTime={setShowSelectTime}
                  selectTime={selectTime}
                  setSelectTime={setSelectTime}
                />
              ) : null}
            </SelectMinutesDiv>
          </SetTimeSelectDiv>
        ) : null}
        {showTimeSet ? <hr style={{ width: " 100%" }} /> : null}
      </TimeSetOnOffDiv>
    </Container>
  );
};

export default TimeSettingDiv;

const Container = styled.div`
  width: 100%;
`;
const TimeSetOnOffDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
const SwitchDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const OnOffSwitchButton = styled.button`
  display: flex;
  justify-self: flex-end;
`;
const SetTimeSelectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
const SelectHoursDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  position: relative;
`;
const SelectButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const SelectHoursButton = styled.button`
  display: flex;
  align-items: center;
  padding: 2px 5px;
`;
const SelectDownIcon = styled(RxTriangleDown)`
  width: 15px;
  height: 15px;
`;
const SelectMinutesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  position: relative;
`;
const SelectMinutesButton = styled.button`
  display: flex;
  align-items: center;
  padding: 2px 5px;
`;
