import { useContext, useState } from "react";
import { MessagesContext } from "@/components/_providers/MessagesContext";

type Status = "WANT_TO_PLAY" | "PLAYING" | "PLAYED" | null;

export const useGameList = (gameId: string, initialStatus: Status) => {
  const [listStatus, setListStatus] = useState<Status>(initialStatus);

  const { setNewMessage } = useContext(MessagesContext);

  const addToList = async () => {
    try {
      const res = await fetch(`/api/games/lists/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gameId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setNewMessage(res.status, data.message);
        return;
      }

      setNewMessage(res.status, data.message);
      setListStatus("WANT_TO_PLAY");
    } catch {
      setNewMessage(500, "Something went wrong");
    }
  };

  const updateList = async (status: "WANT_TO_PLAY" | "PLAYING" | "PLAYED" | null) => {
    try {
      const res = await fetch(`/api/games/lists/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gameId,
          status: status ? status : null,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setNewMessage(res.status, data.message);
        return;
      }

      setNewMessage(res.status, data.message);
      setListStatus(status);
    } catch (error) {
      console.error(error);
      setNewMessage(500, "Something went wrong");
    }
  };

  return {
    listStatus,
    addToList,
    updateList,
  };
};
