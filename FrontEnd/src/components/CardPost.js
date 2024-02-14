import Image from "next/image"

export default function CardPost() {
    return (
        <div className="flex flex-col gap-3 ">
            <div className="w-full h-full flex justify-center items-center">
                <Image src="" alt="" width={182} height={200} className="bg-gray-300 rounded-[11px]" />
            </div>
            <p className="text-[16px] font-[500]">Nombre del Articulo</p>
        </div>
    )
}
