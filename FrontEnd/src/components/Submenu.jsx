import Link from "next/link";
import Image from "next/image"
import { useState, useContextgit  } from "react";
import { Context } from "../context/ContextProvider";


export default function Submenu() {
  const [showMenu, setShowMenu] = useState(false);

  const {setlogged} = useContext(Context)
  const logOut = () => {
      setlogged(false)
  }
  return (
  
    <>
      <Image
        width={60}
        height={60}
        className="hidden rounded-full p-2 md:block hover:cursor-pointer"
        src="/image/profileHeader.png"
        alt="imagen perfil usuario"
        priority
        onClick={() => setShowMenu(!showMenu)}
      ></Image>
      {showMenu ? (
        <div className="hidden  absolute -bottom-[140px] right-0 lg:flex  h-36 w-40 flex-col justify-between rounded-xl border border-gray-dark-bg p-3">
          <Link href={"/profile"} className="hover:border-b-2 border-secondary-violet"> Perfil</Link>
          <Link href={""} className="hover:border-b-2 border-secondary-violet"> Donaciones</Link>
          <Link href={"/configuracion"}  className="hover:border-b-2 border-secondary-violet"> Configuración</Link>
          <Link href={"/"} onClick={logOut} className="hover:border-b-2 border-secondary-violet"> Cerrar Sesion</Link>
        </div>
      ) : null}
    </>
  );
}
