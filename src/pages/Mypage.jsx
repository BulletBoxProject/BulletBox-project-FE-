import React from "react";
import styled from "styled-components";
import MypageContainer from "../components/mypage/screen/MypageContainer";

const Mypage = () => {
  return (
    <Container>
      <MypageContainer />
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  height: 85vh;
`;
