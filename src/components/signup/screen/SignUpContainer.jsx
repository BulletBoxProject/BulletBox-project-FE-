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
  height: 525px;
  margin-bottom: 60px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 72px;
  height: 68.85px;
`;

const BulletLogo = styled(Logo)`
  width: 39.27px;
  height: 44.4px;
  fill: var(--color-main);
`;

const BulletBold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-main);
  font-size: 14px;
  font-family: "HeirofLightBold";
  margin-top: 5px;
`;
