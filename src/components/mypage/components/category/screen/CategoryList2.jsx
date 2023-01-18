import React, { useState } from "react";
import styled from "styled-components";
import CategoryAddBtn from "../components/CategoryAddBtn";
import { useEffect } from "react";
import { baseURLApiV1 } from "../../../../../core/api";

const CategoryList2 = () => {
  const [categoryList, setCategoryList] = useState({});

  const getCategory = async () => {
    try {
      const { data } = await baseURLApiV1.get(`categories`);
      console.log(data.data);
      return data;
    } catch (error) {
      alert("오류");
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Container>
      <CategoryAddList>
        {/* {categoryList?.map((val) => {
          return (
            <div key={val.categoryId}>
              <CategoryBtn backgroundColor={val.categoryColor}>
                {val.categoryName}
              </CategoryBtn>
              <button
              // onClick={() => {
              //   deleteCategoryHandler(val.categoryId);
              // }}
              >
                삭제
              </button>
            </div>
          );
        })} */}
        <CategoryBtn backgroundColor={"red"}>카테고리</CategoryBtn>
      </CategoryAddList>
      <CategoryAddDiv>
        <CategoryAddBtn></CategoryAddBtn>
      </CategoryAddDiv>
    </Container>
  );
};

export default CategoryList2;

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
