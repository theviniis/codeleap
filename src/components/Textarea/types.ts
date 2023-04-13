import React from "react";

export interface TextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  type?: "text" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
