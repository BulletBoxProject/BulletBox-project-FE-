import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./header/screen/Header";
import Footer from "./footer/Footer";
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
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

const PageContainer = styled.div`
  height: 85vh;
  margin-top: 17%;
  padding: 0 3.9% 4.05vh 3.9%;
`;
