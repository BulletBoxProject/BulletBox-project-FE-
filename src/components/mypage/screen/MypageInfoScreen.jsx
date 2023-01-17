import React from "react";
import CategoryList from "../components/category/CatergoryList";
import AlwaysTodo from "../components/AlwaysTodo";
import styled from "styled-components";

const MypageInfoScreen = ({ showInfo }) => {
  return (
    <Container>
      {showInfo === 1 && (
        <>
          <CategoryList />
        </>
      )}
      {showInfo === 2 && (
        <>
          <AlwaysTodo />
        </>
      )}
    </Container>
  );
};

export default MypageInfoScreen;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vh;
  border: 2px solid var(--color-light-gray);
  border-radius: 5px;
  margin-top: 5%;
`;
