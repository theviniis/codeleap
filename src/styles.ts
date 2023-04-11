import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  *::after, &::before {
    box-sizing: inherit;
  }
  html {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    margin-inline: 0;
    padding-inline: 0;
    font-family: "Roboto", sans-serif;
  }
  button, input {
    font: inherit;
  }
`

export default GlobalStyles
