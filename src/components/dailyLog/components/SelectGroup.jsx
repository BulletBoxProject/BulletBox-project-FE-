import React, { useState } from "react";
import styled from "styled-components";

import SelectCategory from "../../common/SelectCategory";
import ToggleSwitch from "../../common/ToggleSwitch";

const SelectGroup = () => {
  return (
    <div>
      <SelectDiv>
        <ToggleSwitch />
        <SelectCategory />
      </SelectDiv>
    </div>
  );
};

export default SelectGroup;

const SelectDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
  gap: 15px;
`;
