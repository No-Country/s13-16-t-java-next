"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/src/components/Button";
import Coments from "@/src/components/Coments";
import FormComent from "@/src/components/forms/FormComent/FormComent";
import WspIcon from "../Icons/WspIcon";
import Link from "next/link";
import { Context } from "@/src/context/ContextProvider";
import { useRouter } from "next/navigation";
import { getPublication } from "@/src/lib/api";
import LikeIcon from "../Icons/LikeIcon";
import { PencilIcon, DeleteIcon } from "../Icons/EditIcon";
import { useContext } from "react";


export default function Post({ post, post_id }) {
  const [PostData, setPostData] = useState(post);
  const [intervalId, setIntervalId] = useState(null);

  setInterval(() => {
    setIntervalId(Math.random());
  }, 10000);

  useEffect(() => {
    async function fetchPost() {
      const data = await getPublication(post_id);
      setPostData(data);
      return data;
    }
    fetchPost();
  }, [intervalId]);

  const { title, category, description, comments, imageUrl, love } = PostData;
  console.log(PostData);
  const [like, setLike] = useState(love);
  const [liked, setLiked] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const { isLogged, idUser, isActive, setIsActive } = useContext(Context);
  const router = useRouter();

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
      {isOwner && isLogged && (
        <div className="flex justify-between gap-2 lg:px-24  p-5">
          <Button className=" lg:w-[25%] w-[45%]  rounded-3xl bg-accent-yellow p-2 font-[500]  ">
            Intercambio exitoso
          </Button>
          <div className=" flex justify-end gap-3 lg:col-span-2">
            <Button className="rounded-3xl bg-primary-green p-2  px-5 font-[500] text-white ">
              <PencilIcon />
            </Button>
            <Button className=" rounded-3xl bg-wrong p-1 px-5 font-[500] text-white lg:block">
              <DeleteIcon />
            </Button>
          </div>
<<<<<<< HEAD
        )}

        <h3 className="text-xl font-semibold lg:text-4xl">
          {title ? title : "Sin título"}
        </h3>
        <p className="flex w-fit items-center justify-center rounded-3xl bg-secondary-violet p-1 px-4 text-white">
          {category}
        </p>
        <p className="text-justify">{description}</p>

        <Link
          href={isLogged ? `https://wa.me/` : "/login"}
          className={`mt-0 flex w-full justify-center gap-2 rounded-3xl bg-accent-yellow p-2 text-lg font-[500] ${!isLogged && "pointer-events-none opacity-50"}`}
        >
          Me interesa <WspIcon />
        </Link>
        {isOwner && isLogged && (
          <div className="flex items-center gap-2">
=======
        </div>
      )}
      <div className="grid lg:grid-cols-2">
        <div className="flex w-full max-w-96 flex-col gap-8 p-5 md:max-w-[35rem] lg:p-20 xl:p-24">
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
>>>>>>> 665800aa36382df7cfd8a59a3eeed5a6f2db15ae
            <Button
              props={love}
              handle={handleLikeClick}
              className=" flex items-center gap-2"
            >
              <span>{like}</span>
              <LikeIcon />
            </Button>
          </div>
        </div>
        <div className="flex w-full max-w-96 flex-col gap-4 p-5 md:max-w-[35rem] lg:gap-8 lg:p-20 xl:p-24">
          <h3 className="text-xl font-semibold lg:text-4xl">
            {title ? title : "Sin título"}
          </h3>
          <p className="flex w-fit items-center justify-center rounded-3xl bg-secondary-violet p-1 px-4 text-white">
            {category}
          </p>
          <p className="text-justify">{description}</p>

<<<<<<< HEAD
        {isLogged && mounted && isActive && (
          <>
            <Coments coments={comments} />
            <FormComent postId={post.id} />
          </>
        )}
=======
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

          {isLogged && mounted && isActive && (
            <>
              <Coments coments={comments} />
              <FormComent postId={post.id} />
            </>
          )}
        </div>
>>>>>>> 665800aa36382df7cfd8a59a3eeed5a6f2db15ae
      </div>
    </>
  );
}
