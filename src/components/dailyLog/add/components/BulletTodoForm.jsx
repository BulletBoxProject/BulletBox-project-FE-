import React, { useState } from "react";
import styled from "styled-components";

// import { BsFillPlusCircleFill } from "react-icons/bs";

// todoContent: "할 일 내용",
//     todoBulletName: "할 일 불렛 이름",
//     time: "00:00",

const BulletTodoForm = ({ AddTodoInput, setAddTodoInput }) => {
  const [showBullet, setShowBullet] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [isTodoInputDone, setIsTodoInputDone] = useState(false);
  const showBulletHandler = () => {
    setShowBullet(!showBullet);
  };
  const selectBulletHandler = (e) => {
    setAddTodoInput({ ...AddTodoInput, todoBulletName: e.target.value });
    setShowBullet(!showBullet);
  };
  const todoInputHandler = (e) => {
    setTodoInput(e.target.value);
  };
  const addTodoHandler = () => {
    setAddTodoInput({ ...AddTodoInput, todoContent: todoInput });
    setIsTodoInputDone(!isTodoInputDone);
    /* 불렛 입력내용 초기화
    // setTodoInput("");
    // setAddTodoInput({ ...AddTodoInput, todoBulletName: "불렛" });
    */
  };

  return (
    <Container>
      <BulletSelectButton type="button" onClick={showBulletHandler}>
        {AddTodoInput.todoBulletName}
      </BulletSelectButton>
      {showBullet ? (
        <BulletList>
          <option onClick={selectBulletHandler} value={"todo"}>
            todo
          </option>
          <option onClick={selectBulletHandler} value={"complete"}>
            complete
          </option>
          <option onClick={selectBulletHandler} value={"postpone"}>
            postpone
          </option>
          <option onClick={selectBulletHandler} value={"important"}>
            important
          </option>
          <option onClick={selectBulletHandler} value={"memo"}>
            memo
          </option>
        </BulletList>
      ) : null}
      <TodoInput
        placeholder="할일을 입력해주세요"
        onChange={todoInputHandler}
        value={todoInput}
        disabled={isTodoInputDone}
      />
      {isTodoInputDone ? (
        <AddTodoButton type="button" onClick={addTodoHandler}>
          수정
        </AddTodoButton>
      ) : (
        <AddTodoButton type="button" onClick={addTodoHandler}>
          추가
        </AddTodoButton>
      )}
    </Container>
  );
};

export default BulletTodoForm;

const Container = styled.form`
  display: flex;
  justify-content: center;
`;
const BulletSelectButton = styled.button`
  width: 10%;
`;
const BulletList = styled.div`
  position: absolute;
  left: 4vw;
  top: 10vh;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
  margin-top: 5px;
  padding: 0 5px;
  font-size: 12px;
  & > option {
    margin: 5px 0;
    font-size: inherit;
  }
`;
const TodoInput = styled.input`
  width: 80%;
  :disabled {
    background-color: white;
    border: 1px solid black;
  }
  :focus {
    outline: none;
  }
`;

const AddTodoButton = styled.button`
  width: 10%;
`;
