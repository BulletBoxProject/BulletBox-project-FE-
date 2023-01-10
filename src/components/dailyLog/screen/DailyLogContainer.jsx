import React from "react";
import styled from "styled-components";

import NavigationMenu from "../../common/NavigationMenu";
import SelectGroup from "../components/SelectGroup";

const DailyLogContainer = () => {
  return (
    <Container>
      <SelectGroup />
      <NavigationMenu />
    </Container>
  );
};

export default DailyLogContainer;

const Container = styled.div`
  padding: 30px;
`;
