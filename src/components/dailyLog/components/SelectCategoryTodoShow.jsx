import React from "react";
import styled from "styled-components";

import BulletTodoCard from "./BulletTodoCard";

const SelectCategoryTodoShow = ({
  todoList,
  dailyLogs,
  setDailyLogs,
  selectedCategoryId,
}) => {
  let num = 0;
  return (
    <Container>
      <EmptyContents>
        {todoList &&
        todoList?.find((todo) => todo.categoryId === selectedCategoryId) ===
          undefined ? (
          <div>선택된 카테고리에 할일이 없습니다.</div>
        ) : null}
      </EmptyContents>
      {todoList &&
        todoList?.map((dailyLog) => {
          if (selectedCategoryId === dailyLog.categoryId) {
            return (
              <BulletTodoCard
                key={num++}
                dailyLog={dailyLog}
                dailyLogs={dailyLogs}
                setDailyLogs={setDailyLogs}
              />
            );
          }
        })}
    </Container>
  );
};

export default SelectCategoryTodoShow;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const EmptyContents = styled.div`
  & > div {
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
    color: var(--color-gray);
  }
`;
