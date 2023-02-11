import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../../../common/modal/Modal";
import { useDispatch } from "react-redux";
import { __postCategory } from "../../../../../redux/modules/categorySlice";
import { ReactComponent as close } from "../../../../../img/myPage/close.svg";

const CategoryModal = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState("");

  const [isName, setIsName] = useState(false);

  const dispatch = useDispatch();

  const CategoryNameHandler = (e) => {
    const value = e.target.value;
    setCategoryName(value);
    setIsName(true);
    if (value.length === 0) {
      setIsName(false);
    }
  };
  const CategoryColorHandler = (e) => {
    setCategoryColor(e.target.value);
  };

  const AddCategoryHandler = () => {
    const categoryInfo = {
      categoryName: categoryName,
      categoryColor: categoryColor,
    };
    dispatch(__postCategory(categoryInfo));
    onClose();
  };

  const tagColorList = [
    { key: 1, value: "#E3E2E3" },
    { key: 2, value: "#C6C6C6" },
    { key: 3, value: "#F4BBE3" },
    { key: 4, value: "#DCB8F9" },
    { key: 5, value: "#F4BCB8" },
    { key: 6, value: "#FFC79B" },
    { key: 7, value: "#FEFE93" },
    { key: 8, value: "#ABFC92" },
    { key: 9, value: "#B0A9FF" },
    { key: 10, value: "#FF8C85" },
    { key: 11, value: "#FFB57E" },
    { key: 12, value: "#F4BB65" },
    { key: 13, value: "#91FB6C" },
    { key: 14, value: "#96C6FA" },
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
            onChange={(e) => {
              CategoryNameHandler(e);
            }}
            placeholder="카테고리 이름을 입력하세요."
          ></CategoryInput>
          <TitleLength>({categoryName.length}/8)</TitleLength>
          <SelectColorDiv>
            <SelectWhiteBtn
              categoryColor={categoryColor}
              value={"#FFFFFF"}
              onClick={(e) => {
                CategoryColorHandler(e);
              }}
            ></SelectWhiteBtn>
            {tagColorList.map((val) => {
              return (
                <SelectBtn
                  key={val.key}
                  value={val.value}
                  categoryColor={categoryColor}
                  onClick={(e) => {
                    CategoryColorHandler(e);
                  }}
                ></SelectBtn>
              );
            })}
          </SelectColorDiv>
          <BtnContainer>
            <AddModalBtn
              disabled={!isName}
              onClick={() => {
                AddCategoryHandler();
              }}
            >
              추가
            </AddModalBtn>
            <CancleModalBtn onClick={onClose}>취소</CancleModalBtn>
          </BtnContainer>
        </Container>
      </Modal>
    </>
  );
};

export default CategoryModal;

const Container = styled.div`
  margin: 40px 30px;
`;

const SelectColorDiv = styled.div`
  width: 15.5rem;
  height: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const SelectWhiteBtn = styled.button`
  width: 2rem;
  height: 2rem;
  margin-right: 0.8rem;
  border-radius: 4px;
  background-color: white;
  border: ${({ value, categoryColor }) =>
    value === categoryColor ? "none" : "1px solid black"};
  box-shadow: ${({ value, categoryColor }) =>
    value === categoryColor ? "0px 0px 4px rgba(0, 0, 0, 0.3)" : "none"};
`;

const SelectBtn = styled.button`
  width: 2.13rem;
  height: 2.13rem;
  border-radius: 4px;
  margin-right: 0.8rem;
  border: ${({ value, categoryColor }) =>
    value === categoryColor ? "5px solid white" : "none"};
  background-color: ${({ value }) => value};
  box-shadow: ${({ value, categoryColor }) =>
    value === categoryColor ? "0px 0px 4px rgba(0, 0, 0, 0.3)" : "none"};
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

const AddModalBtn = styled.button`
  width: 104px;
  height: 48px;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  color: white;
  background-color: var(--color-main);
  :disabled {
    color: var(--color-black);
    background-color: var(--color-default);
  }
`;

const CancleModalBtn = styled.button`
  width: 104px;
  height: 48px;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
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
