import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { ReactComponent as memoBullet } from "../../../../img/bullet/memo-5.svg";
import { ReactComponent as memoAddIcon } from "../../../../img/dailyLog/edit.svg";
import { ReactComponent as closeIcon } from "../../../../img/dailyLog/close.svg";

const EditMemoDiv = ({ todoList, AddTodoInput, setAddTodoInput, memos }) => {
  const [memoOrigin, setMemoOrigin] = useState(todoList.memos);
  const [memoInput, setMemoInput] = useState("");
  const [renderMemo, setRenderMemo] = useState(
    todoList?.memos?.map((memo, idx) => ({ ...memo, renderId: idx }))
  );
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
    setMemoInput(e.target.value);
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
            <InputDiv>
              <AddMemoInput
                id={memo.renderId}
                type="text"
                onChange={(e) => memoInputHandler(e, idx)}
                placeholder={memo.todoMemoContent}
                maxLength={27}
              />
              <InputLimitDiv>
                <span>28자 이내</span>
              </InputLimitDiv>
            </InputDiv>

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
const AddMemoInputDiv = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  gap: 10px;
  padding-left: 20px;
`;
const MemoBullet = styled.div``;

const AddMemoInput = styled.textarea`
  width: 100%;
  height: 27px;
  border: 0;
  font-size: 12px;
  font-weight: bold;
  background-color: inherit;
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    padding-top: 6px;
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
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  gap: 5px;
`;
const InputLimitDiv = styled.div`
  width: 15%;
  & > span {
    color: var(--color-gray);
  }
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
