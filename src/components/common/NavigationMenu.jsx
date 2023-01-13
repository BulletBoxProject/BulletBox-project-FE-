import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { ReactComponent as homeMenuIcon } from "../../img/log/home.svg";
import { ReactComponent as dailyLogIcon } from "../../img/log/dailylog.svg";
import { ReactComponent as monthlylog } from "../../img/log/monthlylog.svg";

const NavigationMenu = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={() => navigate("/")}>
          <span>
            <HomeMenuBtn />
          </span>
          <ButtonTitle>Home</ButtonTitle>
        </Button>
        <Button onClick={() => navigate("/dailys")}>
          <span>
            <Dailylog />
          </span>
          <ButtonTitle>Dayilylog</ButtonTitle>
        </Button>
        <Button onClick={() => navigate("/monthlys")}>
          <span>
            <Monthlylog />
          </span>
          <ButtonTitle>Monthlylog</ButtonTitle>
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default NavigationMenu;

const Container = styled.div`
  width: 100%;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-dark-gray);
  padding: 3px 0;
  width: 30%;
  height: 48px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  /* background-color: var(--color-light-gray); */
  & > :active,
  & > :hover {
    background-color: var(--color-main);
  }
`;
const HomeMenuBtn = styled(homeMenuIcon)`
  width: 24px;
  height: 24px;
`;
const ButtonTitle = styled.span`
  font-family: "Oleo Script";
  font-size: 10px;
`;
const Dailylog = styled(dailyLogIcon)`
  width: 24px;
  height: 24px;
`;
const Monthlylog = styled(monthlylog)`
  width: 24px;
  height: 24px;
`;
