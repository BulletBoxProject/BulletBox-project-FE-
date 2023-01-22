import React, { useRef } from "react";
import styled from "styled-components";
import useOutSideClick from "../../../hooks/useOutSideClick";
import ModalContainer from "./ModalContainer";
import { ReactComponent as close } from "../../../img/myPage/close.svg";
import { useNavigate } from "react-router";
import { removeCookies } from "../../../core/cookieControler";

const ConfirmModal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };
  useOutSideClick(modalRef, handleClose);

  const navigate = useNavigate();
  const logoutHandler = () => {
    removeCookies("Authorization");
    navigate("/login");
  };

  return (
    <ModalContainer>
      <Container>
        <ModalWrap ref={modalRef}>
          <CloseBtn onClick={onClose}>
            <CloseImg />
          </CloseBtn>
          <ConfirmBtn onClick={logoutHandler}>확인</ConfirmBtn>
          <CancleBtn onClick={onClose}>취소</CancleBtn>
          <Contents>{children}</Contents>
        </ModalWrap>
      </Container>
    </ModalContainer>
  );
};

export default ConfirmModal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 82%;
  height: 26%;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    margin-top: -40%;
    margin-left: 22%;
    font-size: 15px;
  }
`;

const Contents = styled.div`
  margin: 150px 30px;
`;

const ConfirmBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 51%;
  margin-bottom: 13%;
  font-size: 15px;
  padding: 15px 38.5px;
  border: none;
  background-color: var(--color-default);
  border-radius: 8px;
  color: var(--color-dark-gray);
  font-weight: bold;
  cursor: pointer;
`;

const CancleBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 13%;
  margin-bottom: 13%;
  font-size: 15px;
  padding: 15px 38.5px;
  border: none;
  background-color: var(--color-default);
  border-radius: 8px;
  color: var(--color-dark-gray);
  font-weight: bold;
  cursor: pointer;
`;

const CloseImg = styled(close)``;

const CloseBtn = styled.button`
  position: absolute;
  margin-left: 7%;
  margin-top: 7%;
  width: 16px;
  height: 16px;
  background-color: white;
  border: none;
`;
