import useSWR from "swr";

export function useGetFavs(profile_id) {
  const API_URL = `https://deployreciclame-production.up.railway.app/profiles/${profile_id}/favoritePosts`;

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(API_URL, fetcher, { refreshInterval: 3000 })
  return {
    data,
    error,
  };
}