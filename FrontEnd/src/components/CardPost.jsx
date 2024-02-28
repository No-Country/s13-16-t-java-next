import Image from "next/image";
import Link from "next/link";
import HeartLike from "./Icons/HeartLike";
import { useState } from "react";

export default function CardPost({ publication }) {
  const [liked, setLiked] = useState(false);
  const handleClickLike = () => {
    setLiked(!liked);
  };

  const { id, imageUrl, title } = publication;

  return (
    <>
      <div>
        <Link href={`/publicaciones/${id}`}>
          <div className="flex flex-col ">
            <div className="flex h-[200px] w-[250px] items-center justify-center object-cover ">
              <Image
                src={imageUrl}
                alt=""
                width={250}
                height={200}
                className="rounded-[11px] bg-gray-300 "
              />
            </div>
            <p className="text-[16px] font-[500]">{title}</p>
          </div>
        </Link>
        <button onClick={handleClickLike}>
          <HeartLike fill={liked ? "red" : "gray"} />
        </button>
      </div>
    </>
  );
}
