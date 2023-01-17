import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// import { BsFillPlusCircleFill } from "react-icons/bs";

const CategorySelectDiv = ({ AddTodoInput, setAddTodoInput }) => {
  const categorySelectHandler = (e) => {
    setAddTodoInput({ ...AddTodoInput, categoryId: Number(e.target.value) });
  };
  const categoryIdArray = [1, 2, 3, 4, 5, 6];
  let num = 0;
  return (
    <Container>
      {categoryIdArray.map((id) => (
        <CategoryButton
          key={num++}
          type="button"
          value={id}
          onClick={categorySelectHandler}
        >
          카테고리{id}
        </CategoryButton>
      ))}
    </Container>
  );
};

export default CategorySelectDiv;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
  flex-wrap: wrap;
  gap: 10px;
  width: 80%;
`;
const CategoryButton = styled.button`
  width: 30%;
  height: 3em;
  border: 0;
  &:active,
  &:hover {
    background-color: var(--color-main);
  }
`;
