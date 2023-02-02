import React from "react";
import { useNavigate } from "react-router-dom";
import { instanceApiV1 } from "../../../core/api";
import { baseURLApiV1 } from "../../../core/api";
import { setCookies } from "../../../core/cookieControler";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const kakao = async () => {
    try {
      const data = await instanceApiV1.get(`/members/login/kakao?code=${code}`);
      setCookies("id", data.headers.authorization, {
        path: "/",
        maxAge: 17500,
      });
      navigate("/home");
      return data;
    } catch (error) {
      navigate("/login");
    }
  };
  kakao();
  return <div></div>;
};

export default KakaoLogin;
