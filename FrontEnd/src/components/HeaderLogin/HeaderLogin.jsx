"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconComment } from "../Icons/SearchIcon";
import { IconBell } from "../Icons/SearchIcon";
import MenuIconLog from "../Icons/MenuIconLog";
import Submenu from "../Submenu";

export default function HeaderLogin() {
  return (
    <div className="fixed left-0 top-0 z-50 -mb-12 w-full bg-white">
      <header className="border-b-2 border-gray-500">
        <nav className="m-auto flex h-16 max-w-7xl justify-between relative">
          <ul className="m-2 flex items-center gap-4 p-2">
            <Image
              width={48}
              height={48}
              src=""
              className="mr-10 flex p-2"
              alt=""
            ></Image>
            <Link className="hidden p-1 md:block" href={"/"}>
              Home
            </Link>
            <Link className="hidden p-1 md:block" href={"/explorar"}>
              Explorar
            </Link>
            <Link className="hidden p-1 md:block" href={"/blog"}>
              Blog
            </Link>
          </ul>
          <ul className="m-2 flex items-center gap-7 p-2">
            <MenuIconLog />
            <Link
              className="hidden w-40 rounded-full bg-accent-yellow p-2 text-center  text-black md:block"
              href={"/"}
            >
              Publicar +
            </Link>
            <IconBell />
            <IconComment />
           
           
            <Submenu/>
   
          </ul>
        </nav>
      </header>
    </div>
  );
}
