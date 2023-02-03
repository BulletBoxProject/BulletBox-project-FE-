import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  __getEditTodo,
  __putDailyTodo,
} from "../../../../redux/modules/dailysSlice";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import EditCalendarModal from "../../components/EditCalendarModal";
import EditTodoForm from "./EditTodoForm";
import EditMemoDiv from "./EditMemoDiv";
import TimeSettingDiv from "./TimeSettingDiv";
import CategorySelectDiv from "./CategorySelectDiv";

const EditTodoInput = ({ todoList, categoryList }) => {
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
  console.log("수정된 할일", AddTodoInput);

  const submitTodoHandler = () => {
    dispatch(__putDailyTodo(AddTodoInput));
    setTimeout(() => {
      navigate("/dailys");
    }, 20);
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

  const dateChangeHandler = () => {
    setShowCalendar(!showCalendar);
  };
  const dailyLogTitle = `${String(showDate.year).substr(2, 2)}/${
    showDate.month < 10 ? "0" + showDate.month : showDate.month
  }/${showDate.day < 10 ? "0" + showDate.day : showDate.day}/(${
    showDate.dayOfDate
  })`;
  return (
    <Container>
      <DateButtonDiv>
        <DateButton onClick={dateChangeHandler}>{dailyLogTitle}</DateButton>
        <SelectDateButton onClick={dateChangeHandler}>
          {showCalendar ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </SelectDateButton>
        <CalendarDiv>
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
