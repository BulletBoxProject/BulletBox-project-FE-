import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./header/screen/Header";
import Footer from "./footer/screen/Footer";
// import useScrollPosition from "../hooks/useScrollPosition";

const Layout = (props) => {
  return (
    <Container>
      <Header />
      <PageContainer>
        <Outlet>{props.children}</Outlet>
      </PageContainer>
      <Footer />
    </Container>
  );
};

// const Layout = () => {
//   const scrollPosition = useScrollPosition();
//   return (
//     <Container>
//       <Header />
//       <StLayout marginTop={scrollPosition <= 36 && "7.7rem"}>
//         <Outlet />
//       </StLayout>
//       <Footer />
//     </Container>
//   );
// };

export default Layout;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const PageContainer = styled.div`
  height: 85vh;
  margin-top: 17%;
  padding: 0 2% 4.05vh 2%;
  overflow: auto;
`;
