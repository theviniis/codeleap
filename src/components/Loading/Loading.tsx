import React from "react";
import * as T from "./types";
import * as S from "./styles";

export const Loading: React.FC<T.LoadingProps> = () => {
  return (
    <S.CircleLoading viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </S.CircleLoading>
  );
};
