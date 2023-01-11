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
    <StDiv>
      <StForm>
        <StTitle>Login</StTitle>

        <StInput
          placeholder="ID"
          name="userid"
          type="email"
          onChange={(e) => {
            const { value } = e.target;
            setUserId(value);
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
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </StSignupBtn>
          <StLoginBtn
            onClick={() => {
              onSubmitBtn();
            }}
          >
            로그인
          </StLoginBtn>
        </StButtonBox>
      </StForm>
    </StDiv>
  );
};

export default LogInInput;
const StDiv = styled.div`
  background: #f0a13b;
`;

const StForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 272px;
  height: 328px;
  left: 44px;
  top: 232px;
  background: white;
  border-radius: 8px;
  border: 1px solid black;
`;
const StTitle = styled.div`
  font-size: 15px;
  width: 50px;
  margin-bottom: 20px;
  color: black;
`;

const StInput = styled.input`
  width: 200px;
  height: 48px;
  left: 80px;
  top: 322px;
  margin-top: 10px;
  border: white;

  background: #d9d9d9;
  border-radius: 8px;
  ::placeholder {
    font-family: "Oleo Script";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #7c7c7c;
  }
`;

const StButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  margin-top: 10px;
`;

const StSignupBtn = styled.button`
  width: 46%;
  height: 36px;
  left: 84px;
  top: 474px;
  border: white;
  background: #f0a13b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const StLoginBtn = styled.button`
  width: 46%;
  height: 36px;
  left: 188px;
  top: 474px;
  border: white;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;
