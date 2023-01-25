import React, { useEffect } from "react";
import styled from "styled-components";
import CategoryUpdateBtn from "../components/CategoryUpdateBtn";
import { useDispatch, useSelector } from "react-redux";
import { __getCategory } from "../../../../../redux/modules/categorySlice";

const CatergoryList = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector(
    (state) => state?.category?.category?.categories
  );

  useEffect(() => {
    dispatch(__getCategory());
  }, [dispatch]);

  return (
    <Container>
      <CategoryAddList>
        {categoryList && categoryList.length === 0 ? (
          <CategoryAddPtag>카테고리를 추가해보세요.</CategoryAddPtag>
        ) : (
          categoryList?.map((val) => {
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
          })
        )}
      </CategoryAddList>
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
  height: 55vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-left: 12%;
`;

const CategoryAddPtag = styled.p`
  font-size: 1.2rem;
`;
