"use client"

import React from "react";
import PostIntermediaryLayer from "@/src/components/Publication/PostIntermediaryLayer";

import { useGetPostById } from '@/src/hooks/useGetPostById';
import { PostPageSkeleton } from "@/src/components/skeletons";

export default function Publications({ params }) {
  const { post, isLoading } = useGetPostById(params.id);

  if (isLoading) return (<PostPageSkeleton />)

  return (
    <div className="min-h-dvh">
      <main className="mt-[65px] max-w-7xl mx-auto flex flex-col justify-items-center ">
        {post?.id && <PostIntermediaryLayer post={post} />}
      </main>
    </div>
  );
}
