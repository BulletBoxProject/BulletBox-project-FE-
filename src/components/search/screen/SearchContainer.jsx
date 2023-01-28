import React from "react";
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

const SearchContainer = () => {
  return (
    <SearchBox>
      <InputSearch type="text" placeholder="검색어를 입력하세요"></InputSearch>
      <SearchBtn>
        <SearchImg />
      </SearchBtn>
    </SearchBox>
  );
};

export default SearchContainer;
const SearchBox = styled.div`
  margin: 5% auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-light-gray);
  border-radius: 30px;
  width: 90%;
`;
const InputSearch = styled.input`
  background-color: var(--color-light-gray);
  border: transparent;
  padding: 10px;
  width: 70%;
`;

const SearchImg = styled(HiSearch)`
  width: 95%;
  height: 2vh;
  background-color: var(--color-light-gray);
`;

const SearchBtn = styled.button`
  background-color: var(--color-light-gray);
  border: 1px;
  :focus {
    outline: none;
  }
`;
