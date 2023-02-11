import React from "react";
import styled from "styled-components";

import BulletTodoCard from "./BulletTodoCard";

const AllTodoShow = ({ todoList, dailyLogs, setDailyLogs }) => {
  let num = 0;
  return (
    <Container>
      {todoList &&
        todoList?.map((dailyLog) => {
          return (
            <BulletTodoCard
              key={num++}
              dailyLog={dailyLog}
              dailyLogs={dailyLogs}
              setDailyLogs={setDailyLogs}
            />
          );
        })}
    </Container>
  );
};

export default AllTodoShow;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
