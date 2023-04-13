import { ReactNode } from "react";
import * as S from "./styles";

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <S.Wrapper>
      <S.Heading>{children}</S.Heading>
    </S.Wrapper>
  );
};
