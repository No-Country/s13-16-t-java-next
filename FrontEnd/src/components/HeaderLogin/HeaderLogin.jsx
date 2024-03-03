
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NotificationIcon from "../NotificationIcon";
import MenuIconLog from "../Icons/MenuIconLog";
import Submenu from "../Submenu";
import SubmenuPublication from "../SubmenuPublication";

export default function HeaderLogin() {
  return (
    <div className="fixed left-0 top-0 z-50 -mb-12 w-full bg-white">
      <header className="shadow-xl">
        <nav className="relative m-auto flex h-16 max-w-7xl justify-between">
          <ul className="m-2 flex items-center gap-4 p-2">
            <Link href={"/"}>
              <Image
                width={150}
                height={50}
                src="/image/reciclame.svg"
                className="mr-10 flex p-2"
                alt="reciclame"
              ></Image>
            </Link>
            <Link
              className="hidden border-secondary-violet p-1 hover:border-b-2 md:block"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="hidden border-secondary-violet p-1 hover:border-b-2 md:block"
              href={"/explorar"}
            >
              Explorar
            </Link>
            <Link
              className="hidden border-secondary-violet p-1 hover:border-b-2 md:block"
              href={"/blog"}
            >
              Blog
            </Link>
          </ul>
          <ul className="m-4 flex items-center p-2 md:gap-6">
            <MenuIconLog />
            <SubmenuPublication />
            <NotificationIcon />

            <Submenu />
          </ul>
        </nav>
      </header>
    </div>
  );
}
