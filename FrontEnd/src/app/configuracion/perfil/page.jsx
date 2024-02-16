"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "../../../context/ContextProvider";
import Image from "next/image";
import { AddIcon } from "../../../components/Icons";

export default function Page() {
  const { isLogged } = useContext(Context);
  const router = useRouter();

  if (!isLogged) router.push("/");

  return (
    <section className="grid min-h-dvh place-items-center pt-20">
      <div className="flex gap-4">
        <div className="relative mt-10 self-start">
          <Image
            className="rounded-full bg-gray-300"
            width={144}
            height={144}
            src=""
            alt="foto de perfil"
          />
          <button
            className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-gray-400 p-2"
            type="button"
          >
            <AddIcon />
          </button>
        </div>
        <div className="md:max-w-lg">
          <header>
            <h1 className="text-2xl font-bold">Configura tu cuenta</h1>
          </header>
          <form action="" className="flex flex-col gap-10">
            <h2>Tus intereses</h2>

            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <button
                  className="rounded-xl border border-gray-400 bg-gray-300 px-4 py-2"
                  type="button"
                  key={i}
                >
                  Interés {i + 1}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                className="rounded-xl border border-gray-400 px-4 py-2"
                type="button"
              >
                Volver
              </button>
              <button
                className="rounded-xl bg-gray-300 px-4 py-2"
                type="submit"
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
