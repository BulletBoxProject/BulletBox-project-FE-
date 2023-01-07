import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-black: #111111;
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
  font-size: 10px;
}

button {
  cursor: pointer;
  outline: none;
}

a{
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}


`;

export default GlobalStyle;
