import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SearchTodo from "../components/SearchTodo";
import { __getSearch } from "../../../redux/modules/searchSlice";

import { ReactComponent as cancle } from "../../../img/search/close.svg";
import { HiSearch } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [reverseDate, setReverseDate] = useState(false);
  const [timer, setTimer] = useState(0);

  const searchList = useSelector((state) => state?.search?.search?.searches);
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    const value = e.target.value;
    setKeyword(value);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      if (value.length !== 0) {
        dispatch(__getSearch(value));
      }
    }, 300);
    setTimer(newTimer);
  };

  const reverseHandler = () => {
    setReverseDate(!reverseDate);
  };

  useEffect(() => {
    searchList && setSearchCount(searchList?.length);
  }, [searchList]);

  return (
    <>
      <SearchBox>
        <InputSearch
          type="text"
          value={keyword}
          placeholder="할일 내용 키워드를 검색해보세요."
          onChange={(e) => {
            searchHandler(e);
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
      {searchList && keyword.length !== 0 ? (
        <SearchMiddleDiv>
          <SearchResult>
            `{keyword}` 검색결과 총 {searchCount}건
          </SearchResult>
          <div>
            <DateReverseBtn
              onClick={() => {
                reverseHandler();
              }}
            >
              {reverseDate === false ? "최신순" : "오래된순"}
              <DownImg />
            </DateReverseBtn>
          </div>
        </SearchMiddleDiv>
      ) : null}

      {searchList && keyword.length !== 0 ? (
        <SearchList>
          {searchList && reverseDate === false
            ? searchList?.map((value) => {
                return (
                  <SearchTodo
                    key={value.todoId}
                    search={value}
                    todoBullet={value.todoBulletName}
                  />
                );
              })
            : [...searchList]?.reverse().map((value) => {
                return (
                  <SearchTodo
                    key={value.todoId}
                    search={value}
                    todoBullet={value.todoBulletName}
                  />
                );
              })}
        </SearchList>
      ) : null}
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

const SearchBtn = styled.div`
  background-color: var(--color-default);
  border: 1px;
`;
const CancleImg = styled(cancle)`
  width: 20px;
  height: 20px;
`;
const CancleBtn = styled.button`
  background-color: var(--color-default);
  border: 1px;
`;

const SearchMiddleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin: 15px;
  width: 316px;
  height: 15px;
  font-weight: bold;
`;
const SearchResult = styled.div`
  color: var(--color-main);
`;

const DateReverseBtn = styled.button`
  border: none;
  background-color: transparent;
  font-weight: bold;
  :focus {
    outline: none;
  }
`;

const DownImg = styled(AiFillCaretDown)`
  width: 6px;
  height: 6px;
`;

const SearchList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`;
