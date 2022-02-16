import React, { createContext, useContext, useState } from 'react';
import { usePersistentState } from '../Utils/usePersistentState';

interface User {
  id?: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User;
  // token: Token
  setUserData: (userData: User) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const UserKey = '@Turma736:User';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Prover as informações para todos os componentes filhos
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = usePersistentState<User>(UserKey, {} as User);

  function setUserData(userData: User) {
    setUser(userData);
    localStorage.setItem(UserKey, JSON.stringify(userData));
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}