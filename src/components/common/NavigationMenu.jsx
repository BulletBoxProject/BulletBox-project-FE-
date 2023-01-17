import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { ReactComponent as homeMenuIcon } from "../../img/log/home.svg";
import { ReactComponent as dailyLogIcon } from "../../img/log/dailylog.svg";
import { BsPerson } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { GiBullets } from "react-icons/gi";

const NavigationMenu = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={() => navigate("/dailys")}>
          <span>
            <Dailylog />
          </span>
          <ButtonTitle></ButtonTitle>
        </Button>
        <Button onClick={() => alert("추가 기능 구상중")}>
          <span>
            <UntitleMenu />
          </span>
          <ButtonTitle></ButtonTitle>
        </Button>
        <Button onClick={() => navigate("/home")}>
          <span>
            <HomeMenuBtn />
          </span>
          <ButtonTitle></ButtonTitle>
        </Button>
        <Button onClick={() => alert("검색 기능 구현 예정")}>
          <span>
            <SearchIcon />
          </span>
          <ButtonTitle></ButtonTitle>
        </Button>

        <Button onClick={() => alert("마이페이지 구현 예정")}>
          <span>
            <MyPageIcon />
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
const UntitleMenu = styled(GiBullets)`
  width: 24px;
  height: 24px;
  opacity: 0.4;
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
const MyPageIcon = styled(BsPerson)`
  width: 24px;
  height: 24px;
`;
const SearchIcon = styled(HiSearch)`
  width: 24px;
  height: 24px;
`;

// const Monthlylog = styled(monthlylog)`
//   width: 24px;
//   height: 24px;
// `;
