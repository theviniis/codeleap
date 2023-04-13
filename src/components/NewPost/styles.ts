import styled from "styled-components";
import { Card } from "../Card";

export const NewPost = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  button {
    margin-inline-start: auto;
  }
`;
