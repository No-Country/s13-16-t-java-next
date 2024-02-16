"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeaderLogin from "../HeaderLogin/HeaderLogin";

import { Context } from "../../context/ContextProvider";
import { useContext } from "react";

export default function Header() {
  const { isLogged, setIsLogged } = useContext(Context);

  return (
    <>
      {isLogged ? (
        <HeaderLogin />
      ) : (
        <div className="fixed left-0 top-0 -mb-12 w-full z-10">
          <header className="border-b-2 border-gray-500">
            <nav className="m-auto flex max-w-7xl justify-between">
              <Image
                width={48}
                height={48}
                src=""
                className="m-2 flex gap-4 p-2"
                alt=""
              />
              <ul className="m-2 flex gap-4 p-2">
                <Link className="p-1" href={"/explorar"}>
                  Explorar
                </Link>
                <Link className="p-1" href={"/registro"}>
                  Registrarse
                </Link>
                <Link
                  className="w-40 rounded-full bg-gray-300 p-1 text-center font-bold text-white"
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
