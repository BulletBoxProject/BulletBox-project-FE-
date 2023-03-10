import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategorySelectDiv = ({
  selectedCategoryId,
  categories,
  AddTodoInput,
  setAddTodoInput,
}) => {
  const navigate = useNavigate();
  const categorySelectHandler = (e) => {
    setAddTodoInput({
      ...AddTodoInput,
      categoryId: Number(e.target.id),
      categoryColor: e.target.value,
    });
  };
  const categoryList = categories;
  let num = 0;
  const goToMypage = () => {
    navigate("/mypage");
  };
  return (
    <Container>
      <CategoryTitle>카테고리</CategoryTitle>
      {categories.length === 0 ? (
        <NoticeDiv>
          <NoticeButton onClick={goToMypage}>
            카테고리를 추가해주세요.
          </NoticeButton>
        </NoticeDiv>
      ) : null}
      <ButtonDiv>
        {categoryList.map((category) => (
          <CategoryButton
            key={num++}
            type="button"
            id={category.categoryId}
            value={category.categoryColor}
            backgroundColor={category.categoryColor}
            onClick={categorySelectHandler}
            selectedCategoryId={selectedCategoryId}
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
const NoticeDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 20px;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-left: 38px;
`;
const NoticeButton = styled.button`
  border: 0;
  background-color: inherit;
  font-size: 14px;
  font-weight: bold;
`;
const CategoryButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  width: 25%;
  font-size: 14px;
  height: 3em;
  border: 0;
  border-radius: 8px;
  border-width: 5px;
  border-style: solid;
  border-color: ${(props) =>
    props.id === props.selectedCategoryId ? "#ffffff" : "var(--color-default)"};
  box-shadow: ${(props) =>
    props.id === props.selectedCategoryId ? "var(--shadow-box-shadow)" : null};
  &:focus,
  &:hover {
    border: 5px solid #ffffff;
  }
`;
