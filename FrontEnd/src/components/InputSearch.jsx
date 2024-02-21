import { SearchIcon } from '../components/Icons'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
/* import { useDebouncedCallback } from 'use-debounce'; */

export default function InputSearch({query, placeHolder}){
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const {replace} = useRouter()

    /* const handleSearch = useDebouncedCallback((filtered) => {
        const params = new URLSearchParams(searchParams)
        filtered? params.set(query, filtered) : params.delete(query)
        replace(`${pathName}?${params.toString()}`)
    }, 300) */
    const handleSearch = (filtered) => {
        const params = new URLSearchParams(searchParams)
        filtered? params.set(query, filtered) : params.delete(query)
        replace(`${pathName}?${params.toString()}`)
    }

    return(
        <label id="input-search" className="mx-auto w-full max-w-[850px] rounded-full flex items-center gap-4 text-pretty px-4 py-2 border-solid border-2 border-[#6D6D6D]">
            <SearchIcon className="aspect-square w-[1.875rem] fill-[#6D6D6D]" />
                <input
                onChange={(event) => handleSearch(event.target.value)}
                defaultValue={searchParams.get(query)?.toString()}
                className="w-full border-none bg-transparent outline-none text-[#6D6D6D] placeholder:text-[#6D6D6D]"
                type="search"
                name="search"
                id="input-search"
                placeholder={placeHolder}
                />
        </label>
    )
}