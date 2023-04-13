import React, { ReactNode } from "react";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useQuery,
} from "react-query";
import { POST_PROPS, RESPONSE_PROPS, api } from "../actions";

export const PostsContext = React.createContext<{
  posts?: POST_PROPS[];
  isLoading: boolean;
  refetch?: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<RESPONSE_PROPS, unknown>>;
}>({
  posts: [],
  isLoading: false,
});

export const PostsStorage = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: api.get,
  });

  return (
    <PostsContext.Provider value={{ posts: data?.results, isLoading, refetch }}>
      {children}
    </PostsContext.Provider>
  );
};
