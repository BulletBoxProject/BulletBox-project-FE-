import React from "react";
import styled from "styled-components";
import AlwaysTodo from "../components/AlwaysTodo";

const AlwaysTodoList = () => {
  return (
    <Container>
      <AlwaysAddList>
        <AlwaysTodo />
        <AlwaysTodo />
        <AlwaysTodo />
        <AlwaysTodo />
        <AlwaysTodo />
        <AlwaysTodo />
      </AlwaysAddList>
    </Container>
  );
};

export default AlwaysTodoList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 3%;
`;
const AlwaysAddList = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

const AlwaysAddPtag = styled.p`
  font-size: 1.2rem;
`;
