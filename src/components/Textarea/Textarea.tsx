import React from "react";
import * as T from "./types";
import * as S from "./styles";

export const TextArea: React.FC<T.TextAreaProps> = ({
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
      <S.TextArea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      ></S.TextArea>
    </S.Wrapper>
  );
};
