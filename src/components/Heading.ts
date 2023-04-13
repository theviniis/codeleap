import styled, { css } from "styled-components";
import { Typography } from "./Typography";

export const Heading = styled(Typography).attrs({
  variant: "title",
  forwardedAs: "h2",
  truncate: true,
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: #fff;
    padding: ${theme.spacing.lg};
    height: 70px;
  `};
`;
