import React from "react";
import styled from "styled-components";

import AddDailyLogContainer from "../components/dailyLog/add/screen/AddDailyLogContainer";

const AddDailyLog = () => {
  return (
    <Container>
      <AddDailyLogContainer />
    </Container>
  );
};

export default AddDailyLog;

const Container = styled.div`
  height: 85vh;
`;
