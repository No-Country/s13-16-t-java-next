"use client";
import useSWR from "swr";

export function useGetComments(post_id) {
  const API_URL = `https://deployreciclame-production.up.railway.app/posts/${post_id}`;

  const fetcher =(API_URL)=> fetch(API_URL).then(r => r.json())
  const { data, error, isValidating } = useSWR(API_URL, fetcher, {
    refreshInterval: 500,
  });
  console.log(data, error)
  return {
    data,
    error,
    isValidating,
  };
}
