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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ theme }) => css`
      font-family: ${theme.typography.family};
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    `}
  }

  button, input {
    font: inherit;
  }

  #root {
    width: 100%;
    max-width: ${({ theme }) => theme.maxWidth};
  }
`;

export default GlobalStyles;
