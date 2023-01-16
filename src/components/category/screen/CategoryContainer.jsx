import React from "react";
import styled from "styled-components";
import CategoryBtn from "../components/CategoryBtn";

const CategoryContainer = () => {
  return (
    <CategoryDiv>
      <CategoryBtn />
      <button>카테고리1</button>
    </CategoryDiv>
  );
};

export default CategoryContainer;

const CategoryDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 5vh;
  height: 100vh;
`;

const CategorySelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
