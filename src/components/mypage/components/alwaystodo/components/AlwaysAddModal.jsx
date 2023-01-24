import React from "react";
import styled from "styled-components";
import Modal from "../../../../common/modal/Modal";
import { useSelector } from "react-redux";
import { ReactComponent as memoBullet } from "../../../../../img/myPage/memo-5.svg";
import { ReactComponent as todoBullet } from "../../../../../img/myPage/todo-1.svg";
import { ReactComponent as addIcon } from "../../../../../img/myPage/add.svg";
import { ReactComponent as closeIcon } from "../../../../../img/myPage/close.svg";

const AlwaysAddModal = ({ onClose }) => {
  const categoryList = useSelector(
    (state) => state?.category?.category?.categories
  );
  console.log(categoryList, "123");

  return (
    <>
      <Modal onClose={onClose}>
        <TodoBodyDiv>
          <TodoTitle>
            <TodoBullet />
            친구랑 등산가기
          </TodoTitle>
          <TodoMemoDiv>
            <MemoContent>
              <MemoBullet />
              오전7시 관악산 입구
              <DeleteIcon />
            </MemoContent>
            <MemoContent>
              <MemoBullet />
              오전7시 관악산 입구
              <DeleteIcon />
            </MemoContent>
            <MemoContent>
              <MemoBullet />
              오전7시 관악산 입구
              <DeleteIcon />
            </MemoContent>
            <MemoContent>
              <MemoBullet />
              오전7시 관악산 입구
              <DeleteIcon />
            </MemoContent>
          </TodoMemoDiv>
        </TodoBodyDiv>
        <IconDiv>
          <AddIcon />
        </IconDiv>
        <CategoryBtnContainer>
          {categoryList && categoryList.length === 0 ? (
            <p>카테고리를 추가해보세요.</p>
          ) : (
            categoryList?.map((val) => {
              return (
                <SelectBtn
                  key={val.categoryId}
                  backgroundColor={val.categoryColor}
                >
                  {val.categoryName}
                </SelectBtn>
              );
            })
          )}
        </CategoryBtnContainer>
        <BtnContainer>
          <AddModalBtn
          // onClick={() => {
          //   AddCategoryHandler();
          // }}
          >
            추가
          </AddModalBtn>
          <AddModalBtn onClick={onClose}>취소</AddModalBtn>
        </BtnContainer>
      </Modal>
    </>
  );
};

export default AlwaysAddModal;

const TodoBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 9.5vh;
`;

const TodoTitle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 14px;
  top: 0;
  left: 0;
  margin-top: 30px;
  margin-left: 25px;
`;
const TodoMemoDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 12vh;
  margin-top: 10px;
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
  width: 6.3rem;
  height: 7vh;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  font-weight: 700;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10%;
`;

const CategoryBtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 15vh;
  overflow: auto;
  width: 100%;
  gap: 8px;
  padding: 5px 2px;
`;

const SelectBtn = styled.button`
  width: 6.3rem;
  height: 2.5rem;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  &:active,
  &:hover {
    border: 5px solid white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.8);
  }
`;

const MemoBullet = styled(memoBullet)`
  width: 24px;
  height: 18px;
`;

const TodoBullet = styled(todoBullet)`
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
const AddIcon = styled(addIcon)`
  fill: var(--color-gray);
  width: 2.5rem;
  height: 2.7vh;
`;

const DeleteIcon = styled(closeIcon)`
  fill: var(--color-gray);
  width: 1.9rem;
  height: 2.5vh;
`;
