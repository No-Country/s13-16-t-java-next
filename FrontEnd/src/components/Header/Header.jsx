"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import MenuIcon from "../Icons/MenuIcon";
import { Context } from "@/src/context/ContextProvider";

export default function Header() {
  const { isLogged } = useContext(Context);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {isLogged ? (
        <HeaderLogin />
      ) : (
        <div className="fixed left-0 top-0 z-10 -mb-12 w-full bg-white">
          <header className="shadow-xl">
            <nav className="relative m-auto flex h-16 max-w-7xl justify-between">
              <Link href={"/"}>
                <Image
                  width={150}
                  height={50}
                  src="/image/reciclame.svg"
                  className="m-2 ml-4 flex gap-4 p-2"
                  alt="reciclame"
                />
              </Link>
              <ul className="m-2 mr-16 flex items-center gap-7 p-2">
                <MenuIcon />
                <Link
                  className="hidden border-secondary-violet p-1 hover:border-b-2 md:block"
                  href={"/explorar"}
                >
                  Explorar
                </Link>
                <Link
                  className="hidden border-secondary-violet p-1 hover:border-b-2 md:block"
                  href={"/registro"}
                >
                  Registrarse
                </Link>
                <Link
                  className="hidden w-40 rounded-full bg-primary-green p-1 text-center font-bold text-white transition duration-300 hover:bg-green-500 md:block"
                  href={"/login"}
                >
                  Iniciar Sesión
                </Link>
              </ul>
            </nav>
          </header>
        </div>
      )}
    </>
  );
}
