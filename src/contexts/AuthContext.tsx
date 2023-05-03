// AuthContext.tsx

import React, { createContext, useContext, useState } from "react";

export type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
  error: string | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  error: null,
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    // TODO: Implement authentication logic
    // For now, just set the user to a mock user object
    setUser({ name: "John Doe", email: "john.doe@example.com" });
  };

  const logout = () => {
    setUser(null);
  };

  const authContextValue: AuthContextType = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
