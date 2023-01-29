import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logout } from "../../../img/myPage/logout.svg";
import ConfirmModal from "../../common/modal/ConfirmModal";
import { useNavigate } from "react-router";
import { removeCookies } from "../../../core/cookieControler";

const MypageLogout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  const navigate = useNavigate();
  const logoutHandler = () => {
    removeCookies("Authorization");
    navigate("/login");
  };

  return (
    <LogoutBtnContainer>
      <LogoutBtn onClick={onClickButton}>
        <LogoutImg />
      </LogoutBtn>
      로그아웃
      {isOpen && (
        <ConfirmModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          onClick={logoutHandler}
        >
          로그아웃하시겠습니까?
        </ConfirmModal>
      )}
    </LogoutBtnContainer>
  );
};

export default MypageLogout;

const LogoutBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  margin-left: 80px;
  color: var(--color-main);
  font-weight: bold;
`;

const LogoutBtn = styled.button`
  background-color: white;
  border: none;
`;

const LogoutImg = styled(Logout)`
  color: var(--color-main);
  width: 24px;
  height: 24px;
`;
