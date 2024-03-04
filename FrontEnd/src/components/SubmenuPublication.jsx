import React from "react";
import Link from "next/link";
import { NewBlogPostIcon, NewPostIcon } from "./Icons/NewPostIcon";

export default function SubmenuPublication() {
  return (
    <div className="group relative">
      <div className="hidden w-40  rounded-full bg-accent-yellow p-2 text-center tracking-wider text-black hover:cursor-pointer md:block">
        Publicar +
      </div>
      <div className="absolute -bottom-[100px] right-0 pt-5">
        <div className="hidden h-20 w-40 flex-col gap-2 rounded-xl border bg-white p-3 shadow-lg md:group-hover:flex">
          <Link
            href={"/nuevopost"}
            className="flex gap-3 border-secondary-violet hover:border-b-2"
          >
            <NewPostIcon />
            <span href={"/nuevopost"}>Publicación</span>
          </Link>
          <Link
            href={""}
            className="flex gap-3 border-secondary-violet hover:border-b-2"
          >
            <NewBlogPostIcon />
            <span>Noticia</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
