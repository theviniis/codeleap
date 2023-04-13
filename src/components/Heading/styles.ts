import styled, { css } from "styled-components";
import { Typography } from "../Typography";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacing.lg};
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing.md};
  `}
`;

export const Heading = styled(Typography).attrs({
  variant: "title",
  forwardedAs: "h2",
  truncate: true,
})`
  color: #fff;
`;
