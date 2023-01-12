import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../img/logo/logo-graphic.svg";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();
  const StartHandler = () => {
    navigate("/login");
  };
  return (
    <StartContainer>
      <MainLogo />
      Bullet Box
      <StartBtn
        onClick={() => {
          StartHandler();
        }}
      >
        Start
      </StartBtn>
    </StartContainer>
  );
};

export default StartPage;

const StartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-main);
  height: 100vh;
  font-size: 1.5rem;
  color: white;
`;

const MainLogo = styled(Logo)`
  fill: white;
  width: 50%;
  height: 50vh;
`;

const StartBtn = styled.button`
  margin-top: 15%;
  font-size: 1.5rem;
  background-color: white;
  color: var(--color-main);
  width: 55%;
  height: 6.7vh;
  border: none;
  border-radius: 8px;
`;
