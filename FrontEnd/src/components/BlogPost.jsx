import Image from "next/image"

export default function BlogPost() {
  return (<>
    {Array.from({ length: 12 }).map((_, i) => (
        <BlogArticle key={i} tittle={'Nombre del Articulo'}/>
      ))}
  </>)
}

export function BlogArticle({tittle}){
    return(
        <article className="flex flex-col gap-3 cursor-pointer hover:scale-105">
            <div className="w-full h-full flex justify-center items-center">
            <Image src="" alt="" width={340} height={200} className="bg-gray-300 rounded-[11px]" />
            </div>
            <p className="text-[16px] font-[500]">{tittle}</p>
        </article>
    )
}
