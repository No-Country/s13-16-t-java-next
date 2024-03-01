import Image from "next/image";
import Link from "next/link";
import { HeartLike, HeartDislike } from "./Icons/HeartLike";
import { useState } from "react";

export default function CardPost({ publication }) {
  const [liked, setLiked] = useState(false);

  const { id, imageUrl, title } = publication;

  const handleClickLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
  };
  return (
    <>
      <Link href={`/publicaciones/${id}`}>
        <div className="flex flex-col">
          <div className="relative">
            <div className="flex h-[180px] w-[250px] items-center justify-center object-cover">
              <Image
                src={imageUrl}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-[11px] bg-gray-300 "
              />
            </div>
          </div>
          <div className="flex justify-between p-2">
            <p className="text-[16px] font-[500] tracking-wider">{title}</p>
            <button onClick={handleClickLike} className="">
              {liked ? <HeartLike /> : <HeartDislike />}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
