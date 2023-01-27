import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { baseURLApiV1 } from "../../../core/api";
import { setCookies } from "../../../core/cookieControler";
import AlertModal from "../../common/modal/AlertModal";
import { IoIosArrowBack } from "react-icons/io";

const LogInInput = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const onBackHandler = () => {
    navigate("/");
  };

  const postLogin = async (post) => {
    try {
      const data = await baseURLApiV1.post("/members/login", post);
      if (data.data.httpStatusCode === 200) {
        return data;
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.status === 500) {
        setIsOpen(true);
        setMessage("서버 요청에 실패했습니다.");
      } else if (error.response.data.httpStatusCode === 404) {
        setIsOpen(true);
        setMessage("아이디 또는 비밀번호를 확인해주세요.");
      } else {
        setIsOpen(true);
        setMessage("알수없는 오류입니다.");
      }
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setIsOpen(true);
      setMessage("이메일과 비밀번호를 입력해주세요.");
      return;
    }
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
          maxAge: 17500,
        });
      }
    });
  };

  return (
    <StForm>
      <BackBtn type="button" onClick={onBackHandler}>
        <BackIcon />
      </BackBtn>
      <StTitle>Login</StTitle>
      <StInput
        placeholder="ID"
        name="userid"
        type="email"
        onChange={(e) => {
          const { value } = e.target;
          setEmail(value);
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
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </StSignupBtn>
        <StLoginBtn
          type="submit"
          onClick={(e) => {
            loginHandler(e);
          }}
        >
          로그인
        </StLoginBtn>
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

export default LogInInput;
const StForm = styled.form`
  display: flex;
  align-items: center;
  padding-top: 10%;
  flex-direction: column;
  width: 100%;
  height: 286px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
const StTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  width: 50%;
  color: var(--color-main);
  font-family: "HeirofLightBold";
`;

const StInput = styled.input`
  width: 74%;
  height: 6.6vh;
  margin-top: 7%;
  border: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: "Oleo Script";
  background: #d9d9d9;
  border-radius: 8px;
  ::placeholder {
    font-family: "Oleo Script";
    font-style: normal;
    font-weight: 800;
    font-size: 1rem;
    text-align: center;
    color: #7c7c7c;
    padding-right: 1em;
  }
`;

const StButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 74%;
  margin-top: 6%;
  font-size: 16px;
`;

const StSignupBtn = styled.button`
  width: 46%;
  height: 36px;
  left: 84px;
  top: 474px;
  font-size: 16px;
  font-weight: 800;
  color: var(--color-gray);
  border: white;
  background: var(--color-light-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const StLoginBtn = styled.button`
  width: 46%;
  height: 36px;
  left: 188px;
  top: 474px;
  font-size: 16px;
  font-weight: 800;
  color: white;
  border: white;
  background: var(--color-main);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const BackBtn = styled.button`
  position: absolute;
  left: 0;
  margin-top: 1vh;
  margin-left: 23vw;
  border: none;
  background-color: transparent;
  width: 25px;
  height: 20px;
`;
const BackIcon = styled(IoIosArrowBack)`
  color: var(--color-gray);
  width: 20px;
  height: 18px;
`;
