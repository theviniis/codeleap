import { DefaultTheme } from "styled-components";

export const colors = {
  white: "#fff",
  black: "#000",
  background: "#fff",
  primary: "#7695EC",
  success: "#47B960",
  error: "#FF5151",
  text: {
    primary: "#000",
    secondary: "#777",
    disabled: "#ccc",
  },
};

export const typography = {
  family: '"Roboto", sans-serif',
  title: {
    size: "22px",
    weight: "700",
    lineHeight: "25.78px",
  },
  username: {
    size: "18px",
    weight: "700",
    lineHeight: "21.09px",
  },
  paragraph: {
    size: "18px",
    weight: "400",
    lineHeight: "21.09px",
  },
  placeholder: {
    size: "14px",
    weight: "400",
    lineHeight: "16.41px",
  },
  label: {
    size: "16px",
    weight: "400",
    lineHeight: "18.75px",
  },
  button: {
    size: "16px",
    weight: "700",
    lineHeight: "18.75px",
  },
} as const;

export const maxWidth = "800px";

export const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "40px",
} as const;

export const border = {
  width: "1px",
  radius: {
    sm: "8px",
    md: "16px",
  },
} as const;

export const themes: {
  light: DefaultTheme;
  dark: DefaultTheme;
} = {
  light: {
    scheme: "light",
    colors,
    typography,
    spacing,
    border,
    maxWidth,
  },
  dark: {
    scheme: "dark",
    colors: {
      ...colors,
      background: "#181818",
      text: {
        primary: "#E6E6E6",
        secondary: "#727272",
        disabled: "#535353",
      },
    },
    typography,
    spacing,
    border,
    maxWidth,
  },
};

declare module "styled-components" {
  export interface DefaultTheme {
    scheme: "light" | "dark";
    colors: typeof colors;
    typography: typeof typography;
    spacing: typeof spacing;
    border: typeof border;
    maxWidth: typeof maxWidth;
  }
}
