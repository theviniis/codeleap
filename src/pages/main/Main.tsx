import React, { useMemo } from "react";
import * as S from "./style";
import { Heading, Loading, NewPost, Post } from "../../components";
import { GET_POSTS, useFetch } from "../../actions";

export type PostProps = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    content: string;
    created_datetime: Date;
    id: number;
    title: string;
    username: string;
  }>;
};

export const Main = () => {
  const { data, loading, request } = useFetch<PostProps>();

  useMemo(() => {
    const { url, options } = GET_POSTS();
    request(url, options);
  }, [request]);

  return (
    <S.Wrapper>
      <Heading>CodeLeap Network</Heading>
      <NewPost />
      {loading && <Loading />}
      {data &&
        !loading &&
        data.results.map((post) => (
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
