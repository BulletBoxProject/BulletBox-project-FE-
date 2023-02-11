import React from "react";
import { useNavigate } from "react-router";
import { instanceApiV1 } from "../core/api";
import { setCookies } from "../core/cookieControler";

const KakaoLoginPage = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const kakao = async () => {
    try {
      const data = await instanceApiV1.get(`/members/login/kakao?code=${code}`);
      setCookies("Authorization", data.headers.authorization, {
        path: "/",
        maxAge: 21600,
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

export default KakaoLoginPage;
