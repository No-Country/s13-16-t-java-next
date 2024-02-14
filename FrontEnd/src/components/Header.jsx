import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <header className='border-b-2 border-gray-500'>
        <nav className='flex justify-between m-auto max-w-7xl'>
            <ul className='flex m-2 p-2 gap-4'>
                <Link className='p-1' href={'/'}>Logo</Link>
            </ul>
            <ul className='flex m-2 p-2 gap-4'>
                <Link className='p-1' href={'/'}>Explorar</Link>
                <Link className='p-1' href={'/'}>Registrarme</Link>
                <Link className='text-white bg-gray-300 font-bold rounded-full w-40 text-center p-1' href={'/'}>Iniciar Sesión</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
