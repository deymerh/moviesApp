import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  .activated{
    border-bottom: 1.5px solid black;
  }
`;