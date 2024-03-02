import React from "react";
import Post from "@/src/components/Publication/Post";
import { getPublication } from "@/src/lib/api";

export default async function Publications({ params }) {

  const post = await getPublication(params.id);
  
  return (
    <div className="min-h-dvh">
      <main className="mt-[65px] flex flex-col justify-items-center ">
        <Post post={post} post_id={params.id}  />
      </main>
    </div>
  );
}
