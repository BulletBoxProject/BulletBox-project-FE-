import React, { useState } from "react";
import styled from "styled-components";

import CategoryButton from "./CategoryButton";

const CategorySelector = ({ categoryList }) => {
  const [showCategory, setShowCategory] = useState(false);
  const showCategoryHandler = () => {
    setShowCategory(!showCategory);
  };
  return (
    <Container>
      <SelectButton onClick={showCategoryHandler}>전체</SelectButton>
      {showCategory ? (
        <CategoryList>
          <span>전체</span>
          {categoryList &&
            categoryList.map((category) => (
              <CategoryButton
                category={category}
                categoryColor={category.categoryColor}
              />
            ))}
        </CategoryList>
      ) : null}
    </Container>
  );
};

export default CategorySelector;

const Container = styled.div``;
const SelectButton = styled.button`
  position: relative;
  font-size: 12px;
  border: 0;
  background-color: white;
`;
const CategoryList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 999;
  gap: 8px;
  transform: translate(-70%, 0%);
  background-color: var(--color-default);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  margin-top: 16px;
  width: 112px;
  padding: 16px 8px;
  & > span {
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
`;