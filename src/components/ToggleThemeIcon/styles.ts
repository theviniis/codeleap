import styled, { css } from "styled-components";
import { Icon as BaseIcon } from "../Icon";

export const Icon = styled(BaseIcon)`
  ${({ theme }) => css`
    position: fixed;
    bottom: ${theme.spacing.lg};
    right: ${theme.spacing.lg};
    color: ${theme.colors.primary};
    transition: ease-in 150ms;
    background-color: ${theme.colors.background};
    border-radius: 50%;
    padding: ${theme.spacing.xxs};
  `};
`;
