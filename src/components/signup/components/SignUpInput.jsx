import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { instanceApiV1 } from "../../../core/api";
import AlertModal from "../../common/modal/AlertModal";

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

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const email = e.target.value;
    setEmail(email);
    if (!emailRegex.test(email)) {
      setEmailMessage("email 형식으로 입력해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  }, []);

  const onChangeNickName = useCallback((e) => {
    const nickNameRegex = /^[가-힣a-zA-Z0-9]{2,16}$/;
    const nickname = e.target.value;
    setNickName(nickname);
    if (!nickNameRegex.test(nickname)) {
      setNickNameMessage(`특수문자를 포함하지 않은 2~16자리여야 합니다.`);
      setIsNickName(false);
    } else {
      setNickNameMessage(`올바른 닉네임 형식입니다.`);
      setIsNickName(true);
    }
  }, []);

  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const password = e.target.value;
    setPassword(password);
    if (!passwordRegex.test(password)) {
      setPasswordMessage("영문자+숫자+특수문자 조합으로 8자리이상");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다.");
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordcheck = e.target.value;
      setPasswordConfirm(passwordcheck);
      if (password === passwordcheck) {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 틀려요. 다시 확인해주세요!");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  const postSignup = async (post) => {
    try {
      const data = await instanceApiV1.post("/members/signup", post);
      if (data.data.httpStatusCode === 201) {
        setIsOpen(true);
        setMessage("회원가입이 완료되었습니다.");
        return data;
      }
    } catch (error) {
      setIsOpen(true);
      setMessage(error.response.data.msg);
    }
  };

  const onSubmitBtn = (e) => {
    e.preventDefault();

    if (!isEmail) {
      setIsOpen(true);
      setMessage("Email을 확인해주세요!");
      return;
    } else if (!isNickName) {
      setIsOpen(true);
      setMessage("NickName을 확인해주세요!");
      return;
    } else if (!isPassword) {
      setIsOpen(true);
      setMessage("비밀번호를 확인해주세요!");
      return;
    } else if (!isPasswordConfirm) {
      setIsOpen(true);
      setMessage("비밀번호를 확인해주세요!");
      return;
    }
    postSignup({
      email,
      nickname,
      password,
    }).then((res) => {
      console.log(res);
      if (res === undefined) {
        navigate(`/signup`);
      } else {
        setTimeout(() => {
          navigate(`/login`);
        }, 1500);
      }
    });
  };

  return (
    <StForm>
      <StTitle>Sign up</StTitle>
      <StInputEmail
        placeholder="E-mail"
        onChange={onChangeEmail}
      ></StInputEmail>
      {email.length > 0 && <Stspan>{emailMessage}</Stspan>}

      <StInput placeholder="NickName" onChange={onChangeNickName}></StInput>
      {nickname.length > 0 && <Stspan>{nickNameMessage}</Stspan>}
      <StInput
        placeholder="Password"
        type="password"
        onChange={onChangePassword}
      ></StInput>
      {password.length > 0 && <Stspan>{passwordMessage}</Stspan>}
      <StInput
        placeholder="Re_Password"
        type="password"
        onChange={onChangePasswordConfirm}
      ></StInput>
      {passwordConfirm.length > 0 && <Stspan>{passwordConfirmMessage}</Stspan>}
      <StButtonBox>
        <StSignupBtn type="submit" onClick={onSubmitBtn}>
          회원가입
        </StSignupBtn>
        <CancelBtn
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          취소
        </CancelBtn>
      </StButtonBox>
      {isOpen && (
        <AlertModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          {message}
        </AlertModal>
      )}
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
  border-radius: 8px;
  height: 63vh;
  width: 76%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
const StTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  width: 30%;
  margin-bottom: 20px;
  color: var(--color-main);
  font-family: "HeirofLightBold";
`;

const StInput = styled.input`
  width: 74%;
  height: 5.6vh;
  margin-top: 5%;
  font-size: 1rem;
  border: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background: #d9d9d9;
  border-radius: 8px;
  font-family: "Oleo Script";
  ::placeholder {
    font-family: "Oleo Script";
    font-style: normal;
    font-weight: 800;
    font-size: 1rem;
    text-align: center;
    color: #7c7c7c;
  }
`;

const StInputEmail = styled.input`
  width: 74%;
  height: 5.6vh;
  font-size: 1rem;
  font-family: "Oleo Script";
  border: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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
  margin-top: 5%;
  width: 74%;
`;

const StSignupBtn = styled.button`
  width: 46%;
  height: 5vh;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  border: white;
  background: var(--color-main);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const CancelBtn = styled.button`
  width: 46%;
  height: 5vh;
  font-size: 1rem;
  font-weight: 800;
  color: #7c7c7c;
  border: white;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const Stspan = styled.span`
  margin-top: 2%;
  font-size: 0.7rem;
  font-weight: bold;
`;
