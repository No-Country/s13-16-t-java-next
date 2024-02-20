import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MenuIconLog(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <XMarkIcon {...props} /> : <MenuIcon {...props} />}
      </div>
      {menuOpen && (
        <div className="fixed left-0 top-16 z-50 h-full w-1/2 translate-x-0 transform bg-gray-100 shadow-lg transition-transform duration-500 ease-out md:hidden">
          <div className="m-2 flex flex-wrap items-center p-2">
            <Image src={""} width={20} height={20} alt=""></Image>
            <div className="m-2 p-2">
              <h3 className="text-xl">Nombre de usuario</h3>
              <Link href={"/perfil"}>Mi Perfil</Link>
            </div>
          </div>
          <div className="flex h-full flex-col items-start justify-start">
            <Link
              className="m-1 ml-3 border-gray-300 p-2 text-center"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="m-1 ml-3 border-gray-300 p-2 text-center"
              href={""}
            >
              Notificaciones
            </Link>
            <Link
              className="m-1 ml-3 border-gray-300 p-2 text-center"
              href={""}
            >
              Mensajes
            </Link>
            <Link
              className="m-1 ml-3 border-gray-300 p-2 text-center"
              href={"/explorar"}
            >
              Explorar
            </Link>
            <Link className="m-1 ml-3 p-2 text-center" href={"/blog"}>
              Blog
            </Link>
            <div className="absolute bottom-20 flex flex-col p-2">
              <Link className="m-1 ml-3" href={""}>
                Preguntas Frecuentes
              </Link>
              <Link className="m-1 ml-3" href={""}>
                Soporte
              </Link>
              <Link className="m-1 ml-3 flex text-wrong" href={""}>
                Cerrar sesión
                <CerrarSesionIcon />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const MenuIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="block h-6 w-6 text-gray-700 md:hidden"
    >
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

const XMarkIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="block h-6 w-6 text-gray-700 md:hidden"
    >
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>
  );
};

const CerrarSesionIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="m-1 h-5 w-4"
      fill="#E93B3B"
    >
      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
    </svg>
  );
};
