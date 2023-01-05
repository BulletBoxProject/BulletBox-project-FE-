import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";

import { BsDot } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

import { __testInput } from "../../../redux/modules/bulletTodoSlice";

const MainInputCard = ({ bullet, category, body }) => {
  const [loadingState, setLoadingState] = useState(true);

  const [input, setInput] = useState({
    id: "",
    bullet: "",
    category: "",
    body: "",
  });
  const bulletInputHandler = (e) => {
    setInput({ ...input, body: e.target.value });
  };

  const dispatch = useDispatch();
  const bulletSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__testInput(input));
    setInput({ id: uuid(), bullet: "", category: "", body: "" });
  };

  //! 1. uuid 사용을 위해서 상태값 한번 저장(단순 uuid() 입력 시 최초 값은 공백으로 저장됨)
  //! 2. loading 후 렌더하기 위해서 상태 값에 따른 if 문 사용
  useEffect(() => {
    setInput({ id: uuid(), bullet: "", category: "", body: "" });
    setLoadingState(false);
  }, []);
  if (loadingState) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <InputCard>
        <InputContentsDiv>
          <BulletSelectButton>
            메모
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
          </BulletSelectButton>
          <Input
            placeholder="불렛과 카테고리를 설정해주세요."
            onChange={bulletInputHandler}
            type="text"
            value={input.body}
          />
          <SubmitButton onClick={bulletSubmitHandler}></SubmitButton>
        </InputContentsDiv>
        <DotOptionButtonDiv>
          <BsThreeDots />
        </DotOptionButtonDiv>
      </InputCard>
    </div>
  );
};

export default MainInputCard;

const InputCard = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* gap: 20px; */
`;
const InputContentsDiv = styled.div`
  display: flex;
  width: 100%;
`;
const BulletSelectButton = styled.select`
  display: flex;
  appearance: none;
`;
const Option = styled.option`
  background-color: red;
`;
const Input = styled.input`
  display: flex;
  width: 50%;
  border: none;
  font-size: 11px;
`;
const SubmitButton = styled.button`
  border: none;
  background-color: white;
`;
const DotOptionButtonDiv = styled.div`
  display: flex;
  font-size: 14px;
  /* justify-content: flex-end; */
`;
