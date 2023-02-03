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
  const [verifyCode, setVerifyCode] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isConfirmEmail, setIsConfirmEamail] = useState(false);
  const [readonly, setReadOnly] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const email = e.target.value;
    setEmail(email);
    if (!emailRegex.test(email)) {
      setEmailMessage("* 올바른 이메일 형식이 아닙니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
    }
  }, []);

  const onChangeNickName = useCallback((e) => {
    const nickNameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
    const nickname = e.target.value;
    setNickName(nickname);
    if (!nickNameRegex.test(nickname)) {
      setNickNameMessage(`* 2자이상 16자이하로 입력해주세요.`);
      setIsNickName(false);
    } else {
      setNickNameMessage(``);
      setIsNickName(true);
    }
  }, []);

  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const password = e.target.value;
    setPassword(password);
    if (!passwordRegex.test(password)) {
      setPasswordMessage("* 영문자+숫자+특수문자 조합으로 8자리이상");
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordcheck = e.target.value;
      setPasswordConfirm(passwordcheck);
      if (password === passwordcheck) {
        setPasswordConfirmMessage("");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("* 비밀번호가 틀려요. 다시 확인해주세요!");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  const postSignup = async (post) => {
    try {
      const data = await instanceApiV1.post("/members/signup", post);
      if (data.data.httpStatusCode === 201) {
        alert(data.data.msg);
        return data;
      } else {
        setIsOpen(true);
        setAlertMessage("회원가입에 실패했습니다.");
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

  const postconfirm = async (post) => {
    try {
      const data = await instanceApiV1.post(
        `/members/signup/email-validate`,
        post
      );
      if (data.data.httpStatusCode === 200) {
        setIsOpen(true);
        setAlertMessage(data.data.msg);
        setVerifyCode(data.data.data);
        setIsConfirmEamail(true);
        return data;
      } else {
        setIsOpen(true);
        setAlertMessage("알수 없는 오류입니다.");
      }
    } catch (error) {
      setIsOpen(true);
      setAlertMessage(error.response.data.msg);
    }
  };

  const confirmHendler = () => {
    setReadOnly(true);
    setIsOpen(true);
    setAlertMessage("인증번호를 보내는중입니다. 잠시만 기다려주세요.");
    postconfirm({
      email,
    }).then((res) => {
      if (res === undefined) {
        setReadOnly(false);
      } else {
        setReadOnly(true);
      }
    });
  };

  const onChangeEmailConfirm = (e) => {
    setVerifyCode(e.target.value);
  };

  const emailconfirm = async (post) => {
    try {
      console.log(post);
      const data = await instanceApiV1.post(`/members/signup/verifycode`, post);

      if (data.data.httpStatusCode === 200) {
        setIsOpen(true);
        setAlertMessage(data.data.msg);
        setVerifyCode(data.data.data);
        console.log(data.data.data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const emailConfirmHandler = () => {
    emailconfirm({
      email,
      verifyCode,
    }).then((res) => {
      if (res === undefined) {
        setIsOpen(true);
        setAlertMessage("인증 실패했습니다.");
      } else {
        setIsEmail(true);
        setIsConfirmEamail(false);
      }
    });
  };

  return (
    <StForm>
      <StTitle>Sign up</StTitle>
      <EmailDiv>
        <StInput
          placeholder="이메일 주소를 입력하세요."
          onChange={onChangeEmail}
          readOnly={readonly}
        ></StInput>
        <EmailBtn
          type="button"
          onClick={() => {
            confirmHendler();
          }}
          disabled={readonly}
        >
          {isEmail === false ? "인증" : "인증완료"}
        </EmailBtn>
      </EmailDiv>
      <AlarmSpan>{email.length > 0 && <span>{emailMessage}</span>}</AlarmSpan>
      {isConfirmEmail && (
        <EmailConfirmDiv>
          <StInput
            placeholder="인증번호"
            onChange={(e) => {
              onChangeEmailConfirm(e);
            }}
          ></StInput>
          <EmailBtn
            type="button"
            onClick={() => {
              emailConfirmHandler();
            }}
          >
            확인
          </EmailBtn>
        </EmailConfirmDiv>
      )}
      <StInput
        placeholder="닉네임을 입력하세요."
        onChange={onChangeNickName}
      ></StInput>
      <AlarmSpan>
        {nickname.length > 0 && <span>{nickNameMessage}</span>}
      </AlarmSpan>
      <StInput
        placeholder="패스워드를 입력하세요."
        type="password"
        onChange={onChangePassword}
      ></StInput>
      <AlarmSpan>
        {password.length > 0 && <span>{passwordMessage}</span>}
      </AlarmSpan>
      <StInput
        placeholder="패스워드를 다시 한 번 입력하세요."
        type="password"
        onChange={onChangePasswordConfirm}
      ></StInput>
      <AlarmSpan>
        {passwordConfirm.length > 0 && <span>{passwordConfirmMessage}</span>}
      </AlarmSpan>
      <StButtonBox>
        <StSignupBtn
          type="submit"
          disabled={!(isEmail && isNickName && isPassword && isPasswordConfirm)}
          onClick={onSubmitBtn}
        >
          회원가입
        </StSignupBtn>
      </StButtonBox>{" "}
      <CancelBtn
        type="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인 페이지로 돌아가기
      </CancelBtn>
      {isOpen && (
        <AlertModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          {alertMessage}
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
  width: 294px;
  height: 506px;
  border-radius: 8px;
  margin-top: 46px;
`;
const StTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 30%;
  margin-bottom: 12px;
  color: var(--color-main);
  font-family: "HeirofLightBold";
`;

const StInput = styled.input`
  width: 100%;
  height: 48px;

  font-size: 14px;
  font-weight: bold;
  border: white;
  /* color: var(--color-gray); */
  background: var(--color-default);
  border-radius: 8px;
  font-family: "NanumGothic";
  ::placeholder {
    color: var(--color-c1-gray);
  }
`;

const EmailDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-default);
  font-size: 14px;
  border-radius: 8px;
`;

const EmailConfirmDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-default);
  font-size: 14px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const StButtonBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`;

const EmailBtn = styled.button`
  width: 85px;
  height: 16px;
  margin-right: 3px;
  font-size: 14px;
  background: var(--color-default);
  border: none;
  border-radius: 8px;
  color: var(--color-main);
  font-weight: bold;
`;

const StSignupBtn = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  font-family: "NanumGothic";
  color: white;
  border: white;
  background: var(--color-main);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  &:disabled {
    background: var(--color-c1-gray);
  }
`;

const CancelBtn = styled.button`
  width: 155px;
  height: 12px;
  margin-top: 16px;
  font-size: 12px;
  font-weight: 800;
  color: var(--color-gray);
  border: none;
  background-color: transparent;
`;

const AlarmSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 10px;
  margin: 6px;
  font-size: 8px;
  font-weight: bold;
  font-family: "NanumGothic";
`;
