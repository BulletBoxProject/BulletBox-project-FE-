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
      <Outlet>{props.children}</Outlet>
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
  width: 100%;
  /* min-height: 740px; */
  height: 100vh;
  border: 1px solid black;
`;
