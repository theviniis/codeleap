import styled from "styled-components";
import { Typography } from "../Typography";
import { css } from "styled-components";
import { getTypographyStyles } from "../Typography/styles";

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

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    background: none;
    outline: none;
    padding-block: ${theme.spacing.xs};
    padding-inline: 12px;
    border-radius: ${theme.border.radius.sm};
    border-style: solid;
    border-width: ${theme.border.width};
    border-color: ${theme.colors.text.secondary};
    transition: ease-in 150ms;
    resize: none;
    &:focus {
      border-color: ${theme.colors.text.primary};
    }
    &:not(:placeholder-shown) {
      color: ${theme.colors.text.secondary};
    }
    ${getTypographyStyles({
      theme,
      variant: "placeholder",
      color: "disabled",
    })};
  `};
`;
