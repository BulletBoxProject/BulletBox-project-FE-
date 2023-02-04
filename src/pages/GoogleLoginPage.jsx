import React from "react";
import { useNavigate } from "react-router";
import { instanceApiV1 } from "../core/api";
import { setCookies } from "../core/cookieControler";

const GoogleLoginPage = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = encodeURIComponent(params.get("code"));
  // const code = new URL(window.location.href).searchParams.get("code");

  const kakao = async () => {
    try {
      const data = await instanceApiV1.get(
        `/members/login/google?code=${code}`
      );
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

export default GoogleLoginPage;
