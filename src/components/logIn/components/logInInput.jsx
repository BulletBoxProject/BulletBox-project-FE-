
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogInInput = () => {
  const navigate = useNavigate();
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = async (post) => {
    try {
      const data = await axios.post("/api/members/login", post);
      if (data.data.statusCode === 200) {
        return data;
      } else {
        alert("아이디, 비밀번호를 잘못입력하셨습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitBtn = (e) => {
    e.preventDefault();
    if (userid === "" || password === "") {
      alert("아이디, 비밀번호를 확인해주세요.");
      return;
    } else {
    }
    postLogin({
      userid,
      password,
    }).then((res) => {
      if (res === undefined) {
        navigate(`/login`);
      } else {
        navigate(`/`);
      }
    });
  };

  return (
    <StForm>
      <StTitle>로그인</StTitle>
      <Stlabel>아이디</Stlabel>
      <StInput
        name="userid"
        type="email"
        onChange={(e) => {
          const { value } = e.target;
          setUserId(value);
        }}
      ></StInput>
      <Stlabel>비밀번호</Stlabel>
      <StInput
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
          onClick={() => {
            onSubmitBtn();
          }}
        >
          로그인
        </StSignupBtn>
        <StSignupBtn>회원가입</StSignupBtn>
      </StButtonBox>
    </StForm>
  );
};

export default LogInInput;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 100px 100px 130px 100px;
  border: 2px solid var(--color3);
  border-radius: 10px;
`;
const StTitle = styled.div`
  font-size: 10px;
  margin: 30px 50px 20px 50px;
  padding: 50px 50px 20px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const Stlabel = styled.label`
  margin: 15px 0 10px 0;
  color: white;
`;

const StInput = styled.input`
  margin: 10px 10px 10px 0px;
  padding: 5px 0px 5px 0px;
`;

const StSignupBtn = styled.button`
  height: 40px;
  width: 90px;
  margin: 5px 0 0 10px;
  flex-direction: row;
`;
const StButtonBox = styled.div`
  margin: 20px 0px 0 60px;
`;
