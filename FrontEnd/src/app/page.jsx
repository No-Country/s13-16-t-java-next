"use client";

import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

import CardPost from "../components/CardPost";
import { SearchIcon } from "../components/Icons";

import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });

export default function Home() {
  const { isLogged } = useContext(Context);

  return (
    <>
      {isLogged
        ? (
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
        )
        : (
          <>
            <article
              className="grid h-dvh w-full place-items-center"
              style={{
                backgroundImage:
                "url('https://images.unsplash.com/photo-1496458590512-56d2688442b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="relative px-4">
                <header>
                  <h2
                    className={`${lato.className} text-center text-[82px] font-black leading-[6.125rem]`}
                  >
                  Donar para reciclar juntos
                  </h2>
                </header>
                <div className="mx-auto w-4/6">
                  <p className="leading mx-auto  text-pretty text-center text-[22px] leading-[1.625rem]">
                  Contribuye al cambio donando plásticos, papel y más; juntos
                  transformaremos materiales en oportunidades para un futuro más
                  sostenible.
                  </p>
                  <label
                    id="input-search"
                    className="mx-auto mt-8 flex items-center gap-4 text-pretty rounded-full bg-white p-4"
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
            <article className="grid h-dvh w-full items-center bg-gray-200">
              <div className="relative text-balance px-4 md:w-3/4 md:px-10">
                <h2
                  className={`${lato.className} text-[66px] font-black capitalize leading-[5rem]`}
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
                  className="rounded-2xl bg-zinc-400 px-10 py-1 text-white"
                  type="button"
                >
                Boton
                </button>
              </div>
            </article>
            <article className="min-h-dvh bg-gray-200">
              <div className="relative text-balance px-4 md:px-10">
                <h2
                  className={`${lato.className} text-[66px] capitalize leading-[5rem]`}
                >
                Explora nuestra comunidad
                </h2>
                <div className="my-10 flex flex-wrap justify-center gap-4 md:mx-auto md:w-2/3 md:columns-6">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <CardPost key={i} />
                  ))}
                </div>
                <button
                  className="mx-auto block rounded-2xl bg-zinc-400 px-10 py-1 text-white"
                  type="button"
                >
                Explorar
                </button>
              </div>
            </article>
          </>
        )}
    </>
  );
}
