import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { instanceApiV1 } from "../../../core/api";

const SignUpInput = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeEmail = (e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
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
  const onChangeNickName = (e) => {
    const nickNameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
    const value = e.target.value;
    setNickName(value);

    if (!nickNameRegex.test(value)) {
      setNickNameMessage(`올바른 닉네임 형식이 아닙니다.`);
      setIsNickName(false);
    } else {
      setNickNameMessage(`올바른 닉네임 형식입니다.`);
      setIsNickName(true);
    }
  };

  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const value = e.target.value;
    setPassword(value);

    if (!passwordRegex.test(value)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const value = e.target.value;
    setPasswordConfirm(value);

    if (password === value) {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 틀려요. 다시 확인해주세요!");
      setIsPasswordConfirm(false);
    }
  };

  const postSignup = async (post) => {
    try {
      const data = await instanceApiV1.post("api/members/signup", post);
      if (data.httpStatusCode === 201) {
        alert(data.msg);
        return data;
      } else {
        alert("회원가입에 실패하셨습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitBtn = (e) => {
    e.preventDefault();
    postSignup({
      email,
      nickname,
      password,
    }).then((res) => {
      if (res === undefined) {
        navigate(`/signup`);
      } else {
        navigate(`/login`);
      }
    });
  };

  return (
    <StForm>
      <StTitle>Sign up</StTitle>
      <div>
        <StInputEmail
          placeholder="E-mail"
          onChange={onChangeEmail}
        ></StInputEmail>
        <button>인증</button>
      </div>
      {email.length > 0 && <span>{emailMessage}</span>}

      <StInput placeholder="NickName" onChange={onChangeNickName}></StInput>
      {nickname.length > 0 && <span>{nickNameMessage}</span>}
      <StInput
        placeholder="Password"
        // type="password"
        onChange={onChangePassword}
      ></StInput>
      {password.length > 0 && <span>{passwordMessage}</span>}
      <StInput
        placeholder="Re_Password"
        // type="password"
        onChange={onChangePasswordConfirm}
      ></StInput>
      {passwordConfirm.length > 0 && <span>{passwordConfirmMessage}</span>}
      <StButtonBox>
        <StSignupBtn
          type="submit"
          disabled={!(isEmail && isNickName && isPassword && isPasswordConfirm)}
          onClick={onSubmitBtn}
        >
          회원가입
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
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  height: 300px;
`;
const StTitle = styled.div`
  font-size: 15px;
  width: 60px;
  margin-bottom: 20px;
  color: var(--color-main);
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
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #7c7c7c;
  }
`;

const StInputEmail = styled.input`
  width: 150px;
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
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #7c7c7c;
  }
`;

const StSignupBtn = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 5px;
`;
const StButtonBox = styled.div`
  margin-top: 10px;
`;
