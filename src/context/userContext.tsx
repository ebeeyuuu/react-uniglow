"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
  age: number | null;
  setAge: (age: number | null) => void;
  grade: number | null;
  setGrade: (grade: number | null) => void;
  email: string;
  setEmail: (email: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);
  const [grade, setGrade] = useState<number | null>(null);
  const [email, setEmail] = useState<string>('');

  return (
    <UserContext.Provider value={{ username, setUsername, age, setAge, grade, setGrade, email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
