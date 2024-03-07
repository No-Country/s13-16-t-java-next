import useSWR from "swr";

export function useGetDonations(profile_id) {
  const API_URL = `https://deployreciclame-production.up.railway.app/profiles/${profile_id}/posts-closed`;

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(API_URL, fetcher, { refreshInterval: 1000 })
  return {
    donations: data,
    error,
  };
}