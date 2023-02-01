import React from "react";
import styled from "styled-components";

import { ReactComponent as BulletBox } from "../../../img/login/logo-graphic copy.svg";

const SocialLogin = () => {
  return (
    <SocialContainer>
      <SocialBtnBox>
        <SocialBtn>
          <Bullet />
        </SocialBtn>
        <SocialKakaoBtn></SocialKakaoBtn>
        <SocialBtn></SocialBtn>
      </SocialBtnBox>
      <SocialTextBox>
        <SocialText>체험하기</SocialText>
        <SocialText>카카오로 시작하기</SocialText>
        <SocialGoogleTextBox>
          <SocialGoogleText>구글로</SocialGoogleText>
          <SocialGoogleText>시작하기</SocialGoogleText>
        </SocialGoogleTextBox>

        {/* <SocialText></SocialText> */}
      </SocialTextBox>
    </SocialContainer>
  );
};

export default SocialLogin;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 192px;
  height: 77px;
  margin-top: 80px;
`;

const SocialBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 192px;
  height: 48px;
`;
const SocialBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  border: 1px solid var(--color-light-gray);
  background-color: transparent;
`;

const SocialKakaoBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  border: 1px solid var(--color-light-gray);
  background-color: transparent;
`;

const SocialTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 182px;
  height: 24px;
  margin-top: 5px;
`;

const SocialText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray);
  font-size: 10px;
  font-weight: bold;
  width: 38px;
  height: 24px;
`;

const SocialGoogleTextBox = styled.div`
  margin-top: 3px;
`;
const SocialGoogleText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray);
  font-size: 10px;
  font-weight: bold;
  width: 38px;
  height: 3px;
`;

const Bullet = styled(BulletBox)`
  width: 21.23px;
  height: 24px;
  fill: var(--color-main);
`;
