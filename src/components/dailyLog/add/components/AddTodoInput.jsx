import React from "react";
import styled from "styled-components";

import { BsFillPlusCircleFill } from "react-icons/bs";

const AddTodoInput = () => {
  return (
    <Container>
      <BulletTodoDiv>
        <BulletSelectButton>불렛</BulletSelectButton>
        <TodoInput />
      </BulletTodoDiv>
      <AddMemoDiv>
        <AddTodoMemo>
          <AddMemoIcon />
        </AddTodoMemo>
      </AddMemoDiv>
      <hr />
    </Container>
  );
};

export default AddTodoInput;

const Container = styled.div``;
const BulletTodoDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const BulletSelectButton = styled.button``;
const TodoInput = styled.input`
  width: 90%;
`;
const AddMemoDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const AddTodoMemo = styled.button``;
const AddMemoIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-main);
  width: 24px;
  height: 24px;
`;
