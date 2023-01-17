import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { ReactComponent as homeMenuIcon } from "../../img/log/home.svg";
import { ReactComponent as dailyLogIcon } from "../../img/log/dailylog.svg";
import { BsPerson } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { SlNotebook } from "react-icons/sl";

const NavigationMenu = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={() => navigate("/dailys")}>
          <span>
            <DailylogBtn />
          </span>
          <ButtonTitle></ButtonTitle>
        </Button>
        <Button onClick={() => alert("추가 기능 구상중")}>
          <span>
            <DiaryBtn />
          </span>
          <ButtonTitle></ButtonTitle>
        </Button>
        <Button onClick={() => navigate("/home")}>
          <span>
            <HomeMenuBtn />
          </span>
          <ButtonTitle></ButtonTitle>
        </Button>
        <Button onClick={() => navigate("/search")}>
          <span>
            <SearchBtn />
          </span>
          <ButtonTitle></ButtonTitle>
        </Button>

        <Button onClick={() => navigate("/mypage")}>
          <span>
            <MyPageBtn />
          </span>
          <ButtonTitle></ButtonTitle>
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default NavigationMenu;

const Container = styled.div`
  width: 100%;
  height: 50px;
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
  background-color: var(--color-main);
  padding: 3px 0;
  width: 25%;
  height: 48px;
  border: 0;
  /* border-radius: 8px; */
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); */
  /* background-color: var(--color-light-gray); */
  & > :active,
  & > :hover {
    background-color: var(--color-main);
  }
`;
const DiaryBtn = styled(SlNotebook)`
  width: 24px;
  height: 24px;
`;
const HomeMenuBtn = styled(homeMenuIcon)`
  width: 24px;
  height: 24px;
`;
const ButtonTitle = styled.span`
  font-family: "Oleo Script";
  font-size: 10px;
`;
const DailylogBtn = styled(dailyLogIcon)`
  width: 24px;
  height: 24px;
`;
const MyPageBtn = styled(BsPerson)`
  width: 24px;
  height: 24px;
`;
const SearchBtn = styled(HiSearch)`
  width: 24px;
  height: 24px;
`;

// const Monthlylog = styled(monthlylog)`
//   width: 24px;
//   height: 24px;
// `;
