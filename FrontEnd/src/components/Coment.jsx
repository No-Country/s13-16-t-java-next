import Image from "next/image"

export default function Coment({coment}) {
  return (
    <div className="flex flex-col gap-4">
       
          <div className="flex items-center gap-3">
            <Image
              src={coment.imgProfile}
              alt="image Profile"
              height={50}
              width={50}
              className=" rounded-full"
            />
            <p>{coment.nameUser}</p>
          </div>
          <p className="text-justify text-sm">{coment.description}</p>
    </div>
  )
}
