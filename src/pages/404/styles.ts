import styled from "styled-components";
import { Card } from "../../components";

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;

export const Content = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & button {
    align-self: flex-end;
  }
`;
