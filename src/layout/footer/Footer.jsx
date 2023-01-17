import React, { useState } from "react";
import styled from "styled-components";
import NavigationMenu from "../../components/common/NavigationMenu";

const Footer = () => {
  return (
    <FooterDiv>
      <NavigationMenu />
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  background-color: var(--color-main);
`;
