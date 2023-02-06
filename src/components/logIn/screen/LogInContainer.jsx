import React from "react";
import styled from "styled-components";
import LogInInput from "../components/LogInInput";
import SocialLogin from "../components/SocialLogin";
import { ReactComponent as Logo } from "../../../img/login/logo-graphic.svg";

const LogInContainer = () => {
  return (
    <Container>
      <TopContainer>
        <BulletLogo />
        <BulletBold>Bullet Box</BulletBold>
      </TopContainer>
      <LogInInput />
      <SocialLogin />
    </Container>
  );
};

export default LogInContainer;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 294px;
  height: 607px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 72px;
  height: 88.85px;
`;

const BulletLogo = styled(Logo)`
  width: 39.27px;
  height: 64.4px;
  fill: var(--color-main);
`;

const BulletBold = styled.div`
  color: var(--color-main);
  font-size: 14px;
  font-weight: bold;
  font-family: "HeirofLightBold";
  margin-top: 5px;
`;
