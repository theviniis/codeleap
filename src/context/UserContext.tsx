import React, { ReactNode, useState } from "react";
import { PostProps } from "../pages";

type UserContextProps = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  posts?: PostProps;
  isLoading?: boolean;
};

export const UserContext = React.createContext<UserContextProps>({
  username: "",
  setUsername: () => {},
});

export const UserStorage: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
