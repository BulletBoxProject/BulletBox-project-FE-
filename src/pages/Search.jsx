import React from "react";
import styled from "styled-components";
import SearchContainer from "../components/search/screen/SearchContainer";

const Search = () => {
  return (
    <Container>
      <SearchContainer />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  height: 85vh;
`;
