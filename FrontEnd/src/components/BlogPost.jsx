"use client";

import Image from "next/image";
/*import img from "../assets/unsplash_6ZGEQb-CxIo.png";*/
import FavIcon from "./Icons/FavIcon";
import latas from "@/src/assets/blogs/reciclar_latas.webp";
import palets from "@/src/assets/blogs/bancos_palets.webp";
import botellas from "@/src/assets/blogs/reciclar_botellas.webp";
import frascos from "@/src/assets/blogs/reciclar_frascos.webp";
import neumaticos from "@/src/assets/blogs/reciclar_neumaticos.webp";
import pilas from "@/src/assets/blogs/desechar_pilas.webp";
import ecoladrillos from "@/src/assets/blogs/ecoladrillos.webp";
import { useEffect, useState } from "react";
import { BlogsPostsSkeleton } from "./skeletons";

// eslint-disable-next-line
export default function BlogPost({ query }) {
  const [loading, setIsLoading] = useState(true);
  const blogs = [
    {
      id: 1,
      title: "5 formas de reutilizar tus latas",
      isFav: false,
      image: latas,
    },
    {
      id: 2,
      title: "Cómo hacer bancos con palets de madera",
      isFav: true,
      image: palets,
    },
    {
      id: 3,
      title: "Recicla tus botellas de la siguiente forma",
      isFav: false,
      image: botellas,
    },
    {
      id: 4,
      title: "Dale vida a tus frascos de vidrio de cafe",
      isFav: false,
      image: frascos,
    },
    {
      id: 5,
      title: "4 ideas para tus neumáticos usados",
      isFav: false,
      image: neumaticos,
    },
    {
      id: 6,
      title: "Desecha tus pilas de la manera correcta",
      isFav: false,
      image: pilas,
    },
    {
      id: 7,
      title: "Unete a la campaña de los Ecoladrillos",
      isFav: false,
      image: ecoladrillos,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  /*   const getCategories = async function () {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      const response = await fetch("http://localhost:3002/blogs");
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error al cargar los blogs");
    }
  };
  const blogs = await getCategories();
 */

  /* return (
    <div className="my-12 flex w-full flex-wrap justify-center gap-x-4 gap-y-10 md:mx-auto min-[1337px]:justify-between ">
      {blogs != 0 ? (
        blogs?.map((blog) => (
          <BlogArticle
            key={blog.id}
            tittle={blog.title}
            fav={blog.isFav}
            img={blog.image}
          />
        ))
      ) : (
        <p className="mt-14 text-xl">No hay coincidencias</p>
      )}
    </div>
  ); */
  return (
    <>
      {loading ? (
        <BlogsPostsSkeleton />
      ) : (
        <div className="my-12 flex w-full flex-wrap justify-center gap-x-4 gap-y-10 md:mx-auto min-[1337px]:justify-between ">
          {blogs != 0 ? (
            blogs?.map((blog) => (
              <BlogArticle
                key={blog.id}
                tittle={blog.title}
                fav={blog.isFav}
                img={blog.image}
              />
            ))
          ) : (
            <p className="mt-14 text-xl">No hay coincidencias</p>
          )}
        </div>
      )}
    </>
  );
}

export function BlogArticle({ tittle, fav, img }) {
  return (
    <article className="flex flex-col gap-3">
      <div className="flex h-full w-full cursor-pointer items-center justify-center">
        <Image
          src={img}
          alt={tittle}
          width={370}
          height={250}
          className="h-[250px] w-[370px] rounded-[11px] bg-gray-300"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-x-3">
        <p className="cursor-pointer text-lg">{tittle}</p>
        <button className="cursor-pointer">
          <FavIcon isFav={fav} />
        </button>
      </div>
    </article>
  );
}
