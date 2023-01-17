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
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  bottom: 0;
  right: 0;
  margin-right: 7%;
  background-color: var(--color-main);
`;
