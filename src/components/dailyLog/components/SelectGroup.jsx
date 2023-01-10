import React, { useState } from "react";
import styled from "styled-components";

const SelectGroup = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const categoryShowHandler = () => {
    setShowCategory(!showCategory);
  };
  const toggleHandler = () => {
    setToggleState(!toggleState);
  };
  return (
    <div>
      <SelectDiv>
        <ToggleDiv toggleState={toggleState}>
          <ToggleSwitch onClick={toggleHandler} type="button" />
        </ToggleDiv>
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
      </SelectDiv>
    </div>
  );
};

export default SelectGroup;

const SelectDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
  gap: 15px;
`;
const ToggleDiv = styled.div`
  font-size: 12px;
  width: 3em;
  height: 1.5em;
  background-color: ${({ toggleState }) => (toggleState ? "green" : "red")};
  border: 1px solid #eeeeee;
  border-radius: 10px;
  display: flex;
  justify-content: ${({ toggleState }) =>
    toggleState ? "flex-end" : "flex-start"};
`;
const ToggleSwitch = styled.button`
  width: 1.3em;
  height: 1.3em;
  border: 1px solid #efefef;
  border-radius: 100%;
`;
const SelectCategoryDiv = styled.div`
  position: relative;
`;
const CategoryButton = styled.button`
  width: 3em;
  height: 1.5em;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
  background-color: white;
  &:hover {
    background-color: #efefef;
  }
`;
const CategoryList = styled.div`
  position: absolute;
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
