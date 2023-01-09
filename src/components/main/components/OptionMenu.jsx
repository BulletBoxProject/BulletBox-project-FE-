import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

import { BsThreeDots } from "react-icons/bs";
import arrayOfCategory from "./optionMenu-arrayOfCotegory";

const OptionMenu = () => {
  const [selectState, setSelectState] = useState("none");
  console.log("셀렉트 리스트", selectState);
  const optionListHandler = () => {
    selectState === "" ? setSelectState("none") : setSelectState("flex");
  };
  const bulletSelectValue = (e) => {
    console.log(e.target.id);
    setSelectState("none");
  };

  const optionSelectHandler = () => {};
  return (
    <Container>
      <SelectButton type="button" onClick={optionListHandler}>
        <BsThreeDots style={{ fill: "#757575" }} />
      </SelectButton>
      <OptionList display={selectState}>
        {arrayOfCategory().map((category) => (
          <li key={uuid()}>
            <button
              id="id1"
              value={category.value}
              type="button"
              onClick={optionSelectHandler}
            >
              {category.value}
            </button>
          </li>
        ))}
      </OptionList>
    </Container>
  );
};

export default OptionMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  /* border: 1px solid #eeeeee; */
  border: 0;
  border-radius: 7px;
  background-color: white;
`;

const OptionList = styled.ul`
  display: ${({ display }) => display};
  flex-direction: column;
  list-style: none;
  width: 70px;
  margin: 0;
  padding: 0;
  border: 1px solid gray;
  border-radius: 10px;

  & > li {
    display: flex;
    justify-content: center;
    /* width: 50%; */
    font-size: 12px;
    padding: 4px 0;
    border-bottom: 1px solid #eeeeee;
    margin: 0 auto;
  }
  & > li > button {
    display: flex;
    align-items: center;
    font-size: 10px;
    background-color: white;
    border: 0;
  }
`;
