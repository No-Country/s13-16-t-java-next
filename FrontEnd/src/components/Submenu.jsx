import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { Context } from "../context/ContextProvider";

export default function Submenu() {
  const [showMenu, setShowMenu] = useState(false);

  const { setlogged } = useContext(Context);
  const logOut = () => {
    setlogged(false);
  };
  return (
    <>
      <Image
        width={60}
        height={60}
        className="hidden rounded-full p-2 hover:cursor-pointer md:block"
        src="/image/profileHeader.png"
        alt="imagen perfil usuario"
        priority
        onClick={() => setShowMenu(!showMenu)}
      ></Image>
      {showMenu ? (
        <div className="absolute  -bottom-[145px] right-0 hidden h-36  w-40 flex-col justify-between rounded-xl border  bg-white p-3  shadow-lg md:flex">
          <Link
            href={"/perfil"}
            className="border-secondary-violet hover:border-b-2"
          >
            {" "}
            Perfil
          </Link>
          <Link href={""} className="border-secondary-violet hover:border-b-2">
            {" "}
            Donaciones
          </Link>
          <Link
            href={"/configuracion"}
            className="border-secondary-violet hover:border-b-2"
          >
            {" "}
            Configuración
          </Link>
          <Link
            href={"/"}
            onClick={logOut}
            className="border-secondary-violet hover:border-b-2"
          >
            {" "}
            Cerrar Sesion
          </Link>
        </div>
      ) : null}
    </>
  );
}
