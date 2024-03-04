import useSWR from "swr";

export function useGetProfile(profile_id) {
  const API_URL = `https://deployreciclame-production.up.railway.app/profiles/${profile_id}`;

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isValidating } = useSWR(API_URL, fetcher, {
    refreshInterval: 1000,
  });
  return {
    profile: data,
    error,
    isLoading: !data && !error,
    isValidating,
  };
}
