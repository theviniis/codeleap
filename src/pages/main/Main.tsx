import React, { useContext } from "react";
import * as S from "./style";
import { Heading, Loading, NewPost, Post } from "../../components";
import { PostsContext } from "../../context/PostsContext";

export const Main = () => {
  const { posts, isLoading } = useContext(PostsContext);
  return (
    <S.Wrapper>
      <Heading>CodeLeap Network</Heading>
      <NewPost />
      {isLoading && <Loading />}
      {posts &&
        !isLoading &&
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            username={post.username}
            created={post.created_datetime}
            content={post.content}
          />
        ))}
    </S.Wrapper>
  );
};
