"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AddIcon } from "../Icons";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Configuration({ categories }) {
  const [selectedCategories, setselectedCategories] = useState([]);
  const [selectedFile, setSelectedFile] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [perfilId, setPerfilId] = useState("");
  const [mounted, setMounted] = React.useState(false);

  const router = useRouter();
 
  const handleCategoriaClick = (categoria) => {
    if (selectedCategories.includes(categoria)) {
      // Si la categoría ya está seleccionada, la eliminamos del estado
      setselectedCategories(selectedCategories.filter((c) => c !== categoria));
    } else if (selectedCategories.length < 3) {
      // Si hay menos de tres categorías seleccionadas, agregamos la nueva categoría
      setselectedCategories([...selectedCategories, categoria]);
    }
  };

  useEffect(() => {
    setMounted(true);
    const storedPerfilId = localStorage.getItem("profileId");
    setPerfilId(storedPerfilId);
  }, []);

  if (!mounted) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("categories", selectedCategories);

    // Enviar la solicitud de formulario con el archivo y las categorías seleccionadas
    try {
      const response = await fetch(
        `https://deployreciclame-production.up.railway.app/profiles/complete-profile/${perfilId}`,
        {
          method: "PUT",
          body: formData,
        },
      );
      if (response.ok) {
        toast.success("Cuenta configurada con éxito");
        router.push("/");
      } else {
        throw new Error("Error al configurar cuenta");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al configurar cuenta");
    }
  };

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

  return (
    <section className="mt-[90px] flex min-h-screen w-full flex-col p-5 lg:p-10 ">
      <h2 className="w-full text-center text-2xl font-semibold uppercase lg:text-start">
        configurar tu cuenta
      </h2>
      <p className="lg: w-full p-2">Foto de perfil</p>
      <form
        className="grid w-full items-start gap-5 lg:grid-cols-5"
        onSubmit={handleSubmit}
      >
        <div className="relative mx-auto ml-24 w-max lg:col-span-2">
          <Image
            className="aspect-square min-w-40 rounded-full bg-gray-300"
            width={96}
            height={96}
            src={imagePreview || "/image/profileComent.png"}
            alt="foto de perfil"
          />
          <label className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-accent-yellow p-2 hover:cursor-pointer">
            <input type="file" className="hidden" onChange={handleChange} />
            <AddIcon />
          </label>
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <div>
            <h2 className="font-medium">Tus intereses</h2>
            <p className="text-sm text-gray-400">Elige hasta 3 opciones:</p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 ">
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
          <div className="mt-5 flex w-full justify-between gap-2 lg:col-span-5 lg:mt-40 lg:justify-start">
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
      </form>
    </section>
  );
}
