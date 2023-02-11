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
    <div>
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
    </div>
  );
};

export default CategoryAddBtn;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: white;
  border-radius: 50px;
  margin-right: 5px;
`;

const AddCategoryIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-main);
  width: 40px;
  height: 40px;
`;
