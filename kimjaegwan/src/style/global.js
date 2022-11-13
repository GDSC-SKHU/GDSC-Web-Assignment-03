import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0px;
    padding:0px;
   
}
html,body{
    background-color: #eff3f7;
    padding: 10px;
}
a{
    all:unset;
}

`;

export default GlobalStyle;
