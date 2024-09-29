"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

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
  const isBrowser = typeof window !== "undefined"; // Check if it's client-side
  const [isClient, setIsClient] = useState(false); // Track if it's client-side
  const [username, setUsername] = useState<string>("Guest"); // Default value for SSR

  const [age, setAge] = useState<number | null>(null);
  const [grade, setGrade] = useState<number | null>(null);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (isBrowser) {
      const storedUsername = localStorage.getItem("username") || "Guest";
      const storedAge = localStorage.getItem("age");
      const storedGrade = localStorage.getItem("grade");
      const storedEmail = localStorage.getItem("email");

      setUsername(storedUsername);
      if (storedAge) setAge(parseInt(storedAge));
      if (storedGrade) setGrade(parseInt(storedGrade));
      if (storedEmail) setEmail(storedEmail);

      setIsClient(true); // Mark as client-side
    }
  }, [isBrowser]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("username", username);
    }
  }, [username, isClient]);

  useEffect(() => {
    if (isClient && age !== null) {
      localStorage.setItem("age", age.toString());
    }
  }, [age, isClient]);

  useEffect(() => {
    if (isClient && grade !== null) {
      localStorage.setItem("grade", grade.toString());
    }
  }, [grade, isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("email", email);
    }
  }, [email, isClient]);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        age,
        setAge,
        grade,
        setGrade,
        email,
        setEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
