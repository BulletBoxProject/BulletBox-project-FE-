import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { instanceApiV1 } from "../../../core/api";
// import { encrypt } from "../../../core/encrypt";

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

  const [isEmail, setIsEmail] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isConfirmEmail, setIsConfirmEamail] = useState(false);
  const [readonly, setReadOnly] = useState(false);
  const [confirmReadOnly, setConfirmReadOnly] = useState(false);

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
      setIsEmail(true);
    }
  }, []);

  const onChangeNickName = useCallback((e) => {
    const nickNameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
    const nickname = e.target.value;
    setNickName(nickname);
    if (!nickNameRegex.test(nickname)) {
      setNickNameMessage(`* 올바른 닉네임 형식이 아닙니다.`);
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
      // console.log(post, "1");
      // const password = encrypt(post.password);
      // const userInfo = { email, password };
      // console.log(password);
      const data = await instanceApiV1.post("/members/signup", post);
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

  const postconfirm = async (post) => {
    try {
      const data = await instanceApiV1.post(
        `/members/signup/email-validate`,
        post
      );
      if (data.data.httpStatusCode === 200) {
        alert(data.data.msg);
        setVerifyCode(data.data.data);
        setIsConfirmEamail(true);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const confirmHendler = () => {
    setReadOnly(true);
    postconfirm({
      email,
    }).then((res) => {
      if (res === undefined) {
        alert("인증요청실패 했습니다.");
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
        alert(data.data.msg);
        setVerifyCode(data.data.data);
        console.log(data.data.data);
        return data;
      }
    } catch (error) {
      console.log("error");
    }
  };

  const emailConfirmHandler = () => {
    setConfirmReadOnly(true);
    emailconfirm({
      verifyCode,
    }).then((res) => {
      if (res === undefined) {
        alert("인증실패 했습니다.");
        setConfirmReadOnly(false);
      } else {
        setConfirmReadOnly(true);
        setIsEmail(true);
      }
    });
  };

  return (
    <StForm>
      <StTitle>Sign up</StTitle>
      {/* <EmailDiv> */}
      <StInput
        placeholder="이메일 주소를 입력하세요."
        onChange={onChangeEmail}
        readOnly={readonly}
      ></StInput>
      {/* <EmailBtn
          type="button"
          onClick={() => {
            confirmHendler();
          }}
          disabled={readonly}
        >
          인증
        </EmailBtn> */}
      {/* </EmailDiv> */}
      <AlarmSpan>{email.length > 0 && <span>{emailMessage}</span>}</AlarmSpan>
      {isConfirmEmail && (
        <ComfirmDiv>
          <StEmailConfirm
            readOnly={confirmReadOnly}
            placeholder="인증번호"
            onChange={(e) => {
              onChangeEmailConfirm(e);
            }}
          ></StEmailConfirm>
          <EmailConfrimBtn
            disabled={confirmReadOnly}
            type="button"
            onClick={() => {
              emailConfirmHandler();
            }}
          >
            확인
          </EmailConfrimBtn>
        </ComfirmDiv>
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
  height: 406px;
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
  margin-top: 8px;
  border: white;
  background: var(--color-default);
  border-radius: 8px;
  font-family: "NanumGothic";
  ::placeholder {
    color: var(--color-c1-gray);
  }
  :focus {
    outline: none;
  }
`;

const EmailDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StInputEmail = styled.input`
  width: 74%;
  height: 6.6vh;
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
  width: 100%;
  margin-top: 16px;
`;

const EmailBtn = styled.button`
  margin-left: 0.5rem;
  width: 11vw;
  height: 6.8vh;
  font-size: 1rem;
  background-color: var(--color-main);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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

const StEmailConfirm = styled.input`
  width: 74%;
  height: 4.6vh;
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

const EmailConfrimBtn = styled.button`
  margin-left: 0.5rem;
  width: 11vw;
  height: 4.8vh;
  background-color: var(--color-main);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const ComfirmDiv = styled.div`
  width: 74%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
  font-size: 1rem;
`;

const AlarmSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 10px;
  margin-top: 2px;
  font-size: 8px;
  font-weight: bold;
  font-family: "NanumGothic";
`;
