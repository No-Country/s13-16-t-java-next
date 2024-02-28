import React from "react";
import Post from "@/src/components/Publication/Post";
import { getPublication } from "@/src/lib/api";

export default async function Publications({ params }) {
  const Publication = await getPublication(params.id);
  return (
    <main className="mt-[65px] grid justify-items-center lg:grid-cols-2">
      <Post post={Publication} />
    </main>
  );
}
