import React, { ReactNode, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { POST_PROPS, api } from "../actions";
import { Loading } from "../components";

export const PostsContext = React.createContext<{
  posts?: POST_PROPS[];
  isLoading: boolean;
  setPosts: React.Dispatch<React.SetStateAction<POST_PROPS[]>>;
}>({
  posts: [],
  isLoading: false,
  setPosts: () => {},
});

export const PostsStorage = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<POST_PROPS[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: api.get,
  });

  useEffect(() => {
    if (data) {
      setPosts([...data?.results]);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PostsContext.Provider value={{ posts, setPosts, isLoading }}>
      {children}
    </PostsContext.Provider>
  );
};
