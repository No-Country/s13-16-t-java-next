"use client";

import { SearchIcon } from "../components/Icons";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
/* import { useDebouncedCallback } from 'use-debounce'; */

export default function InputSearch({ query, placeHolder }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  /* const handleSearch = useDebouncedCallback((filtered) => {
        const params = new URLSearchParams(searchParams)
        filtered? params.set(query, filtered) : params.delete(query)
        replace(`${pathName}?${params.toString()}`)
    }, 300) */
  const handleSearch = (filtered) => {
    const params = new URLSearchParams(searchParams);
    filtered ? params.set(query, filtered) : params.delete(query);
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <label
      id="input-search"
      className="mx-auto flex w-full max-w-[850px] items-center gap-4 text-pretty rounded-full border-2 border-solid border-[#6D6D6D] px-4 py-2"
    >
      <SearchIcon className="aspect-square w-[1.875rem] fill-[#6D6D6D]" />
      <input
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get(query)?.toString()}
        className="w-full border-none bg-transparent text-[#6D6D6D] outline-none placeholder:text-[#6D6D6D]"
        type="search"
        name="search"
        id="input-search"
        placeholder={placeHolder}
      />
    </label>
  );
}
