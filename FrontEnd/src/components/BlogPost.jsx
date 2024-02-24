import Image from "next/image";
import img from "../assets/unsplash_6ZGEQb-CxIo.png";
import FavIcon from "../components/Icons/FavIcon";

// eslint-disable-next-line
export default function BlogPost({ query }) {
  const blogs = [
    { tittle: "Reciclaje de plasticos" },
    { tittle: "Reciclaje de bolsas plasticas" },
    { tittle: "Reciclaje de maderas" },
    { tittle: "Reciclaje de bancos de maderas" },
    { tittle: "Reciclaje de vidrios" },
    { tittle: "Reciclaje de telas" },
  ];

  return (
    <div className="my-12 flex w-full flex-wrap justify-center gap-x-4 gap-y-10 md:mx-auto min-[1337px]:justify-between ">
      {blogs.map((blog) => (
        <BlogArticle key={blog.tittle} tittle={blog.tittle} />
      ))}
    </div>
  );
}

export function BlogArticle({ tittle }) {
  return (
    <div className="group relative">
      <article className="flex cursor-pointer flex-col gap-3 group-hover:scale-105">
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={img}
            alt=""
            width={370}
            height={280}
            className="rounded-[11px] bg-gray-300"
          />
        </div>
        <p className="text-[16px] font-[500]">{tittle}</p>
      </article>
      <button className="absolute right-4 top-4 block group-hover:block md:hidden ">
        <FavIcon width="25" height="24" />
      </button>
    </div>
  );
}
