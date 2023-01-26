import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { __getEditTodo } from "../../../../redux/modules/todoSlice";

import EditTodoForm from "./EditTodoForm";
import EditMemoDiv from "./EditMemoDiv";
import TimeSettingDiv from "./TimeSettingDiv";
import CategorySelectDiv from "./CategorySelectDiv";

const EditTodoInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams();
  const editTodoId = Number(id.id);

  const todoList = useSelector((state) => state?.dailyTodo?.dailyTodo?.todo);
  console.log("edit콘솔", todoList);
  const categoryList = useSelector(
    (state) => state?.dailyTodo?.dailyTodo?.categories
  );

  const [AddTodoInput, setAddTodoInput] = useState({
    todoContent: "",
    todoBulletName: "불렛",
    time: null,
    categoryId: null,
    categoryColor: null,
    year: 2023,
    month: 1,
    day: 4,
    memos: [],
  });

  console.log("수정된 할일", AddTodoInput);
  const [categories, setCategories] = useState([]);

  const submitTodoHandler = () => {
    // console.log(newMemo);
    // navigate("/dailys");
    // window.location.href = "/dailys";
  };
  useEffect(() => {
    dispatch(__getEditTodo(editTodoId));
    const today = new Date();
    // setAddTodoInput({
    //   ...AddTodoInput,
    //   year: today.getFullYear(),
    //   month: today.getMonth() + 1,
    //   day: today.getDate(),
    // });
  }, []);
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${String(new Date().getFullYear()).substr(2, 2)}/${
    new Date().getMonth() + 1
  }/${new Date().getDate()}(${day[new Date().getDay()]})`;
  return (
    <Container>
      <DateDiv>
        <DateButton>{today}</DateButton>
      </DateDiv>
      {todoList && (
        <TodoAndMemoDiv>
          <EditTodoForm todoList={todoList} />
          <EditMemoDiv
            todoList={todoList}
            AddTodoInput={AddTodoInput}
            setAddTodoInput={setAddTodoInput}
            memos={AddTodoInput.memos}
            // newMemo={newMemo}
            // setNewMemo={setNewMemo}
          />
        </TodoAndMemoDiv>
      )}
      <TimeSettingDiv
        AddTodoInput={AddTodoInput}
        setAddTodoInput={setAddTodoInput}
      />
      {categoryList && (
        <CategorySelectDiv
          categories={categoryList}
          AddTodoInput={AddTodoInput}
          setAddTodoInput={setAddTodoInput}
        />
      )}

      <AddInputButtonGroup>
        <SubmitButton type="button" onClick={submitTodoHandler}>
          완료
        </SubmitButton>
        <CancleButton type="button" onClick={() => navigate("/dailys")}>
          취소
        </CancleButton>
      </AddInputButtonGroup>
    </Container>
  );
};

export default EditTodoInput;

const Container = styled.div``;
const DateDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
`;
const DateButton = styled.button`
  padding: 3px 0;
  color: var(--color-main);
  font-size: 14px;
  font-weight: bold;
  background-color: white;
  border: 0;
`;

const TodoAndMemoDiv = styled.div`
  padding: 15px 20px 20px 20px;
  background-color: var(--color-default);
  border-radius: 8px;
  margin: 10px auto;
`;

const AddInputButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
  padding: 0 5vw;
  margin-top: 2vh;
`;
const SubmitButton = styled.button`
  width: 45%;
  height: 2.7em;
  font-size: 14px;
  background-color: var(--color-main);
  border: 0;
  border-radius: 8px;
  color: white;
`;
const CancleButton = styled.button`
  width: 45%;
  height: 2.7em;
  font-size: 14px;
  border: 0;
  border-radius: 8px;
  background-color: var(--color-default);
  color: var(--color-gray);
`;
