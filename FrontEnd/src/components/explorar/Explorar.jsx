"use client";
import { Suspense } from "react";
import CardPostWrapper from "../CardPostWrapper";
import { CardsPostsSkeleton } from "../skeletons";
import { SearchIcon } from "../../components/Icons";

export default function Explorar() {
  return (
    <div>
      <div className="mt-32 min-h-[80vh]">
        <label
          id="input-search"
          className="mx-auto mt-8 flex w-full max-w-xs items-center gap-4 text-pretty rounded-full bg-gray-200 p-4 md:max-w-xl"
        >
          <SearchIcon className="aspect-square w-[1.875rem]" />
          <input
            className="w-full border-none bg-transparent outline-none"
            type="search"
            name="search"
            id="input-search"
            placeholder="Busca materiales (ej: papel, plástico, etc)"
          />
        </label>
        <Suspense fallback={<CardsPostsSkeleton />}>
          <CardPostWrapper />
        </Suspense>
      </div>
    </div>
  );
}
