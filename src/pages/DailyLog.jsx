import React from "react";
import styled from "styled-components";

import DailyLogContainer from "../components/dailyLog/screen/DailyLogContainer";

const DailyLog = () => {
  return (
    <Container>
      <DailyLogContainer />
    </Container>
  );
};

export default DailyLog;

const Container = styled.div`
  height: 85vh;
`;
