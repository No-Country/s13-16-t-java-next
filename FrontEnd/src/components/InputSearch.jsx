import { SearchIcon } from '../components/Icons'

export default function InputSearch({placeHolder}){
    return(
        <label id="input-search" className="mx-auto w-full max-w-[850px] rounded-full flex items-center gap-4 text-pretty px-4 py-2 border-solid border-2 border-gray-400">
            <SearchIcon className="aspect-square w-[1.875rem]" />
                <input
                className="w-full border-none bg-transparent outline-none"
                type="search"
                name="search"
                id="input-search"
                placeholder={placeHolder}
                />
        </label>
    )
}