import React from "react";
import styled from "styled-components";

import MonthlyLogContainer from "../components/monthlyLog/screen/MonthlyLogContainer";

const MonthlyLog = () => {
  return (
    <Container>
      <MonthlyLogContainer />
    </Container>
  );
};

export default MonthlyLog;

const Container = styled.div`
  height: 85vh;
`;
