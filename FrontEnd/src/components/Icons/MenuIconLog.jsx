import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGetNotifications } from "@/src/hooks/useGetNotifications";
import { Context } from "@/src/context/ContextProvider";

export default function MenuIconLog(props) {
  const { setIsLogged } = useContext(Context);

  const [profile, setProfile] = useState({});

  const [menuOpen, setMenuOpen] = useState(false);
  const { unread } = useGetNotifications();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const perfilId = localStorage.getItem("profileId");
      if (perfilId) {
        fetch(
          `https://deployreciclame-production.up.railway.app/profiles/${perfilId}`,
        )
          .then((response) => response.json())
          .then((data) => setProfile(data));
      }
    }
  }, []);
  const name = profile.userResponseDTO.name;

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleLinkClick() {
    toggleMenu();
  }

  function logOut() {
    setIsLogged(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLogged");
      localStorage.removeItem("userLoggedId");
      localStorage.removeItem("profileId");
    }
  }

  const pathname = usePathname();

  return (
    <>
      <div className="cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <XMarkIcon {...props} /> : <MenuIcon {...props} />}
      </div>
      <div
        className={`fixed left-0 top-16 z-50 h-full w-full md:hidden ${!menuOpen ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div
          className="relative z-10 h-full w-1/2 translate-x-0 transform bg-white shadow-lg transition-transform duration-[250ms] ease-out md:hidden"
          style={
            menuOpen
              ? { transform: "translateX(0)" }
              : { transform: "translateX(-100%)" }
          }
        >
          <div className="flex items-center gap-2 p-2">
            <Image
              src={profile.photoId}
              width={60}
              height={60}
              alt="Imagen de Perfil"
              className="rounded-full"
            />
            <div className=" w-full flex-col p-2">
              <h3 className="">{name}</h3>
              <Link
                href={"/perfil"}
                className={`text-sm text-primary-green underline hover:cursor-pointer`}
                onClick={handleLinkClick}
              >
                Mi Perfil →
              </Link>
            </div>
          </div>
          <div className="flex h-full flex-col items-start justify-start">
            <Link
              className=" mb-3 ml-3 w-[90%] rounded-3xl bg-accent-yellow p-1 text-center tracking-wider text-black shadow"
              href={"/nuevopost"}
            >
              Publicar +
            </Link>
            <Link
              className={`header-mobile-link ${pathname === "/" ? "border border-secondary-violet" : ""}`}
              href={"/"}
              onClick={handleLinkClick}
            >
              Home
            </Link>

            <Link
              className={`header-mobile-link ${pathname === "/notificaciones" ? "border border-secondary-violet" : ""} flex justify-between`}
              href={"/notificaciones"}
              onClick={handleLinkClick}
            >
              Notificaciones
              {unread?.length > 0 && (
                <div className="unread-notification flex md:hidden">
                  {unread?.length}
                </div>
              )}
            </Link>

            <Link
              className={`header-mobile-link ${pathname === "/explorar" ? "border border-secondary-violet" : ""}`}
              href={"/explorar"}
              onClick={handleLinkClick}
            >
              Explorar
            </Link>
            <Link
              className={`header-mobile-link ${pathname === "/blog" ? "border border-secondary-violet" : ""}`}
              href={"/blog"}
              onClick={handleLinkClick}
            >
              Blog
            </Link>

            <div className="absolute bottom-20 flex flex-col justify-start p-2">
              <Link
                className="m-1 flex text-wrong"
                href={""}
                onClick={() => {
                  handleLinkClick();
                  logOut();
                }}
              >
                Cerrar sesión
                <CerrarSesionIcon />
              </Link>
            </div>
          </div>
        </div>
        <div
          onClick={toggleMenu}
          className="h-full w-full backdrop-blur-sm transition-transform duration-[250ms] ease-out md:hidden"
          style={
            menuOpen
              ? { transform: "translateY(-100%)" }
              : { transform: "translateY(0)" }
          }
        />
      </div>
    </>
  );
}

const MenuIcon = (props) => {
  return (
    <div className="rounded-md bg-primary-green p-2 md:hidden">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="block h-6 w-6 text-white md:hidden"
        fill="#ffffff"
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    </div>
  );
};

const XMarkIcon = (props) => {
  return (
    <div className="rounded-md bg-primary-green p-2 md:hidden">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="block h-6 w-6 text-white md:hidden"
        fill="#ffffff"
      >
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
    </div>
  );
};

const CerrarSesionIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="m-1 h-5 w-4"
    >
      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
    </svg>
  );
};
