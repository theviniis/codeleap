import styled from "styled-components";
import { Card } from "../../components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Content = styled(Card).attrs({ forwardedAs: "form" })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
