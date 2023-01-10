import React from "react";
import styled from "styled-components";

import DailyLogNavi from "../components/DailyLogNavi";
import SelectGroup from "../components/SelectGroup";

const DailyLogContainer = () => {
  return (
    <Container>
      <SelectGroup />
      <DailyLogNavi />
    </Container>
  );
};

export default DailyLogContainer;

const Container = styled.div`
  padding: 30px;
`;
