import Image from "next/image";
import img from "../assets/unsplash_6ZGEQb-CxIo.png";
import FavIcon from "./Icons/FavIcon";

// eslint-disable-next-line
export default async function BlogPost({ query }) {
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
  const blogs = [
    { id: 1, title: "10 formas de reutilizar tus latas", isFav: false },
    { id: 2, title: "Como hacer bancos con palets de madera", isFav: true },
    {
      id: 3,
      title: "Recicla tus botellas de la siguiente forma",
      isFav: false,
    },
    { id: 4, title: "Dale vida a tus frascos de vidrio de cafe", isFav: false },
  ];

  return (
    <div className="my-12 flex w-full flex-wrap justify-center gap-x-4 gap-y-10 md:mx-auto min-[1337px]:justify-between ">
      {blogs?.map((blog) => (
        <BlogArticle key={blog.id} tittle={blog.title} fav={blog.isFav} />
      ))}
    </div>
  );
}

export function BlogArticle({ tittle, fav }) {
  return (
    <article className="flex flex-col gap-3">
      <div className="flex h-full w-full cursor-pointer items-center justify-center">
        <Image
          src={img}
          alt=""
          width={370}
          height={280}
          className="rounded-[11px] bg-gray-300"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-x-3">
        <p className="cursor-pointer text-[16px] font-[500]">{tittle}</p>
        <button className="cursor-pointer">
          <FavIcon isFav={fav} />
        </button>
      </div>
    </article>
  );
}
