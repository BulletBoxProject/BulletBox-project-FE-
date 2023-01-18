import React, { useEffect } from "react";
import styled from "styled-components";
import CategoryAddBtn from "../components/CategoryAddBtn";
import { useDispatch } from "react-redux";
import { __getCategory } from "../../../../../redux/modules/categorySlice";
import { __deleteCategory } from "../../../../../redux/modules/categorySlice";
import { useSelector } from "react-redux";

const CatergoryList = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector(
    (state) => state?.category?.category?.categories
  );

  useEffect(() => {
    dispatch(__getCategory());
  }, [dispatch]);

  const deleteCategoryHandler = (categoryId) => {
    dispatch(__deleteCategory(categoryId));
  };

  return (
    <Container>
      <CategoryAddList>
        {categoryList?.map((val) => {
          return (
            <div key={val.categoryId}>
              <CategoryBtn backgroundColor={val.categoryColor}>
                {val.categoryName}
              </CategoryBtn>
              <button
                onClick={() => {
                  deleteCategoryHandler(val.categoryId);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </CategoryAddList>
      <CategoryAddDiv>
        <CategoryAddBtn></CategoryAddBtn>
      </CategoryAddDiv>
    </Container>
  );
};

export default CatergoryList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 3%;
`;
const CategoryAddList = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: wrap;
`;

const CategoryAddDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

const CategoryBtn = styled.button`
  width: 18vw;
  height: 4vh;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor || "#D9D9D9"};
`;
