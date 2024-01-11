"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let sharedState = {
    user: currentUser,
    setUser: setCurrentUser,
    isAdmin: isAdmin,
    setIsAdmin: setIsAdmin,
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
