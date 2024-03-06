import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import Coments from "@/src/components/Coments";
import FormComent from "@/src/components/forms/FormComent/FormComent";
import WspIcon from "../Icons/WspIcon";
import Link from "next/link";
import LikeIcon from "../Icons/LikeIcon";

import { useRouter } from "next/navigation";
import { ok } from "assert";

export default function PostComponent({ post }) {
  const router = useRouter();

  const isLogged =
    typeof window !== "undefined" && localStorage.getItem("isLogged");

  const profileId =
    typeof window !== "undefined" && localStorage.getItem("profileId");

  
  const [isEdit, setIsEdit] = useState(false);
  const [commentEdit, setCommentEdit] = useState();

  const handleLikeClick = async () => {
    if (!isLogged) {
      router.push("/login");
      return;
    }

    try{
      const response = await fetch(`https://deployreciclame-production.up.railway.app/posts/${post.id}/likes`,{
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profileId }) 
      })
      if( response.status === ok ){
        console.log('Like enviado exitosamente')
      }
    } catch{
      console.log('Error al enviar el like')
    }
  }
  


  const userLoggedId =
    typeof window !== "undefined" && localStorage.getItem("userLoggedId");

  const isOwner =
    userLoggedId === post?.profileResponseDto?.userResponseDTO?.userId;


 

 

  return (
    <>
      {post && (
        <div className="flex flex-wrap justify-center max-lg:mx-auto">
          <div className="flex w-full max-w-96 flex-col gap-8 p-5 md:max-w-[35rem] lg:p-20 xl:p-24">
            <picture className="mx-auto items-center justify-center rounded-2xl lg:flex ">
              {post?.imageUrl && (
                <Image
                  src={post.imageUrl}
                  alt={"Image Post"}
                  width={400}
                  height={400}
                  priority
                  className="rounded-2xl"
                />
              )}
            </picture>
            <div className="max-[750px]:translate-y-30  mt-0 flex justify-between lg:static">
              <div className="flex items-center gap-3">
                {post?.profileResponseDto.photoId ? (
                  <Image
                    src={post.profileResponseDto.photoId}
                    alt="image Profile"
                    height={70}
                    width={70}
                    className="rounded-full bg-[#b8b8b8]"
                  />
                ) : (
                  <Image
                    src={"/image/profile1.png"}
                    alt="image Profile"
                    height={70}
                    width={70}
                    className="rounded-full bg-[#b8b8b8]"
                  />
                )}
                <p>
                  {post?.profileResponseDto.userResponseDTO.name
                    ? post?.profileResponseDto.userResponseDTO.name +
                      " " +
                      post?.profileResponseDto.userResponseDTO.lastName
                    : "Usuario que publica"}
                </p>
              </div>
              <Button
                handle={handleLikeClick}
                className="flex items-center gap-2"
              >
                <span>{post.love}</span>
                <LikeIcon />
              </Button>
            </div>
          </div>
          <div className="flex w-full max-w-96 flex-col gap-4 p-5 md:max-w-[35rem] lg:gap-8 lg:p-20 xl:p-24">
            <h3 className="text-xl font-semibold lg:text-4xl">
              {post?.title ? post.title : "Sin título"}
            </h3>
            <p className="flex w-fit items-center justify-center rounded-3xl bg-secondary-violet p-1 px-4 text-white">
              {post?.category}
            </p>
            <p className="text-justify">{post?.description}</p>

            {post?.title &&
              post?.profileResponseDto.userResponseDTO.phone &&
              post?.profileResponseDto.userResponseDTO.name && (
              <Link
                target="_blank"
                href={
                  isLogged && isOwner
                    ? `https://wa.me/${post.profileResponseDto.userResponseDTO.phone}?text=Hola%20${post.profileResponseDto.userResponseDTO.name}%20me%20interesa%20tu%20publicación%20de%20${post.title}`
                    : "/login"
                }
                className={`mt-0 flex w-full justify-center gap-2 rounded-3xl bg-accent-yellow p-2 text-lg font-[500] ${!isLogged && "pointer-events-none opacity-50"}`}
              >
                Me interesa <WspIcon />
              </Link>
            )}
            {isLogged && (
              <>
               
                {post?.comments && (
                  <Coments
                    coments={post.comments}
                    setIsEdit={setIsEdit}
                    setCommentEdit={setCommentEdit}
                  />
                )}
                {post?.id && post?.enableComments && (
                  <FormComent
                    postId={post.id}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    commentEdit={commentEdit}
                    setCommentEdit={setCommentEdit}
                  />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
