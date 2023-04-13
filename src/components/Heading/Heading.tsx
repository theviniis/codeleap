import { ReactNode } from "react";
import * as S from "./styles";

export const Heading = ({
  children,
  title,
  className,
}: {
  children?: ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <S.Wrapper className={className}>
      <S.Heading>{title}</S.Heading>
      {children}
    </S.Wrapper>
  );
};
