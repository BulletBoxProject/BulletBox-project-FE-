import React from "react";
import styled from "styled-components";

import BulletSwitchList from "../../dailyLog/components/BulletSwitchList";

const MainTodoCard = ({ todoContent, categoryColor, todoBulletName, time }) => {
  return (
    <Container todoContent={todoContent} backgroundColor={categoryColor}>
      <CategoryColorDiv></CategoryColorDiv>
      <BulletDiv>
        <BulletSwitchList bulletName={todoBulletName} />
      </BulletDiv>
      <TodoContentDiv>
        <TodoTitle>{todoContent}</TodoTitle>
        <TimeDiv>
          {time === null ? null : <TodoSetTime>{time}</TodoSetTime>}
        </TimeDiv>
      </TodoContentDiv>
    </Container>
  );
};

export default MainTodoCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: ${({ todoContent }) => (todoContent.length > 19 ? "60px" : "40px")};
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
  padding-right: 3%;
  height: 100%;
  padding-left: 6px;
  border-radius: 0 8px 8px 0;
  background-color: var(--color-default);
`;
const TodoTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const TimeDiv = styled.span`
  padding-top: 2px;
`;
const TodoSetTime = styled.span`
  color: var(--color-gray);
`;
