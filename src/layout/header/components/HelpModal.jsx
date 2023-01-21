import React from "react";
import styled from "styled-components";
import Modal from "../../../components/common/modal/Modal";

function HelpModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h1>사용메뉴얼(도움말)</h1>
      <Contents>
        <h5>
          불렛은 데일리 로그에 적는 여러가지 내용들을 분류해주기 위해
          사용됩니다.
        </h5>
        <h5>
          불렛을 통해 데일리 로그에 오늘 할일 뿐 아니라 다양한 내용들을 담을 수
          있습니다.
        </h5>
        <Button onClick={onClose}>Close</Button>
      </Contents>
    </Modal>
  );
}
export default HelpModal;

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
