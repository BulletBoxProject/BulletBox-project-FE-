import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as icon } from "../../img/Question_Icon.svg";
import Modal from "./components/Modal";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Button onClick={onClickButton}>
        <Question_Icon />
      </Button>

      {isOpen && (
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Footer;
const Button = styled.button`
  margin-left: 90%;
  border-radius: 60%;
  background-color: transparent;
  border: white;
  -webkit-tap-highlight-color: transparent !important;
  :focus {
    outline: none;
  }
`;

const Question_Icon = styled(icon)`
  width: 20px;
`;
