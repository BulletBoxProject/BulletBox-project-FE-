import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../img/logo/logo-graphic.svg";

const StartPage = () => {
  return (
    <StartContainer>
      <MainLogo />
      <div>Bullet Box</div>
    </StartContainer>
  );
};

export default StartPage;

const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-main);
  height: 100vh;
`;

const MainLogo = styled(Logo)`
  fill: white;
  width: 50%;
  height: 50vh;
`;
