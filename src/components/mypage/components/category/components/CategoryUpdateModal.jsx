import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../../../common/modal/Modal";
import { useDispatch } from "react-redux";
import { __putCategory } from "../../../../../redux/modules/categorySlice";
import { __deleteCategory } from "../../../../../redux/modules/categorySlice";
import { ReactComponent as close } from "../../../../../img/myPage/close.svg";

const CategoryUpdateModal = ({ id, backgroundColor, name, onClose }) => {
  const [categoryName, setCategoryName] = useState(name);
  const [categoryColor, setCategoryColor] = useState(backgroundColor);

  const dispatch = useDispatch();
  const onCloseHandler = onClose;

  const CategoryNameHandler = (e) => {
    const value = e.target.value;
    setCategoryName(value);
  };
  const CategoryColorHandler = (e) => {
    setCategoryColor(e.target.value);
  };

  const UpdateCategoryHandler = () => {
    const categoryInfo = {
      id: id,
      categoryName: categoryName,
      categoryColor: categoryColor,
    };
    dispatch(__putCategory(categoryInfo));
    onCloseHandler();
  };

  const deleteCategoryHandler = () => {
    const categoryId = id;
    dispatch(__deleteCategory(categoryId));
  };

  const tagColorList = [
    { key: 1, value: "#E3E2E3" },
    { key: 2, value: "#C6C5C5" },
    { key: 3, value: "#F4BBE3" },
    { key: 4, value: "#DCB8F9" },
    { key: 5, value: "#F4BCB8" },
    { key: 6, value: "#F7D5BA" },
    { key: 7, value: "#FEFE93" },
    { key: 8, value: "#ABFC92" },
    { key: 9, value: "#96C6FA" },
    { key: 10, value: "#EC675F" },
    { key: 11, value: "#F09F63" },
    { key: 12, value: "#F4BB65" },
    { key: 13, value: "#91FB6C" },
    { key: 14, value: "#6FAEF8" },
  ];
  return (
    <>
      <Modal onClose={onClose}>
        <CloseBtn onClick={onClose}>
          <CloseImg />
        </CloseBtn>
        <CategoryInput
          type="text"
          maxlength="8"
          onChange={(e) => {
            CategoryNameHandler(e);
          }}
          placeholder="카테고리 이름을 입력해주세요"
        ></CategoryInput>
        <TitleLength>({categoryName.length}/8)</TitleLength>
        <SelectColorDiv>
          <SelectWhiteBtn
            onClick={(e) => {
              CategoryColorHandler(e);
            }}
          ></SelectWhiteBtn>
          {tagColorList.map((val) => {
            return (
              <SelectBtn
                key={val.key}
                backgroundColor={val.value}
                value={val.value}
                onClick={(e) => {
                  CategoryColorHandler(e);
                }}
              ></SelectBtn>
            );
          })}
        </SelectColorDiv>
        <BtnContainer>
          <AddModalBtn
            onClick={() => {
              deleteCategoryHandler(id);
            }}
          >
            삭제하기
          </AddModalBtn>
          <AddModalBtn
            onClick={() => {
              UpdateCategoryHandler();
            }}
          >
            수정하기
          </AddModalBtn>
        </BtnContainer>
      </Modal>
    </>
  );
};

export default CategoryUpdateModal;

const SelectColorDiv = styled.div`
  width: 15rem;
  height: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const SelectWhiteBtn = styled.button`
  width: 2.1rem;
  height: 2.1rem;
  margin-right: 0.8rem;
  border-radius: 4px;
  border: 1px solid black;
  background-color: white;
  &:active,
  &:hover {
    border: 5px solid white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.8);
  }
`;

const SelectBtn = styled.button`
  width: 2.13rem;
  height: 2.13rem;
  border-radius: 4px;
  margin-right: 0.8rem;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  &:active,
  &:hover {
    border: 5px solid white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.8);
  }
`;

const CategoryInput = styled.input.attrs({ maxLength: 8 })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 5.4vh;
  border-radius: 10px;
  border: 1px solid var(--color-gray);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  ::placeholder {
    text-align: center;
  }
`;

const AddModalBtn = styled.button`
  width: 47.4%;
  height: 7vh;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10%;
`;

const TitleLength = styled.span`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 1.5%;
  margin-bottom: 3%;
`;

const CloseImg = styled(close)``;

const CloseBtn = styled.button`
  position: absolute;
  left: 18px;
  top: 15px;
  width: 16px;
  height: 16px;
  background-color: white;
  border: none;
`;
