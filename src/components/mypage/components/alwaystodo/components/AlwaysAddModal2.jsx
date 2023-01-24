import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../../../common/modal/Modal";
import { useSelector } from "react-redux";
import { ReactComponent as memoBullet } from "../../../../../img/myPage/memo-5.svg";
import { ReactComponent as todoBullet } from "../../../../../img/myPage/todo-1.svg";
import { ReactComponent as addIcon } from "../../../../../img/myPage/add.svg";
import { ReactComponent as closeIcon } from "../../../../../img/myPage/close.svg";

const AlwaysAddModal2 = ({ onClose }) => {
  const categoryList = useSelector(
    (state) => state?.category?.category?.categories
  );

  const [favoriteMemos, setFavoriteMemos] = useState([{ id: 0, memo: "" }]);
  const [plusId, setPlusId] = useState(1);

  const onAddHandler = () => {
    const input = { id: plusId, memo: "" };
    setFavoriteMemos([...favoriteMemos, input]);
    setPlusId(plusId + 1);
  };
  const onDeleteHandler = (index) => {
    setFavoriteMemos(favoriteMemos.filter((value) => value.id !== index));
  };

  const onChaneHandler = (e, index) => {
    let favoriteMemosCopy = [...favoriteMemos];
    favoriteMemosCopy[index].memo = e.target.value;
    setFavoriteMemos(favoriteMemosCopy);
    console.log(favoriteMemos[index].memo);
  };

  return (
    <>
      <Modal onClose={onClose}>
        <TodoBodyDiv>
          <TodoTitle>
            <TodoBullet />
            <AlwaysTodoInput placeholder="할일을 입력해주세요."></AlwaysTodoInput>
          </TodoTitle>
          <TodoMemoDiv>
            {favoriteMemos.map((value, index) => (
              <MemoContent key={index}>
                <MemoBullet />
                <AlwaysMemoInput
                  type="text"
                  placeholder="메모을 입력해주세요."
                  //   value={value.memo}
                  onChange={(e) => onChaneHandler(e, index)}
                ></AlwaysMemoInput>
                <DeleteButton onClick={() => onDeleteHandler(value.id)}>
                  <DeleteIcon />
                </DeleteButton>
              </MemoContent>
            ))}
          </TodoMemoDiv>
          <IconDiv>
            <AddButton onClick={onAddHandler}>
              <AddIcon />
            </AddButton>
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
        </TodoBodyDiv>

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

export default AlwaysAddModal2;

const TodoBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 30vh;
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
  justify-content: space-between;
  margin-top: 10%;
`;

const CategoryBtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 15vh;

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
  ::placeholder {
  }
`;

const AlwaysMemoInput = styled.input`
  border: none;
  width: 65%;
  ::placeholder {
  }
`;
