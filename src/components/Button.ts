import styled from "styled-components";
import { getTypographyStyles } from "./Typography/styles";
import { css } from "styled-components";
import { DefaultTheme } from "styled-components";

export type BUTTON_SKINS = "outlined" | "error" | "success" | "primary";

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  skin?: BUTTON_SKINS;
  autofocus?: boolean;
}

export const Button = styled.button<Pick<ButtonProps, "skin" | "autoFocus">>`
  border: none;
  cursor: pointer;
  transition: ease-in 150ms;
  border-style: solid;
  ${({ theme, skin }) => css`
    ${getTypographyStyles({ theme, variant: "button" })};
    ${setSkin(theme, skin)};
    border-width: ${theme.border.width};
    min-width: 120px;
    height: 32px;
    border-radius: ${theme.border.radius.sm};
    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      background-color: ${theme.colors.text.disabled};
      border-color: ${theme.colors.text.disabled};
    }
    &:focus {
      outline: ${theme.border.width} solid ${theme.colors.text.primary};
    }
  `};
`;

function setSkin(theme: DefaultTheme, skin: BUTTON_SKINS = "primary") {
  const { colors } = theme;
  const styles = {
    outlined: {
      background: "transparent",
      border: "#999",
      color: colors.text.primary,
    },
    primary: {
      background: colors.primary,
      border: colors.primary,
      color: colors.white,
    },
    error: {
      background: colors.error,
      border: colors.error,
      color: colors.white,
    },
    success: {
      background: colors.success,
      border: colors.success,
      color: colors.white,
    },
  } as const;

  return css`
    background-color: ${styles[skin].background};
    border-color: ${styles[skin].border};
    color: ${styles[skin].color};
  `;
}
