"use client"
import React,{ useState} from "react";
import Image from "next/image";
import { AddIcon } from "@/src/components/Icons";
import Link from "next/link";
import { toast } from "sonner";

export default function ConfigurationProfile({ categories, profile }) {
  const [imagePreview, setImagePreview] = useState(profile?.photoId);
  const [selectedCategories, setselectedCategories] = React.useState(profile.categories);
  const [, setSelectedFile] = useState({});
  
  const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // Crear una URL para la previsualización de la imagen
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview("/image/profileComent.png");
    }
  };

  const handleCategoriaClick = (categoria) => {
    if (
      selectedCategories.length === 0 &&
      !selectedCategories.includes(categoria)
    ) {
      setselectedCategories([categoria]);
    } else if (selectedCategories.includes(categoria)) {
      setselectedCategories(selectedCategories.filter((c) => c !== categoria));
    } else if (selectedCategories.length < 3) {
      setselectedCategories([...selectedCategories, categoria]);
    } else {
      toast.error("Solo se pueden seleccionar hasta tres categorías");
    }
  };
  return (
    <section className=" mx-auto mt-[65px] min-h-dvh w-full p-3 md:w-[70%] lg:w-full  ">
      <div className="w-full">
        <h2 className="mb-5 p-3 text-2xl">Editar Perfil</h2>

        <form action="" className="justify-center lg:flex">
          <div className="relative mx-auto h-full w-max lg:p-2">
            <p className="absolute -top-5 left-10">Foto de Perfil</p>
            <Image
              className="aspect-square min-w-40 rounded-full bg-gray-300"
              width={96}
              height={96}
              src={imagePreview || "/image/profileComent.png"}
              alt="foto de perfil"
            />
            <label className="absolute bottom-0 right-0 lg:bottom-5 left-28 h-10 w-10 rounded-full bg-accent-yellow p-2 hover:cursor-pointer">
              <input type="file" className="hidden" onChange={handleChange} />
              <AddIcon />
            </label>
          </div>
          <div className="lg:w-[60%]">
            <div className="items-center justify-center lg:flex lg:w-full">
              <div className="lg:w-full">
                <div className="relative flex w-full flex-col justify-center gap-2 p-4">
                  <label className="capitalize">nombre</label>
                  <input
                    type="text"
                    className={`input-form "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
                    placeholder="Nombre"
                    id="name"
                    value={profile?.userResponseDTO?.name}
                  />
                </div>
                <div className="relative flex w-full flex-col justify-center gap-1 px-4 py-2">
                  <label className="capitalize">apellido</label>
                  <input
                    type="text"
                    className={`input-form "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
                    placeholder="Apellido"
                    id="lastName"
                    value={profile?.userResponseDTO?.lastName}
                  />
                </div>
              </div>
              <div className="lg:w-full">
                <div className="relative flex w-full flex-col justify-center gap-1 px-4 py-2">
                  <label className="capitalize">télefono</label>
                  <input
                    type="tel"
                    className={`input-form  "focus:outline-wrong"  "focus:outline-secondary-violet"}`}
                    placeholder="+34 123 456 789"
                    id="phone"
                    maxLength={14}
                    value={profile?.userResponseDTO?.phone}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                </div>
                <div className="relative flex w-full flex-col justify-center gap-1 px-4 py-2">
                  <label className="capitalize">Localidad</label>
                  <input
                    type="text"
                    className={`input-form "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
                    placeholder="Localidad"
                    id="location"
                    value={profile?.userResponseDTO?.location_id}
                  />
                </div>
              </div>
            </div>
            <div className="p-3">
              <h3>Tus intereses</h3>
              <p className="p- mb-2 text-sm text-gray-400">
                Elige hasta 3 opciones:
              </p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
                {categories.map((category, index) => (
                  <button
                    className={`flex h-10 items-center  justify-center rounded-[20px] border px-5 py-3 leading-5 lg:h-12 ${
                      selectedCategories.includes(category)
                        ? "border-secondary-violet bg-secondary-violet text-white"
                        : "border-secondary-violet  text-secondary-violet"
                    }`}
                    type="button"
                    key={index}
                    onClick={() => handleCategoriaClick(category)}
                  >
                    <span>{category}</span>
                  </button>
                ))}
              </div>
              <div className="mb-5 mt-10 flex w-full justify-between gap-2 lg:col-span-5 lg:mt-40 lg:justify-start">
                <Link
                  className=" w-full rounded-full border border-primary-green px-4 py-2 text-center text-primary-green lg:w-1/4 "
                  href={"/"}
                >
                  Cancelar
                </Link>
                <button
                  className=" w-full rounded-full bg-primary-green px-4 py-2 text-white lg:w-1/4  "
                  type="submit"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
