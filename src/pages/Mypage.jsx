import React, { useState } from "react";
import styled from "styled-components";
import AlwaysAddBtn from "../components/mypage/components/alwaystodo/components/AlwaysAddBtn";
import CategoryAddBtn from "../components/mypage/components/category/components/CategoryAddBtn";
import MypageContainer from "../components/mypage/screen/MypageContainer";
import MypageInfoButton from "../components/mypage/screen/MypageInfoButton";
import MypageInfoScreen from "../components/mypage/screen/MypageInfoScreen";

const Mypage = () => {
  const [showInfo, setShowInfo] = useState(1);

  return (
    <>
      <MypageContainer />
      <MypageInfoBox>
        <MypageInfoButton showInfo={showInfo} setShowInfo={setShowInfo} />
        <MypageInfoScreen showInfo={showInfo} />
      </MypageInfoBox>
      <AddBtnContainer>
        {" "}
        {showInfo === 1 ? <CategoryAddBtn /> : <AlwaysAddBtn />}
      </AddBtnContainer>
    </>
  );
};

export default Mypage;

const MypageInfoBox = styled.div`
  margin-top: 10px;
`;

const AddBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;
