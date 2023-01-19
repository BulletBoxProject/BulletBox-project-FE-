import React, { useState } from "react";
import styled from "styled-components";
import CategoryUpdateModal from "./CategoryUpdateModal";

const CategoryUpdateBtn = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
    console.log(props);
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
  width: 30vw;
  height: 6vh;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor || "#D9D9D9"};
`;
