import { DefaultTheme } from "styled-components";

export const colors = {
  background: '#fff',
  primary: '#7695EC',
  success: '#47B960',
  error: '#FF5151',
  text: {
    primary: '#000',
    secondary: '#777',
    disabled: '#ccc'
  }
};

export const typography = {
  family: '"Roboto", sans-serif',
  title: {
    size: '22px',
    weight: '700',
    lineHeight: '25.78px',
  },
  username: {
    size: '18px',
    weight: '700',
    lineHeight: '21.09px',
  },
  paragraph: {
    size: '16px',
    weight: '400',
    lineHeight: '18.75px',
  },
  placeholder: {
    size: '14px',
    weight: '400',
    lineHeight: '16.41px',
  },
  button: {
    size: '16px',
    weight: '700',
    lineHeight: '18.75px',
  },
} as const;

export const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
} as const;

export const border = {
  width: '1px',
  radius: {
    sm: '8px',
    md: '16px',
  }
} as const;

export const themes: {
  light: DefaultTheme;
  dark: DefaultTheme;
} = {
  light: {
    scheme: 'light',
    colors,
    typography,
    spacing,
    border
  },
  dark: {
    scheme: 'dark',
    colors: {
      ...colors,
      background: '#000',
      text: {
        primary: '#fff',
        secondary: '#777',
        disabled: '#ccc'
      },
    },
    typography,
    spacing,
    border
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    scheme: 'light' | 'dark';
    colors: typeof colors;
    typography: typeof typography;
    spacing: typeof spacing;
    border: typeof border;
  }
}
