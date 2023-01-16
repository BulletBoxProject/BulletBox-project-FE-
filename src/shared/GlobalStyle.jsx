import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-black: #111111;
  --color-main: #F0A13B;
  --color-dark-gray: #3E3E3E;
  --color-light-gray: #D9D9D9;
}
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap');
@import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');
@font-face {
  font-family: 'HeirofLightBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/HeirofLightBold.woff') format('woff');
}

*{
  font-family: 'NanumSquare', serif;
}

body, div, button{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 10px;
  max-width: 400px;
  max-height: 900px;
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
