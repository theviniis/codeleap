import styled, { css } from "styled-components";
import { Heading, Icon } from "../../components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.lg};
    padding-inline: ${theme.spacing.lg};
    background-color: ${theme.colors.background};
  `};
`;
export const Header = styled(Heading)`
  padding-inline: 37px;
  padding-block: 27px;
  height: 80px;
`;

export const ThemeIcon = styled(Icon)`
  ${({ theme }) => css`
    position: fixed;
    bottom: ${theme.spacing.lg};
    right: ${theme.spacing.lg};
    color: ${theme.colors.primary};
    transition: ease-in 150ms;
  `};
`;
