import React, { ReactNode } from "react";
import * as T from "./PostsContext.types";
import { useMutation, useQuery } from "react-query";
import { EDIT_POST_OBJECT, NEW_POST_OBJECT, api } from "../actions";

export const PostsContext = React.createContext<T.PostsContextProps>({
  posts: [],
  isLoading: false,
  NEW_POST: () => {},
  DELETE_POST: () => {},
  EDIT_POST: () => {},
});

export const PostsStorage = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: api.get,
  });

  const mutation = {
    new: useMutation({
      mutationFn: api.post,
      onSuccess: () => refetch(),
    }),
    delete: useMutation({
      mutationFn: api.delete,
      onSuccess: () => refetch(),
    }),
    edit: useMutation({
      mutationFn: api.edit,
      onSuccess: () => refetch(),
    }),
  } as const;

  const NEW_POST = (body: NEW_POST_OBJECT) => {
    mutation.new.mutate(body);
  };

  const DELETE_POST = (id: number) => {
    mutation.delete.mutate(id);
  };

  const EDIT_POST = (id: number, body: EDIT_POST_OBJECT) => {
    mutation.edit.mutate({ id, body });
  };

  return (
    <PostsContext.Provider
      value={{
        posts: data?.results,
        isLoading,
        refetch,
        NEW_POST,
        DELETE_POST,
        EDIT_POST,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
