import React from "react";
import styled from "styled-components";
import LogInInput from "../components/LogInInput";
import { ReactComponent as Logo } from "../../../img/logo/logo-graphic.svg";

const LogInContainer = () => {
  return (
    <Container>
      <BulletLogo />
      <BulletBold>Bullet Box</BulletBold>
      <LogInInput />
    </Container>
  );
};

export default LogInContainer;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 5vh;
  height: 100vh;
  background-color: var(--color-main);
`;

const BulletLogo = styled(Logo)`
  width: 4rem;
  height: 7rem;
  fill: white;
`;

const BulletBold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-family: "HeirofLightBold";
  margin-top: 1vh;
  margin-bottom: 3vh;
`;
