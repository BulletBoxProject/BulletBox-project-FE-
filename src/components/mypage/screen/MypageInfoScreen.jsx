import React from "react";
import CategoryList from "../components/category/screen/CategoryList";
import AlwaysTodoList from "../components/alwaystodo/screen/AlwaysTodoList";
import styled from "styled-components";
// import CategoryAddBtn from "../components/category/components/CategoryAddBtn";
// import AlwaysAddBtn from "../components/alwaystodo/AlwaysAddBtn";

const MypageInfoScreen = ({ showInfo }) => {
  return (
    <>
      <Container>
        {showInfo === 1 && (
          <>
            <CategoryList />
          </>
        )}
        {showInfo === 2 && (
          <>
            <AlwaysTodoList />
          </>
        )}
      </Container>
    </>
  );
};

export default MypageInfoScreen;

const Container = styled.div`
  min-height: 50vh;
  overflow: auto;
  margin-top: 5%;
`;
