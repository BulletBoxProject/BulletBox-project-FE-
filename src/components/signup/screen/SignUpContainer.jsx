import React from "react";
import styled from "styled-components";
import SignUpInput from "../components/SignUpInput";
import { ReactComponent as Logo } from "../../../img/login/logo-graphic.svg";

const SignUpContainer = () => {
  return (
    <ContainerBox>
      <TopContainer>
        <BulletLogo />
        <BulletBold>Bullet Box</BulletBold>
      </TopContainer>

      <SignUpInput />
    </ContainerBox>
  );
};

export default SignUpContainer;
const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 294px;
  height: 545px;
  margin-bottom: 60px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 73px;
  height: 88.85px;
`;

const BulletLogo = styled(Logo)`
  width: 39.27px;
  height: 64.4px;
  fill: var(--color-main);
`;

const BulletBold = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-main);
  font-size: 14px;
  font-weight: bold;
  font-family: "HeirofLightBold";
  margin-top: 5px;
  width: 80px;
  height: 21px;
`;
