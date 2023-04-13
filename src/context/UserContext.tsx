import React, { ReactNode, useEffect, useState } from "react";
import { PostProps } from "../pages";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  useEffect(() => {
    const username = window.localStorage.getItem("username");
    if (username) {
      setUsername(username);
      navigate("/main");
    } else {
      setUsername("");
      navigate("/");
    }
  }, [navigate]);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
