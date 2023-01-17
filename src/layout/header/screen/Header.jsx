import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Modal from "../../footer/components/Modal";
import { ReactComponent as icon } from "../../../img/menu/help.svg";
import { ReactComponent as logoIcon } from "../../../img/logo/logo-type-bold.svg";

const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <HeaderDiv>
      <HeaderBtn
        onClick={() => {
          onClickHandler();
        }}
      >
        <Logo />
      </HeaderBtn>
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
    </HeaderDiv>
  );
};

export default Header;
const HeaderDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3vh;
  background-color: white;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
`;

const HeaderBtn = styled.button`
  background-color: transparent;
  border: none;
`;
const Logo = styled(logoIcon)`
  width: 35%;
`;

const Question_Icon = styled(icon)`
  width: 100%;
  fill: var(--color-black);
`;

const Button = styled.button`
  border-radius: 60%;

  background-color: white;
  border: white;
  -webkit-tap-highlight-color: transparent !important;
  :focus {
    outline: none;
  }
`;
