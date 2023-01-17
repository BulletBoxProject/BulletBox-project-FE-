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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8%;
`;

const HeaderBtn = styled.button`
  background-color: transparent;
  border: none;
`;
const Logo = styled(logoIcon)`
  padding-left: 25%;
  width: 33%;
`;

const Question_Icon = styled(icon)`
  width: 100%;
  fill: var(--color-black);
`;

const Button = styled.button`
  position: absolute;
  border-radius: 60%;
  left: 85vw;
  background-color: white;
  border: white;
  -webkit-tap-highlight-color: transparent !important;
  :focus {
    outline: none;
  }
`;
