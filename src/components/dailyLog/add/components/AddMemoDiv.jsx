import React, { useState } from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";

const AddMemoDiv = ({ AddTodoInput, setAddTodoInput, memos }) => {
  const [showMemo, setShowMemo] = useState(false);
  const [memoInput, setMemoInput] = useState("");
  console.log(memos.length === 0);
  const addMemoHanlder = () => {
    setShowMemo(!showMemo);
  };
  const memoInputHandler = (e) => {
    setMemoInput(e.target.value);
  };

  const memoSubmitHandler = () => {
    setAddTodoInput({
      ...AddTodoInput,
      memos: [...memos, { memoContent: memoInput, memoBulletName: "memo" }],
    });
    setMemoInput("");
    setShowMemo(false);
  };
  let num = 0;
  return (
    <Container>
      <MemoList>
        {memos.length === 0
          ? null
          : memos.map((memo) => (
              <MemoCard key={num++}>
                <span>memo</span>
                <span>{memo.memoContent}</span>
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
  gap: 3px;
`;
const MemoCard = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  font-size: 12px;
  & > span {
    border: 1px solid black;
    padding: 0 3px;
  }
`;
const AddMemoInputDiv = styled.div``;
const AddMemoInput = styled.input``;
const MemoSubmitButton = styled.button``;
const AddTodoMemo = styled.button``;
const AddMemoIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-main);
  width: 24px;
  height: 24px;
`;
