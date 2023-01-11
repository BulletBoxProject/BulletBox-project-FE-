import React from "react";
import styled from "styled-components";

import NavigationMenu from "../../common/NavigationMenu";
import DateButton from "../../common/Button";
import SelectGroup from "../components/SelectGroup";

const DailyLogContainer = () => {
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${new Date().getFullYear()}년 ${
    new Date().getMonth() + 1
  }월 ${new Date().getDate()}일 ${day[new Date().getDay()]}요일`;
  return (
    <Container>
      <NavigationMenu />
      <DateAndSelectDiv>
        <DateButton width={"50%"}>{today}</DateButton>
        <SelectGroup />
      </DateAndSelectDiv>
      <TodoBulletDiv>
        <BulletTodoCard>
          <MainBulletTodo>
            <input />
            <div>...</div>
          </MainBulletTodo>
        </BulletTodoCard>
        <BulletTodoCard>
          <MainBulletTodo>
            <input />
            <div>...</div>
          </MainBulletTodo>
          <BulletMemo>
            <input />
          </BulletMemo>
        </BulletTodoCard>
      </TodoBulletDiv>
    </Container>
  );
};

export default DailyLogContainer;

const Container = styled.div`
  font-family: cursive;
  padding: 30px;
`;
const DateAndSelectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const TodoBulletDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  min-height: 58vh;
  padding: 10px;
  gap: 10px;
`;
const BulletTodoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 5px;
  border-radius: 10px;
`;
const MainBulletTodo = styled.div`
  display: flex;
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
