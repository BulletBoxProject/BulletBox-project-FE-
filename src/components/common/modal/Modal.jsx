import React, { useRef } from "react";
import styled from "styled-components";
import useOutSideClick from "../../../hooks/useOutSideClick";
import ModalContainer from "./ModalContainer";

const useModal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };
  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Container>
        <ModalWrap ref={modalRef}>{children}</ModalWrap>
      </Container>
    </ModalContainer>
  );
};

export default useModal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 294px;
  height: 356px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    margin-top: 10%;
    margin-left: 33%;
    font-size: 10px;
  }
`;
