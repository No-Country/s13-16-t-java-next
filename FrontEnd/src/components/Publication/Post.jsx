import React, { useState } from "react";
import Button from "@/src/components/Button";
import { PencilIcon, DeleteIcon } from "../Icons/EditIcon";
import { useRouter } from "next/navigation";
import PostComponent from "./PostComponent";

export default function Post({ post }) {
  const [openDeleteMenu, setOpenDeleteMenu] = useState(false);

  const userLoggedId =
    typeof window !== "undefined" && localStorage.getItem("userLoggedId");

  const router = useRouter();

  const isOwner =
    userLoggedId === post.profileResponseDto.userResponseDTO.userId;

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
      {openDeleteMenu && isOwner && (
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
      {post?.id && (
        <PostComponent post={post} />
      )}
      {isOwner && (
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
      )}
    </>
  );
}
