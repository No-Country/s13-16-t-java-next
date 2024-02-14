import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


export default function () { 
  return (
    <header className='border-b-2 border-gray-500'>
        <nav className='flex justify-between m-auto max-w-7xl'>
            <Image width={48} height={48} src="" className='flex m-2 p-2 gap-4'></Image>
            <ul className='flex m-2 p-2 gap-4'>
                <Link className='p-1' href={'/'}>Explorar</Link>
                <Link className='p-1' href={'/'}>Registrarme</Link>
                <Link className='text-white bg-gray-300 font-bold rounded-full w-40 text-center p-1' href={'/'}>Iniciar Sesión</Link>
            </ul>
        </nav>
    </header>
  )
}



