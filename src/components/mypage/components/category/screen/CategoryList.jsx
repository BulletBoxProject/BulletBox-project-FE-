import React, { useEffect } from "react";
import styled from "styled-components";
import CategoryAddBtn from "../components/CategoryAddBtn";
import CategoryUpdateBtn from "../components/CategoryUpdateBtn";
import { useDispatch } from "react-redux";
import { __getCategory } from "../../../../../redux/modules/categorySlice";
import { useSelector } from "react-redux";

const CatergoryList = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector(
    (state) => state?.category?.category?.categories
  );
  console.log(categoryList, "23");

  useEffect(() => {
    dispatch(__getCategory());
  }, [dispatch]);

  return (
    <Container>
      <CategoryAddList>
        {categoryList?.map((val) => {
          return (
            <div key={val.categoryId}>
              <CategoryUpdateBtn
                id={val.categoryId}
                backgroundColor={val.categoryColor}
              >
                {val.categoryName}
              </CategoryUpdateBtn>
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
