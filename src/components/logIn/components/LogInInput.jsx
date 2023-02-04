import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { baseURLApiV1 } from "../../../core/api";
import { setCookies } from "../../../core/cookieControler";
import { IoIosArrowBack } from "react-icons/io";

const LogInInput = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const [message, setMessage] = useState("");

  // const onBackHandler = () => {
  //   navigate("/");
  // };

  const postLogin = async (post) => {
    try {
      const data = await baseURLApiV1.post("/members/login", post);
      if (data.data.httpStatusCode === 200) {
        return data;
      }
    } catch (error) {
      if (error.response.data.status === 500) {
        console.log("서버 요청에 실패했습니다.");
      } else if (error.response.data.httpStatusCode === 404) {
        setMessage("* 아이디 또는 비밀번호를 틀렸습니다.");
      } else {
        console.log("알수없는 오류입니다.");
      }
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    postLogin({
      email,
      password,
    }).then((res) => {
      if (res === undefined) {
        navigate(`/login`);
      } else {
        navigate(`/home`);
        setCookies("Authorization", res.headers.authorization, {
          path: "/",
          maxAge: 21600,
        });
      }
    });
  };

  return (
    <StForm>
      {/* <BackBtn type="button" onClick={onBackHandler}>
        <BackIcon />
      </BackBtn> */}
      <StTitle>Login</StTitle>
      <StInput
        placeholder="이메일 주소"
        name="userid"
        type="email"
        onChange={(e) => {
          const { value } = e.target;
          setEmail(value);
          setMessage("");
          if (value.length !== 0) {
            setIsEmail(true);
          } else {
            setIsEmail(false);
          }
        }}
      ></StInput>
      <StInput
        placeholder="패스워드"
        type="password"
        name="password"
        onChange={(e) => {
          const { value } = e.target;
          setPassword(value);
          setMessage("");
          if (value.length !== 0) {
            setIsPassword(true);
          } else {
            setIsPassword(false);
          }
        }}
      ></StInput>
      <StSpanDiv>
        <StSpanTag style={{ dispaly: "hidden" }}>{message}</StSpanTag>
      </StSpanDiv>
      <StButtonBox>
        <StLoginBtn
          type="submit"
          disabled={!(isEmail && isPassword)}
          onClick={(e) => {
            loginHandler(e);
          }}
        >
          로그인
        </StLoginBtn>
      </StButtonBox>
      <UserInfoBox>
        <SignupDiv>
          <SignUpSpan>아직 회원이 아니신가요?</SignUpSpan>
          <StSignupBtn
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </StSignupBtn>
        </SignupDiv>
      </UserInfoBox>
    </StForm>
  );
};

export default LogInInput;
const StForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  width: 100%;
  height: 286px;
  background: white;
  border-radius: 8px;
`;
const StTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 10px;
  width: 50%;
  height: 22px;
  color: var(--color-main);
  font-family: "HeirofLightBold";
`;

const StInput = styled.input`
  width: 100%;
  height: 48px;
  margin-top: 15px;
  border: white;
  font-size: 16px;
  font-family: "NanumGothic";
  font-weight: bold;
  background: var(--color-default);
  border-radius: 8px;
  ::placeholder {
    font-family: "NanumGothic";
    font-size: 14px;
    font-weight: bold;
    color: var(--color-c1-gray);
    padding-right: 1em;
  }
`;

const StSpanDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const StSpanTag = styled.span`
  font-size: 12px;
  font-weight: bold;
  font-family: "NanumGothic";
`;

const StButtonBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 16px;
`;

const StLoginBtn = styled.button`
  width: 100%;
  height: 48px;
  font-family: "NanumGothic";
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: white;
  background: var(--color-main);
  border-radius: 8px;
  &:disabled {
    color: white;
    background-color: var(--color-c1-gray);
  }
`;

// const BackBtn = styled.button`
//   display: flex;

//   border: none;
//   background-color: transparent;
//   width: 30px;
//   height: 20px;
// `;
// const BackIcon = styled(IoIosArrowBack)`
//   color: var(--color-gray);
//   width: 20px;
//   height: 18px;
// `;

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 222px;
  height: 11px;
  color: var(--color-gray);
  font-weight: bold;
`;

const SignupDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11px;
`;

const StSignupBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 10px;
  font-family: "NanumGothic";
  font-weight: bold;
  color: var(--color-main);
`;

const SignUpSpan = styled.span`
  color: var(--color-gray);
  font-size: 8px;
  font-weight: bold;
`;
