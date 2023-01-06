import React from "react";
import styled from "styled-components";
import SignUpInput from "../components/SignUpInput";

const SignUpContainer = () => {
  return (
    <StcontainerBox>
      <SignUpInput />
    </StcontainerBox>
  );
};

export default SignUpContainer;
const StcontainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
