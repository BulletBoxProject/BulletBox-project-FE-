import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as editIcon } from "../../../img/dailyLog/edit.svg";
import { ReactComponent as deleteIcon } from "../../../img/dailyLog/delete.svg";
import { ReactComponent as moreIcon } from "../../../img/dailyLog/more.svg";
import { baseURLApiV1 } from "../../../core/api";

const Option = ({ todoId, dailyLogs, setDailyLogs }) => {
  console.log(todoId);
  const deleteTodo = async (id) => {
    try {
      const data = await baseURLApiV1.delete(`/dailys/todo/${id}`);
      if (data.data.httpStatusCode === 200) {
        return console.log(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const selectDeleteHandler = (e) => {
    const id = Number(e.target.value);
    deleteTodo(id);
    setDailyLogs(dailyLogs.filter((dailyLog) => dailyLog.todoId !== id));
  };

  return (
    <div>
      <SelectDiv>
        <Button id={todoId} onClick={() => alert("수정하기페이지 이동")}>
          수정하기 <EditIcon />
        </Button>
        <SelectLine></SelectLine>
        <Button value={todoId} onClick={selectDeleteHandler}>
          <span>삭제하기</span>
          <span>
            <DeleteIcon />
          </span>
        </Button>
      </SelectDiv>
    </div>
  );
};

export default Option;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35vw;
  left: -28vw;
  top: 5vh;
  gap: 3px;
  padding: 5px 14px;
  position: absolute;
  /* top: -12.5vh;
  left: -28vw; */
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  background-color: var(--color-default);
  z-index: 999;
  & > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: var(--color-gray);
    padding: 5px 0;
    &:hover {
      color: var(--color-main);
    }
  }
`;
const SelectLine = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: #ebebeb;
  margin: 2px 0;
`;
const EditIcon = styled(editIcon)``;
const DeleteIcon = styled(deleteIcon)``;
const Button = styled.button`
  border: 0;
  background-color: var(--color-default);
  & > svg,
  span {
    pointer-events: none;
  }
`;
