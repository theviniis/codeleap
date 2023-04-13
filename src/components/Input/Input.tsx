import React from "react";
import * as T from "./types";
import * as S from "./styles";

export const Input: React.FC<T.InputProps> = ({
  type = "text",
  label = "",
  id = crypto.randomUUID(),
  placeholder = "",
  value = "",
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <S.Wrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </S.Wrapper>
  );
};
