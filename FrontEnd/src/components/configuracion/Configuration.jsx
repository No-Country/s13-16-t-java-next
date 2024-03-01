"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AddIcon } from "../Icons";
import Link from "next/link";

export default function Configuration({ categories }) {
  const [selectedCategories, setselectedCategories] = useState([]);
  const [selectedFile, setSelectedFile] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const handleCategoriaClick = (categoria) => {
    if (selectedCategories.includes(categoria)) {
      // Si la categoría ya está seleccionada, la eliminamos del estado
      setselectedCategories(selectedCategories.filter((c) => c !== categoria));
    } else if (selectedCategories.length < 3) {
      // Si hay menos de tres categorías seleccionadas, agregamos la nueva categoría
      setselectedCategories([...selectedCategories, categoria]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("categories", selectedCategories);

    console.log(selectedCategories);

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
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
    <section className="mt-10 grid min-h-screen place-items-center justify-items-center pt-10 lg:place-items-start">
      <form
        className=" mb-24 grid justify-center p-5 lg:grid-cols-2"
        onSubmit={handleSubmit}
      >
        <header className=" w-full lg:col-span-2 lg:ml-10 lg:text-start">
          <h1 className="p-5 text-xl font-bold uppercase lg:text-2xl ">
            Configurar tu cuenta
          </h1>
        </header>
        <div className="relative mt-10 flex justify-center min-[640px]:w-full min-[640px]:flex-col min-[640px]:justify-start">
          <h2 className="absolute left-0 font-medium min-[500px]:static min-[640px]:mb-4 min-[640px]:text-center">
            Foto de perfil
          </h2>
          <div className="relative w-max min-[640px]:mx-auto">
            <Image
              className="aspect-square min-w-24 rounded-full bg-gray-300 min-[640px]:w-40"
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
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="font-medium">Tus intereses</h2>
            <p className="text-sm text-gray-400">Elige hasta 3 opciones:</p>
          </div>
          <div className="col-span-2 flex w-full flex-wrap justify-center gap-4 min-[640px]:justify-start">
            {categories.map((category, index) => (
              <button
                className={`w-full max-w-32 rounded-[20px] border px-5 py-4 leading-5 lg:max-w-40 ${
                  selectedCategories.includes(category)
                    ? "border-primary-green bg-primary-green text-white"
                    : "border-secondary-violet bg-[#EAE2FA4D] text-gray-700"
                }`}
                type="button"
                key={index}
                onClick={() => handleCategoriaClick(category)}
              >
                {category}
              </button>
            ))}
            <div className="mt-10 flex w-full items-end justify-center gap-4 p-5 min-[640px]:items-center min-[640px]:justify-start lg:p-0">
              <Link
                className="w-[70%] text-center rounded-full border border-primary-green px-4 py-2 text-primary-green lg:max-w-40"
                href={"/"}
              >
                Omitir
              </Link>
              <button
                className="w-[70%] rounded-full bg-primary-green px-4 py-2 text-white lg:max-w-40"
                type="submit"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
