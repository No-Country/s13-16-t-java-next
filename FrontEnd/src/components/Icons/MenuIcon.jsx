import React, { useState } from "react";
import Link from "next/link";

export default function MenuIcon(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    toggleMenu();
  };

  return (
    <>
      <div className="cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <XMarkIcon {...props} /> : <HamburgerIcon {...props} />}
      </div>
      <div
        className={`absolute left-0 top-16 w-full md:hidden ${!menuOpen ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div
          className="relative z-10 h-full w-full translate-x-0 transform bg-white shadow-lg transition-transform duration-[250ms] ease-out md:hidden"
          style={
            menuOpen
              ? { transform: "translateX(0)" }
              : { transform: "translateX(-100%)" }
          }
        >
          <div className="flex flex-col">
            <Link
              onClick={handleClick}
              className="m-2 border-b border-gray-300 p-1 text-lg hover:text-primary-green "
              href={"/registro"}
            >
              Registrarse
            </Link>
            <Link
              onClick={handleClick}
              className="m-2 border-b border-gray-300 p-1 text-lg hover:text-primary-green"
              href={"/login"}
            >
              Iniciar Sesión
            </Link>
            <Link
              onClick={handleClick}
              className="m-2 p-1 text-lg hover:text-primary-green"
              href={"/explorar"}
            >
              Explorar
            </Link>
          </div>
        </div>
        <div />
      </div>
    </>
  );
}

const HamburgerIcon = (props) => {
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
