import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-black: #111111;
  --color-main: #FF9000;
  --color-gray: #7C7C7C;
  --color-dark-gray: #3E3E3E;
  --color-light-gray: #D9D9D9;
  --color-default: #F6F6F6;
  --color-likeWhite: #EBEBEB; 
  --color-c1-gray: #C1C1C1;
  --shadow-box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
}
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap');
@import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');
@font-face {
  font-family: 'HeirofLightBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/HeirofLightBold.woff') format('woff');
}
@font-face { font-family: 'NanumGothic';
src: url('/fonts/NanumGothic.eot');
src: url('/fonts/NanumGothic.eot') format('embedded-opentype'),
url('/fonts/NanumGothic.woff') format('woff');}

*{
  font-family: 'NanumSquare';
}
body{    
      margin: 0;
      height: 100vh;
      color: black;
      display: flex;
      align-items: center !important;
      justify-content: center;
      background-color: #d9d9d9;
    }
  
 div, button{
  box-sizing: border-box;
  font-size: 10px;
}

input {
  text-indent: 1em
}

input:focus{
  outline: none;
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
&::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

`;

export default GlobalStyle;
