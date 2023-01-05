import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogInInput = () => {
  const navigate = useNavigate();
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = async (post) => {
    try {
      const data = await axios.post("/api/members/login", post);
      if (data.httpStatusCode === 200) {
        return data;
      } else {
        alert("아이디, 비밀번호를 잘못입력하셨습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitBtn = (e) => {
    e.preventDefault();
    if (userid === "" || password === "") {
      alert("아이디, 비밀번호를 확인해주세요.");
      return;
    } else {
    }
    postLogin({
      userid,
      password,
    }).then((res) => {
      if (res === undefined) {
        navigate(`/login`);
      } else {
        navigate(`/`);
      }
    });
  };

  return (
    <StForm>
      <StTitle>로그인</StTitle>

      <StInput
        placeholder="Email"
        name="userid"
        type="email"
        onChange={(e) => {
          const { value } = e.target;
          setUserId(value);
        }}
      ></StInput>
      <StInput
        placeholder="Password"
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
          onClick={() => {
            onSubmitBtn();
          }}
        >
          로그인
        </StSignupBtn>
        <StSignupBtn
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </StSignupBtn>
      </StButtonBox>
    </StForm>
  );
};

export default LogInInput;

const StForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  padding: 25px;
`;
const StTitle = styled.div`
  font-size: 15px;
  width: 50px;
  margin-bottom: 20px;
  color: black;
`;

const StInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-top: 10px;
`;

const StSignupBtn = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 5px;
`;
const StButtonBox = styled.div`
  margin-top: 10px;
`;
