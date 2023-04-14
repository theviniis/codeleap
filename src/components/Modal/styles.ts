import styled from "styled-components";
import { Card } from "../Card";

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  z-index: 10;
`;

export const Backdrop = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.text.secondary};
  opacity: 0.8;
`;

export const Modal = styled(Card)`
  z-index: 20;
  width: clamp(300px, 50vw, 660px);
  transition: ease-in 150ms;
  animation: slideForward 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slideForward {
    from {
      opacity: 0;
      transform: scale(0.75) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
