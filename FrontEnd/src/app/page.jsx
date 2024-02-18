"use client";

import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

import CardPost from "../components/CardPost";

import HomeLogin from "../components/HomeLogin";

import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });

export default function Home() {
  const { isLogged } = useContext(Context);

  return (
    <>
      {isLogged ? (
        <main className="pt-20">
          <h2
            className={`${lato.className} text-[66px] capitalize leading-[5rem]`}
          >
            Te podría interesar
          </h2>
          <div className="my-10 flex flex-wrap justify-center gap-4 md:mx-auto md:w-2/3 md:columns-6">
            {Array.from({ length: 36 }).map((_, i) => (
              <CardPost key={i} />
            ))}
          </div>
        </main>
      ) : (
        <HomeLogin />
      )}
    </>
  );
}
