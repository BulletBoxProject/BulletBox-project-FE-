import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as icon } from "../../img/Question_Icon.svg";
import Modal from "./components/Modal";

import NavigationMenu from "../../components/common/NavigationMenu";

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
      <NavigationMenu />
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  bottom: 0;
  right: 0;
  margin-right: 7%;
  background-color: var(--color-main);
`;

const Button = styled.button`
  position: absolute;
  border-radius: 60%;
  top: -5vh;
  left: 85vw;
  background-color: white;
  border: white;
  -webkit-tap-highlight-color: transparent !important;
  :focus {
    outline: none;
  }
`;

const Question_Icon = styled(icon)`
  width: 24px;
  fill: var(--color-main);
`;
