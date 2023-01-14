import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import NavigationMenu from "../../common/NavigationMenu";

import SelectCategory from "../../common/SelectCategory";
import ToggleSwitch from "../../common/ToggleSwitch";

import { ReactComponent as moreIcon } from "../../../img/navi/more.svg";
import { BsFillPlusCircleFill } from "react-icons/bs";

import { ReactComponent as todoBullet } from "../../../img/bullet/todo-1.svg";
import { ReactComponent as checkBullet } from "../../../img/bullet/check-2.svg";
import { ReactComponent as postphoneBullet } from "../../../img/bullet/postpone-3.svg";
import { ReactComponent as experienceBullet } from "../../../img/bullet/ex-4.svg";
import { ReactComponent as memoBullet } from "../../../img/bullet/meno-5.svg";
import { ReactComponent as importantBullet } from "../../../img/bullet/asterisk-6.svg";
import { ReactComponent as favoriteBullet } from "../../../img/bullet/star-7.svg";

const DailyLogContainer = () => {
  const navigate = useNavigate();
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${new Date().getFullYear()} / ${
    new Date().getMonth() + 1
  } / ${new Date().getDate()} ${day[new Date().getDay()]}`;
  return (
    <Container>
      <NavigationMenu />
      <DateAndSelectDiv>
        <DateButton>{today}</DateButton>
        <SelectDiv>
          <ToggleSwitch />
          <SelectCategory style={{ padding: "10px" }} />
        </SelectDiv>
      </DateAndSelectDiv>
      <TodoBulletDiv>
        <BulletTodoCard>
          <MainBulletTodo>
            <TodoBodyDiv>
              <span>
                <CheckBullet />
              </span>
              <span>추가한 할 일 목록입니다.</span>
            </TodoBodyDiv>
            <OptionButton onClick={() => console.log("option click!")}>
              <MoreIcon />
            </OptionButton>
          </MainBulletTodo>
        </BulletTodoCard>
        <AddButtonDiv>
          <AddButtonButton
            type="button"
            onClick={() => navigate("/dailys/add")}
          >
            <AddTodoIcon />
          </AddButtonButton>
        </AddButtonDiv>
      </TodoBulletDiv>
    </Container>
  );
};

export default DailyLogContainer;

const Container = styled.div`
  font-family: cursive;
  padding: 0 3.9% 4.05vh 3.9%;
`;
const DateAndSelectDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
`;
const DateButton = styled.button`
  width: 35%;
  padding: 3px 0;
  color: var(--color-dark-gray);
  font-size: 14px;
  font-weight: bold;
  background-color: white;
  border: 0;
`;
const TodoBulletDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 71vh;
  gap: 10px;
`;
const BulletTodoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(240, 161, 59, 0.2);
  border: 1px solid rgba(240, 161, 59, 0.2);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 4px;
`;
const TodoBodyDiv = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  font-size: 12px;
  font-weight: 800;
`;
const OptionButton = styled.button`
  background-color: transparent;
  border: 0;
`;
const MoreIcon = styled(moreIcon)`
  width: 24px;
  height: 24px;
`;
const AddButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const AddButtonButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 0;
  background-color: transparent;
`;
const AddTodoIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-main);
  width: 24px;
  height: 24px;
`;
const MainBulletTodo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  & > input {
    width: 90%;
    padding: 0;
    margin: 0;
  }
`;
const BulletMemo = styled.div`
  display: flex;
  justify-content: flex-end;
  & > input {
    width: 80%;
    margin-right: 9%;
  }
`;

const TodoBullet = styled(todoBullet)`
  width: 24px;
  height: 18px;
`;
const CheckBullet = styled(checkBullet)`
  width: 24px;
  height: 18px;
`;
const PostphoneBullet = styled(postphoneBullet)`
  width: 24px;
  height: 18px;
`;
const ExperienceBullet = styled(experienceBullet)`
  width: 24px;
  height: 18px;
`;
const MemoBullet = styled(memoBullet)`
  width: 24px;
  height: 18px;
`;
const ImportantBullet = styled(importantBullet)`
  width: 24px;
  height: 18px;
`;
const FavoriteBullet = styled(favoriteBullet)`
  width: 24px;
  height: 18px;
`;
