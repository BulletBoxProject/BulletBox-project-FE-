import React, { useState } from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { ReactComponent as memoBullet } from "../../../../img/bullet/memo-5.svg";
import { ReactComponent as memoAddIcon } from "../../../../img/dailyLog/edit.svg";

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
      memos: [
        ...memos,
        {
          todoMemoContent: memoInput,
          memoId: memos.length === 0 ? 1 : memos.pop().memoId + 1,
        },
      ],
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
                <MemoBullet>
                  <MemoBulletIcon />
                </MemoBullet>
                <span>{memo.todoMemoContent}</span>
              </MemoCard>
            ))}
      </MemoList>
      {showMemo ? (
        <AddMemoInputDiv>
          <MemoBullet>
            <MemoBulletIcon />
          </MemoBullet>
          <AddMemoInput
            type="text"
            placeholder="불렛메모를 추가하세요"
            onChange={memoInputHandler}
            value={memoInput}
          />
          <MemoSubmitButton onClick={memoSubmitHandler} type="button">
            <MemoAddIcon />
          </MemoSubmitButton>
        </AddMemoInputDiv>
      ) : null}
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
  gap: 3px;
`;
const MemoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 5vw;
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
const AddMemoInputDiv = styled.div`
  display: flex;
  width: 80%;
  margin-left: 5vw;
`;
const MemoBullet = styled.div``;

const AddMemoInput = styled.input`
  width: 80%;
  border: 0;
  font-size: 12px;
  background-color: inherit;
  &:focus {
    outline: none;
  }
`;
const MemoSubmitButton = styled.button`
  border: 0;
  background-color: inherit;
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
const MemoAddIcon = styled(memoAddIcon)`
  width: 16px;
  height: 16px;
`;
