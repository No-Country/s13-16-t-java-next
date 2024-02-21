import React from "react";
import CardPost from "../../components/CardPost";
import { SearchIcon } from "../../components/Icons";

const Page = () => {
  return (
    <div>
      <div className="mt-40">
        <label
          id="input-search"
          className="mx-auto mt-8 flex w-full items-center gap-4 text-pretty rounded-full bg-gray-200 p-4 max-w-xs md:max-w-xl"
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
        <div className="my-10 flex flex-wrap justify-center gap-4 md:mx-auto  md:columns-6 p-2">
          {Array.from({ length: 36 }).map((_, i) => (
            <CardPost key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
