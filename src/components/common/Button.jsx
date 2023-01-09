import React from "react";
import styled from "styled-components";

const Button = ({ backgroundColor, width, height, onClick, children }) => {
  return (
    <CustomButton
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onClick={onClick}
      type="button"
    >
      {children}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button`
  cursor: pointer;
  width: ${({ width }) => width || "30px"};
  height: ${({ height }) => height || "30px"};
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  border: 1px solid #eeeeee;
  border-radius: 5px;
  &:hover,
  &:active {
    color: white;
    background-color: ${({ hoverBackground }) => hoverBackground || "gray"};
    border-color: ${({ borderColor }) => borderColor || "gray"};
  }
  &:focus {
    outline: none;
  }
`;
