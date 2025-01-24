'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, User } from 'firebase/auth';
import { auth } from '@/app/config';

type LoginType = {
  email: string;
  password: string;
  remember_me?: boolean | undefined;
}

interface ProviderProps {
  userId: string | null,
  token: string | null,
  signIn(data: LoginType): void,
  logout(): void,
}

const AuthContext = createContext<ProviderProps>({
  userId: null,
  token: null,
  signIn: () => { },
  logout: () => { }
});

export function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userId, setUserId] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setUserId(user?.uid as string);
      setToken(user?.email as string)
    });
    return () => unsubscribe();
  }, []);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ userId, token, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}