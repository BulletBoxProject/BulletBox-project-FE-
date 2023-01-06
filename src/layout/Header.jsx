import React from "react";
import { BsBell } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { MdArrowBackIosNew } from "react-icons/md";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCookies } from "../core/cookieControler";

const Header = () => {
  const navigate = useNavigate();
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
        <MdArrowBackIosNew />
      </HeaderBtn>

      <HeaderBtn
        onClick={() => {
          onClickHandler();
        }}
      >
        BulletBox
      </HeaderBtn>
      <HeaderLeftDib>
        <BsBell size={20} />
        <BiMenu size={25} />
      </HeaderLeftDib>
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

const HeaderLeftDib = styled.div``;
