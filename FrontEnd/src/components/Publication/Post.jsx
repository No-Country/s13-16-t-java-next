"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HeartFavorite from "@/src/components/Icons/HeartFavorite"
import Button from "@/src/components/Button";
import Coments from "@/src/components/Coments";
import FormComent from "@/src/components/forms/FormComent/FormComent";
export default function Post({post}) {
    const [like, setLike] = useState(post.likes)
  
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
        <div className="max-[750px]:translate-y-30  flex justify-between lg:static mt-0">
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
      <div className="  flex flex-col lg:gap-8 gap-3 p-5  lg:p-20 xl:p-24 ">
        <h3 className="text-xl font-semibold lg:text-4xl">{post.titlePost}</h3>
        <p className="flex w-[30%] items-center justify-center rounded-3xl bg-[#b8b8b8] p-1">
          <span>{post.category}</span>
        </p>
        <p className="text-justify">{post.description}</p>
        <Button className=" w-full rounded-3xl bg-accent-yellow p-2 text-lg  font-[500] mt-0">
          Me interesa
        </Button>
        <Coments coments={post.coments} />
        <FormComent />
      </div>
    </>
  );
}
