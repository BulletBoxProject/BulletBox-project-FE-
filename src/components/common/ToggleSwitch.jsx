import React, { useState } from "react";
import styled from "styled-components";

const ToggleSwitch = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleHandler = () => {
    setToggleState(!toggleState);
  };
  return (
    <div>
      <ToggleDiv toggleState={toggleState}>
        <ToggleButton onClick={toggleHandler} type="button" />
      </ToggleDiv>
    </div>
  );
};

export default ToggleSwitch;

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
const ToggleButton = styled.button`
  width: 1.3em;
  height: 1.3em;
  border: 1px solid #efefef;
  border-radius: 100%;
`;
