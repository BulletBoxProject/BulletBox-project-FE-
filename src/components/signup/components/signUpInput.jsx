import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";

const SignUpInput = () => {
  return (
    <StForm>
      <StTitle>회원가입</StTitle>
      <div>
        <StInputEmail placeholder="E-mail"></StInputEmail>
        <button>이메일인증</button>
      </div>
      <StInput placeholder="NickName"></StInput>
      <StInput placeholder="PASSWORD"></StInput>
      <StInput placeholder="RE_PASSWORD"></StInput>
      <StButtonBox>
        <StSignupBtn>확인</StSignupBtn>
        <StSignupBtn>취소</StSignupBtn>
      </StButtonBox>
    </StForm>
  );
};

export default SignUpInput;
const StForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  padding: 25px;
  height: 300px;
`;
const StTitle = styled.div`
  font-size: 15px;
  width: 60px;
  margin-bottom: 20px;
  color: black;
`;

const StInput = styled.input`
  width: 88%;
  padding: 5px;
  margin: 10px 0;
`;

const StInputEmail = styled.input`
  width: 50%;
  padding: 5px;
  margin: 10px;
`;

const StSignupBtn = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 5px;
`;
const StButtonBox = styled.div`
  margin-top: 10px;
`;
