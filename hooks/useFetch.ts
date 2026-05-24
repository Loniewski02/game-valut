import { useEffect, useState, useMemo } from "react";

type FetchError = {
  status: number;
  message: string;
};

export const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<FetchError | null>(null);

  const memoOptions = useMemo(() => options, [JSON.stringify(options)]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(url, memoOptions);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(`${result.message}`);
        }

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
