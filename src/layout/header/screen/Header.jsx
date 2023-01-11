import React from "react";
import { BsBell } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import { ReactComponent as logoIcon } from "../../../img/logo/logo-type-bold.svg";

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
        <MdArrowBackIosNew
          onClick={() => {
            handleGoBack();
          }}
        />
      </HeaderBtn>

      <HeaderBtn
        onClick={() => {
          onClickHandler();
        }}
      ></HeaderBtn>
      <HeaderLeftDiv>
        <BsBell size={20} />
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
  margin-top: 3vh;
`;

const HeaderBtn = styled.button`
  background-color: transparent;
  border: none;
`;

const HeaderLeftDiv = styled.div`
  display: flex;
  align-items: center;
  width: 18%;
`;
