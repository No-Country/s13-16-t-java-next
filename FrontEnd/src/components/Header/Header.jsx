"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import MenuIcon from "../Icons/MenuIcon";

import { Context } from "../../context/ContextProvider";
import { useContext } from "react";

export default function Header() {
  const { isLogged } = useContext(Context);

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
                  width={48}
                  height={48}
                  src="/android-chrome-192x192.png"
                  className="m-2 ml-4 flex gap-4 p-2"
                  alt="reciclame"
                />
              </Link>
              <ul className="m-2 flex items-center gap-7 p-2 mr-16">
                <MenuIcon />
                <Link className="hidden p-1 md:block" href={"/explorar"}>
                  Explorar
                </Link>
                <Link className="hidden p-1 md:block" href={"/registro"}>
                  Registrarse
                </Link>
                <Link
                  className="hidden w-40 hover:bg-green-500 rounded-full transition duration-300 bg-primary-green p-1 text-center font-bold text-white md:block"
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
