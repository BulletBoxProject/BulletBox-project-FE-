import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { instanceApiV1 } from "../../../core/api";
import { encrypt } from "../../../core/encrypt";

const SignUpInput = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailConfirm, setemailConfirm] = useState("");
  const [emailConfirmCheck, setemailConfirmCheck] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isConfirmEmail, setIsConfirmEamail] = useState(false);

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
      setPasswordMessage("영문자+숫자+특수문자 조합으로 8자리이상");
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
      // console.log(post, "1");
      // const password = encrypt(post.password);
      // const userInfo = { email, password };
      // console.log(password);
      const data = await instanceApiV1.post("api/members/signup", post);
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
    setIsConfirmEamail(!isConfirmEmail);
    try {
      console.log(post.email, "1");
      const data = await instanceApiV1.post(
        `api/members/signup/email-validate?email=${post.email}`
      );

      if (data.data.httpStatusCode === 200) {
        alert(data.data.msg);
        setemailConfirmCheck(data.data.data);
        console.log(data.data.data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const confirmHendler = () => {
    postconfirm({
      email,
    });
    // .then((res) => {
    //   if (res === undefined) {
    //     alert("인증번호가 전송되었습니다.");
    //   } else {
    //     alert("사용 불가능한 이메일입니다.");
    //   }
    // });
  };
  const onChangeEmailConfirm = (e) => {
    setemailConfirm(e.target.value);
  };

  const emailConfirmHandler = () => {
    console.log(emailConfirm);
    console.log(emailConfirmCheck);
    if (emailConfirm === emailConfirmCheck) {
      alert("인증성공 하셨습니다.");
    } else {
      alert("인증실패 하셨습니다.");
    }
  };

  return (
    <StForm>
      <StTitle>Sign up</StTitle>
      <EmailDiv>
        <StInputEmail
          placeholder="E-mail"
          onChange={onChangeEmail}
        ></StInputEmail>
        <EmailBtn
          type="button"
          onClick={() => {
            confirmHendler();
          }}
        >
          인증
        </EmailBtn>
      </EmailDiv>
      {/* {email.length > 0 && <span>{emailMessage}</span>} */}

      {isConfirmEmail && (
        <ComfirmDiv>
          <StEmailConfirm
            placeholder="인증번호"
            onChange={(e) => {
              onChangeEmailConfirm(e);
            }}
          ></StEmailConfirm>
          <EmailConfrimBtn
            type="button"
            onClick={() => {
              emailConfirmHandler();
            }}
          >
            확인
          </EmailConfrimBtn>
        </ComfirmDiv>
      )}

      <StInput placeholder="NickName" onChange={onChangeNickName}></StInput>
      {nickname.length > 0 && <span>{nickNameMessage}</span>}
      <StInput
        placeholder="Password"
        type="password"
        onChange={onChangePassword}
      ></StInput>
      {password.length > 0 && <span>{passwordMessage}</span>}
      <StInput
        placeholder="Re_Password"
        type="password"
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
          type="button"
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
  height: 6.6vh;
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

const EmailDiv = styled.div`
  width: 74%;
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
  justify-content: space-between;
  margin-top: 5%;
  width: 74%;
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
