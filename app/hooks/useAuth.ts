"use client";

import { useSession } from "next-auth/react";
import { useContext } from "react";

import { MessagesContext } from "../components/_providers/MessagesContext";

export function useAuth() {
  const { status } = useSession();

  const { setNewMessage } = useContext(MessagesContext);

  return () => {
    if (status === "loading") {
      return false;
    }

    if (status === "unauthenticated") {
      setNewMessage(401, "You must be logged in");

      return false;
    }

    return true;
  };
}
