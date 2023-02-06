import React, { useRef } from "react";
import styled from "styled-components";
import useOutSideClick from "../../../hooks/useOutSideClick";
import ModalContainer from "./ModalContainer";
import { ReactComponent as close } from "../../../img/myPage/close.svg";

const AlertModal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };
  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Container>
        <ModalWrap ref={modalRef}>
          <CloseBtn onClick={onClose}>
            <CloseImg />
          </CloseBtn>
          <Contents>
            <AlertPtag>{children}</AlertPtag>
          </Contents>
          <AlertBtn onClick={onClose}>확인</AlertBtn>
        </ModalWrap>
      </Container>
    </ModalContainer>
  );
};

export default AlertModal;

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
  width: 294px;
  height: 192px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  margin-top: 20%;
`;

const AlertBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 32%;
  margin-bottom: 5%;
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
  top: 7%;
  right: 7%;
  width: 16px;
  height: 16px;
  background-color: white;
  border: none;
`;

const AlertPtag = styled.span`
  width: 180px;
  text-align: center;
`;
