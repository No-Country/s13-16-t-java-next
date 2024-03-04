import useSWR from "swr";

export function useGetPostById(post_id) {
  const API_URL = `https://deployreciclame-production.up.railway.app/posts/${post_id}`;

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isValidating } = useSWR(API_URL, fetcher, {
    refreshInterval: 1000,
  });
  return {
    post: data,
    error,
    isLoading: !data && !error,
    isValidating,
  };
}
