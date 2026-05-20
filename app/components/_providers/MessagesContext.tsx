"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

export const MessagesContext = createContext(
  {} as {
    status: number;
    message: string;
    isShown: boolean;
    setIsShown: Dispatch<SetStateAction<boolean>>;
    setNewMessage: (s: number, m: string) => void;
  },
);

export default function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState(500);
  const [message, setMessage] = useState("Inputs can't be empty");
  const [isShown, setIsShown] = useState(false);

  const setNewMessage = (s: number, m: string) => {
    setStatus(s);
    setMessage(m);
    setIsShown(true);
  };

  return (
    <MessagesContext.Provider
      value={{
        status,
        message,
        isShown,
        setIsShown,
        setNewMessage,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
