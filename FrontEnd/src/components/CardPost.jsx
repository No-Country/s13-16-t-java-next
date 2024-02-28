import Image from "next/image";
import Link from "next/link";
import { HeartLike } from "./Icons/HeartLike";
import HeartDeslike from "./Icons/HeartLike";
import { useState } from "react";

export default function CardPost({ publication }) {
  const [liked, setLiked] = useState(false);

  const handleClickLike = () => {
    setLiked(!liked); 
  };

  return (
    <div className="relative">
      <div className="flex flex-col">
        <Link href={`/publicaciones/1`}>
          <div className="relative flex h-[200px] w-[250px] items-center justify-center object-cover">
            <Image
              src={publication.image}
              alt=""
              width={250}
              height={200}
              className="rounded-[11px] bg-gray-300"
            />
          </div>
          <p className="text-[16px] font-[500]">{publication.title}</p>
        </Link>
        <button onClick={handleClickLike} className="absolute right-2 top-5 m-2">
          {liked ? <HeartLike /> : <HeartDeslike fill={"white"}/>}
        </button>
      </div>
    </div>
  );
}
