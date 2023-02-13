import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import {
  __getEditTodo,
  __putDailyTodo,
} from "../../../../redux/modules/dailysSlice";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import useOutSideClick from "../../../../hooks/useOutSideClick";

import EditCalendarModal from "../../components/EditCalendarModal";
import EditTodoForm from "./EditTodoForm";
import EditMemoDiv from "./EditMemoDiv";
import TimeSettingDiv from "./TimeSettingDiv";
import CategorySelectDiv from "./CategorySelectDiv";
import AlertModal from "../../../common/modal/AlertModal";
import ConfirmModal from "../../../common/modal/AlertModal";

const EditTodoInput = ({ todoList, categoryList }) => {
  const calendaerModalRef = useRef(null);
  const selectedTodo = useSelector(
    (state) => state?.dailyTodo?.dailyTodo?.todo
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [AddTodoInput, setAddTodoInput] = useState({
    todoId: todoList?.todoId,
    todoContent: todoList?.todoContent,
    todoBulletName: todoList?.todoBulletName,
    time: todoList?.time,
    categoryId: todoList?.categoryId,
    categoryColor: todoList?.categoryColor,
    year: todoList?.year,
    month: todoList?.month,
    day: todoList?.day,
    memos: todoList?.memos,
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [showDate, setShowDate] = useState("");
  const [alertState, setAlertState] = useState([false, false]);
  const validCheck = ["시간(시)을 선택해주세요.", "시간(분)을 선택해주세요."];
  const [confirmModalState, setComfirmModalState] = useState(false);

  const submitTodoHandler = () => {
    if (AddTodoInput.time === null) {
      dispatch(__putDailyTodo(AddTodoInput));
      setComfirmModalState(true);
    } else if (AddTodoInput.time.hour === undefined) {
      setAlertState([true, false]);
    } else if (AddTodoInput.time.minute === undefined) {
      setAlertState([false, true]);
    } else {
      dispatch(__putDailyTodo(AddTodoInput));
      setComfirmModalState(true);
    }
  };
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    dayOfDate: day[new Date().getDay()],
  };
  useEffect(() => {
    setShowDate(today);
  }, []);
  const dayOfDate = new Date(
    AddTodoInput.year,
    AddTodoInput.month - 1,
    AddTodoInput.day
  ).getDay();
  const dateChangeHandler = () => {
    setShowCalendar(!showCalendar);
  };
  const dailyLogTitle = `${String(AddTodoInput.year).substring(2, 4)}/${
    AddTodoInput.month < 10 ? "0" + AddTodoInput.month : AddTodoInput.month
  }/${AddTodoInput.day < 10 ? "0" + AddTodoInput.day : AddTodoInput.day}/(${
    day[dayOfDate]
  })`;
  const modalCloseHandler = () => {
    setAlertState([false, false]);
  };
  const selectedDate = `${AddTodoInput.year}_${AddTodoInput.month}_${AddTodoInput.day}`;
  const todayCompare = `${new Date().getFullYear()}_${
    new Date().getMonth() + 1
  }_${new Date().getDate()}`;
  const submitComfirm = () => {
    if (selectedDate === todayCompare) {
      setTimeout(() => {
        navigate("/dailys");
      }, 50);
    } else {
      setTimeout(() => {
        navigate(`/dailys/${selectedDate}`);
      }, 50);
    }
  };
  useOutSideClick(calendaerModalRef, () => {
    setShowCalendar(false);
  });
  return (
    <Container>
      {confirmModalState ? (
        <ConfirmModal
          children={"할 일을 수정했습니다."}
          onClose={submitComfirm}
        />
      ) : null}
      {alertState.map((item, idx) =>
        item === true ? (
          <AlertModal children={validCheck[idx]} onClose={modalCloseHandler} />
        ) : null
      )}
      <DateButtonDiv>
        <DateButton onClick={dateChangeHandler}>{dailyLogTitle}</DateButton>
        <SelectDateButton onClick={dateChangeHandler}>
          {showCalendar ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </SelectDateButton>
        <CalendarDiv ref={calendaerModalRef}>
          {showCalendar ? (
            <EditCalendarModal
              setShowDate={setShowDate}
              setShowCalendar={setShowCalendar}
              AddTodoInput={AddTodoInput}
              setAddTodoInput={setAddTodoInput}
            />
          ) : null}
        </CalendarDiv>
      </DateButtonDiv>
      {todoList && (
        <TodoAndMemoDiv>
          <EditTodoForm
            AddTodoInput={AddTodoInput}
            setAddTodoInput={setAddTodoInput}
            todoList={todoList}
          />
          <EditMemoDiv
            todoList={todoList}
            AddTodoInput={AddTodoInput}
            setAddTodoInput={setAddTodoInput}
            memos={AddTodoInput.memos}
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
          selectedCategoryId={AddTodoInput.categoryId}
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
const DateButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const DateButton = styled.button`
  padding: 3px 0;
  color: var(--color-main);
  font-size: 14px;
  font-weight: bold;
  background-color: white;
  border: 0;
  margin-left: 30px;
`;
const SelectDateButton = styled.button`
  border: 0;
  background-color: inherit;
  margin-top: 3px;
  & > svg {
    width: 18px;
    height: 18px;
    fill: var(--color-main);
    pointer-events: none;
  }
`;
const CalendarDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 90px;
  width: 360px;
  z-index: 999;
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
