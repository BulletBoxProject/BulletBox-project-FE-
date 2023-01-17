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
  padding: 0 3.9% 4.05vh 3.9%;
`;
