import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../../../common/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as memoBullet } from "../../../../../img/myPage/memo-5.svg";
import { ReactComponent as star } from "../../../../../img/myPage/round-star-outline.svg";
import { ReactComponent as addIcon } from "../../../../../img/myPage/add.svg";
import { ReactComponent as closeIcon } from "../../../../../img/myPage/close.svg";

import { __putFavorite } from "../../../../../redux/modules/favoriteSlice";

const AlwaysUpdateModal = ({
  onClose,
  favoriteId,
  content,
  memo,
  backgroundColor,
}) => {
  const dispatch = useDispatch();
  const categoryList = useSelector(
    (state) => state?.category?.category?.categories
  );

  const [favoriteContent, setFavoriteContent] = useState(content);

  const [favoriteMemos, setFavoriteMemos] = useState(memo);
  const [favoriteMemosCopy, setFavoriteMemosCopy] = useState(memo);
  const [newFavoriteMemos, setNewFavoriteMemos] = useState([
    { id: 0, favoriteMemoContent: "" },
  ]);
  const [plusId, setPlusId] = useState(1);
  const [isName, setIsName] = useState(true);

  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [categoryColor, setCategoryColor] = useState(backgroundColor);

  const onMemoAddHandler = () => {
    const input = { id: plusId, favoriteMemoContent: "" };
    setNewFavoriteMemos([...newFavoriteMemos, input]);
    setPlusId(plusId + 1);
  };

  const onDeleteHandler = (id) => {
    setFavoriteMemosCopy(
      favoriteMemosCopy.filter((value) => value.favoriteMemoId !== id)
    );

    setFavoriteMemos(
      favoriteMemos.map((value) => {
        if (value.favoriteMemoId === id) {
          return { ...value, favoriteMemoContent: null };
        } else {
          return value;
        }
      })
    );
  };

  const newDeleteHandler = (index) => {
    setNewFavoriteMemos(newFavoriteMemos.filter((value) => value.id !== index));
  };

  const onChaneTodoHandler = (e) => {
    const value = e.target.value;
    setFavoriteContent(e.target.value);
    if (value.length !== 0) {
      setIsName(true);
    } else {
      setIsName(false);
    }
  };

  const onChaneMemoHandler = (e, index) => {
    let favoriteMemosCopy = [];
    favoriteMemos.forEach((device, index) => {
      favoriteMemosCopy[index] = { ...device };
    });
    favoriteMemosCopy[index].favoriteMemoContent = e.target.value;
    setFavoriteMemos(favoriteMemosCopy);
  };

  const onChaneNewMemoHandler = (e, index) => {
    let newFavoriteMemosCopy = [...newFavoriteMemos];
    newFavoriteMemosCopy[index].favoriteMemoContent = e.target.value;
    setNewFavoriteMemos(newFavoriteMemosCopy);
  };

  const onCategoryHandler = (e) => {
    setCategoryId(e.categoryId);
    setCategoryName(e.categoryName);
    setCategoryColor(e.categoryColor);
  };

  const onAddFavoriteHandler = () => {
    const newFavoriteMemo = newFavoriteMemos.map((value) => {
      if (delete value.id) {
        return value;
      }
    });
    const favoriteMemo = [...favoriteMemos, ...newFavoriteMemo];
    const favoriteInfo = {
      favoriteId,
      favoriteContent: favoriteContent,
      favoriteMemos: favoriteMemo,
      categoryId: categoryId,
      categoryName: categoryName,
      categoryColor: categoryColor,
    };
    dispatch(__putFavorite(favoriteInfo));
    onClose();
  };

  return (
    <>
      <Modal onClose={onClose}>
        <Container>
          <TodoBodyDiv>
            <TodoTitle>
              <StarBullet />
              <AlwaysTodoInput
                value={favoriteContent}
                onChange={(e) => {
                  onChaneTodoHandler(e);
                }}
              ></AlwaysTodoInput>
            </TodoTitle>
            <TodoMemoDiv>
              {favoriteMemosCopy.map((value, index) => (
                <MemoContent key={index}>
                  <MemoBullet />
                  <AlwaysMemoInput
                    type="text"
                    placeholder={value.favoriteMemoContent}
                    onChange={(e) => onChaneMemoHandler(e, index)}
                  ></AlwaysMemoInput>
                  <DeleteButton
                    onClick={() => onDeleteHandler(value.favoriteMemoId)}
                  >
                    <DeleteIcon />
                  </DeleteButton>
                </MemoContent>
              ))}
              {newFavoriteMemos.map((value, index) => (
                <MemoContent key={index}>
                  <MemoBullet />
                  <AlwaysMemoInput
                    type="text"
                    placeholder="메모를 작성해주세요"
                    onChange={(e) => onChaneNewMemoHandler(e, index)}
                  ></AlwaysMemoInput>
                  <DeleteButton onClick={() => newDeleteHandler(value.id)}>
                    <DeleteIcon />
                  </DeleteButton>
                </MemoContent>
              ))}
            </TodoMemoDiv>
            <IconDiv>
              <AddButton onClick={onMemoAddHandler}>
                <AddIcon />
              </AddButton>
            </IconDiv>
            <CategoryBtnContainer>
              {categoryList && categoryList.length === 0 ? (
                <CategoryPtag>카테고리를 추가해보세요.</CategoryPtag>
              ) : (
                categoryList?.map((val) => {
                  return (
                    <SelectBtn
                      key={val.categoryId}
                      backgroundColor={val.categoryColor}
                      value={val.categoryName}
                      categoryColor={categoryColor}
                      onClick={() => {
                        onCategoryHandler(val);
                      }}
                    >
                      {val.categoryName}
                    </SelectBtn>
                  );
                })
              )}
            </CategoryBtnContainer>
          </TodoBodyDiv>

          <BtnContainer>
            <AddModalBtn
              disabled={!isName}
              onClick={() => {
                onAddFavoriteHandler();
              }}
            >
              수정
            </AddModalBtn>
            <CancleModalBtn onClick={onClose}>취소</CancleModalBtn>
          </BtnContainer>
        </Container>
      </Modal>
    </>
  );
};

export default AlwaysUpdateModal;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-left: 22px;
  font-weight: bold;
  width: 248px;
  height: 321px;
`;

const TodoBodyDiv = styled.div`
  width: 100%;
  height: 247px;
  overflow: auto;
`;

const TodoTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const TodoMemoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const MemoContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 5px;
  margin-top: 1.5%;
`;

const AddModalBtn = styled.button`
  width: 104px;
  height: 48px;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  color: white;
  background-color: var(--color-main);
  &:disabled {
    color: black;
    background-color: var(--color-default);
  }
`;

const CancleModalBtn = styled.button`
  width: 104px;
  height: 48px;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  font-weight: 700;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;

const CategoryBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 10px;
  width: 100%;
`;

const SelectBtn = styled.button`
  width: 6.5rem;
  height: 2.5rem;
  margin: 2%;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  border: ${({ backgroundColor, categoryColor }) =>
    backgroundColor === categoryColor ? "5px solid white" : "none"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--color-default)"};
  box-shadow: ${({ backgroundColor, categoryColor }) =>
    backgroundColor === categoryColor
      ? "0px 0px 4px rgba(0, 0, 0, 0.3)"
      : "none"};
`;

const MemoBullet = styled(memoBullet)`
  width: 24px;
  height: 18px;
`;

const StarBullet = styled(star)`
  width: 24px;
  height: 18px;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 8px;
`;
const AddButton = styled.button`
  width: 1.8rem;
  height: 2.6vh;
  border: none;
  background-color: transparent;
`;
const AddIcon = styled(addIcon)`
  fill: var(--color-gray);
  width: 1.5rem;
  height: 2.5vh;
`;

const DeleteButton = styled.button`
  width: 1.5rem;
  height: 2.6vh;
  border: none;
  background-color: transparent;
`;
const DeleteIcon = styled(closeIcon)`
  fill: var(--color-gray);
  width: 1.5rem;
  height: 2.5vh;
`;

const AlwaysTodoInput = styled.input`
  border: none;
`;

const AlwaysMemoInput = styled.input`
  border: none;
  width: 65%;
`;

const CategoryPtag = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  font-size: 14px;
`;
