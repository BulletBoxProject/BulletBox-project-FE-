import React from "react";
import styled from "styled-components";

import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const DailyLogNavi = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonGroup>
        <Button
          width={"30%"}
          height={"10vh"}
          borderRadius={"10px"}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          width={"30%"}
          height={"10vh"}
          borderRadius={"10px"}
          onClick={() => navigate("/dailys")}
        >
          Daily <br />
          Log
        </Button>
        <Button
          width={"30%"}
          height={"10vh"}
          borderRadius={"10px"}
          onClick={() => navigate("/monthlys")}
        >
          Monthly <br />
          Log
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default DailyLogNavi;

const Container = styled.div`
  width: 100%;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
