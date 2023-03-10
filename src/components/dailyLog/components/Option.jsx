import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteDailyTodo } from "../../../redux/modules/dailysSlice";

import { ReactComponent as editIcon } from "../../../img/dailyLog/edit.svg";
import { ReactComponent as deleteIcon } from "../../../img/dailyLog/delete.svg";

const Option = ({ todoId, setShowSelectBox, dailyLogs, setDailyLogs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectDeleteHandler = (e) => {
    const id = Number(e.target.value);
    dispatch(__deleteDailyTodo(id));
    setShowSelectBox(false);
  };

  return (
    <div>
      <SelectDiv>
        <Button id={todoId} onClick={() => navigate(`/dailys/edit/${todoId}`)}>
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
  width: 144px;
  left: -150px;
  top: 0;
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
