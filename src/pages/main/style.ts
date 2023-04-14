import styled, { css } from "styled-components";
import { Heading } from "../../components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.lg};
    padding-inline: ${theme.spacing.lg};
    background-color: ${theme.colors.background};
    transition: background-color ease-in 150ms;
  `};
`;

export const Header = styled(Heading)`
  padding-inline: 37px;
  padding-block: 27px;
  height: 80px;
`;
