import React, { useState } from "react";
import styled from "styled-components";

import { RxTriangleDown } from "react-icons/rx";

const TimeSettingDiv = ({ AddTodoInput, setAddTodoInput }) => {
  const [showTimeSet, setShowTimeSet] = useState(false);
  const showSetTimeHandler = () => {
    setShowTimeSet(!showTimeSet);
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
              <SelectHoursButton>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SelectDownIcon />
              </SelectHoursButton>
              <span>시</span>
            </SelectHoursDiv>
            <SelectMinutesDiv>
              <SelectMinutesButton>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SelectDownIcon />
              </SelectMinutesButton>
              <span>분</span>
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
  align-items: center;
  gap: 5px;
`;
const SelectHoursButton = styled.button``;
const SelectDownIcon = styled(RxTriangleDown)`
  width: 15px;
  height: 15px;
`;
const SelectMinutesDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const SelectMinutesButton = styled.button``;
