import React from "react";
import styled from "styled-components";
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
  height: 70vh;
`;
