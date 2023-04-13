import React from "react";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  type?: "text" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
