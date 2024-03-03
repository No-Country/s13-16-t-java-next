"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";

export default function Submenu() {
  const { setIsLogged } = useContext(Context);
  const [profile, setProfile] = useState({});
  function logOut() {
    setIsLogged(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLogged");
      localStorage.removeItem("userLoggedId");
      localStorage.removeItem("profileId");
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const perfilId = localStorage.getItem("profileId");
      if (perfilId) {
        fetch(
          `https://deployreciclame-production.up.railway.app/profiles/${perfilId}`,
        )
          .then((response) => response.json())
          .then((data) => setProfile(data));
          
        
      }
    }
  });
  return (
    <div className="group relative">
      <Image
        width={80}
        height={80}
        className="hidden rounded-full p-2 hover:cursor-pointer md:block"
        src={profile.photoId}
        alt="imagen perfil usuario"
        priority
      />
      <div className="absolute -bottom-[144px] right-0 hidden h-36 w-40 flex-col justify-between rounded-xl border bg-white p-3 shadow-lg md:group-hover:flex">
        <Link
          href={`/perfil/${profile.id}`}
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
          href={"/configuracion"}
          className="border-secondary-violet hover:border-b-2"
        >
          Configuración
        </Link>
        <Link
          href="/login"
          onClick={logOut}
          className="border-secondary-violet hover:border-b-2"
        >
          Cerrar Sesion
        </Link>
      </div>
    </div>
  );
}
