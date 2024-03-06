"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartLike, HeartDislike } from "./Icons/HeartLike";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CardPost({ publication, profileId, favorites }) {
  const [isFav, setIsFav] = useState(false);
  const { id, imageUrl, title } = publication;

  useEffect(() => {
    if (favorites?.includes(id)) {
      setIsFav(true);
    }
  }, [publication, favorites]);

  /*   const handleClickFav = (e) => {
    e.preventDefault();
    setIsFav(!isFav);
    if (isFav == true) toast.success("Agregado a favoritos");
    const requestBody = {
      postId: id,
    };
  }; */

  async function handleClickFav() {
    const requestBody = {
      postId: id,
    };
    try {
      const response = await fetch(
        `https://deployreciclame-production.up.railway.app/profiles/${profileId}/favorites`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        },
      );

      if (response.ok) {
        setIsFav(!isFav);
        if (isFav) {
          toast.success("Agregado a favoritos");
        } else {
          toast.success("Eliminado de favoritos");
        }
      } else {
        const errorData = await response.json();
        console.error("Error al manipular favoritos:", errorData);
        toast.error("Error al manipular favoritos.");
      }
    } catch (error) {
      console.error("Error en la solicitud de manipular favoritos:", error);
      toast.error("Error en la solicitud de manipular favoritos.");
    }
  }
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
            <div className="m-2 flex justify-between">
              <p className="text-[16px] font-[500]">{title}</p>
            </div>
          </div>
          <div className="flex justify-between p-2">
            <p className="text-[16px] font-[500] tracking-wider">{title}</p>
            <button onClick={handleClickFav} className="">
              {isFav ? <HeartLike /> : <HeartDislike />}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
