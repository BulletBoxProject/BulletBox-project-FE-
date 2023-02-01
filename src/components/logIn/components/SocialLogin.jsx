import React from "react";
import styled from "styled-components";

import { ReactComponent as BulletBox } from "../../../img/login/logo-graphic copy.svg";

const SocialLogin = () => {
  return (
    <SocialContainer>
      <SocialBtnBox>
        <GuestBtn>
          <Bullet />
        </GuestBtn>
        <SocialKakaoBtn></SocialKakaoBtn>
        <SocialGoogleBtn></SocialGoogleBtn>
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
const GuestBtn = styled.button`
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
  background-image: url(data:image/png;base64,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);
  background-size: contain;
`;
const SocialGoogleBtn = styled.button`
  background-image: url(https://littledeep.com/wp-content/uploads/2020/09/google-icon.png);
  background-size: 200% 200%;
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
