import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { __getSearch } from "../../../redux/modules/searchSlice";
import SearchTodo from "../components/SearchTodo";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const searchList = useSelector((state) => state?.search?.search?.searches);
  console.log(searchList);

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(__getSearch(keyword));
  };

  return (
    <>
      <SearchBox
        onSubmit={(e) => {
          searchHandler(e);
        }}
      >
        <InputSearch
          type="text"
          value={keyword}
          placeholder="검색어를 입력하세요"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        ></InputSearch>
        <SearchBtn>
          <SearchImg />
        </SearchBtn>
      </SearchBox>
      <SearchList>
        {searchList &&
          searchList?.map((value) => {
            return (
              <SearchTodo
                key={value.todoId}
                todoId={value.todoId}
                todoDay={value.todoDay}
                todoMemos={value.todoMemos}
                todoContent={value.todoContent}
                todoBullet={value.todoBullet}
                time={value.time}
                categoryId={value.categoryId}
                categoryColor={value.categoryColor}
                todoMonth={value.todoMonth}
                todoYear={value.todoYear}
              />
            );
          })}
      </SearchList>
    </>
  );
};

export default SearchContainer;
const SearchBox = styled.form`
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

const SearchList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`;
