import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as logoIcon } from "../../../img/logo/logo-type-bold.svg";

const Header = () => {
  const navigate = useNavigate();

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
