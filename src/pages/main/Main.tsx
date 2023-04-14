import { memo, useContext } from "react";
import * as S from "./style";
import { Loading, NewPost, Post as P, ToggleThemeIcon } from "../../components";
import { PostsContext } from "../../context";

const Post = memo(P);

export const Main = () => {
  const { posts, isLoading } = useContext(PostsContext);

  return (
    <S.Wrapper>
      <S.Header title="CodeLeap Network" />
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
      <ToggleThemeIcon />
    </S.Wrapper>
  );
};
