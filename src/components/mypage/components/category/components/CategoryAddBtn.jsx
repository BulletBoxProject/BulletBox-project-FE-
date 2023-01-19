import React, { useState } from "react";
import styled from "styled-components";
import CategoryModal from "./CategoryModal";
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
  width: 6.7vw;
  height: 3.3vh;
  background-color: transparent;
  border: none;
`;

const AddCategoryIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-black);
  width: 6.7vw;
  height: 3.3vh;
`;

const AddBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;
