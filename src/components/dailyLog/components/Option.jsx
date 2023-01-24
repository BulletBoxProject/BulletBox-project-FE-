import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as editIcon } from "../../../img/dailyLog/edit.svg";
import { ReactComponent as deleteIcon } from "../../../img/dailyLog/delete.svg";
import { ReactComponent as moreIcon } from "../../../img/dailyLog/more.svg";

const Option = () => {
  const selectDeleteHandler = () => {};

  return (
    <div>
      <SelectDiv>
        <div value="editTodo" onClick={() => alert("수정하기페이지 이동")}>
          수정하기 <EditIcon />
        </div>
        <SelectLine></SelectLine>
        <div value="deleteTodo" onClick={selectDeleteHandler}>
          <span>삭제하기</span>
          <span>
            <DeleteIcon />
          </span>
        </div>
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
  & > div {
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
