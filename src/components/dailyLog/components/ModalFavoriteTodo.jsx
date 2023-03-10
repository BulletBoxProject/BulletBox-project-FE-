import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { __postFavoriteTodo } from "../../../redux/modules/dailysSlice";

import FavoriteTodoCard from "./FavoriteTodoCard";

const ModalFavoriteTodo = ({
  favoritesTodoList,
  setShowFavoritesTodo,
  showDate,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addFavoriteTodo, setAddFavoriteTodo] = useState({});
  const postDate = { ...showDate };
  delete postDate.dayOfDate;
  const cancelhandler = () => {
    setShowFavoritesTodo(false);
  };
  const addFavoriteTodoHandler = () => {
    const addFavoritePayload = { ...addFavoriteTodo, ...postDate };
    dispatch(__postFavoriteTodo(addFavoritePayload));
    setShowFavoritesTodo(false);
  };
  let num = 0;
  const goToMypage = () => {
    navigate("/mypage");
  };
  return (
    <Container>
      <FlexContainer>
        <ModalContainer>
          <ModalContents>
            <FavoritesTodo>
              {favoritesTodoList.length === 0 ? (
                <NoticeDiv>
                  <NoticeButton onClick={goToMypage}>
                    자주사용하는 루틴을 추가해주세요.
                  </NoticeButton>
                </NoticeDiv>
              ) : null}
              {favoritesTodoList.map((todo) => (
                <FavoriteTodoCard
                  key={num++}
                  favoriteId={todo.favoriteId}
                  favoriteContent={todo.favoriteContent}
                  categoryColor={todo.categoryColor}
                  setShowFavoritesTodo={setShowFavoritesTodo}
                  setAddFavoriteTodo={setAddFavoriteTodo}
                />
              ))}
            </FavoritesTodo>
            <ModalButtonGroup>
              <AddButton onClick={addFavoriteTodoHandler}>추가</AddButton>
              <CancelButton onClick={cancelhandler}>취소</CancelButton>
            </ModalButtonGroup>
          </ModalContents>
        </ModalContainer>
      </FlexContainer>
    </Container>
  );
};

export default ModalFavoriteTodo;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 740px;
  margin-top: 15.5px;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 41%;
  background-color: white;
  border-radius: 8px;
  overflow: auto;
`;
const FavoritesTodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  gap: 8px;
  height: 245px;
  overflow: auto;
`;
const NoticeDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 20px;
`;
const NoticeButton = styled.button`
  border: 0;
  background-color: inherit;
  font-size: 14px;
  font-weight: bold;
`;
const ModalButtonGroup = styled.div`
  display: flex;
  height: 48px;
  border-top: 1px solid var(--color-default);
`;
const AddButton = styled.button`
  width: 50%;
  border: 0;
  background-color: white;
  border-radius: 0 0 0 8px;
  border-right: 1px solid var(--color-default);
  color: var(--color-main);
  font-size: 14px;
  font-weight: bold;
`;
const CancelButton = styled.button`
  width: 50%;
  border: 0;
  background-color: white;
  border-radius: 0 0 8px 0;
  border-left: 1px solid var(--color-default);
  color: var(--color-gray);
  font-size: 14px;
  font-weight: bold;
`;
