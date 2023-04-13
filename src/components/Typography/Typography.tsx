import React from "react";
import * as T from "./types";
import * as S from "./styles";

export const Typography: React.FC<T.TypographyProps> = ({
  variant = "paragraph",
  children,
  truncate,
  ...props
}) => {
  return (
    <S.Text variant={variant} truncate={truncate} {...props}>
      {children}
    </S.Text>
  );
};
