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

  const [isName, setIsName] = useState(false);
  const [isColor, setIsColor] = useState(false);

  const dispatch = useDispatch();
  const onCloseHandler = onClose;

  const CategoryNameHandler = (e) => {
    const value = e.target.value;
    setCategoryName(value);
    if (value.length !== 0) {
      setIsName(true);
    } else {
      setIsName(false);
    }
  };
  const CategoryColorHandler = (e) => {
    setCategoryColor(e.target.value);
    setIsColor(true);
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
        <Container>
          <CloseBtn onClick={onClose}>
            <CloseImg />
          </CloseBtn>
          <CategoryInput
            type="text"
            maxlength="8"
            value={categoryName}
            onChange={(e) => {
              CategoryNameHandler(e);
            }}
            placeholder="카테고리 이름을 입력하세요."
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
            <DeleteModalBtn
              onClick={() => {
                deleteCategoryHandler(id);
              }}
            >
              삭제하기
            </DeleteModalBtn>
            <UpdateModalBtn
              disabled={!(isName && isColor)}
              onClick={() => {
                UpdateCategoryHandler();
              }}
            >
              수정하기
            </UpdateModalBtn>
          </BtnContainer>
        </Container>
      </Modal>
    </>
  );
};

export default CategoryUpdateModal;
const Container = styled.div`
  margin: 40px 30px;
`;
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
  &:hover,
  &:focus {
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
  &:hover,
  &:focus {
    border: 5px solid white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.8);
  }
`;

const CategoryInput = styled.input.attrs({ maxLength: 8 })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 232px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--color-defalut);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  font-weight: bold;
  ::placeholder {
    font-size: 16px;
    color: var(--color-gray);
  }
`;

const UpdateModalBtn = styled.button`
  width: 104px;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: var(--color-main);
  &:disabled {
    color: black;
    background-color: var(--color-default);
  }
`;

const DeleteModalBtn = styled.button`
  width: 104px;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  background-color: var(--color-default);
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 224px;
  height: 48px;
  margin: 20px auto;
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
  right: 18px;
  top: 15px;
  width: 20px;
  height: 20px;
  background-color: white;
  border: none;
`;
