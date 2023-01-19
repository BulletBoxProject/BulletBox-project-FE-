import React, { useState } from "react";
import styled from "styled-components";
import MypageContainer from "../components/mypage/screen/MypageContainer";
import MypageInfoButton from "../components/mypage/screen/MypageInfoButton";
import MypageInfoScreen from "../components/mypage/screen/MypageInfoScreen";
import MypageLogout from "../components/mypage/screen/MypageLogout";

const Mypage = () => {
  const [showInfo, setShowInfo] = useState(1);

  return (
    <div>
      <MypageContainer />
      <MypageInfoBox>
        <MypageInfoButton showInfo={showInfo} setShowInfo={setShowInfo} />
        <MypageInfoScreen showInfo={showInfo} />
        <MypageLogout />
      </MypageInfoBox>
    </div>
  );
};

export default Mypage;

const MypageInfoBox = styled.div`
  margin-top: 15%;
`;
