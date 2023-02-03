import React from "react";
import styled from "styled-components";
import Modal from "../../../components/common/modal/Modal";
import SimpleSlider from "./SimpleSlider";

import { ReactComponent as todo } from "../../../img/bullet/todo-1.svg";
import { ReactComponent as check } from "../../../img/bullet/check-2.svg";
import { ReactComponent as postpone } from "../../../img/bullet/postpone-3.svg";
import { ReactComponent as ex } from "../../../img/bullet/ex-4.svg";
import { ReactComponent as memo } from "../../../img/bullet/memo-5.svg";
import { ReactComponent as asterisk } from "../../../img/bullet/asterisk-6.svg";
import { ReactComponent as star } from "../../../img/bullet/star-7.svg";
import { ReactComponent as close } from "../../../img/etc/close.svg";

function HelpModal({ onClose }) {
  return (
    <Modal onClose={onClose} height={"485px"}>
      <Button onClick={onClose}>
        <Close />
      </Button>
      <SimpleSlider />
    </Modal>
  );
}
export default HelpModal;

const HelpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

const TitleText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

const Contents = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 55%;
  padding-left: 5%;
`;

const Helptext = styled.p`
  width: 100%;
  font-size: 12px;
  margin-bottom: 2vh;
  line-height: 2.5vh;
`;

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

const BulletBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 40%;
`;
const BulletName = styled.span`
  width: 70%;
  font-size: 10px;
  line-height: 27px;
`;

const Todo = styled(todo)`
  width: 24px;
  height: 18px;
`;
const Check = styled(check)`
  width: 24px;
  height: 18px;
`;
const Postpone = styled(postpone)`
  width: 24px;
  height: 18px;
`;
const Ex = styled(ex)`
  width: 24px;
  height: 18px;
`;
const Memo = styled(memo)`
  width: 24px;
  height: 18px;
`;
const Asterisk = styled(asterisk)`
  width: 24px;
  height: 18px;
`;
const Star = styled(star)`
  width: 24px;
  height: 18px;
`;

const Close = styled(close)`
  width: 24px;
  height: 18px;
`;

const ExContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-weight: bold;
  margin-top: 2%;
`;

const ExTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2%;
`;
const ExText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;
