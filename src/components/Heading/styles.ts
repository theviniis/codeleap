import styled, { css } from "styled-components";
import { Typography } from "../Typography";

export const Wrapper = styled.div`
  /* max-width: 100%; */
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacing.lg};
    height: 70px;
  `}
`;

export const Heading = styled(Typography).attrs({
  variant: "title",
  forwardedAs: "h2",
  truncate: true,
})`
  color: #fff;
`;
