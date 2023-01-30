import React, { useState } from "react";
import styled from "styled-components";

const CategorySelectDiv = ({ categories, AddTodoInput, setAddTodoInput }) => {
  const categorySelectHandler = (e) => {
    setAddTodoInput({
      ...AddTodoInput,
      categoryId: Number(e.target.id),
      categoryColor: e.target.value,
    });
  };
  const categoryList = categories;
  let num = 0;
  return (
    <Container>
      <CategoryTitle>카테고리</CategoryTitle>
      <ButtonDiv>
        {categoryList.map((category) => (
          <CategoryButton
            key={num++}
            type="button"
            id={category.categoryId}
            value={category.categoryColor}
            backgroundColor={category.categoryColor}
            onClick={categorySelectHandler}
          >
            {category.categoryName}
          </CategoryButton>
        ))}
      </ButtonDiv>
    </Container>
  );
};

export default CategorySelectDiv;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  gap: 15px;
  padding: 15px 20px 20px 20px;
  width: 100%;
  background-color: var(--color-default);
  border-radius: 8px;
`;
const CategoryTitle = styled.div`
  color: var(--color-gray);
  font-size: 14px;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;
const CategoryButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  width: 25%;
  font-size: 14px;
  height: 3em;
  border: 0;
  border-radius: 8px;
  &:focus,
  &:hover {
    border: 3px solid var(--color-light-gray);
  }
`;
