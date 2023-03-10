import React from "react";
import styled from "styled-components";

const CategoryButton = ({
  category,
  isSetSelectedCategory,
  setSlectedCategoryId,
  setShowCategory,
}) => {
  const selectCategoryHandler = (e) => {
    setSlectedCategoryId(Number(e.target.id));
    isSetSelectedCategory(true);
    setShowCategory(false);
  };
  return (
    <Category
      id={category.categoryId}
      categoryColor={category.categoryColor}
      onClick={selectCategoryHandler}
    >
      {category.categoryName}
    </Category>
  );
};

export default CategoryButton;

const Category = styled.button`
  font-size: 14px;
  font-weight: 700;
  border: 0;
  background-color: ${(props) => props.categoryColor};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  padding: 13px 0;
  border-radius: 8px;
`;
