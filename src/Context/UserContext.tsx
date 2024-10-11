// src/context/UserContext.tsx

import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface User {
  name: string;
  favorites: string[];
}

interface UserContextType {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
  addToFavorites: (item: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string) => {
    setUser({ name, favorites: [] });
  };

  const logout = () => {
    setUser(null);
  };

  const addToFavorites = (item: string) => {
    if (user) {
      setUser({ ...user, favorites: [...user.favorites, item] });
    }
  };

  // Optional: Persist user state in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, logout, addToFavorites }}>
      {children}
    </UserContext.Provider>
  );
};
