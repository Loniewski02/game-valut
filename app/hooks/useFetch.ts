import { useEffect, useState } from "react";

type FetchError = {
  status: number;
  message: string;
};

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
      } catch (error: any) {
        setError({
          status: 500,
          message: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data: data ?? null,
    isLoading,
    error,
  };
};
