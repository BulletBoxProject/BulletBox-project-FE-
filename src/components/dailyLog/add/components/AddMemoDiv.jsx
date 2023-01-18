import React, { useState } from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const AddMemoDiv = ({ AddTodoInput, setAddTodoInput, memos }) => {
  const [showMemo, setShowMemo] = useState(false);
  const [memoInput, setMemoInput] = useState("");

  const addMemoHanlder = () => {
    setShowMemo(!showMemo);
  };
  const memoInputHandler = (e) => {
    setMemoInput(e.target.value);
  };

  const memoSubmitHandler = () => {
    setAddTodoInput({
      ...AddTodoInput,
      memos: [...memos, { memoContent: memoInput, memoId: memos.length + 1 }],
    });
    setMemoInput("");
    setShowMemo(false);
  };
  const memoDeleteHanlder = (e) => {
    memos = memos.filter((memo) => memo.memoId !== Number(e.target.id) + 1);
    setAddTodoInput({
      ...AddTodoInput,
      memos: memos,
    });
  };

  let num = 0;
  return (
    <Container>
      <MemoList>
        {memos.length === 0
          ? null
          : memos.map((memo, idx) => (
              <MemoCard id={idx} key={num++}>
                <span>memo</span>
                <span>{memo.memoContent}</span>
                <MemoDeleteButton id={idx} onClick={memoDeleteHanlder}>
                  <CancelMemoIcon />
                </MemoDeleteButton>
              </MemoCard>
            ))}
      </MemoList>
      {showMemo ? (
        <AddMemoInputDiv>
          <AddMemoInput
            type="text"
            placeholder="불렛메모를 추가하세요"
            onChange={memoInputHandler}
            value={memoInput}
          />
          <MemoSubmitButton onClick={memoSubmitHandler} type="button">
            추가
          </MemoSubmitButton>
        </AddMemoInputDiv>
      ) : null}
      <AddTodoMemo type="button" onClick={addMemoHanlder}>
        <AddMemoIcon />
      </AddTodoMemo>
    </Container>
  );
};

export default AddMemoDiv;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MemoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-top: 5px;
  gap: 5px;
`;
const MemoCard = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  font-size: 12px;
  gap: 5px;
  & > span {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0 3px;
    height: 20px;
  }
`;
const MemoDeleteButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background-color: white;
`;
const CancelMemoIcon = styled(IoMdClose)`
  width: 13px;
  height: 13px;
  fill: var(--color-dark-gary);
  pointer-events: none;
`;
const AddMemoInputDiv = styled.div``;
const AddMemoInput = styled.input``;
const MemoSubmitButton = styled.button``;
const AddTodoMemo = styled.button`
  margin-top: 5px;
`;
const AddMemoIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-main);
  width: 24px;
  height: 24px;
`;
