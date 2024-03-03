import React from "react";
import PostIntermediaryLayer from "@/src/components/Publication/PostIntermediaryLayer";
import { PostPageSkeleton } from "@/src/components/skeletons";
import { Suspense } from "react";
export default async function Publications({ params }) {
  return (
    <div className="min-h-dvh">
      <main className="mt-[65px] flex flex-col justify-items-center ">
        <Suspense fallback={<PostPageSkeleton />}>
          <PostIntermediaryLayer param={params} />
        </Suspense>
      </main>
    </div>
  );
}
