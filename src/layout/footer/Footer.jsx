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
    <FooterDiv>
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
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 5%;
  margin-right: 4%;
`;

const Button = styled.button`
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
