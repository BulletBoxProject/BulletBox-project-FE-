import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postDailyTodo } from "../../../../redux/modules/dailysSlice";
import { baseURLApiV1 } from "../../../../core/api";

import BulletTodoForm from "./BulletTodoForm";
import AddMemoDiv from "./AddMemoDiv";
import TimeSettingDiv from "./TimeSettingDiv";
import CategorySelectDiv from "./CategorySelectDiv";

const AddTodoInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [AddTodoInput, setAddTodoInput] = useState({
    todoContent: "",
    todoBulletName: "불렛",
    time: "00:00",
    categoryId: null,
    year: 2023,
    month: 1,
    day: 4,
    memos: [],
  });
  const [categories, setCategories] = useState([]);
  console.log("할일 추가", AddTodoInput);
  // const postTodo = async (AddTodoInput, setAddTodoInput) => {
  //   let memos = AddTodoInput.memos;
  //   memos = memos.map((memo) =>
  //     delete memo.memoId === true
  //       ? { ...memo, todoMemoContent: memo.todoMemoContent }
  //       : null
  //   );
  //   try {
  //     const data = await baseURLApiV1.post("/dailys/todo", AddTodoInput);

  //     if (data.data.httpStatusCode === 200) {
  //       return data;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const loadAddTodoPage = async () => {
    try {
      const data = await baseURLApiV1.get(
        "/dailys/todo?year=2023&month=1&day=21"
      );
      if (data.data.httpStatusCode === 200) {
        return setCategories(data.data.data.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const submitTodoHandler = () => {
    dispatch(__postDailyTodo(AddTodoInput));

    // postTodo(AddTodoInput);
    setTimeout(() => {
      navigate("/dailys");
    }, 10);

    // window.location.href = "/dailys";
  };
  useEffect(() => {
    loadAddTodoPage();
    const today = new Date();
    setAddTodoInput({
      ...AddTodoInput,
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    });
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
      <TodoAndMemoDiv>
        <BulletTodoForm
          AddTodoInput={AddTodoInput}
          setAddTodoInput={setAddTodoInput}
        />
        <AddMemoDiv
          AddTodoInput={AddTodoInput}
          setAddTodoInput={setAddTodoInput}
          memos={AddTodoInput.memos}
        />
      </TodoAndMemoDiv>
      <TimeSettingDiv
        AddTodoInput={AddTodoInput}
        setAddTodoInput={setAddTodoInput}
      />
      <CategorySelectDiv
        categories={categories}
        AddTodoInput={AddTodoInput}
        setAddTodoInput={setAddTodoInput}
      />

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

export default AddTodoInput;

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
