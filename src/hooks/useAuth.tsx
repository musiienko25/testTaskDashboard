import { useState, useEffect, useContext } from "react";
import { User } from "../contexts/AuthContext";

export interface AuthState {
  user: User | null;
  token: string | null;
}

interface AuthContextType {
  authState: AuthState;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const useAuth = (): AuthContextType => {
  const [authState, setAuthState] = useState(initialState);

  useEffect(() => {
    const authData = localStorage.getItem("authData");
    if (authData) {
      const { user, token } = JSON.parse(authData);
      setAuthState({ user, token });
    }
  }, []);

  const login = async (username: string, password: string) => {
    // TODO: implement login logic using JWT or other secure authentication method
    const token = "fake-token";
    const user: User = { username }; // mock user object

    localStorage.setItem("authData", JSON.stringify({ user, token }));
    setAuthState({ user, token });
  };

  const logout = () => {
    localStorage.removeItem("authData");
    setAuthState(initialState);
  };

  return {
    authState,
    login,
    logout,
    isAuthenticated: !!authState.token,
  };
};

export default useAuth;
