import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import axios from "axios";

const SignUpInput = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!emailRegex.test(value)) {
      setEmailMessage("올바른 이메일 형식이 아닙니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  };

  return (
    <StForm>
      <StTitle>회원가입</StTitle>
      <div>
        <StInputEmail
          placeholder="E-mail"
          onChange={onChangeEmail}
        ></StInputEmail>
        <button>이메일인증</button>
      </div>
      {email.length > 0 && <span>{emailMessage}</span>}

      <StInput placeholder="NickName"></StInput>
      <StInput placeholder="Password"></StInput>
      <StInput placeholder="Re_Password"></StInput>
      <StButtonBox>
        <StSignupBtn type="submit" disabled={!isEmail}>
          확인
        </StSignupBtn>
        <StSignupBtn
          onClick={() => {
            navigate("/login");
          }}
        >
          취소
        </StSignupBtn>
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
