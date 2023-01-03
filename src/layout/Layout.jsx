import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import useScrollPosition from "../hooks/useScrollPosition";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Outlet>{props.children}</Outlet>
      <Footer />
    </>
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

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StLayout = styled.div`
  flex: 1;
  min-height: 80vh;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop || "4.5rem"};
  transition: all ease-in-out 0.2s;
`;

export default Layout;
