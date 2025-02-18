"use client";

import { createContext, useContext, useState } from "react";

interface User {
  address: string;
  balance: string;
}

interface AuthContextType {
  user: User | null;
  login: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async () => {
    // In a real implementation, this would connect to MetaMask or WalletConnect
    setUser({
      address: "0xE25358D0A367e706127c1fd1E37685250CD4464",
      balance: "1.5 ETH",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
