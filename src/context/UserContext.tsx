import React, { ReactNode, useState } from "react";

type UserContextProps = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = React.createContext<UserContextProps>({
  username: "",
  setUsername: () => {},
});

export const UserStorage: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") ?? ""
  );
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
