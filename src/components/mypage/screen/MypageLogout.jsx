import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookies } from "../../../core/cookieControler";

const MypageLogout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeCookies("Authorization");
    navigate("/login");
  };

  return (
    <div>
      <button onClick={logoutHandler}>로그아웃</button>
    </div>
  );
};

export default MypageLogout;
