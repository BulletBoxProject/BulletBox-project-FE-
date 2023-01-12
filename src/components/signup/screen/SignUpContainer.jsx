import React from "react";
import styled from "styled-components";
import SignUpInput from "../components/SignUpInput";
import { ReactComponent as Logo } from "../../../img/logo/logo-graphic.svg";

const SignUpContainer = () => {
  return (
    <StcontainerBox>
      <BulletLogo />
      <BulletBold>Bullet Box</BulletBold>
      <SignUpInput />
    </StcontainerBox>
  );
};

export default SignUpContainer;
const StcontainerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
