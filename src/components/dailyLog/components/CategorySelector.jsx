import React, { useState, useRef } from "react";
import styled from "styled-components";

import CategoryButton from "./CategoryButton";

import useOutSideClick from "../../../hooks/useOutSideClick";

const CategorySelector = ({
  categoryList,
  isSetSelectedCategory,
  setSlectedCategoryId,
}) => {
  const categorySelectRef = useRef(null);
  const [showCategory, setShowCategory] = useState(false);
  const showCategoryHandler = () => {
    setShowCategory(!showCategory);
  };
  const showAllCategoryHandler = () => {
    isSetSelectedCategory(false);
    setSlectedCategoryId("");
    setShowCategory(false);
  };
  useOutSideClick(categorySelectRef, () => {
    setShowCategory(false);
  });
  let num = 0;
  return (
    <Container ref={categorySelectRef}>
      <CategoryDiv>
        <SelectButton onClick={showCategoryHandler}>전체</SelectButton>
        {showCategory ? (
          <CategoryList>
            <ShowAllButton onClick={showAllCategoryHandler}>전체</ShowAllButton>
            {categoryList &&
              categoryList.map((category) => (
                <CategoryButton
                  key={num++}
                  category={category}
                  categoryColor={category.categoryColor}
                  setShowCategory={setShowCategory}
                  isSetSelectedCategory={isSetSelectedCategory}
                  setSlectedCategoryId={setSlectedCategoryId}
                />
              ))}
          </CategoryList>
        ) : null}
      </CategoryDiv>
    </Container>
  );
};

export default CategorySelector;

const Container = styled.div``;
const CategoryDiv = styled.div`
  position: relative;
  left: 60px;
`;
const SelectButton = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: var(--color-gray);
  border: 0;
  background-color: white;
`;
const CategoryList = styled.div`
  position: absolute;
  left: 8px;
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
  height: 530px;
  overflow: auto;
`;
const ShowAllButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  border: 0;
  background-color: inherit;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  padding: 13px 0;
  border-radius: 8px;
`;
