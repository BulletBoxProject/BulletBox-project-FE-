import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { baseURLApiV1 } from "../../../../core/api";

import BulletTodoForm from "./BulletTodoForm";
import AddMemoDiv from "./AddMemoDiv";
import TimeSettingDiv from "./TimeSettingDiv";
import CategorySelectDiv from "./CategorySelectDiv";

const AddTodoInput = () => {
  const navigate = useNavigate();
  const [AddTodoInput, setAddTodoInput] = useState({
    todoContent: "할 일 내용",
    todoBulletName: "불렛",
    time: "00:00",
    categoryId: 3,
    year: 2023,
    month: 1,
    day: 4,
    memos: [],
  });
  console.log(AddTodoInput);
  useEffect(() => {
    const today = new Date();
    setAddTodoInput({
      ...AddTodoInput,
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    });
  }, []);
  const postTodo = async (AddTodoInput) => {
    try {
      const data = await baseURLApiV1.post("/dailys/todo", AddTodoInput);

      if (data.data.httpStatusCode === 200) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const submitTodoHandler = () => {
    postTodo();
    // navigate("/dailys");
  };
  return (
    <Container>
      <BulletTodoForm
        AddTodoInput={AddTodoInput}
        setAddTodoInput={setAddTodoInput}
      />
      <AddMemoDiv
        AddTodoInput={AddTodoInput}
        setAddTodoInput={setAddTodoInput}
        memos={AddTodoInput.memos}
      />
      <hr />
      <TimeSettingDiv
        AddTodoInput={AddTodoInput}
        setAddTodoInput={setAddTodoInput}
      />
      <CategorySelectDiv
        AddTodoInput={AddTodoInput}
        setAddTodoInput={setAddTodoInput}
      />
      <hr />

      <AddInputButtonGroup>
        <CancleButton type="button" onClick={() => navigate("/dailys")}>
          취소
        </CancleButton>
        <SubmitButton type="button" onClick={submitTodoHandler}>
          확인
        </SubmitButton>
      </AddInputButtonGroup>
    </Container>
  );
};

export default AddTodoInput;

const Container = styled.div``;

const AddInputButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 40%;
`;
const CancleButton = styled.button`
  width: 30%;
  height: 3em;
`;
const SubmitButton = styled.button`
  width: 30%;
  height: 3em;
  background-color: var(--color-main);
  border: 0;
`;
