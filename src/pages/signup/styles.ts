import styled from "styled-components";
import { Card } from "../../components";

export const Wrapper = styled(Card).attrs({ forwardedAs: "form" })`
  max-width: 500px;
  h2 {
    margin-block-end: ${({ theme }) => theme.spacing.lg};
  }
  button {
    display: block;
    margin-inline-start: auto;
    margin-block-start: ${({ theme }) => theme.spacing.md};
  }
`;
