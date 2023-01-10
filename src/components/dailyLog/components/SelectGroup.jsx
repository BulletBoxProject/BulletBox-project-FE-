import React, { useState } from "react";
import styled from "styled-components";

import SelectCategory from "../../common/SelectCategory";

const SelectGroup = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleHandler = () => {
    setToggleState(!toggleState);
  };
  return (
    <div>
      <SelectDiv>
        <ToggleDiv toggleState={toggleState}>
          <ToggleSwitch onClick={toggleHandler} type="button" />
        </ToggleDiv>
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
const ToggleDiv = styled.div`
  font-size: 12px;
  width: 3em;
  height: 1.5em;
  background-color: ${({ toggleState }) => (toggleState ? "green" : "red")};
  border: 1px solid #eeeeee;
  border-radius: 10px;
  display: flex;
  justify-content: ${({ toggleState }) =>
    toggleState ? "flex-end" : "flex-start"};
`;
const ToggleSwitch = styled.button`
  width: 1.3em;
  height: 1.3em;
  border: 1px solid #efefef;
  border-radius: 100%;
`;
