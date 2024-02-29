"use client";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import HeartFavorite from "@/src/components/Icons/HeartFavorite";
import Button from "@/src/components/Button";
import Coments from "@/src/components/Coments";
import FormComent from "@/src/components/forms/FormComent/FormComent";
import WspIcon from "../Icons/WspIcon";
import Link from "next/link";
import { Context } from "@/src/context/ContextProvider";
import { useRouter } from "next/navigation";

export default function Post({ post }) {
  const { title, category, description, comments, imageUrl, love } = post;

  const [like, setLike] = useState(love);
  const [liked, setLiked] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const { isLogged, idUser, isActive, setIsActive } = useContext(Context);
  const router = useRouter();

  //Aca luego implementamos en useEffect la logica para actualizar los like ya sea ponga un like o lo quite.
  const handleLikeClick = () => {
    if (!isLogged) {
      router.push("/login");
      return;
    }
    if (liked) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setLiked(!liked);
  };
  const isOwner = idUser === post.id;

  const toggleSwitch = () => {
    setIsActive(!isActive);
    const newIsActive = !isActive;
    setIsActive(newIsActive);
    if (typeof window !== "undefined") {
      localStorage.setItem("isActive", JSON.stringify(newIsActive));
    }
  };

  return (
    <>
      <div className="flex w-full max-w-96 flex-col gap-8 p-5 md:max-w-[35rem] lg:p-20 xl:p-24">
        {isOwner && isLogged && (
          <div className="flex justify-between gap-2 lg:justify-start">
            <Button className="w-3/5  rounded-3xl bg-accent-yellow p-2 font-[500]  lg:w-1/2 ">
              Intercambio exitoso
            </Button>
            <Button className=" w-1/3 rounded-3xl bg-primary-green p-2  font-[500] text-white ">
              Editar
            </Button>
          </div>
        )}

        <picture className="mx-auto items-center justify-center rounded-2xl lg:flex ">
          <Image
            src={imageUrl}
            alt={"Image Post"}
            width={400}
            height={400}
            priority
            className="rounded-2xl"
          />
        </picture>
        <div className="max-[750px]:translate-y-30  mt-0 flex justify-between lg:static">
          <div className="flex items-center gap-3">
            <Image
              src={post.imgProfile ? post.imgProfile : "/image/profile1.png"}
              alt="image Profile"
              height={70}
              width={70}
              className="rounded-full bg-[#b8b8b8]"
            />
            <p>{post.nameUser ? post.nameUser : "Usuario que publica"}</p>
          </div>
          <Button
            props={love}
            handle={handleLikeClick}
            className=" flex items-center lg:static"
          >
            <span>{like}</span>
            <HeartFavorite />
          </Button>
        </div>
      </div>
      <div className="flex w-full max-w-96 flex-col gap-4 p-5 md:max-w-[35rem] lg:gap-8 lg:p-20 xl:p-24">
        {isOwner && isLogged && (
          <div className=" flex justify-end">
            <Button className="hidden w-1/2 rounded-3xl  bg-wrong p-1 font-[500] text-white lg:block  lg:w-1/2 lg:p-2">
              Eliminar Publicación
            </Button>
          </div>
        )}

        <h3 className="text-xl font-semibold lg:text-4xl">
          {title ? title : "Sin título"}
        </h3>
        <p className="flex w-fit items-center justify-center rounded-3xl bg-[#b8b8b8] p-1 px-4">
          {category}
        </p>
        <p className="text-justify">{description}</p>

        <Link
          href={isLogged ? "https://wa.me/" : "/login"}
          className={`mt-0 flex w-full justify-center gap-2 rounded-3xl bg-accent-yellow p-2 text-lg font-[500] ${!isLogged && "pointer-events-none opacity-50"}`}
        >
          Me interesa <WspIcon />
        </Link>
        {isOwner && isLogged && (
          <div className="flex items-center gap-2">
            <Button
              className={`relative h-6 w-12 rounded-full bg-gray-300 focus:outline-none ${isActive ? "bg-primary-green" : "bg-[#E3E3E3]"}`}
              handle={toggleSwitch}
            >
              <span
                className={`absolute bottom-0 left-0 h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${isActive ? "translate-x-full" : ""}`}
              ></span>
            </Button>
            <p className="text-[#D9D9D9]">Activar Comentarios</p>
          </div>
        )}

        <Coments coments={comments} />
        {isLogged && mounted && isActive && <FormComent postId={post.id} />}
        {isOwner && isLogged && (
          <div className=" flex w-[90%]">
            <Button className="w-full rounded-3xl bg-wrong p-2 font-[500] text-white lg:hidden  lg:w-1/2 lg:p-2">
              Eliminar Publicación
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
