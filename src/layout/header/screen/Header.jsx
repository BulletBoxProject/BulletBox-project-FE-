import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import { ReactComponent as logoIcon } from "../../../img/logo/logo-type-bold.svg";
import { ReactComponent as backIcon } from "../../../img/navi/back.svg";
import { ReactComponent as bellX } from "../../../img/navi/bell-x.svg";

const Header = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <HeaderDiv>
      <HeaderBtn>
        <Back
          onClick={() => {
            handleGoBack();
          }}
        />
      </HeaderBtn>

      <HeaderBtn
        onClick={() => {
          onClickHandler();
        }}
      >
        <Logo />
      </HeaderBtn>
      <HeaderLeftDiv>
        <Bell />
        <DropdownMenu />
      </HeaderLeftDiv>
    </HeaderDiv>
  );
};

export default Header;
const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const HeaderBtn = styled.button`
  background-color: transparent;
  border: none;
`;
const Logo = styled(logoIcon)`
  margin-left: 10%;
  width: 30%;
`;

const HeaderLeftDiv = styled.div`
  display: flex;
  align-items: center;
  width: 28%;
`;

const Back = styled(backIcon)`
  width: 98%;
  height: 3.3vh;
  color: var(--color-main);
`;

const Bell = styled(bellX)`
  width: 88%;
  height: 2.5vh;
  color: var(--color-main);
`;
