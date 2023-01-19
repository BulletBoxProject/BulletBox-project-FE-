import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../img/logo/logo-graphic.svg";
import { baseURLApiV1 } from "../../../core/api";
import { useNavigate } from "react-router-dom";

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
          <p>{nickname}</p>
          <p>{email}</p>
        </MyDetailInfo>
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
`;
const MyDetailInfo = styled.div`
  margin-left: 5%;
  font-size: 0.8rem;
`;

const MainLogo = styled(Logo)`
  fill: white;
  width: 25%;
  height: 11vh;
  background-color: var(--color-main);
  border-radius: 50%;
`;
