import React from "react";
import CategoryList from "../components/category/screen/CategoryList";
import AlwaysTodo from "../components/alwaystodo/AlwaysTodo";
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
  min-height: 30vh;
  overflow: auto;
  margin-top: 5%;
`;
