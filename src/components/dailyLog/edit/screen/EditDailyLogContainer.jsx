import React from "react";
import styled from "styled-components";

import EditTodoInput from "../components/EditTodoInput";

const EditDailyLogContainer = () => {
  return (
    <Container>
      <EditTodoInput />
    </Container>
  );
};

export default EditDailyLogContainer;

const Container = styled.div`
  font-family: cursive;
`;
