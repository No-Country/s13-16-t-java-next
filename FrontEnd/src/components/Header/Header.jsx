"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import { Context } from "../../context/ContextProvider";
import { useContext } from "react";


export default function Header() {
  const { isLogged, setIsLogged } = useContext(Context);

  return (
    <div className="fixed left-0 top-0 -mb-12 w-full">
      <header className="border-b-2 border-gray-500">
        <nav className="m-auto flex max-w-7xl justify-between">
          <Image
            width={48}
            height={48}
            src=""
            className="m-2 flex gap-4 p-2"
            alt=""
          ></Image>
          <ul className="m-2 flex gap-4 p-2">
            <Link className="p-1" href={"/"}>
              Explorar
            </Link>
            <Link className="p-1" href={"/"}>
              Registrarse
            </Link>
            <Link
              className="w-40 rounded-full bg-gray-300 p-1 text-center font-bold text-white"
              href={"/login"}
              onClick={() => setIsLogged(true)}
            >
              Iniciar Sesión
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
