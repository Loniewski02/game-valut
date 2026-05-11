import { useEffect, useState } from "react";

import { GamePreview } from "../types";

type FetchError = { status: number; message: string };

export const useGames = () => {
  const [games, setGames] = useState<GamePreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);

        const response = await fetch("/api/games");

        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }

        const data = await response.json();

        setGames(data);
      } catch (error: any) {
        setError({ status: 500, message: error.message });
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  return {
    games,
    isLoading,
    error,
  };
};
