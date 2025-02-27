import { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
