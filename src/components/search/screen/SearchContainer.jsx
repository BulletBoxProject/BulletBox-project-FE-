import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { __getSearch } from "../../../redux/modules/searchSlice";
import SearchTodo from "../components/SearchTodo";
import { ReactComponent as cancle } from "../../../img/search/close.svg";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const searchList = useSelector((state) => state?.search?.search?.searches);
  console.log(searchList);

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword.length !== 0) {
      dispatch(__getSearch(keyword));
    }
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
        <CancleBtn
          type="button"
          onClick={() => {
            setKeyword("");
          }}
        >
          <CancleImg />
        </CancleBtn>

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
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-default);
  border: 2px solid var(--color-light-gray);
  border-radius: 30px;
  width: 324px;
  height: 40px;
  margin-top: 5px;
`;
const InputSearch = styled.input`
  background-color: var(--color-default);
  border: transparent;
  border-radius: 30px;
  padding: 10px;
  width: 68%;
  font-size: 12px;
  font-weight: bold;
`;

const SearchImg = styled(HiSearch)`
  width: 22px;
  height: 22px;
  background-color: var(--color-default);
  fill: var(--color-gray);
`;

const SearchBtn = styled.button`
  background-color: var(--color-default);
  border: 1px;
  :focus {
    outline: none;
  }
`;
const CancleImg = styled(cancle)`
  width: 20px;
  height: 20px;
`;
const CancleBtn = styled.button`
  background-color: var(--color-default);
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
