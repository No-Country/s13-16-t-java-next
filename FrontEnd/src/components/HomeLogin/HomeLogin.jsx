import CardPostWrapper from "../CardPostWrapper";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });

export default function HomeLogin() {
  return (
    <div className="pt-16 max-w-7xl mx-auto">
      <article className="p-4">
        <header>
          <h2
            className={`${lato.className} text-[clamp(24px,_8vw,_32px)] font-semibold capitalize lg:text-start`}
          >
        Te podría interesar
          </h2>
        </header>
      </article>
      <CardPostWrapper />
    </div>
  );
}
