import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  *::after, &::before {
    box-sizing: inherit;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    ${({ theme }) => css`
      max-width: ${theme.maxWidth};
      font-family: ${theme.typography.family};
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    `};
    &, * {
      transition: background-color ease-in 150ms;
    }
  }

  button, input {
    font: inherit;
  }

  #root {
    margin: 0 auto;
  }
`;

export default GlobalStyles;
