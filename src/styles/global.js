import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    background-color: black;
  }

  body, button {
    font-size: 16px;
  }
`;
