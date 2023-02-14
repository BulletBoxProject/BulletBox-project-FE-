import React, { useState } from "react";
import styled from "styled-components";

import { RxTriangleDown } from "react-icons/rx";

const SelectCategory = () => {
  const [showCategory, setShowCategory] = useState(false);
  const categoryShowHandler = () => {
    setShowCategory(!showCategory);
  };
  return (
    <div>
      <SelectCategoryDiv>
        <CategoryButton type="button" onClick={categoryShowHandler}>
          전체
        </CategoryButton>
        {showCategory ? (
          <CategoryList>
            <option>category1</option>
            <option>category2</option>
            <option>category3</option>
          </CategoryList>
        ) : null}
      </SelectCategoryDiv>
    </div>
  );
};

export default SelectCategory;

const SelectCategoryDiv = styled.div``;
const CategoryButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 4em;
  height: 2em;
  border-radius: 5px;
  border: 0;
  background-color: white;
`;
const CategoryList = styled.div`
  position: absolute;
  left: 75vw;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
  margin-top: 5px;
  padding: 0 5px;
  font-size: 11.5px;
  & > option {
    margin: 5px 0;
    font-size: inherit;
  }
`;
