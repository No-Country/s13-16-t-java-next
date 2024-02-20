import CardPost from "../CardPost";
import Link from "next/link" 
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });

export default function HomeLogin() {
  return (
    <main className="mx-auto max-w-7xl pt-20">
      <h2
        className={`${lato.className} text-[clamp(42px,_8vw,_66px)] font-semibold capitalize`}
      >
        Te podría interesar
      </h2>
      <div className="my-10 flex flex-wrap justify-center gap-4 md:mx-auto md:w-2/3 md:columns-6">
        {Array.from({ length: 36 }).map((_, i) => (
          <Link href={`/publicaciones/${i}`}><CardPost key={i} /></Link>
        ))}
      </div>
    </main>
  );
}
