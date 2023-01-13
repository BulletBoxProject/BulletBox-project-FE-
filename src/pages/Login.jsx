import React from "react";
import styled from "styled-components";

import LogInContainer from "../components/logIn/screen/LogInContainer";

const Login = () => {
  return (
    <Container>
      <LogInContainer />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 85vh;
`;
