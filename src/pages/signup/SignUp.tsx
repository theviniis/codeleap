import React, { useContext, useState } from "react";
import { Button, Input, Typography } from "../../components";
import * as S from "./styles";
import { UserContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const context = useContext(UserContext);
  const [username, setUsername] = useState(context.username ?? "");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem("username", username);
    context.setUsername(username);
    if (username) navigate("/main");
  }

  return (
    <S.Wrapper>
      <S.Content as="form" onSubmit={(e) => handleSubmit(e)}>
        <Typography variant="title" as="h2">
          Welcome to CodeLeap network!
        </Typography>
        <Input
          type="text"
          id="input-username"
          label="Please enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button disabled={username.length <= 0 && true}>ENTER</Button>
      </S.Content>
    </S.Wrapper>
  );
};
