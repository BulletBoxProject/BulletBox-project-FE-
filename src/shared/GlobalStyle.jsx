import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-black: #111111;
  --color-gray: #aaa;
  --color-light-gray : #e1e1e1;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@font-face {
  font-family:'korean';
  src: url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');
}

body{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  height: 100vh;
}

button {
  cursor: pointer;
  outline: none;
}

input {
  outline: none;
  padding-left: 1rem;
}

a{
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

`;

export default GlobalStyle;
