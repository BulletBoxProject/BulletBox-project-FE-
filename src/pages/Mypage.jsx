import React, { useState } from "react";
import styled from "styled-components";
import MypageContainer from "../components/mypage/screen/MypageContainer";
import MypageInfoButton from "../components/mypage/screen/MypageInfoButton";
import MypageInfoScreen from "../components/mypage/screen/MypageInfoScreen";
import CategoryAddBtn from "../components/mypage/components/category/components/CategoryAddBtn";

const Mypage = () => {
  const [showInfo, setShowInfo] = useState(1);

  return (
    <div>
      <MypageContainer />
      <MypageInfoBox>
        <MypageInfoButton showInfo={showInfo} setShowInfo={setShowInfo} />
        <MypageInfoScreen showInfo={showInfo} />
      </MypageInfoBox>
      <CategoryAddBtn />
    </div>
  );
};

export default Mypage;

const MypageInfoBox = styled.div`
  margin-top: 5%;
`;
