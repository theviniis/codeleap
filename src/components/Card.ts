import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    transition: background-color ease-in 150ms;
    background-color: ${theme.colors.background};
    padding: ${theme.spacing.lg};
    border-style: solid;
    border-width: ${theme.border.width};
    border-color: ${theme.colors.text.disabled};
    border-radius: ${theme.border.radius.md};
    overflow: hidden;
  `};
`;
