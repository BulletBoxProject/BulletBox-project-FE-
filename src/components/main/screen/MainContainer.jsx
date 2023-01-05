import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import uuid from "react-uuid";

import MainInputCard from "../components/MainInputCard";
import MainEditCard from "../components/MainEditCard";

const MainContainer = () => {
  const bulletList = useSelector((state) => state.bullet_main.bulletList);
  console.log("리듀서 상태 저장 값", bulletList);
  return (
    <Container>
      {bulletList.map((item) => (
        <MainEditCard
          key={uuid()}
          bullet={item.bullet}
          category={item.category}
          body={item.body}
        />
      ))}
      <MainInputCard />
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`;
