import React from "react";
import styled from "styled-components";
import SignUpInput from "../components/SignUpInput";
import { ReactComponent as Logo } from "../../../img/logo/logo-graphic.svg";

const SignUpContainer = () => {
  return (
    <ContainerBox>
      <BulletLogo />
      <BulletBold>Bullet Box</BulletBold>
      <SignUpInput />
    </ContainerBox>
  );
};

export default SignUpContainer;
const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 740px;
`;

const BulletLogo = styled(Logo)`
  margin-top: 20%;
  width: 4rem; 
  height: 3rem;
  fill: var(--color-main);
`;

const BulletBold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-main);
  font-size: 14px;
  font-family: "HeirofLightBold";
  margin-top: 1vh;
  margin-bottom: 3vh;
`;
