import axios from "axios";

export const API_URL = "https://dev.codeleap.co.uk/careers/";

export function GET_POSTS() {
  return {
    url: API_URL,
    options: {
      method: "GET",
    },
  } as const;
}

export function NEW_POST(
  body: Record<"username" | "title" | "content", string>
) {
  return {
    url: API_URL,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  } as const;
}

export function DELETE_POST(id: number) {
  return {
    url: API_URL + `${id}/`,
    options: {
      method: "DELETE",
    },
  } as const;
}

export function EDIT_POST(
  id: number,
  body: Record<"title" | "content", string>
) {
  return {
    url: API_URL + id + "/",
    options: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  } as const;
}

export const api = {
  get: async function getPosts() {
    const url = API_URL;
    const response = await axios.get<RESPONSE_PROPS>(url);
    return response.data;
  },
  post: async function postPost(data: NEW_POST_OBJECT) {
    const url = API_URL;
    const response = await axios.post(url, data);
    return response.data;
  },
  delete: async function deletePost(id: number) {
    const url = API_URL + `${id}/`;
    const response = await axios.delete(url);
    return response.status;
  },
  edit: async function editPost({
    id,
    body,
  }: {
    id: number;
    body: EDIT_POST_OBJECT;
  }) {
    const url = API_URL + `${id}/`;
    const response = await axios.patch(url, body);
    return response.status;
  },
} as const;

export type NEW_POST_OBJECT = Record<"username" | "title" | "content", string>;

export type EDIT_POST_OBJECT = Record<"title" | "content", string>;

export type RESPONSE_PROPS = {
  count: number;
  next: string | null;
  previous: string | null;
  results: POST_PROPS[];
};

export type POST_PROPS = {
  content: string;
  created_datetime: Date;
  id: number;
  title: string;
  username: string;
};
