import React from "react";
import styled from "styled-components";
import MainContainer from "../components/main/screen/MainContainer";

const Main = () => {
  return (
    <Container>
      <MainContainer />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: 85vh;
`;
