import React from "react";
import styled from "styled-components";
import FavoriteTodoCard from "./FavoriteTodoCard";

const ModalFavoriteTodo = ({ favoritesTodoList, setShowFavoritesTodo }) => {
  const cancelhandler = () => {
    setShowFavoritesTodo(false);
  };
  let num = 0;
  return (
    <Container>
      <FlexContainer>
        <ModalContainer>
          <ModalContents>
            <FavoritesTodo>
              {favoritesTodoList.map((todo) => (
                <FavoriteTodoCard
                  key={num++}
                  favoriteId={todo.favoriteId}
                  favoriteContent={todo.favoriteContent}
                  categoryColor={todo.categoryColor}
                  setShowFavoritesTodo={setShowFavoritesTodo}
                />
              ))}
            </FavoritesTodo>
            <ModalButtonGroup>
              <AddButton>추가</AddButton>
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
