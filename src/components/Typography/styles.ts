import styled, { css } from "styled-components";
import * as T from './types'

export const Text = styled.p<T.TypographyProps>`
  ${({ theme, variant }) => {
    return css`
      font-family: ${theme.typography.family};
      font-size: ${theme.typography[variant].size};
      font-weight: ${theme.typography[variant].weight};
      line-height: ${theme.typography[variant].lineHeight};
    `
  }};
`
