import React from "react";
import { BsBell } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCookies } from "../../../core/cookieControler";
import DropdownMenu from "../components/DropdownMenu";

const Header = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const token = getCookies("Authorization");

  const onClickHandler = () => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
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
      >
        BulletBox
      </HeaderBtn>
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
  justify-content: space-around;
  margin-top: 3vh;
`;

const HeaderBtn = styled.button`
  background-color: transparent;
  border: none;
`;

const HeaderLeftDiv = styled.div`
  display: flex;
  align-items: center;
`;
