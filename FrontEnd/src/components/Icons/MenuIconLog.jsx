import React, { useState } from "react";
import Link from "next/link";

export default function MenuIconLog(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? (
          <XMarkIcon {...props} />
        ) : (
          <MenuIcon {...props} />
        )}
      </div>
      {menuOpen && (
        <div className="absolute right-0 top-full flex w-full flex-col border border-gray-300 bg-gray-200 shadow-lg md:hidden">
          <Link className="m-2 border-b border-gray-300 text-center" href={"/"}>
            Home
          </Link>
          <Link className="m-2 border-b border-gray-300 text-center" href={""}>
            Notificaciones
          </Link>
          <Link className="m-2 border-b border-gray-300 text-center" href={""}>
            Mensajes
          </Link>
          <Link className="m-2 border-b border-gray-300 text-center" href={"/explorar"}>
            Explorar
          </Link>
          <Link className="m-2 text-center" href={"/blog"}>
            Blog
          </Link>
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
