"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "../../../context/ContextProvider";
import Image from "next/image";
import { AddIcon } from "../../../components/Icons";
import UserImage from "@/src/assets/profile/Rectangle.png";

export default function Page() {
  const { isLogged } = useContext(Context);
  const router = useRouter();

  if (!isLogged) router.push("/");

  return (
    <section className="grid min-h-dvh place-items-center pt-20">
      <div className="p-4 md:max-w-5xl">
        <header>
          <h1 className="text-2xl font-bold uppercase">Configurar tu cuenta</h1>
        </header>
        <div className="min-[640px]:flex min-[640px]:gap-40">
          <div className="relative mt-10 flex justify-center min-[640px]:w-full min-[640px]:flex-col min-[640px]:justify-start">
            <h2 className="absolute left-0 font-medium min-[640px]:static min-[640px]:mb-4 min-[640px]:text-center">
              Foto de perfil
            </h2>
            <div className="relative w-max min-[640px]:mx-auto">
              <Image
                className="aspect-square min-w-24 rounded-full bg-gray-300 min-[640px]:w-40"
                width={96}
                height={96}
                src={UserImage}
                alt="foto de perfil"
              />
              <button
                className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-accent-yellow p-2"
                type="button"
              >
                <AddIcon />
              </button>
            </div>
          </div>
          <div>
            <form action="" className="flex flex-col gap-10">
              <div>
                <h2 className="font-medium">Tus intereses</h2>
                <p>Elige hasta 3 opciones:</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 min-[640px]:justify-start">
                {Array.from({ length: 12 }).map((_, i) => (
                  <button
                    className="w-full max-w-40 rounded-[20px] border border-secondary-violet bg-[#EAE2FA4D] px-5 py-4 leading-5"
                    type="button"
                    key={i}
                  >
                    Tus intereses
                  </button>
                ))}
              </div>
            </form>
            <div className="mt-10 flex justify-center gap-4 min-[640px]:items-center min-[640px]:justify-start">
              <button
                className="w-full max-w-40 rounded-full border border-primary-green px-4 py-2 text-primary-green"
                type="button"
              >
                Omitir
              </button>
              <button
                className="w-full max-w-40 rounded-full bg-primary-green px-4 py-2 text-white"
                type="submit"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
