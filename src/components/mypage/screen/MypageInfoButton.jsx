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
        루 틴
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
  font-size: 14px;
  font-weight: bold;
  padding: 8px 0;
  background: none;
  border: none;
  &:active,
  &:hover {
    border: none;
    border-bottom: 4px solid var(--color-main);
    border-radius: 4px;
  }
`;
