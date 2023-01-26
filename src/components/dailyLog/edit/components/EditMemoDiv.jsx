import React, { memo, useState } from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { ReactComponent as memoBullet } from "../../../../img/bullet/memo-5.svg";
import { ReactComponent as memoAddIcon } from "../../../../img/dailyLog/edit.svg";
import { ReactComponent as closeIcon } from "../../../../img/dailyLog/close.svg";

const EditMemoDiv = ({
  todoList,
  AddTodoInput,
  setAddTodoInput,

  memos,
}) => {
  const [memoOrigin, setMemoOrigin] = useState(todoList.memos);
  console.log("오리진 메모", memoOrigin);
  // const [deleteMemo, setDeleteMemo] = useState([]);
  // console.log("삭제된 메모", deleteMemo);
  const [newMemo, setNewMemo] = useState(todoList.memos);
  console.log("새로운 메모", newMemo);
  const [memoInput, setMemoInput] = useState("");

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
    // setMemoInput(e.target.value);
    let memoOriginCopy = [];
    memoOrigin.forEach((memo, index) => {
      memoOriginCopy[index] = { ...memo };
    });
    memoOriginCopy[idx].todoMemoContent = e.target.value;
    setMemoOrigin(memoOriginCopy);
    // setMemoOrigin([
    //   ...memoOrigin,
    //   { ...memoOrigin[idx], todoMemoContent: e.target.value },
    // ]);
    console
      .log
      // memoOrigin.map((memo, index) =>
      //   index === idx
      //     ? { ...memo, todoMemoContent: e.target.value + e.nativeEvent.data }
      //     : memo
      // )
      ();
    // memoOrigin[idx].todoMemoContent = e.target.value;
    // setAddTodoInput({ ...AddTodoInput, memos: [...memosCopy] });
  };
  const memoDeleteHanlder = (id) => {
    let memosCopy = [...memoOrigin];
    const renderMemo = memosCopy.filter((memo) => memo.todoMemoId !== id);
    setMemoOrigin(renderMemo);
    setNewMemo(
      newMemo.map((memo) => {
        return memo.todoMemoId === id
          ? { memoId: id, todoMemoContent: null }
          : memo;
      })
    );
    setAddTodoInput({ ...AddTodoInput, memos: newMemo });
  };

  let num = 0;
  return (
    <Container>
      {memoOrigin.map((memo, idx) => (
        <AddMemoInputDiv key={num++}>
          <MemoBullet>
            <MemoBulletIcon />
          </MemoBullet>
          <AddMemoInput
            id={memo.memoId}
            type="text"
            // placeholder="불렛메모를 추가하세요"
            onChange={(e) => memoInputHandler(e, idx)}
            placeholder={memo.todoMemoContent}
            // value={memoInput}
          />
          <DeleteButton onClick={() => memoDeleteHanlder(memo.todoMemoId)}>
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

export default EditMemoDiv;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const MemoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 8vw;
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
  margin-left: 8vw;
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
