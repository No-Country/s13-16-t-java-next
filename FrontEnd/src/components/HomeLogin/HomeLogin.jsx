import { Suspense } from "react";
import CardPostWrapper from "../CardPostWrapper";
import { CardsPostsSkeleton } from "../skeletons";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });
import { useGetPosts } from "../../hooks/useGetPost";

export default async function HomeLogin()
  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl pt-20">
      <h2
        className={`${lato.className} pl-2 text-center text-[clamp(42px,_8vw,_66px)] font-semibold capitalize lg:text-start`}
      >
        Te podría interesar
      </h2>
      <Suspense fallback={<CardsPostsSkeleton />}>
        <CardPostWrapper />
      </Suspense>
    </main>
  );
}
