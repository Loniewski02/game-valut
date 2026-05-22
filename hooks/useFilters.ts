import { useRouter, useSearchParams } from "next/navigation";

export const useFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const update = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`?${params.toString()}`);
  };

  const clear = (keys: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    keys.forEach((key) => params.delete(key));
    router.push(`?${params.toString()}`);
  };

  return {
    searchParams,
    update,
    clear,
  };
};
