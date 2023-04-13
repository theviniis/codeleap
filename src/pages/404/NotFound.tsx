import React from "react";
import * as S from "./styles";
import { Button, Typography } from "../../components";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    navigate("/");
  }

  return (
    <S.Wrapper>
      <S.Content>
        <Typography variant="title" as="h2">
          Sorry, there is not for you here
        </Typography>
        <Typography variant="paragraph">
          We highly recommend you to return to home
        </Typography>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleClick(e)
          }
        >
          Go Home
        </Button>
      </S.Content>
    </S.Wrapper>
  );
};
