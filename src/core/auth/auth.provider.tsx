import { createContext, useContext, useState } from "react";
import { setAxiosToken } from "./auth-service";

interface AuthContextType {
  username: string;
  setToken: (token: string) => void;
  setUsername: (userName: string) => void;
}

const AuthContextType = createContext<AuthContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [username, setUsername] = useState<string>("");

  const setToken = (value: string) => {
    setAxiosToken(value);
  };

  return (
    <AuthContextType.Provider value={{ username, setToken, setUsername }}>
      {children}
    </AuthContextType.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContextType);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
