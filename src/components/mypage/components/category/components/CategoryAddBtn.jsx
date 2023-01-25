import React, { useState } from "react";
import styled from "styled-components";
import CategoryModal from "./CategoryAddModal";
import { BsFillPlusCircleFill } from "react-icons/bs";

const CategoryAddBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <AddBtnContainer>
      <AddButton
        onClick={() => {
          onClickButton();
        }}
      >
        <AddCategoryIcon />
      </AddButton>
      {isOpen && (
        <CategoryModal
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </AddBtnContainer>
  );
};

export default CategoryAddBtn;

const AddButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: transparent;
`;

const AddCategoryIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-main);
  width: 40px;
  height: 40px;
`;

const AddBtnContainer = styled.div`
  position: absolute;
  top: 84.5vh;
  left: 84vw;
`;
