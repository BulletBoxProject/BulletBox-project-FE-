import React, { useEffect } from "react";
import styled from "styled-components";
import AlwaysTodo from "../components/AlwaysTodo";
import { useDispatch, useSelector } from "react-redux";
import { __getFavorite } from "../../../../../redux/modules/favoriteSlice";

const AlwaysTodoList = () => {
  const dispatch = useDispatch();

  const favoriteList = useSelector(
    (state) => state?.favorite?.favorite?.favorites
  );
  console.log(favoriteList, "23");

  useEffect(() => {
    dispatch(__getFavorite());
  }, [dispatch]);

  return (
    <Container>
      <AlwaysAddList>
        {favoriteList && favoriteList.length === 0 ? (
          <AlwaysAddPtag>루틴을 추가해보세요.</AlwaysAddPtag>
        ) : (
          favoriteList?.map((val) => {
            return (
              <AlwaysTodo
                key={val.favoriteId}
                id={val.favoriteId}
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
  height: 55vh;
`;

const AlwaysAddPtag = styled.p`
  font-size: 1.2rem;
`;
