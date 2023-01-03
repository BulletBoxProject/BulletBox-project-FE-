import React from "react";
import styled from "styled-components";

const SocialLoginButton = ({ title, linkTo, color, background, border }) => {
  return (
    <a href={linkTo}>
      <Button color={color} background={background} border={border}>
        {title}
      </Button>
    </a>
  );
};

const Button = styled.button`
  width: 200px;
  margin: 5px 0 0 5px;
  /* margin: 5px 0 0 10px; */
  border: ${({ border }) => border || "0"};
  border-radius: 2px;
  font-size: 0.8rem;
  color: ${({ color }) => color || "var(--color-black"};
  text-align: center;
  height: 34px;
  line-height: 33px;
  padding: 1px 0 0 45px;
  background: ${({ background }) =>
    background ||
    "white url(https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU) no-repeat 11px 1px"};
  background-size: auto 33px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export default SocialLoginButton;
