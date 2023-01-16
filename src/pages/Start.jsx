import React from "react";
import StartPage from "../components/startpage/StartPage";
import styled from "styled-components";

const Start = () => {
  return (
    <Container>
      <StartPage />
    </Container>
  );
};

export default Start;

const Container = styled.div`
  height: 85vh;
`;