import React from "react";
import styled from "styled-components";

import BulletSwitchList from "../../dailyLog/components/BulletSwitchList";

const MainTodoCard = () => {
  return (
    <Container backgroundColor={"#F4BCB8"}>
      <CategoryColorDiv></CategoryColorDiv>
      <BulletDiv>
        <BulletSwitchList bulletName={"완료"} />
      </BulletDiv>
      <TodoContentDiv>
        <TodoTitle>요가 취소하기</TodoTitle>
        <TodoSetTime>14:00</TodoSetTime>
      </TodoContentDiv>
    </Container>
  );
};

export default MainTodoCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
`;
const CategoryColorDiv = styled.div`
  width: 2.5%;
  background-color: inherit;
`;
const BulletDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6px;
  height: 100%;
  background-color: var(--color-default);
`;
const TodoContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 6px;
  border-radius: 0 8px 8px 0;
  background-color: var(--color-default);
`;
const TodoTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const TodoSetTime = styled.span`
  color: var(--color-gray);
`;
