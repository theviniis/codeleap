import styled, { css } from "styled-components";
import { Card } from "../Card";
import { Typography } from "../Typography";
import { Heading } from "../Heading";

export const Wrapper = styled(Card)`
  padding: 0;
`;

export const Header = styled(Heading)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const IconsContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 34.2px;
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const UserContainer = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing.xs};
    color: ${theme.colors.text.secondary};
    margin-block-end: ${theme.spacing.md};
  `};
`;

export const Username = styled(Typography).attrs({
  variant: "username",
  truncate: true,
})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Created = styled(Typography).attrs({
  variant: "username",
  truncate: true,
})`
  font-weight: 400;
  white-space: nowrap;
`;

export const PostContent = styled(Typography).attrs({ variant: "paragraph" })`
  white-space: pre-line;
`;

export const PopUp = styled.div`
  p {
    margin-block-end: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;
`;

export const EditModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;
