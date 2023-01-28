import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../img/myPage/logo-graphic.svg";
import { baseURLApiV1 } from "../../../core/api";
import { useNavigate } from "react-router-dom";
import MypageLogout from "./MypageLogout";

const MypageContainer = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNicknmae] = useState("");
  const navigate = useNavigate();

  const getMypage = async () => {
    try {
      const data = await baseURLApiV1.get("/mypages");
      if (data.data.httpStatusCode === 200) {
        setEmail(data.data.data.email);
        setNicknmae(data.data.data.nickname);
      }
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };
  useEffect(() => {
    getMypage();
  }, []);

  return (
    <Container>
      <MyInfo>
        <LogoDiv>
          <MainLogo />
        </LogoDiv>
        <MyDetailInfo>
          <NicknameTag>{nickname}</NicknameTag>
          <EmailTag>{email}</EmailTag>
        </MyDetailInfo>
        <MypageLogout />
      </MyInfo>
    </Container>
  );
};

export default MypageContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MyInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
  padding-left: 27px;
  padding-bottom: 20px;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid var(--color-default);
`;
const MyDetailInfo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 123px;
  height: 41px;
  margin-left: 14px;
  font-size: 14px;
  letter-spacing: 0.4px;
`;

const LogoDiv = styled.div`
  width: 48px;
  height: 48px;
`;
const MainLogo = styled(Logo)`
  fill: white;
  background-color: var(--color-main);
  border-radius: 50%;
`;

const NicknameTag = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const EmailTag = styled.span`
  font-size: 12px;
  color: #7c7c7c;
  font-weight: bold;
`;
