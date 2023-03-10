import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getMainTodo } from "../../../redux/modules/mainSlice";
import { useNavigate } from "react-router-dom";

import SelectCategory from "../../common/SelectCategory";
import BulletDiv from "../components/BulletDiv";
import BulletSwitchList from "../../dailyLog/components/BulletSwitchList";
import MainTodoCard from "../components/MainTodoCard";

import MainCalendar from "../../common/calendar/MainCalendar";
import HelpModal from "../../../layout/header/components/HelpModal";

const MainContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [todoList, setTodoList] = useState([]);
  const [selectDateTitle, setSelectDateTitle] = useState("");

  const [nowMonthView, setNowMonthView] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  const [isOpen, setIsOpen] = useState(false);

  const mainTodoList = useSelector((state) => state?.mainTodo?.mainTodo?.daily);
  const firstLogin = useSelector(
    (state) => state?.mainTodo?.mainTodo?.firstLogin
  );

  const getToday = () => {
    const day = ["일", "월", "화", "수", "목", "금", "토"];
    const today = `${String(new Date().getFullYear()).substr(2, 2)}/${
      new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1
    }/${
      new Date().getDate() < 10
        ? "0" + new Date().getDate()
        : new Date().getDate()
    }(${day[new Date().getDay()]})`;
    setSelectDateTitle(today);
  };
  useEffect(() => {
    dispatch(__getMainTodo());
    getToday();
  }, [dispatch]);

  useEffect(() => {
    if (firstLogin === true) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [firstLogin]);

  let num = 0;
  return (
    <Container>
      <CalendarDiv>
        <MainCalendar
          nowMonthView={nowMonthView.month}
          selectDateTitle={selectDateTitle}
          setSelectDateTitle={setSelectDateTitle}
          setTodoList={setTodoList}
          setNowMonthView={setNowMonthView}
        />
      </CalendarDiv>
      <TodoDiv>
        <DateTitle>{selectDateTitle}</DateTitle>
        {mainTodoList && (
          <DailyTodoDiv>
            {mainTodoList.length === 0 ? (
              <DailyTodoList>
                <TodoTitle onClick={() => navigate("/dailys")}>
                  할일을 추가해주세요.
                </TodoTitle>
              </DailyTodoList>
            ) : (
              <MainTodoDiv>
                {mainTodoList.map((todo, idx) => (
                  <MainTodoCard
                    key={idx}
                    todoContent={todo.todoContent}
                    categoryColor={todo.categoryColor}
                    todoBulletName={todo.todoBulletName}
                    time={todo.time}
                  />
                ))}
                <TodoNotice onClick={() => navigate("/dailys")}>
                  할일을 더 추가해보세요.
                </TodoNotice>
              </MainTodoDiv>
            )}
          </DailyTodoDiv>
        )}
      </TodoDiv>
      {isOpen && (
        <HelpModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CalendarDiv = styled.div`
  position: relative;
  height: 320px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;
const SelectTodayButton = styled.button`
  position: absolute;
  border: 0;
  background-color: transparent;
  font-weight: 700;
  left: 88%;
  align-items: center;
  padding: 5px 0;
  font-weight: bold;
`;
const TodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  min-height: 210px;
  margin-bottom: 5px;
  padding: 15px 15px 20px 15px;
  border-radius: 16px;
  background-color: var(--color-default);
  /* box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3); */
  margin-top: 15px;
  overflow: visible;
`;
const DateTitle = styled.div`
  font-size: 14px;
  font-weight: 900;
  padding: 6px 0;
  text-align: center;
`;
const DailyTodoDiv = styled.div``;
const DailyTodoList = styled.div`
  display: flex;
  justify-content: center;
`;
const MainTodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const TodoTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: var(--color-gray);
  cursor: pointer;
`;
const TodoNotice = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: var(--color-light-gray);
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
`;
