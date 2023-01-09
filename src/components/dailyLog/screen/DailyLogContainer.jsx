import React from "react";
import styled from "styled-components";

import DailyLogNavi from "../components/DailyLogNavi";

const DailyLogContainer = () => {
  return (
    <Container>
      <DailyLogNavi />
    </Container>
  );
};

export default DailyLogContainer;

const Container = styled.div`
  padding: 30px;
`;
