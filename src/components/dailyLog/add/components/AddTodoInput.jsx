import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postDailyTodo } from "../../../../redux/modules/dailysSlice";
import { baseURLApiV1 } from "../../../../core/api";

import BulletTodoForm from "./BulletTodoForm";
import AddMemoDiv from "./AddMemoDiv";
import TimeSettingDiv from "./TimeSettingDiv";
import CategorySelectDiv from "./CategorySelectDiv";
import AlertModal from "../../../common/modal/AlertModal";

const AddTodoInput = () => {
  const selectDate = useParams().date;
  const dateArray = selectDate.split("_");

  const [isOpen, setIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertState, setAlertState] = useState({
    bullet: false,
    todo: false,
    hour: false,
    minute: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [AddTodoInput, setAddTodoInput] = useState({
    todoContent: "",
    todoBulletName: "불렛",
    time: null,
    categoryId: null,
    year: Number(dateArray[0]),
    month: Number(dateArray[1]),
    day: Number(dateArray[2]),
    memos: [],
  });
  const [categories, setCategories] = useState([]);
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
    if (AddTodoInput.todoBulletName === "불렛") {
      setIsOpen(true);
      setAlertMessage(`불렛을 선택해주세요.`);
    } else if (AddTodoInput.todoContent === "") {
      alert("할 일을 입력해주세요.");
    } else if (
      AddTodoInput.time.split(":")[0] === "null" &&
      AddTodoInput.time.split(":")[1] === "null"
    ) {
      dispatch(__postDailyTodo({ ...AddTodoInput, time: null }));
      setTimeout(() => {
        navigate("/dailys");
      }, 20);
    } else if (AddTodoInput.time.split(":")[0] === "null") {
      alert("시간(시)을 선택해주세요.");
    } else if (AddTodoInput.time.split(":")[1] === "null") {
      alert("시간(분)을 선택해주세요.");
    } else {
      dispatch(__postDailyTodo(AddTodoInput));
      setTimeout(() => {
        navigate("/dailys");
      }, 20);
    }
  };
  useEffect(() => {
    loadAddTodoPage();
  }, []);
  const dailyLogTitle = `${dateArray[0].substr(2, 2)}/${
    dateArray[1] < 10 ? "0" + dateArray[1] : dateArray[1]
  }/${dateArray[2] < 10 ? "0" + dateArray[2] : dateArray[2]}/(${dateArray[3]})`;

  return (
    <Container>
      <DateDiv>
        <DateButton>{dailyLogTitle}</DateButton>
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
      {isOpen && (
        <AlertModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          // onClick={() => {
          //   AddConfirmHandler();
          // }}
        >
          {alertMessage}
        </AlertModal>
      )}
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
