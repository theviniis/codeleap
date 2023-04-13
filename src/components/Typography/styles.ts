import styled, { DefaultTheme, css } from "styled-components";
import * as T from "./types";

export const Text = styled.p<T.TypographyProps>`
  ${({ theme, variant, color }) =>
    getTypographyStyles({ theme, variant, color })}
  ${({ truncate }) =>
    truncate &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `};
`;

export function getTypographyStyles({
  theme,
  variant = "paragraph",
  color = "primary",
}: T.TypographyProps & { theme: DefaultTheme }) {
  return css`
    color: ${theme.colors.text[color]};
    font-family: ${theme.typography.family};
    font-size: ${theme.typography[variant].size};
    font-weight: ${theme.typography[variant].weight};
    line-height: ${theme.typography[variant].lineHeight};
  `;
}
