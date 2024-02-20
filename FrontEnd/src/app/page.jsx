"use client";

import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

import CardPost from "../components/CardPost";

import HomeLogin from "../components/HomeLogin/HomeLogin";

import { Lato } from "next/font/google";
import { SearchIcon } from "../components/Icons";
const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });

export default function Home() {
  const { isLogged } = useContext(Context);

  return (
    <>
      {isLogged ? (
        <HomeLogin />
      ) : (
        <main>
          <article
            className="grid h-dvh w-full place-items-center"
            style={{
              backgroundImage: "url('/background/homepage.webp')",
              backgroundSize: "cover",
            }}
          >
            <div className="relative px-4">
              <header>
                <h2
                  className={`${lato.className} text-center text-[clamp(50px,_8vw,_82px)] font-semibold`}
                >
                  Donar para reciclar juntos
                </h2>
              </header>
              <div className="mx-auto md:w-4/6">
                <p className="leading mx-auto  text-pretty text-center text-sm leading-[1.625rem] lg:text-[22px]">
                  Contribuye al cambio donando plásticos, papel y más; juntos
                  transformaremos materiales en oportunidades para un futuro más
                  sostenible.
                </p>
                <label
                  id="input-search"
                  className="mx-auto mt-8 flex items-center gap-4 text-pretty rounded-full border-[1.5px]
          border-[#6D6D6D] bg-white p-4"
                >
                  <SearchIcon className="aspect-square w-[1.875rem]" />
                  <input
                    className="w-full border-none bg-transparent outline-none"
                    type="search"
                    name="search"
                    id="input-search"
                    placeholder="Busca materiales (ej: papel, plástico, etc)"
                  />
                </label>
              </div>
            </div>
          </article>
          <article className="mx-auto grid h-dvh w-full max-w-7xl items-center">
            <div className="relative text-balance px-4 md:w-3/4 md:px-10">
              <h2
                className={`${lato.className} text-[clamp(42px,_8vw,_66px)] font-semibold capitalize`}
              >
                Donar, Reciclar, Comunidad
              </h2>
              <div className="my-10 text-xl leading-6">
                <p>
                  En nuestro espacio, conectamos a personas que poseen
                  materiales de reciclaje como papel, plástico, madera, cartón y
                  más, con aquellos que pueden utilizarlos en sus trabajos
                  artesanales o emprendimientos. <br />
                  Nuestra misión es fomentar una conciencia ambiental más
                  profunda al facilitar el reciclaje y reutilización de
                  materiales de una manera colaborativa. Únete a nuestra
                  comunidad y juntos hagamos del reciclaje una práctica mas
                  conseciente y sostenible
                </p>
              </div>
              <button
                className="w-full max-w-36 rounded-2xl bg-secondary-violet px-8 py-[10px] leading-5 text-white"
                type="button"
              >
                Boton
              </button>
            </div>
          </article>
          <article className="mx-auto min-h-dvh max-w-7xl pb-10">
            <div className="relative text-balance px-4 md:px-10">
              <h2
                className={`${lato.className} text-[clamp(42px,_8vw,_66px)] font-semibold capitalize leading-[5rem]`}
              >
                Explora nuestra comunidad
              </h2>
              <div className="my-10 flex flex-wrap justify-center gap-4 md:mx-auto md:w-2/3 md:columns-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <CardPost key={i} />
                ))}
              </div>
              <button
                className="mx-auto block h-12 w-full rounded-2xl bg-primary-green px-8 py-[10px] text-lg leading-5 text-white min-[640px]:max-w-52"
                type="button"
              >
                Explorar
              </button>
            </div>
          </article>
        </main>
      )}
    </>
  );
}
