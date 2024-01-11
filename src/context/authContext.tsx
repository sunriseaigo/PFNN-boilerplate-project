"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  user: string;
  setUser: (_: string) => void;
  isAdmin: boolean;
  setIsAdmin: (_: boolean) => void;
  isAuth: boolean;
  setIsAuth: (_: boolean) => void;
}

const defaultValue: AuthContextProps = {
  user: "",
  setUser: (_: string) => {},
  isAdmin: false,
  setIsAdmin: (_: boolean) => {},
  isAuth: false,
  setIsAuth: (_: boolean) => {},
};

const AuthContext = createContext<AuthContextProps>(defaultValue);

interface IAppWrapperProps {
  children: React.ReactNode;
}

export function AppWrapper({ children }: IAppWrapperProps) {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [admin, setAdmin] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const user: string | null = localStorage.getItem("user");
    setCurrentUser(user && JSON.parse(user).name);
    if (user) {
      setIsAuthenticated(true);
      const admin = JSON.parse(user).admin;
      setAdmin(admin == "0" ? false : true);
    }
  }, []);

  const sharedState = {
    user: currentUser,
    setUser: setCurrentUser,
    isAdmin: admin,
    setIsAdmin: setAdmin,
    isAuth: isAuthenticated,
    setIsAuth: setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={sharedState}>{children}</AuthContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AuthContext);
}
