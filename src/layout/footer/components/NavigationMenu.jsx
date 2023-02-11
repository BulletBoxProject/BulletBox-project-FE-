import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { ReactComponent as homeMenuIcon } from "../../../img/tabBar/home.svg";
import { ReactComponent as dailyLogIcon } from "../../../img/tabBar/daily.svg";
import { ReactComponent as diaryLogIcon } from "../../../img/tabBar/diary.svg";
import { BsPerson } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";

const NavigationMenu = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState();
  const buttons = [
    <DiaryBtn key="diary/일기장" />,
    <DailylogBtn key="dailys/할일추가" />,
    <HomeMenuBtn key="home/홈" />,
    <SearchBtn key="search/검색" />,
    <MyPageBtn key="mypage/마이페이지" />,
  ];
  const navigationHandler = (e) => {
    setActiveButton(e.target.id);
    navigate(`/${e.target.id}`);
  };
  return (
    <Container>
      {buttons.map((btn, idx) => (
        <Button
          key={idx}
          id={btn.key.split("/")[0]}
          title={btn.key.split("/")[1]}
          activeButton={activeButton}
          onClick={navigationHandler}
        >
          <span>{btn}</span>
        </Button>
      ))}
    </Container>
  );
};

export default NavigationMenu;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: ${({ id, activeButton }) =>
    id === activeButton ? "var(--color-main)" : "var(--color-gray)"};
  padding: 3px 0;
  width: 25%;
  height: 48px;
  border: 0;
  & > span {
    pointer-events: none;
  }
  &:active,
  &:hover,
  &:focus {
    color: var(--color-main);
  }
`;
const DiaryBtn = styled(diaryLogIcon)`
  width: 24px;
  height: 24px;
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
