"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { IconComment } from '../Icons/SearchIcon';
import { IconBell } from '../Icons/SearchIcon';



export default function HeaderLogin () {
  return (
    <div className="fixed left-0 top-0 w-full -mb-12 z-50">
        <header className="border-b-2 border-gray-500">
            <nav className="m-auto flex max-w-7xl justify-between">
                <ul className="m-2 flex gap-4 p-2 items-center">
                    <Image
                    width={48}
                    height={48}
                    src=""
                    className="flex p-2 mr-10"
                    alt=''
                    ></Image>
                    <Link className='p-1' href={"/"}>
                        Home
                    </Link>
                    <Link className='p-1' href={"/explorar"}>
                        Explorar
                    </Link>
                    <Link className='p-1' href={"/"}>
                        Blog
                    </Link>
                </ul>
                <ul className="flex gap-7 m-2 p-2 items-center">
                    <Link className='w-40 rounded-full bg-gray-300 p-1 text-center text-black' href={"/"}>
                        Publicar +
                    </Link>
                    <IconBell/>
                    <IconComment/>
                    <Image
                    width={40}
                    height={40}
                    className='p-2'
                    src=""
                    alt=''>
                    </Image>
                </ul>  
            </nav>
        </header>
      
    </div>
  )
}


