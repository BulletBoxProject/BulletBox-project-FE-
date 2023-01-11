import React, { useRef } from "react";
import styled from "styled-components";
import useOutSideClick from "../../../hooks/useOutSideClick";

function Modal({ onClose }) {
  const modalRef = useRef(null);
  const CloseHandle = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, CloseHandle);

  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <CloseButton onClick={CloseHandle}> 
          <i className="fa-solid fa-xmark"></i>
        </CloseButton> 
        <h1>사용메뉴얼(도움말)</h1>
        <Contents>
          <h5>
            불렛은 데일리 로그에 적는 여러가지 내용들을 분류해주기 위해
            사용됩니다.
          </h5>
          <h5>
            불렛을 통해 데일리 로그에 오늘 할일 뿐 아니라 다양한 내용들을 담을
            수 있습니다.
          </h5>
          <Button onClick={CloseHandle}>Close</Button>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
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
  width: 80%;
  height: 50%;
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

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

const Contents = styled.div`
  margin: 50px 30px;

  img {
    margin-top: 60px;
    width: 300px;
  }
`;
const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 3%;
  margin-bottom: 3%;
  font-size: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;
export default Modal;
