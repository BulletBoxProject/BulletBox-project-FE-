import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { ReactComponent as homeMenuIcon } from "../../../img/log/home.svg";
import { ReactComponent as dailyLogIcon } from "../../../img/log/dailylog.svg";
import { BsPerson } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { SlNotebook } from "react-icons/sl";

const NavigationMenu = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={() => alert("추가 기능 구상중")}>
          <span>
            <DiaryBtn />
          </span>
        </Button>
        <Button onClick={() => navigate("/dailys")}>
          <span>
            <DailylogBtn />
          </span>
        </Button>
        <Button onClick={() => navigate("/home")}>
          <span>
            <HomeMenuBtn />
          </span>
        </Button>
        <Button onClick={() => alert("추가 기능 구상중")}>
          <span>
            <SearchBtn />
          </span>
        </Button>

        <Button onClick={() => navigate("/mypage")}>
          <span>
            <MyPageBtn />
          </span>
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default NavigationMenu;

const Container = styled.div`
  width: 100%;
  height: 7.5vh;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7.5vh;
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #7c7c7c;
  padding: 3px 0;
  width: 25%;
  height: 48px;
  border: 0;
  &:active,
  &:hover {
    color: var(--color-main);
  }
`;
const DiaryBtn = styled(SlNotebook)`
  width: 21px;
  height: 21px;
`;
const HomeMenuBtn = styled(homeMenuIcon)`
  width: 26px;
  height: 26px;
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
