"use client";
import React from "react";
import Post from "@/src/components/Publication/Post";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Publications({ params }) {
 
  const { data, error, isValidating } = useSWR(
    `https://deployreciclame-production.up.railway.app/posts/${params.id}`,
    fetcher,
  );
  console.log(data)
  return (
    <main className="mt-[65px] grid justify-items-center lg:grid-cols-2">
      <Post post={data} />
    </main>
  );
}
