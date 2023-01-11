import React from "react";
import styled from "styled-components";
import BulletCalendar from "../../calendar/Calendar";
import LogInInput from "../components/LogInInput";

const LogInContainer = () => {
  return (
    <StcontainerBox>
      <LogInInput />
    </StcontainerBox>
  );
};

export default LogInContainer;

const StcontainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
`;
