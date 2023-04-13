import styled from "styled-components";
import * as T from "./types";
import { Typography } from "../Typography";
import { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(Typography).attrs({
  variant: "label",
})`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.xs};
  `}
`;

export const Input = styled(Typography).attrs({
  forwardedAs: "input",
  variant: "placeholder",
})<Omit<T.InputProps, "label">>`
  ${({ theme }) => css`
    display: block;
    max-width: 100%;
    outline: none;
    color: ${theme.colors.text.disabled};
    padding-block: ${theme.spacing.xs};
    padding-inline: 12px;
    border-radius: ${theme.border.radius.sm};
    border-style: solid;
    border-width: ${theme.border.width};
    border-color: ${theme.colors.text.secondary};
    transition: ease-in 150ms;
    &:focus {
      border-color: ${theme.colors.text.primary};
    }
    &:not(:placeholder-shown) {
      color: ${theme.colors.text.secondary};
    }
  `};
`;
