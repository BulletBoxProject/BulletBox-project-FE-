import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../img/logo/logo-graphic.svg";
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
        <MainLogo />
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
  margin-left: 6%;
  margin-top: 4%;
  padding-bottom: 5%;
  border-bottom: 1px solid var(--color-default);
`;
const MyDetailInfo = styled.div`
  margin-left: 5%;
  font-size: 0.8rem;
`;

const MainLogo = styled(Logo)`
  fill: white;
  width: 20.5%;
  height: 8.66vh;
  background-color: var(--color-main);
  border-radius: 50%;
`;

const NicknameTag = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;

const EmailTag = styled.p`
  font-size: 0.7rem;
  color: #7c7c7c;
  font-weight: bold;
`;
