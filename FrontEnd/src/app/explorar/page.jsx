import React from 'react'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'
import CardPost from '../../components/CardPost'
import { SearchIcon } from '../../components/Icons'



const page = () => {
  return (
    <div>
        <HeaderLogin/>
        <div className='mt-40'>
            <label
              id="input-search"
              className="mx-auto mt-8 w-full max-w-xl bg-gray-200 rounded-full flex items-center gap-4 text-pretty p-4"
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
          <div className="my-10 flex flex-wrap justify-center gap-4 md:mx-auto md:w-2/3 md:columns-6">
                {Array.from({ length: 36 }).map((_, i) => (
                  <CardPost key={i} />
                ))}
          </div>
      </div>
    </div>
  )
}

export default page
