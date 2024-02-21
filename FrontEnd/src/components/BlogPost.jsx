import Image from "next/image"
import img from '../assets/unsplash_6ZGEQb-CxIo.png'
import FavIcon from '../components/Icons/FavIcon'

export default function BlogPost({query}) {

    const blogs = [ 
        {tittle: 'Reciclaje de plasticos'},
        {tittle: 'Reciclaje de bolsas plasticas'},
        {tittle: 'Reciclaje de maderas'},
        {tittle: 'Reciclaje de bancos de maderas'},
        {tittle: 'Reciclaje de vidrios'},
        {tittle: 'Reciclaje de telas'},
    ]

  return (
    <div className="my-12 flex flex-wrap justify-center min-[1337px]:justify-between gap-x-4 gap-y-10 md:mx-auto w-full ">
        {blogs.map((blog) => (
            <BlogArticle key={blog.tittle} tittle={blog.tittle}/>
        ))}
  </div>)
}

export function BlogArticle({tittle}){
    return(
        <div className="relative group">
            <article className="flex flex-col gap-3 cursor-pointer group-hover:scale-105">
                <div className="w-full h-full flex justify-center items-center">
                <Image src={img} alt="" width={370} height={280} className="bg-gray-300 rounded-[11px]" />
                </div>
                <p className="text-[16px] font-[500]">{tittle}</p>
            </article>
            <button className="block md:hidden group-hover:block absolute top-4 right-4 ">
                <FavIcon width="25" height="24" />
            </button>
        </div>
    )
}
