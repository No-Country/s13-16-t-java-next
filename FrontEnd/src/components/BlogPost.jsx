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
import Link from "next/link";

// eslint-disable-next-line
export default function BlogPost({ query }) {
  const [loading, setIsLoading] = useState(true);
  const blogs = [
    {
      id: "1f27ec51-7f75-42ff-b4b3",
      title: "5 formas de reutilizar tus latas",
      isFav: false,
      image: latas,
      description:
        "Latas de atún, de tomate, de bebidas, de conservas… existen numerosos tamaños y formas de latas según el producto que contengan. Las latas de conservas son uno de los objetos más versátil y al que más usos le podemos dar. Portalápices, porta velas, decoración para el jardín, juguetes para los más pequeños, comederos para pájaros, lámparas… Estas tan solo son unas pocas ideas de lo que se puede hacer con las latas de conservas, ya que gracias a sus distintos tamaños y formas dan mucho juego para hacer miles de objetos. Además, con una simple mano de pintura o una decoración sencilla obtendrás una decoración muy original. No tires tus latas a la basura, todavía pueden tener usos que nunca habías pensado que podrías darle. ¡Dale una segunda vida a tus latas de conserva!",
    },
    {
      id: "2f27ec51-7f75-42ff-b4b3",
      title: "Cómo hacer bancos con palets de madera",
      isFav: true,
      image: palets,
      description:
        "Transforma palets de madera en elegantes bancos para tu hogar o jardín con esta guía paso a paso. No solo estarás reutilizando material, sino que también agregarás un toque rústico y sostenible a tu espacio. Descubre técnicas sencillas para desmontar y volver a ensamblar palets, y crea muebles prácticos y respetuosos con el medio ambiente. ¡Haz de tu espacio un reflejo de tu compromiso con la reutilización y la creatividad!",
    },
    {
      id: "3f27ec51-7f75-42ff-b4b3",
      title: "Recicla tus botellas de la siguiente forma",
      isFav: false,
      image: botellas,
      description:
        "Las botellas de plástico no deben ser simplemente desechadas; pueden convertirse en valiosos recursos para proyectos DIY. Desde macetas colgantes hasta juguetes para niños, hay una variedad de formas creativas de reciclar tus botellas. Aprende cómo darles una nueva vida y al mismo tiempo contribuir a la reducción de residuos plásticos. ¡Únete al movimiento de reutilización y descubre el potencial oculto en tus botellas!",
    },
    {
      id: "4f27ec51-7f75-42ff-b4b3",
      title: "Dale vida a tus frascos de vidrio de cafe",
      isFav: false,
      image: frascos,
      description:
        "Los frascos de vidrio de café no tienen por qué terminar en la papelera. Descubre maneras encantadoras de reutilizar estos frascos, convirtiéndolos en elegantes recipientes para almacenar alimentos, decorativos floreros o incluso prácticos porta velas. Con un toque de creatividad, podrás transformar esos frascos de vidrio en elementos funcionales y decorativos, al mismo tiempo que fomentas un estilo de vida más sostenible.",
    },
    {
      id: "5f27ec51-7f75-42ff-b4b3",
      title: "4 ideas para tus neumáticos usados",
      isFav: false,
      image: neumaticos,
      description:
        "¿Te preguntas qué hacer con esos neumáticos viejos que ya no sirven para tu vehículo? Descubre cuatro emocionantes ideas para reutilizar neumáticos usados. Desde coloridos columpios hasta originales maceteros, hay infinitas posibilidades para darle una segunda vida a estos materiales. Participa en la creación de un ambiente más ecológico y divertido, mientras le das un uso innovador a tus neumáticos desechados.",
    },
    {
      id: "6f27ec51-7f75-42ff-b4b3",
      title: "Desecha tus pilas de la manera correcta",
      isFav: false,
      image: pilas,
      description:
        "El manejo adecuado de las pilas usadas es esencial para preservar nuestro entorno. Conoce las mejores prácticas para desechar pilas de manera segura y responsable. Además, descubre alternativas ecológicas, como el uso de pilas recargables y cómo participar en programas de reciclaje de pilas. Al adoptar hábitos respetuosos con el medio ambiente, contribuirás a la conservación de recursos y a la reducción de residuos tóxicos.",
    },
    {
      id: "7f27ec51-7f75-42ff-b4b3",
      title: "Unete a la campaña de los Ecoladrillos",
      isFav: false,
      image: ecoladrillos,
      description:
        "Descubre cómo contribuir a la construcción de estructuras sostenibles y reducir la contaminación plástica participando en la campaña de los Ecoladrillos. Aprende a preparar estos bloques de construcción rellenando botellas de plástico con residuos plásticos no reciclables. Convierte tus desechos en recursos para proyectos comunitarios, promoviendo la conciencia ambiental y la construcción de soluciones prácticas. ¡Únete a esta iniciativa y sé parte del cambio hacia un mundo más sostenible!",
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
                id={blog.id}
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

export function BlogArticle({ tittle, fav, img, id }) {
  return (
    <article className="flex flex-col gap-3">
      <div className="flex h-full w-full cursor-pointer items-center justify-center">
        <Link key={id} href={`/blog/${id}`}>
          <Image
            src={img}
            alt={tittle}
            width={370}
            height={250}
            className="h-[250px] w-[370px] rounded-[11px] bg-gray-300"
          />
        </Link>
      </div>
      <div className="flex w-full items-center justify-between gap-x-3">
        <Link key={id} href={`/blog/${id}`}>
          <p className="cursor-pointer text-lg">{tittle}</p>
        </Link>
        <button className="cursor-pointer">
          <FavIcon isFav={fav} />
        </button>
      </div>
    </article>
  );
}
