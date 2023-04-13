import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";
import {
  EDIT_POST_OBJECT,
  NEW_POST_OBJECT,
  POST_PROPS,
  RESPONSE_PROPS,
} from "../actions";

export interface PostsContextProps {
  posts?: POST_PROPS[];
  isLoading: boolean;
  refetch?: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<RESPONSE_PROPS, unknown>>;
  NEW_POST: (body: NEW_POST_OBJECT) => void;
  DELETE_POST: (id: number) => void;
  EDIT_POST: (id: number, body: EDIT_POST_OBJECT) => void;
}
