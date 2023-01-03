import React, { useEffect } from "react";
import { serverUrlApiV1 } from "../../../../core";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const GithubLogin = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const callBackURL = `${serverUrlApiV1}/members/login/github`;

  useEffect(() => {
    if (code) {
      const gitHubCallBack = async () => {
        try {
          const res = await axios.post(callBackURL, { code: code });
          localStorage.setItem("Authorization", res.headers.authorization);
          alert(res.data.msg);
          navigate("/");
        } catch (error) {
          console.log(error.msg);
        }
      };
      gitHubCallBack();
    }
  }, [callBackURL, code]);

  return;
};

export default GithubLogin;
