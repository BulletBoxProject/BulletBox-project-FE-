import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const NavigationMenu = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/dailys")}>DailyLog</Button>
        <Button onClick={() => navigate("/monthlys")}>MonthlyLog</Button>
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
  width: 30%;
  height: 100%;
  border: 1px solid var(--color-light-gray);
  border-radius: 10px;
  background-color: var(--color-light-gray);
  & > :hover {
    background-color: var(--color-main);
  }
`;
