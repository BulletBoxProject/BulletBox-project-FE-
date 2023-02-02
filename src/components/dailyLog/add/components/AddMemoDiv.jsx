import React, { memo, useState } from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { ReactComponent as memoBullet } from "../../../../img/bullet/memo-5.svg";
import { ReactComponent as memoAddIcon } from "../../../../img/dailyLog/edit.svg";
import { ReactComponent as closeIcon } from "../../../../img/dailyLog/close.svg";

const AddMemoDiv = ({ AddTodoInput, setAddTodoInput, memos }) => {
  const [showMemo, setShowMemo] = useState(false);
  const [memoInput, setMemoInput] = useState("");
  console.log("할일 메모 길이", memoInput.length);
  const [memoList, setMemoList] = useState([]);

  const addMemoHanlder = () => {
    setAddTodoInput({
      ...AddTodoInput,
      memos: [
        ...memos,
        {
          memoId: memos.length === 0 ? 0 : memos.pop().memoId + 1,
          todoMemoContent: "",
        },
      ],
    });
  };
  const memoInputHandler = (e, idx) => {
    setMemoInput(e.target.value);
    let memosCopy = [...memos];
    memosCopy[idx].todoMemoContent = e.target.value;
    setAddTodoInput({ ...AddTodoInput, memos: [...memosCopy] });
  };
  const memoDeleteHanlder = (id) => {
    let memosCopy = [...memos];
    setAddTodoInput({
      ...AddTodoInput,
      memos: [...memosCopy.filter((memo) => memo.memoId !== id)],
    });
  };

  let num = 0;
  return (
    <Container>
      {memos.map((memo, idx) => (
        <AddMemoInputDiv key={num++}>
          <MemoBullet>
            <MemoBulletIcon />
          </MemoBullet>
          <InputDiv>
            <AddMemoInput
              id={memo.memoId}
              type="text"
              placeholder="불렛메모를 추가하세요"
              maxLength={43}
              onChange={(e) => memoInputHandler(e, idx)}
              value={memo.todoMemoContent}
            />
            <InputLimitDiv>
              <span>{memoInput.length}</span>
              <span>/43</span>
            </InputLimitDiv>
          </InputDiv>
          <DeleteButton onClick={() => memoDeleteHanlder(memo.memoId)}>
            <DeleteIcon />
          </DeleteButton>
        </AddMemoInputDiv>
      ))}
      <AddTodoMemoButton type="button" onClick={addMemoHanlder}>
        <AddMemoIcon />
      </AddTodoMemoButton>
    </Container>
  );
};

export default AddMemoDiv;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddMemoInputDiv = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-left: 20px;
`;
const MemoBullet = styled.div``;
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  gap: 5px;
`;
const AddMemoInput = styled.input`
  width: 80%;
  border: 0;
  font-size: 12px;
  font-weight: bold;
  background-color: inherit;
  &:focus {
    outline: none;
  }
`;
const InputLimitDiv = styled.div`
  width: 12%;
  & > span {
    color: var(--color-gray);
  }
`;
const AddTodoMemoButton = styled.button`
  margin-top: 5px;
  border: 0;
  background-color: inherit;
`;
const AddMemoIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-gray);
  width: 20px;
  height: 20px;
`;
const MemoBulletIcon = styled(memoBullet)`
  width: 24px;
  height: 18px;
`;
const DeleteButton = styled.button`
  width: 1.5rem;
  height: 2.6vh;
  border: none;
  background-color: transparent;
`;
const DeleteIcon = styled(closeIcon)`
  fill: var(--color-gray);
  width: 1.5rem;
  height: 2.5vh;
`;
