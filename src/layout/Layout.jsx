import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./header/screen/Header";
import Footer from "./footer/screen/Footer";
// import useScrollPosition from "../hooks/useScrollPosition";

const Layout = (props) => {
  return (
    <Container>
      <PageContainer>
        <Header />
        <PageContainerBox>
          <Outlet>{props.children}</Outlet>
        </PageContainerBox>
        <Footer />
      </PageContainer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--color-light-gray);
`;
const PageContainer = styled.div`
  width: 360px;
  height: 740px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  background-color: white;
`;

const PageContainerBox = styled.div`
  width: 360px;
  height: 616px;
  background-color: white;
  padding: 0 2%;
  overflow: auto;
`;
