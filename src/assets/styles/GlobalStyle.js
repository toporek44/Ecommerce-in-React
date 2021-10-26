import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 62.5%;


    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  } 
  
  body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    position: relative;
    font-size: 1.6rem;
    line-height: 1.5;
  }
  
  a, button, input {
    font-family: 'Montserrat', sans-serif;
  }
`;
