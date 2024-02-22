import { useContext, createContext } from "react";

interface IAuthContext {
    email: string | null;
    photo: string | null;
    token: string | null;
    setEmail: (email: string) => void;
    setPhoto: (photo: string) => void;
    setToken: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
    email: null,
    photo: null,
    token: null,
    setEmail: () => {},
    setPhoto: () => {},
    setToken: () => {},
    logout: () => {},
});

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("context error");
  }
  return context;
};

export { AuthContext, useAuth };