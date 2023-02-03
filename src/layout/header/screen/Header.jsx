import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Modal from "../components/HelpModal";
import { ReactComponent as icon } from "../../../img/etc/help.svg";
import { ReactComponent as logoIcon } from "../../../img/logo/logo-type-bold.svg";

const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  const onClickHandler = () => {
    navigate("/home");
  };

  return (
    <HeaderDiv>
      <SpaceDiv></SpaceDiv>
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
const SpaceDiv = styled.div`
  width: 36px;
  margin-left: 20px;
`;
const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-top: 20px;
  width: 100%;
  height: 72px;
`;

const HeaderBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 108px;
`;
const Logo = styled(logoIcon)`
  width: 100%;
`;

const Question_Icon = styled(icon)`
  width: 100%;
  fill: var(--color-black);
`;

const Button = styled.button`
  margin-right: 20px;
  border-radius: 60%;
  background-color: white;
  border: white;
  -webkit-tap-highlight-color: transparent !important;
  :focus {
    outline: none;
  }
`;
