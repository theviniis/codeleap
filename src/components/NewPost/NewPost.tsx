import React, { useContext, useState } from "react";
import { Typography } from "../Typography";
import { Input } from "../Input";
import { TextArea } from "../Textarea";
import { Button } from "../Button";
import * as S from "./styles";
import { UserContext } from "../../context";
import { PostsContext } from "../../context/PostsContext";

export const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { username } = useContext(UserContext);
  const { NEW_POST } = useContext(PostsContext);

  const newPost = {
    username,
    title,
    content,
  } as const;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTitle("");
    setContent("");
    NEW_POST(newPost);
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
        rows={4}
        cols={50}
      />
      <Button disabled={(title.length <= 0 || content.length <= 0) && true}>
        {"Create"}
      </Button>
    </S.NewPost>
  );
};
