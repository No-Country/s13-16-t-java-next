"use client";
import { useState } from "react";
import Image from "next/image";
import HeartFavorite from "@/src/components/Icons/HeartFavorite";
import Button from "@/src/components/Button";
import Coments from "@/src/components/Coments";
import FormComent from "@/src/components/forms/FormComent/FormComent";
import WspIcon from "../Icons/WspIcon";
import Link from "next/link";
export default function Post({ post }) {
  const [like, setLike] = useState(post.likes);

  return (
    <>
      <div className="flex flex-col gap-3 p-5 lg:p-20 xl:p-24 ">
        <picture className=" items-center justify-center rounded-2xl lg:flex ">
          <Image
            src={post.imgPost}
            alt={"Image Post"}
            width={400}
            height={400}
            priority
            className=""
          />
        </picture>
        <div className="max-[750px]:translate-y-30  mt-0 flex justify-between lg:static">
          <div className="flex items-center gap-3">
            <Image
              src={post.imgProfile}
              alt="image Profile"
              height={70}
              width={70}
              className=""
            />
            <p>{post.nameUser}</p>
          </div>
          <Button
            props={post.likes}
            handle={() => setLike(like + 1)}
            className=" flex items-center lg:static"
          >
            <span>{like}</span>
            <HeartFavorite />
          </Button>
        </div>
      </div>
      <div className="  flex flex-col gap-3 p-5 lg:gap-8  lg:p-20 xl:p-24 ">
        <h3 className="text-xl font-semibold lg:text-4xl">{post.titlePost}</h3>
        <p className="flex w-[30%] items-center justify-center rounded-3xl bg-[#b8b8b8] p-1">
          <span>{post.category}</span>
        </p>
        <p className="text-justify">{post.description}</p>
        <Link
          href={"https://wa.me/"}
          className="mt-0 flex w-full gap-2 rounded-3xl bg-accent-yellow p-2 justify-center text-lg font-[500]"
        >
          Me interesa <WspIcon />
        </Link>
        <Coments coments={post.coments} />
        <FormComent />
      </div>
    </>
  );
}
