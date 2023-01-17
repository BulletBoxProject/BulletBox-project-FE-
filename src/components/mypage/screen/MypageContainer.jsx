import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../img/logo/logo-graphic.svg";

const MypageContainer = () => {
  return (
    <Container>
      <MyInfo>
        <MainLogo />
        <MyDetailInfo>
          <p>mypage</p>
          <p>닉네임</p>
          <p>email@naver.com</p>
        </MyDetailInfo>
      </MyInfo>
    </Container>
  );
};

export default MypageContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MyInfo = styled.div`
  display: flex;
  align-items: center;
`;
const MyDetailInfo = styled.div`
  margin-left: 5%;
  font-size: 0.8rem;
`;

const MainLogo = styled(Logo)`
  fill: white;
  width: 25%;
  height: 11vh;
  background-color: var(--color-main);
  border-radius: 50%;
`;
