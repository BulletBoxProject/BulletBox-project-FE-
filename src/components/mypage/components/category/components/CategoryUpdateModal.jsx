import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../../../common/modal/Modal";
import { useDispatch } from "react-redux";
import { __putCategory } from "../../../../../redux/modules/categorySlice";
import { __deleteCategory } from "../../../../../redux/modules/categorySlice";

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
    <div>
      <Modal onClose={onClose}>
        <CategoryInput
          type="text"
          maxlength="8"
          onChange={(e) => {
            CategoryNameHandler(e);
          }}
          placeholder="카테고리 이름을 입력해주세요"
        ></CategoryInput>
        <div>
          <div>
            <p>색상</p>
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
            <div>
              <button
                onClick={() => {
                  UpdateCategoryHandler();
                }}
              >
                수정하기
              </button>
              <button
                onClick={() => {
                  deleteCategoryHandler(id);
                }}
              >
                삭제하기
              </button>
              <button onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CategoryUpdateModal;

const SelectColorDiv = styled.div`
  width: 15rem;
  height: 12rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
const SelectWhiteBtn = styled.button`
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 8px;
  border: 0.5px solid black;
  background-color: white;
`;

const SelectBtn = styled.button`
  width: 2.13rem;
  height: 2.13rem;
  border-radius: 8px;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
const CategoryInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 3vh;
`;
