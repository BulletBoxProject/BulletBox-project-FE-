import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";

const MainEditCard = ({ bullet, category, body }) => {
  const [loadingState, setLoadingState] = useState(true);
  const [editInputAble, setEditInputAble] = useState(false);

  //! 1. uuid 사용을 위해서 상태값 한번 저장(단순 uuid() 입력 시 최초 값은 공백으로 저장됨)
  //! 2. loading 후 렌더하기 위해서 상태 값에 따른 if 문 사용
  useEffect(() => {
    setLoadingState(false);
  }, []);
  if (loadingState) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <InputCard>
        <AddInputButton type="button">메모</AddInputButton>
        <AddInputButton type="button">...</AddInputButton>
        <Input
          onClick={() => console.log("수정 이벤트")}
          type="text"
          value={body}
          disabled={false}
        />
      </InputCard>
    </div>
  );
};

export default MainEditCard;

const InputCard = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  /* gap: 20px; */
`;
const AddInputButton = styled.button`
  display: flex;
  width: "50%";
  height: 30%;
  /* padding: 10px; */
  /* border: none; */
  /* background-color: white; */
`;
const Input = styled.input`
  display: flex;
  width: 50%;
  font-size: 11px;
  padding: 0 0 0 16px;
  border: none;
  &:disabled {
    background-color: white;
  }
`;
