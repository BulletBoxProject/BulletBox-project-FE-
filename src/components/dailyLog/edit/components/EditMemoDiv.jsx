import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { ReactComponent as memoBullet } from "../../../../img/bullet/memo-5.svg";
import { ReactComponent as memoAddIcon } from "../../../../img/dailyLog/edit.svg";
import { ReactComponent as closeIcon } from "../../../../img/dailyLog/close.svg";

const EditMemoDiv = ({ todoList, AddTodoInput, setAddTodoInput, memos }) => {
  const [memoOrigin, setMemoOrigin] = useState(todoList.memos);
  console.log("오리진 메모", memoOrigin);

  // const [deleteMemo, setDeleteMemo] = useState([]);
  // console.log("삭제된 메모", deleteMemo);
  const [newMemo, setNewMemo] = useState(todoList.memos);
  // console.log("새로운 메모", newMemo);
  const [renderMemo, setRenderMemo] = useState(
    todoList?.memos?.map((memo, idx) => ({ ...memo, renderId: idx }))
  );
  console.log("렌더링 객체", renderMemo);
  const addMemoHanlder = () => {
    setRenderMemo([
      ...renderMemo,
      {
        todoMemoId: null,
        todoMemoContent: "할 일 메모를 추가하세요.",
        renderId:
          renderMemo.length === 0
            ? 0
            : renderMemo[renderMemo.length - 1].renderId + 1,
      },
    ]);
  };
  const memoInputHandler = (e, index) => {
    let copyRenderMemo = [];
    renderMemo.forEach((memo, index) => {
      copyRenderMemo[index] = { ...memo };
    });
    copyRenderMemo[index].todoMemoContent = e.target.value;
    setRenderMemo(copyRenderMemo);

    setAddTodoInput({ ...AddTodoInput, memos: copyRenderMemo });
  };
  const memoDeleteHanlder = ({ renderId, todoId }) => {
    let renderMemoCopy = [...renderMemo];
    setRenderMemo(renderMemoCopy.filter((memo) => memo.renderId !== renderId));
    console.log(renderMemo);
    setAddTodoInput({
      ...AddTodoInput,
      memos: AddTodoInput.memos.map((memo) => {
        return memo.todoMemoId === todoId
          ? { todoMemoId: todoId, todoMemoContent: null }
          : memo;
      }),
    });
  };

  let num = 0;
  return (
    <Container>
      {renderMemo &&
        renderMemo?.map((memo, idx) => (
          <AddMemoInputDiv key={num++}>
            <MemoBullet>
              <MemoBulletIcon />
            </MemoBullet>
            <AddMemoInput
              id={memo.renderId}
              type="text"
              onChange={(e) => memoInputHandler(e, idx)}
              placeholder={memo.todoMemoContent}
            />
            <DeleteButton
              onClick={() =>
                memoDeleteHanlder({
                  renderId: memo.renderId,
                  todoId: memo.todoMemoId,
                })
              }
            >
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
