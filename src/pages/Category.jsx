import React from "react";
import styled from "styled-components";
import CategoryContainer from "../components/category/screen/CategoryContainer";

const Category = () => {
  return (
    <Container>
      <CategoryContainer />
    </Container>
  );
};

export default Category;

const Container = styled.div`
  height: 85vh;
`;
