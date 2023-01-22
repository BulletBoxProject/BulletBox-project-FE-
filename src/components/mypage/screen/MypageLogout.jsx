import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logout } from "../../../img/myPage/logout.svg";
import ConfirmModal from "../../common/modal/ConfirmModal";

const MypageLogout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <LogoutBtnContainer>
      <LogoutBtn onClick={onClickButton}>
        <LogoutImg />
      </LogoutBtn>
      {isOpen && (
        <ConfirmModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <h1>로그아웃하시겠습니까?</h1>
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
