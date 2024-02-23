import Image from "next/image"
import Link from "next/link"

export default function CardPost({publication}) {
  console.log(publication)
  return (
    <Link href={`/publicaciones/1`}>
    <div className="flex flex-col ">
      <div className="flex justify-center items-center w-[250px] h-[200px] object-cover ">
        <Image src={publication.image} alt="" width={250} height={200} className="bg-gray-300 rounded-[11px] " />
      </div>
      <p className="text-[16px] font-[500]">{publication.title}</p>
    </div>
    </Link>
  )
}
