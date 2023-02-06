import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { baseURLApiV1 } from "../../../core/api";
import { setCookies } from "../../../core/cookieControler";
import { KAKAO_AUTH_URL } from "../../../core/kakaoLogin";
import { GOOGLE_AUTH_URL } from "../../../core/googleLogin";

import { ReactComponent as BulletBox } from "../../../img/login/logo-graphic copy.svg";
import { ReactComponent as kakao } from "../../../img/login/kakao.svg";
import { ReactComponent as google } from "../../../img/login/google.svg";

const SocialLogin = () => {
  const navigate = useNavigate();

  const GuestLogin = async () => {
    try {
      const data = await baseURLApiV1.post("/members/login/test");
      if (data.data.httpStatusCode === 201) {
        return data;
      }
    } catch (error) {
      if (error.response.data.status === 500) {
        console.log("서버 요청에 실패했습니다.");
      } else if (error.response.data.httpStatusCode === 404) {
        // setMessage("* 아이디 또는 비밀번호를 틀렸습니다.");
      } else {
        console.log(error);
      }
    }
  };

  const GuestLoginHandler = (e) => {
    GuestLogin().then((res) => {
      if (res === undefined) {
        navigate(`/login`);
      } else {
        navigate(`/home`);
        setCookies("Authorization", res.headers.authorization, {
          path: "/",
          maxAge: 21600,
        });
      }
    });
  };

  const KakaoLoginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const GoogleLoginHandler = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <SocialContainer>
      <SocialBtnBox>
        <GuestBtn type="button" onClick={GuestLoginHandler}>
          <Bullet />
        </GuestBtn>
        <SocialKakaoBtn type="button" onClick={KakaoLoginHandler}>
          <Kakao />
        </SocialKakaoBtn>
        <SocialGoogleBtn type="button" onClick={GoogleLoginHandler}>
          <Google />
        </SocialGoogleBtn>
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
`;
const SocialGoogleBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  border: 1px solid var(--color-light-gray);
  background-color: transparent;
`;

const Kakao = styled(kakao)`
  width: 26px;
  height: 26px;
`;

const Google = styled(google)`
  width: 26px;
  height: 26px;
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
  justify-content: flex-start;
  color: var(--color-gray);
  font-size: 10px;
  font-weight: bold;
  width: 46px;
  height: 24px;
`;

const SocialGoogleTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 24px;
`;
const SocialGoogleText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray);
  font-size: 10px;
  font-weight: bold;
  width: 38px;
  height: 12px;
`;

const Bullet = styled(BulletBox)`
  width: 21.23px;
  height: 24px;
  fill: var(--color-main);
`;
