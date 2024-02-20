import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#EFEFEF] min-h-36 flex flex-col justify-between">
      <nav className="grid grid-cols-1 min-[850px]:grid-cols-3 max-[850px]:w-fit w-7/12 min-[850px]:ml-52 mx-auto left-1/2 my-8 gap-y-4">
        <Link href={'#'} className='min-[850px]:col-start-1 min-[850px]:row-start-1 underline w-fit'>Políticas y condiciones</Link>
        <Link href={'#'} className='min-[850px]:col-start-1 underline w-fit'>Preguntas y respuestas</Link>
        <Link href={'#'} className='min-[850px]:col-start-2 min-[850px]:row-start-1 underline w-fit min-[850px]:mx-auto'>Nosotros</Link>
        <Link href={'#'} className='min-[850px]:col-start-2 underline w-fit min-[850px]:mx-auto'>Contacto</Link>
        <Link href={'/blog'} className='min-[850px]:col-start-3 min-[850px]:row-start-2 underline w-fit min-[850px]:mx-auto'>Blog</Link>
      </nav>
      <div className='min-[850px]:flex-row flex flex-col justify-center items-center gap-x-1 text-[#BDBDBD] text-sm mb-2'>
        <p>Todos los derecho reservados.</p>
        <p>Reciclame 2024®</p>
      </div>
    </footer>
  )
}
