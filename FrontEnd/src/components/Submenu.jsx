"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { ProfileImageSkeleton } from "./skeletons";

export default function Submenu({ profile }) {
  const { logOut } = useContext(Context);

  return (
    <div className="group relative">
      {profile?.photoId ? (
        <Image
          width={40}
          height={40}
          className="hidden max-h-[40px] max-w-[40px] rounded-full object-cover hover:cursor-pointer md:block"
          src={profile?.photoId}
          alt="imagen perfil usuario"
          priority
        />
      ) : (
        <ProfileImageSkeleton />
      )}
      <div className="absolute -bottom-[164px] right-0 pt-5">
        <div className="hidden h-36 w-40 flex-col justify-between rounded-xl border bg-white p-3 shadow-lg md:group-hover:flex">
          <Link
            href={`/perfil/${profile?.id}`}
            className="border-secondary-violet hover:border-b-2"
          >
            Perfil
          </Link>
          <Link
            href={"/donaciones"}
            className="border-secondary-violet hover:border-b-2"
          >
            Donaciones
          </Link>
          <Link
            href={`/configuracion/perfil/${profile?.id}`}
            className="border-secondary-violet hover:border-b-2"
          >
            Configuración
          </Link>
          <Link
            href="/login"
            onClick={logOut}
            className="border-secondary-violet hover:border-b-2"
          >
            Cerrar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
