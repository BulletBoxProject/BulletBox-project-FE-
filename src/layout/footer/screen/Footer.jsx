import React, { useState } from "react";
import styled from "styled-components";
import NavigationMenu from "../components/NavigationMenu";

const Footer = () => {
  return (
    <FooterDiv>
      <NavigationMenu />
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 52px;
  bottom: 0;
  margin: 0%, auto;
`;
