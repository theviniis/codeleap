import React from "react";
import * as T from "./types";
import * as S from "./styles";

export const TextArea: React.FC<T.TextAreaProps> = ({
  type = "text",
  label = "",
  id = crypto.randomUUID(),
  placeholder = "",
  value = "",
  cols,
  rows,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <S.Wrapper>
      <S.Label forwardedAs="label" htmlFor={id}>
        {label}
      </S.Label>
      <S.TextArea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        cols={cols}
        rows={rows}
        {...props}
      />
    </S.Wrapper>
  );
};
