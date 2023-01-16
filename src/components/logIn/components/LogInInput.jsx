import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { baseURLApiV1 } from "../../../core/api";
import { setCookies } from "../../../core/cookieControler";
import { encrypt } from "../../../core/encrypt";

const LogInInput = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = async (post) => {
    try {
      // const password = encrypt(post.password);
      // const userInfo = { email, password };
      // console.log(password);
      const data = await baseURLApiV1.post("api/members/login", post);

      if (data.data.httpStatusCode === 200) {
        return data;
      }
    } catch (error) {
      console.log(error);
      alert("아이디, 비밀번호를 잘못입력하셨습니다.");
    }
  };

  const loginHandler = () => {
    if (email === "" || password === "") {
      alert("아이디, 비밀번호를 확인해주세요.");
      return;
    }
    postLogin({
      email,
      password,
    }).then((res) => {
      if (res === undefined) {
        navigate(`/login`);
      } else {
        navigate(`/home`);
        setCookies("Authorization", res.headers.authorization, {
          maxAge: 1750,
        });
      }
    });
  };

  return (
    <StForm>
      <StTitle>Login</StTitle>

      <StInput
        placeholder="ID"
        name="userid"
        type="email"
        onChange={(e) => {
          const { value } = e.target;
          setEmail(value);
        }}
      ></StInput>
      <StInput
        placeholder="PASSWORD"
        type="password"
        name="password"
        onChange={(e) => {
          const { value } = e.target;
          setPassword(value);
        }}
      ></StInput>

      <br />
      <StButtonBox>
        <StSignupBtn
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </StSignupBtn>
        <StLoginBtn
          type="button"
          onClick={() => {
            loginHandler();
          }}
        >
          로그인
        </StLoginBtn>
      </StButtonBox>
    </StForm>
  );
};

export default LogInInput;
const StForm = styled.form`
  display: flex;
  align-items: center;
  padding-top: 10%;
  flex-direction: column;
  width: 76%;
  height: 45vh;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
const StTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  width: 50%;
  color: var(--color-main);
  font-family: "HeirofLightBold";
`;

const StInput = styled.input`
  width: 74%;
  height: 6.6vh;
  margin-top: 7%;
  border: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: "Oleo Script";
  background: #d9d9d9;
  border-radius: 8px;
  ::placeholder {
    font-family: "Oleo Script";
    font-style: normal;
    font-weight: 800;
    font-size: 1rem;
    text-align: center;
    color: #7c7c7c;
  }
`;

const StButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 74%;
  margin-top: 6%;
  font-size: 16px;
`;

const StSignupBtn = styled.button`
  width: 46%;
  height: 36px;
  left: 84px;
  top: 474px;
  font-size: 16px;
  font-weight: 800;
  color: white;
  border: white;
  background: var(--color-main);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const StLoginBtn = styled.button`
  width: 46%;
  height: 36px;
  left: 188px;
  top: 474px;
  font-size: 16px;
  font-weight: 800;
  color: #7c7c7c;
  border: white;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;
