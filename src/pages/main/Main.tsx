import { memo, useContext } from "react";
import * as S from "./style";
import { Loading, NewPost, Post as P } from "../../components";
import { PostsContext, ThemeContext } from "../../context";
import { ReactComponent as DarkIcon } from "../../assets/icons/dark_mode.svg";
import { ReactComponent as LightIcon } from "../../assets/icons/light_mode.svg";

const Post = memo(P);

export const Main = () => {
  const { posts, isLoading } = useContext(PostsContext);
  const { scheme, toggleTheme } = useContext(ThemeContext);

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
      <S.ThemeIcon onClick={toggleTheme}>
        {scheme === "dark" ? <LightIcon /> : <DarkIcon />}
      </S.ThemeIcon>
    </S.Wrapper>
  );
};
