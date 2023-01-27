import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditTodoInput from "../components/EditTodoInput";

import { __getEditTodo } from "../../../../redux/modules/dailysSlice";

const EditDailyLogContainer = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const editTodoId = Number(id.id);
  const todoList = useSelector((state) => state?.dailyTodo?.dailyTodo?.todo);
  const categoryList = useSelector(
    (state) => state?.dailyTodo?.dailyTodo?.categories
  );
  console.log("edit콘솔", todoList);
  useEffect(() => {
    dispatch(__getEditTodo(editTodoId));
  }, []);
  return (
    <Container>
      {todoList && (
        <EditTodoInput todoList={todoList} categoryList={categoryList} />
      )}
    </Container>
  );
};

export default EditDailyLogContainer;

const Container = styled.div`
  font-family: cursive;
`;
