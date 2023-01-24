import React, { useState } from "react";
import styled from "styled-components";
import AlwaysAddModal from "./AlwaysAddModal";
import { ReactComponent as addIcon } from "../../../../../img/myPage/add.svg";

const AlwaysAddBtn = () => {
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
        <AlwaysAddModal
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </AddBtnContainer>
  );
};

export default AlwaysAddBtn;

const AddButton = styled.button`
  width: 5rem;
  height: 4vh;
  background-color: transparent;
  border: none;
`;

const AddCategoryIcon = styled(addIcon)`
  fill: var(--color-gray);
  width: 5rem;
  height: 4vh;
`;

const AddBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;
