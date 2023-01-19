import React from "react";
import styled from "styled-components";

const MypageInfoButton = ({ showInfo, setShowInfo }) => {
  return (
    <Container>
      <Button
        onClick={() => {
          setShowInfo(1);
        }}
      >
        내 카테고리
      </Button>
      <Button
        onClick={() => {
          setShowInfo(2);
        }}
      >
        자주 쓰는 할일
      </Button>
    </Container>
  );
};

export default MypageInfoButton;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  flex: 1;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.5rem;
  background: none;

  border-top: 1px solid var(--color-light-gray);
  border-left: 1px solid var(--color-light-gray);
  border-right: 1px solid var(--color-light-gray);
  border-bottom: 1px solid var(--color-light-gray);
  &:active,
  &:hover {
    border-bottom: 4px solid var(--color-main);
  }
`;
