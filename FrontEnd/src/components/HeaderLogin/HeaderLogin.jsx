"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconComment } from "../Icons/SearchIcon";
import { IconBell } from "../Icons/SearchIcon";
import MenuIconLog from "../Icons/MenuIconLog"



export default function HeaderLogin() {

  return (
    <div className="fixed left-0 top-0 z-50 -mb-12 w-full">
      <header className="border-b-2 border-gray-500">
        <nav className="m-auto flex max-w-7xl justify-between">
          <ul className="m-2 flex items-center gap-4 p-2">
            <Image
              width={48}
              height={48}
              src=""
              className="mr-10 flex p-2"
              alt=""
            ></Image>
            <Link className="p-1 hidden md:block" href={"/"}>
              Home
            </Link>
            <Link className="p-1 hidden md:block" href={"/explorar"}>
              Explorar
            </Link>
            <Link className="p-1 hidden md:block" href={"/blog"}>
              Blog
            </Link>
          </ul>
          <ul className="m-2 flex items-center gap-7 p-2">
            <MenuIconLog/>
            <Link
              className="w-40 rounded-full bg-gray-300 p-1 text-center text-black hidden md:block"
              href={"/"}
            >
              Publicar +
            </Link>
            <IconBell />
            <IconComment />
            <Image width={40} height={40} className="p-2 hidden md:block" src="" alt=""></Image>
          </ul>
        </nav>
      </header>
    </div>
  );
}
