import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookies } from "../../../core/cookieControler";
import styled from "styled-components";

const MypageLogout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeCookies("Authorization");
    navigate("/login");
  };

  return (
    <LogoutBtnContainer>
      <button onClick={logoutHandler}>로그아웃</button>
    </LogoutBtnContainer>
  );
};

export default MypageLogout;

const LogoutBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 35%;
`;
