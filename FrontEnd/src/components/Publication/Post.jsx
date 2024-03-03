"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/src/components/Button";
import Coments from "@/src/components/Coments";
import FormComent from "@/src/components/forms/FormComent/FormComent";
import WspIcon from "../Icons/WspIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getPublication } from "@/src/lib/api";
import LikeIcon from "../Icons/LikeIcon";
import { PencilIcon, DeleteIcon } from "../Icons/EditIcon";

export default function Post({ post, post_id }) {
  const [PostData, setPostData] = useState(post);
  const [intervalId, setIntervalId] = useState(null);

  const { enableComments, id } = post;

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

  const [openDeleteMenu, setOpenDeleteMenu] = useState(false);

  const userLoggedId =
    typeof window !== "undefined" && localStorage.getItem("userLoggedId");

  const { title, category, description, comments, imageUrl, love } = PostData;
  const [like, setLike] = useState(love);
  const [liked, setLiked] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const router = useRouter();

  const isLogged =
    typeof window !== "undefined" && localStorage.getItem("isLogged");

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

  const isOwner =
    userLoggedId === post?.profileResponseDto?.userResponseDTO?.userId;

  async function toggleSwitch() {
    const form = new FormData();
    form.append("enableComments", !enableComments);

    const res = await fetch(
      `https://deployreciclame-production.up.railway.app/posts/update/${id}`,
      {
        body: form,
      },
    );
    const data = await res.json();
    return data;
  }

  async function DeletePost() {
    setOpenDeleteMenu(false);
    router.push("/explorar");

    const res = await fetch(
      `https://deployreciclame-production.up.railway.app/posts/delete/${post?.id}`,
      {
        method: "DELETE",
      },
    );

    const data = await res.json();

    return data;
  }

  return (
    <>
      {isOwner && isLogged && (
        <>
          {openDeleteMenu && (
            <div className="fixed inset-0 z-50 grid h-full w-full place-items-center opacity-100 backdrop-blur-sm">
              <span
                onClick={() => setOpenDeleteMenu(false)}
                className="absolute top-0 h-full w-full"
              />
              <div className="relative rounded-lg rounded-bl-3xl border-[3px] border-wrong bg-white p-3">
                <p>¿Estas seguro de eliminar esta publicación?</p>
                <button
                  onClick={() => DeletePost()}
                  className="mt-4 rounded-full bg-wrong px-4 py-2 text-white"
                >
                  Eliminar
                </button>
              </div>
            </div>
          )}
          <div className="flex justify-between gap-2 p-5  lg:px-24">
            <Button className=" w-[45%] rounded-3xl  bg-accent-yellow p-2 font-[500] lg:w-[25%]  ">
              Intercambio exitoso
            </Button>
            <div className=" flex justify-end gap-3 lg:col-span-2">
              <Button className="rounded-3xl bg-primary-green p-2  px-5 font-[500] text-white ">
                <PencilIcon />
              </Button>
              <Button
                handle={() => setOpenDeleteMenu(true)}
                className=" rounded-3xl bg-wrong p-1 px-5 font-[500] text-white lg:block"
              >
                <DeleteIcon />
              </Button>
            </div>
          </div>
        </>
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

          <Link
            target="_blank"
            href={
              isLogged
                ? `https://wa.me/${post?.profileResponseDto?.userResponseDTO?.phone}?text=Hola%20${post?.profileResponseDto?.userResponseDTO?.name}%20me%20interesa%20tu%20publicación%20de%20${title}`
                : "/login"
            }
            className={`mt-0 flex w-full justify-center gap-2 rounded-3xl bg-accent-yellow p-2 text-lg font-[500] ${!isLogged && "pointer-events-none opacity-50"}`}
          >
            Me interesa <WspIcon />
          </Link>
          {isOwner && isLogged && (
            <div className="flex items-center gap-2">
              <label
                onChange={() => toggleSwitch}
                className={`relative h-6 w-12 rounded-full bg-gray-300 focus:outline-none ${enableComments ? "bg-primary-green" : "bg-[#E3E3E3]"}`}
                htmlFor="checkbox-enable-comment"
              >
                <input
                  checked={enableComments}
                  className="hidden"
                  type="checkbox"
                  name="checkbox-enable-comment"
                  id="checkbox-enable-comment"
                />
                <span
                  className={`absolute bottom-0 left-0 h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${enableComments ? "translate-x-full" : ""}`}
                ></span>
              </label>
              <p className="text-[#D9D9D9]">Activar Comentarios</p>
            </div>
          )}

          {isLogged && mounted && enableComments && (
            <>
              <Coments coments={comments} />
              <FormComent postId={post.id} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
