import React, { useState } from "react";
import styled from "styled-components";
import CategoryUpdateModal from "./CategoryUpdateModal";

const CategoryUpdateBtn = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <>
      <CategoryBtn
        id={props.id}
        backgroundColor={props.backgroundColor}
        onClick={() => {
          onClickButton();
        }}
      >
        {props.children}
      </CategoryBtn>
      {isOpen && (
        <CategoryUpdateModal
          id={props.id}
          backgroundColor={props.backgroundColor}
          name={props.children}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default CategoryUpdateBtn;

const CategoryBtn = styled.button`
  width: 124px;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};

  box-shadow: 0px 0px 1.5px rgba(0, 0, 0, 0.3);
`;
