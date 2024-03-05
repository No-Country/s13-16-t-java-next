import React, { useState } from "react";
import Button from "@/src/components/Button";
import { PencilIcon, DeleteIcon } from "../Icons/EditIcon";
import { useRouter } from "next/navigation";
import PostComponent from "./PostComponent";
import { useCategies } from "@/src/hooks/useCategies";
import FormCreatePost from "../forms/FormPost/FormCreatePost";

export default function Post({ post }) {
  const [openDeleteMenu, setOpenDeleteMenu] = useState(false);
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [modeEdit, setModeEdit] = useState(false);

  const userLoggedId =
    typeof window !== "undefined" && localStorage.getItem("userLoggedId");

  const router = useRouter();

  const isOwner =
    userLoggedId === post.profileResponseDto.userResponseDTO.userId;

  const { categories } = useCategies();
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

  const handleEdit = () => {
    setModeEdit(true);
    setOpenEditMenu(!openEditMenu);
  };
  

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
      {post?.id && <PostComponent post={post} />}
      {isOwner && (
        <div className="-order-1 flex justify-between gap-1 p-5 lg:px-24">
          <Button className="p-1 rounded-3xl text-sm md:text-base bg-accent-yellow font-[500] lg:w-[30%]">
            Intercambio exitoso
          </Button>
          <div className=" flex justify-end gap-2 lg:col-span-2">
            <Button
              className="rounded-3xl bg-primary-green  px-3 md:px-5 md:py-2 font-[500] text-white "
              handle={() => handleEdit()}
            >
              <PencilIcon />
            </Button>
            <Button
              handle={() => setOpenDeleteMenu(true)}
              className=" rounded-3xl bg-wrong  px-3 md:px-5 md:py-2  font-[500] text-white lg:block"
            >
              <DeleteIcon />
            </Button>
          </div>
        </div>
      )}
      {openEditMenu && isOwner && (
        <div className="fixed inset-0 z-40 grid h-full w-full  bg-white">
          <FormCreatePost categories={categories} post={post} modeEdit={modeEdit} />
        </div>
      )}
    </>
  );
}
