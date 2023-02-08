import React from "react";
import styled from "styled-components";
import Modal from "../../../components/common/modal/Modal";
import SimpleSlider from "./SimpleSlider";

import { ReactComponent as close } from "../../../img/etc/close.svg";

function HelpModal({ onClose }) {
  return (
    <Modal onClose={onClose} height={"505px"}>
      <Button onClick={onClose}>
        <Close />
      </Button>
      <SimpleSlider />
    </Modal>
  );
}
export default HelpModal;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 5%;
  margin-top: 5%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 9999;
`;

const Close = styled(close)`
  width: 24px;
  height: 18px;
`;
