import React from "react";

export interface PostProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "id"> {
  id: number;
  username: string;
  created: Date;
  title: string;
  content: string;
}
