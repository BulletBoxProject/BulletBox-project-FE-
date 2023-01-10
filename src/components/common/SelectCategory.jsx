import React, { useState } from "react";
import styled from "styled-components";

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

const SelectCategoryDiv = styled.div`
  position: relative;
`;
const CategoryButton = styled.button`
  width: 3.5em;
  height: 1.8em;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
  background-color: white;
  &:hover {
    background-color: #efefef;
  }
`;
const CategoryList = styled.div`
  position: absolute;
  left: -19.5px;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
  margin-top: 5px;
  padding: 0 5px;
  font-size: 12px;
  & > option {
    margin: 5px 0;
    font-size: inherit;
  }
`;
