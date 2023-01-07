import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "./usDetectClose";
import { ReactComponent as icon } from "../../../img/Menu_Icon.svg";

const DropdownMenu = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={myPageHandler} ref={myPageRef}>
          <IconImg />
        </DropdownButton>
        <Menu isDropped={myPageIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="#1-1">공지사항</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="#1-3">마이페이지</LinkWrapper>
            </Li>

            <Li>
              <LinkWrapper href="#1-2">카테고리</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="#1-3">자주쓰는할일</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="#1-3">도움말</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="#1-3">로그아웃</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
      </DropdownContainer>
    </Wrapper>
  );
};

export default DropdownMenu;

const Wrapper = styled.div`
  display: flex;
  color: black;
  font-size: 10px;
  background: white;
  width: 20px;
  font-weight: bold;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;
const IconImg = styled(icon)`
  align-content: center;
  background-size: cover;
  width: 40px;
  & path {
    fill: var(--color3);
  }
`;

const Menu = styled.div`
  background: white;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: black;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
  font-size: 11px;
  text-decoration: none;
  color: black;
`;
