import CardsContainer from "@/src/components/explorar/CardsContainer";
import { CardsPostsSkeleton } from "@/src/components/skeletons";
import SearchPublication from "@/src/components/explorar/SearchPublication";
import { Suspense } from "react";

export default async function ExplorarPage({ searchParams }) {
  const queryParam = searchParams?.term || "";
  return (
    <div>
      <div className="mt-32 min-h-[80vh]">
        <SearchPublication query={"term"} />
        <Suspense key={queryParam} fallback={<CardsPostsSkeleton />}>
          <CardsContainer query={queryParam} />
        </Suspense>
      </div>
    </div>
  );
}
