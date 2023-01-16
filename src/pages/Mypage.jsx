import React, { useState } from "react";
import styled from "styled-components";
import MypageContainer from "../components/mypage/screen/MypageContainer";
import MypageInfoButton from "../components/mypage/screen/MypageInfoButton";
import MypageInfoScreen from "../components/mypage/screen/MypageInfoScreen";

const Mypage = () => {
  const [showInfo, setShowInfo] = useState(1);

  return (
    <Container>
      <MypageContainer />
      <MypageInfoBox>
        <MypageInfoButton showInfo={showInfo} setShowInfo={setShowInfo} />
        <MypageInfoScreen showInfo={showInfo} />
      </MypageInfoBox>
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  height: 80vh;
  margin: 5%;
`;

const MypageInfoBox = styled.div`
  margin-top: 15%;
`;
