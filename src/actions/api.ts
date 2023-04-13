export const API_URL = "https://dev.codeleap.co.uk/careers/";

export function GET_POSTS() {
  return {
    url: API_URL,
    options: {
      method: "GET",
    },
  };
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
  };
}

export function DELETE_POST(id: number) {
  return {
    url: API_URL + `${id}/`,
    options: {
      method: "DELETE",
    },
  };
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
  };
}
