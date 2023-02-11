import React from "react";
import styled from "styled-components";

import AddTodoInput from "../components/AddTodoInput";

const AddDailyLogContainer = () => {
  return (
    <Container>
      <AddTodoInput />
    </Container>
  );
};

export default AddDailyLogContainer;

const Container = styled.div`
  font-family: cursive;
`;
