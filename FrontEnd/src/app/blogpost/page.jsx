"use client";

import { ChevronDownIcon } from "@/src/components/Icons";
import Link from "next/link";

export default function blogPost() {
  return (
    <div className="min-h-[calc(100dvh_-_64px)] md:grid md:place-items-center">
      <form
        className="mx-auto mt-20 w-full max-w-5xl p-12 md:flex md:flex-row-reverse md:justify-between md:gap-4"
        encType="multipart/form-data"
      >
        <div className="md:w-1/2">
          <input
            className="input-form mb-3 w-full hover:border-secondary-violet focus:outline-secondary-violet"
            type="text"
            placeholder="Título"
            id="title"
          />
          <div className="relative">
            <select
              className="input-form mb-3 w-full hover:border-secondary-violet focus:outline-secondary-violet"
              type="select"
              placeholder="Categoría"
              id="category"
            >
              <option value="">Categoría</option>
              <hr />
              <option value="reciclaje">Reciclaje</option>
            </select>
            <ChevronDownIcon className="chevron-down-icon mr-1 p-1" />
          </div>
          <textarea
            className="input-form mb-3 max-h-80 min-h-40 w-full resize-none hover:border-secondary-violet focus:outline-secondary-violet"
            type="text"
            placeholder="Desripción"
            id="description"
          />
          <div className="hidden w-full  gap-2 md:flex md:justify-end">
            <Link
              href={"/"}
              className=" w-full rounded-3xl border border-secondary-violet p-2 text-center text-secondary-violet transition duration-500 hover:scale-105 md:w-1/3 ">
              Cancelar
            </Link>
            <button
              type="submit"
              className=" w-full rounded-3xl bg-accent-yellow p-2 text-center transition duration-500 hover:scale-105 disabled:bg-gray-300 disabled:text-black lg:w-1/3 "
            >
              Publicar
            </button>
          </div>
        </div>
        <label className="dark:hover:bg-bray-800 grid aspect-square w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 md:h-[400px] md:w-[400px] dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex items-center justify-center object-cover p-10">
            {/* eslint-disable-next-line */}
            <img
              src=""
              alt="foto de publicacion"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <input name="file" id="file" type="file" className="hidden" />
        </label>
        <div className="lg:flex-end flex w-full flex-col md:hidden">
          <button
            type="submit"
            className="mb-5 mt-4 w-full rounded-3xl bg-accent-yellow p-2 text-center transition duration-500 hover:scale-105 disabled:bg-gray-300 disabled:text-black lg:m-2 lg:w-28"
          >
            Publicar
          </button>
          <Link
            href={"/"}
            className="mb-4 w-full rounded-3xl border border-secondary-violet p-2 text-center text-secondary-violet transition duration-500 hover:scale-105 lg:m-2 lg:w-28"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
