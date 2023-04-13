import React, { useContext, useState } from "react";
import { Typography } from "../Typography";
import { Input } from "../Input";
import { TextArea } from "../Textarea";
import { Button } from "../Button";
import * as S from "./styles";
import { UserContext } from "../../context";
import { NEW_POST, useFetch } from "../../actions";
import { Loading } from "../Loading";

export const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { username } = useContext(UserContext);
  const { request, loading } = useFetch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { url, options } = NEW_POST({
      username,
      title,
      content,
    });
    request(url, options);
  }

  return (
    <S.NewPost as="form" onSubmit={(e) => handleSubmit(e)}>
      <Typography variant="title" as="h2">
        What's on your mind?
      </Typography>
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        disabled={(title.length <= 0 || content.length <= 0 || loading) && true}
      >
        {loading ? <Loading /> : "Create"}
      </Button>
    </S.NewPost>
  );
};
