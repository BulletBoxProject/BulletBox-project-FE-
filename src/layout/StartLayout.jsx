import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StartLayout = (props) => {
  return (
    <Container>
      <ContainerDiv>
        <Outlet>{props.children}</Outlet>
      </ContainerDiv>
    </Container>
  );
};

export default StartLayout;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: var(--color-light-gray);
  font-size: 1.5rem;
  font-family: "HeirofLightBold";
`;

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  color: var(--color-main);
  width: 360px;
  height: 740px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;
