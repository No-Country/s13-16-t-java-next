import React, { useState } from "react";
import { PencilIcon, DeleteIcon } from "../Icons/EditIcon";
import { useRouter } from "next/navigation";
import PostComponent from "./PostComponent";
import { useCategies } from "@/src/hooks/useCategies";
import FormCreatePost from "../forms/FormPost/FormCreatePost";
import { toast } from "sonner";

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

  const handleClosePost = async () => {
    try {
      const res = await fetch(
        `https://deployreciclame-production.up.railway.app/posts/${post?.id}/close-post`,
        {
          method: "PUT",
        },
      );
      if (res.ok) {
        toast.success("Se realizo con exito el intercambio");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        toast.error("Ocurrio un error al cerrar el post");
      }
    } catch (error) {
      toast.error("Ocurrio un error al cerrar el post");
    }
  };
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
          <div className="relative flex flex-col items-center justify-center gap-6 rounded-3xl  border-wrong bg-white px-8 py-10 shadow-xl">
            <span
              className="absolute right-3 top-3 p-2 hover:cursor-pointer"
              onClick={() => setOpenDeleteMenu(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L15 15M15 1L1 15"
                  stroke="#A5A5A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p>¿ Seguro desea eliminar la publicación?</p>
            <div className="flex w-full justify-between gap-2">
              <button
                onClick={() => setOpenDeleteMenu(false)}
                className=" rounded-full border border-[#D0D0D0] px-7 py-1 text-[#D0D0D0]"
              >
                Cancelar
              </button>
              <button
                onClick={() => DeletePost()}
                className=" rounded-full bg-wrong px-8 py-1 text-white"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
      {post?.id && <PostComponent post={post}/>}
      {isOwner && (
        <div className="-order-1 flex justify-between gap-1 p-5 lg:px-24">
          {post?.status == "Abierto" ? (
            <button
              className="rounded-3xl bg-accent-yellow px-3 py-2 text-sm font-[500] hover:scale-105 hover:cursor-pointer disabled:bg-gray-300 disabled:text-black md:text-base lg:w-[30%]"
              onClick={() => handleClosePost()}
            >
              Intercambio exitoso
            </button>
          ) : (
            <div className="rounded-3xl bg-primary-green px-3 py-2 font-[500]  lg:w-[30%] ">
              <span>Publicación Cerrada</span>
            </div>
          )}

          {post?.status == "Abierto" && (
            <div className=" flex justify-end gap-2 lg:col-span-2">
              <button
                className="rounded-3xl bg-primary-green  px-3 font-[500] text-white md:px-5 md:py-2 "
                onClick={() => handleEdit()}
              >
                <PencilIcon />
              </button>
              <button
                onClick={() => setOpenDeleteMenu(true)}
                className=" rounded-3xl bg-wrong  px-3 font-[500] text-white  md:px-5 md:py-2 lg:block"
              >
                <DeleteIcon />
              </button>
            </div>
          )}
        </div>
      )}
      {openEditMenu && isOwner &&(
        <div className="fixed inset-0 z-40 grid h-full w-full  overflow-y-auto bg-white">
          <FormCreatePost
            categories={categories}
            post={post}
            modeEdit={modeEdit}
          />
        </div>
      )}
    </>
  );
}
