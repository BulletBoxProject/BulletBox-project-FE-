import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AlwaysTodo from "../components/AlwaysTodo";
import { useDispatch, useSelector } from "react-redux";
import { __getFavorite } from "../../../../../redux/modules/favoriteSlice";

const AlwaysTodoList = () => {
  const dispatch = useDispatch();

  const favoriteList = useSelector(
    (state) => state?.favorite?.favorite?.favorites
  );

  useEffect(() => {
    dispatch(__getFavorite());
  }, [dispatch]);

  return (
    <Container>
      <AlwaysAddList>
        {favoriteList && favoriteList.length === 0 ? (
          <AlwaysAddTag>내 루틴을 추가해주세요</AlwaysAddTag>
        ) : (
          favoriteList?.map((val) => {
            return (
              <AlwaysTodo
                key={val.favoriteId}
                favoriteId={val.favoriteId}
                categoryId={val.categoryId}
                backgroundColor={val.categoryColor}
                content={val.favoriteContent}
                memo={val.favoriteMemos}
              ></AlwaysTodo>
            );
          })
        )}
      </AlwaysAddList>
    </Container>
  );
};

export default AlwaysTodoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`;
const AlwaysAddList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AlwaysAddTag = styled.span`
  margin: 0 auto;
  color: var(--color-main);
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;
