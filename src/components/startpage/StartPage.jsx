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
    <Container>
      당신의 할일을 담아보세요
      <MainLogo />
      Bullet Box
      <StartBtn
        onClick={() => {
          StartHandler();
        }}
      >
        Start
      </StartBtn>
    </Container>
  );
};

export default StartPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50%;
  background-color: white;
  height: 100vh;
  font-size: 1.5rem;
  color: var(--color-main);
  font-family: "HeirofLightBold";
`;

const MainLogo = styled(Logo)`
  fill: var(--color-main);
  width: 50%;
  height: 25vh;
`;

const StartBtn = styled.button`
  margin-top: 15%;
  font-size: 1.5rem;
  font-family: "HeirofLightBold";
  background-color: white;
  color: var(--color-main);
  width: 55%;
  height: 6.7vh;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
