import React, { ReactNode, useState } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { themes } from "../themes";

export const ThemeContext = React.createContext<{
  scheme: "light" | "dark";
  toggleTheme: () => void;
}>({
  scheme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [scheme, setScheme] = useState<"light" | "dark">(
    isDark ? "dark" : "light"
  );

  function toggleTheme() {
    return scheme === "light" ? setScheme("dark") : setScheme("light");
  }

  return (
    <ThemeContext.Provider value={{ scheme, toggleTheme }}>
      <StyledProvider theme={themes[scheme]}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};
