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
      console.log(data, "1");
      if (data.data.httpStatusCode === 201) {
        alert(data.data.msg);
        return data;
      } else {
        alert("회원가입에 실패했습니다.");
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
      <EmailDiv>
        <StInputEmail
          placeholder="E-mail"
          onChange={onChangeEmail}
        ></StInputEmail>
        <EmailBtn>인증</EmailBtn>
      </EmailDiv>
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
        <CancelBtn
          onClick={() => {
            navigate("/login");
          }}
        >
          취소
        </CancelBtn>
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
  height: 53vh;
  width: 76%;
`;
const StTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  width: 30%;
  margin-bottom: 20px;
  color: var(--color-main);
`;

const StInput = styled.input`
  width: 74%;
  height: 6.6vh;
  margin-top: 5%;
  border: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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

const EmailDiv = styled.div`
  width: 74%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StInputEmail = styled.input`
  width: 74%;
  height: 6.6vh;
  left: 80px;
  top: 322px;

  border: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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

const StButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
  width: 74%;
`;

const EmailBtn = styled.button`
  margin-left: 0.5rem;
  width: 11vw;
  height: 6.8vh;
  background-color: var(--color-main);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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

const CancelBtn = styled.button`
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
