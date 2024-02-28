import { getAllPublications } from "@/src/lib/api";
import CardPost from "../CardPost";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });

export default async function HomeLogin() {
  const publications = await getAllPublications();
  return (
    <main className="mx-auto max-w-7xl pt-20">
      <h2
        className={`${lato.className} pl-2 text-center text-[clamp(42px,_8vw,_66px)] font-semibold capitalize lg:text-start`}
      >
        Te podría interesar
      </h2>
      <div className="my-10 flex flex-wrap justify-center gap-4 md:mx-auto  lg:columns-6">
        {publications?.map((publication) => (
          <CardPost key={publication.id} publication={publication} />
        ))}
      </div>
    </main>
  );
}
