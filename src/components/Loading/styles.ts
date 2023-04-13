import styled from "styled-components";
import { css } from "styled-components";

export const CircleLoading = styled.svg`
  ${({ theme }) => css`
    --size: ${theme.spacing.md};
    --clr-primary: ${theme.colors.primary};
    --clr-background: ${theme.colors.text.disabled};
  `};

  display: block;
  width: var(--size);
  transform-origin: center;
  animation: rotate4 2s linear infinite;
  margin: 0 auto;

  circle {
    fill: none;
    stroke: var(--clr-primary);
    stroke-width: var(--border-width-md);
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
  }

  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`;
