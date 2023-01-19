import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookies } from "../../../core/cookieControler";
import styled from "styled-components";
import { ReactComponent as Logout } from "../../../img/menu/logout.svg";

const MypageLogout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeCookies("Authorization");
    navigate("/login");
  };

  return (
    <LogoutBtnContainer>
      <LogoutBtn onClick={logoutHandler}>
        <LogoutImg />
      </LogoutBtn>
    </LogoutBtnContainer>
  );
};

export default MypageLogout;

const LogoutBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 33%;
`;

const LogoutBtn = styled.button`
  background-color: white;
  border: none;
  :focus {
    outline: none;
  }
`;

const LogoutImg = styled(Logout)`
  color: var(--color-main);
  width: 24px;
  height: 24px;
`;
