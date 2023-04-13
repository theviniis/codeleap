import { ReactNode } from "react";
import * as S from "./styles";

export const Heading = ({
  children,
  title,
}: {
  children?: ReactNode;
  title: string;
}) => {
  return (
    <S.Wrapper>
      <S.Heading>{title}</S.Heading>
      {children}
    </S.Wrapper>
  );
};
