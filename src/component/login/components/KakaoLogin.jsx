import React, { useEffect } from "react";
import { serverUrlApiV1 } from "../../../../core";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // 받아오는 url 형태 확인
  const code = searchParams.get("code");
  const callBackURL = `${serverUrlApiV1}/members/login/kakao?code=${code}`;

  useEffect(() => {
    if (code) {
      const kakaoCallBack = async () => {
        try {
          const res = await axios.post(callBackURL);
          console.log(res);
          localStorage.setItem("Authorization", res.headers.authorization);
          alert(res.data.msg);
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };
      kakaoCallBack();
    }
  }, [callBackURL, code]);

  return;
};

export default KakaoLogin;
