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
  height: 100vh;
  background-color: var(--color-main);
`;

const BulletLogo = styled(Logo)`
  margin-top: 20%;
  width: 4rem;
  height: 3rem;
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
