import CardPostWrapper from "../CardPostWrapper";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });

export default function HomeLogin() {
  return (
    <>
      <h2
        className={`${lato.className} pl-2  text-[clamp(24px,_8vw,_32px)] font-semibold capitalize lg:text-start`}
      >
        Te podría interesar
      </h2>
      <CardPostWrapper />
    </>
  );
}
