"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState("");
  const [admin, setAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setCurrentUser(JSON.parse(user));
    if (user) {
      setIsAuthenticated(true);
      const admin = JSON.parse(user).admin;
      setAdmin(admin == "0" ? false : true);
    }
  }, []);

  let sharedState = {
    user: currentUser,
    setUser: setCurrentUser,
    isAdmin: admin,
    setIsAdmin: setAdmin,
    isAuth: isAuthenticated,
    setIsAuth: setIsAuthenticated,
  };

  // console.log(isAuthenticated, currentUser);

  return (
    <AuthContext.Provider value={sharedState}>{children}</AuthContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AuthContext);
}
