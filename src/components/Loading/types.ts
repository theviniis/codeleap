import React from "react";

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "bar" | "circle";
}
