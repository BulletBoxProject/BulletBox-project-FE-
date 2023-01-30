import React, { useState } from "react";
import styled from "styled-components";

import BulletSwitchList from "./BulletSwitchList";

const FavoriteTodoCard = ({
  favoriteId,
  favoriteContent,
  categoryColor,
  setAddFavoriteTodo,
}) => {
  const selectFavoriteTodo = (e) => {
    setAddFavoriteTodo({ favoriteId: Number(e.target.id) });
  };
  return (
    <FavoriteTodo id={favoriteId} onClick={selectFavoriteTodo}>
      <TodoCategoryColor categoryColor={categoryColor} />
      <TodoContent>
        <span>
          <BulletSwitchList bulletName={"할 일"} />
        </span>
        <span>{favoriteContent}</span>
      </TodoContent>
      <div></div>
    </FavoriteTodo>
  );
};

export default FavoriteTodoCard;

const FavoriteTodo = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  width: 262px;
  padding: 0;
  color: var(--color-gray);

  &:focus {
    color: var(--color-main);
  }
  & > div {
    pointer-events: none;
    color: inherit;
  }
  & > span {
    pointer-events: none;
  }
`;
const TodoCategoryColor = styled.div`
  width: 2.5%;
  height: 100%;
  background-color: ${(props) => props.categoryColor};
  border-radius: 8px 0 0 8px;
`;
const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  padding: 6px;
`;
