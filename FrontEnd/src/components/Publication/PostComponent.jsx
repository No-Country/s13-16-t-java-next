import Image from 'next/image';
import React, { useState } from 'react'
import Button from '../Button';
import Coments from "@/src/components/Coments";
import FormComent from "@/src/components/forms/FormComent/FormComent";
import WspIcon from "../Icons/WspIcon";
import Link from "next/link";
import LikeIcon from "../Icons/LikeIcon";

import { useRouter } from "next/navigation";

export default function PostComponent({post}) {

  const router = useRouter();

  console.log(post);

  const isLogged =
    typeof window !== "undefined" && localStorage.getItem("isLogged");

  const [checked, setChecked] = useState(true);

  const handleLikeClick = () => {
    if (!isLogged) {
      router.push("/login");
      return;
    }
  };

  const userLoggedId =
    typeof window !== "undefined" && localStorage.getItem("userLoggedId");

  const isOwner =
    userLoggedId === post?.profileResponseDto?.userResponseDTO?.userId;

  async function toggleSwitch() {
    const form = new FormData();
    form.append("enableComments", checked);

    const res = await fetch(
      `https://deployreciclame-production.up.railway.app/posts/update/${post?.id}`,
      {
        body: form,
      },
    );
    const data = await res.json();
    return data;
  }

  const handleChangeChecked = () => {
    setChecked(!checked);
  };

  return (
    <>
      {post && (
        <div className="grid max-lg:mx-auto lg:grid-cols-2">
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
              {post?.love && (
                <Button
                  props={post.love}
                  handle={handleLikeClick}
                  className=" flex items-center gap-2"
                >
                  <span>{post.love}</span>
                  <LikeIcon />
                </Button>
              )}
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
  
            {post?.title && post?.profileResponseDto.userResponseDTO.phone && post?.profileResponseDto.userResponseDTO.name && (
              <Link
                target="_blank"
                href={
                  isLogged
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
                {isOwner && (
                  <div className="flex items-center gap-2">
                    {post?.enableComments && (
                      <label
                        onChange={() => toggleSwitch}
                        className={`relative h-6 w-12 rounded-full bg-gray-300 focus:outline-none ${post.enableComments ? "bg-primary-green" : "bg-[#E3E3E3]"}`}
                        htmlFor="checkbox-enable-comment"
                      >
                        <input
                          checked={post.enableComments}
                          className="hidden"
                          type="checkbox"
                          name="checkbox-enable-comment"
                          id="checkbox-enable-comment"
                          onChange={handleChangeChecked}
                        />
                        <span
                          className={`absolute bottom-0 left-0 h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${post.enableComments ? "translate-x-full" : ""}`}
                        ></span>
                      </label>
                    )}
                    <p className="text-[#D9D9D9]">Activar Comentarios</p>
                  </div>
                )}
                {post?.comments && (
                  <Coments coments={post.comments} />
                )}
                {post?.id && (
                  <FormComent postId={post.id} />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
