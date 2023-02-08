import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postDailyTodo } from "../../../../redux/modules/dailysSlice";

import BulletTodoForm from "./BulletTodoForm";
import AddMemoDiv from "./AddMemoDiv";
import TimeSettingDiv from "./TimeSettingDiv";
import CategorySelectDiv from "./CategorySelectDiv";
import AlertModal from "../../../common/modal/AlertModal";
import ConfirmModal from "../../../common/modal/AlertModal";

const AddTodoInput = () => {
  const selectDate = useParams().date;
  const dateArray = selectDate.split("_");

  const [isOpen, setIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertState, setAlertState] = useState([false, false, false, false]);
  const [confirmModalState, setComfirmModalState] = useState(false);
  const validCheck = [
    "불렛을 입력하세요.",
    "할 일을 입력하세요.",
    "시간(시)을 선택해주세요.",
    "시간(분)을 선택해주세요.",
  ];

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
  const submitTodoHandler = () => {
    if (AddTodoInput.todoBulletName === "불렛") {
      setAlertState([true, false, false, false]);
    } else if (AddTodoInput.todoContent === "") {
      setAlertState([false, true, false, false]);
    } else if (
      AddTodoInput.time.split(":")[0] === "null" &&
      AddTodoInput.time.split(":")[1] === "null"
    ) {
      dispatch(__postDailyTodo({ ...AddTodoInput, time: null }));
      setComfirmModalState(true);
    } else if (AddTodoInput.time.split(":")[0] === "null") {
      setAlertState([false, false, true, false]);
    } else if (AddTodoInput.time.split(":")[1] === "null") {
      setAlertState([false, false, false, true]);
    } else {
      dispatch(__postDailyTodo(AddTodoInput));
      setComfirmModalState(true);
    }
  };
  const submitComfirm = () => {
    setTimeout(() => {
      navigate("/dailys");
    }, 50);
  };
  const dailyLogTitle = `${dateArray[0].substr(2, 2)}/${
    dateArray[1] < 10 ? "0" + dateArray[1] : dateArray[1]
  }/${dateArray[2] < 10 ? "0" + dateArray[2] : dateArray[2]}/(${dateArray[3]})`;
  const modalCloseHandler = () => {
    setAlertState([false, false, false, false]);
  };
  return (
    <Container>
      {confirmModalState ? (
        <ConfirmModal
          children={"할 일을 추가했습니다."}
          onClose={submitComfirm}
        />
      ) : null}
      {alertState.map((item, idx) =>
        item === true ? (
          <AlertModal children={validCheck[idx]} onClose={modalCloseHandler} />
        ) : null
      )}
      <DateDiv>
        <DateButton>{dailyLogTitle}</DateButton>
      </DateDiv>
      <TodoAndMemoDiv>
        <BulletTodoForm
          AddTodoInput={AddTodoInput}
          setAddTodoInput={setAddTodoInput}
          setAlertState={setAlertState}
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
        setAlertState={setAlertState}
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
