import useSWR from "swr";

export function useGetPosts() {
  const API_URL = `https://deployreciclame-production.up.railway.app/posts/all`;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isValidating } = useSWR(API_URL, fetcher, {
    refreshInterval: 1000,
  });
  return {
    publications: data,
    error,
    isLoading: !data && !error,
    isValidating,
  };
}
