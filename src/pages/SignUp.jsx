import React from "react";
import styled from "styled-components";

import SignUpContainer from "../components/signup/screen/SignUpContainer";

const SignUp = () => {
  return (
    <Container>
      <SignUpContainer />
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  height: 85vh;
`;
