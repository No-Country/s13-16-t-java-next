"use client";
import React, { useState } from "react";
import { AddIcon } from "@/src/components/Icons";
import Image from "next/image";

export default function ConfigurationPage() {
  const [imagePreview, setImagePreview] = useState(null);
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
  return (
    <section className="mt-[65px] min-h-dvh bg-red-500">
      <div>
        <h2 className="p-3 text-2xl">Editar Perfil</h2>
        <form action="">
          <div className="relative mx-auto  w-max lg:col-span-2">
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
          <div className="relative flex w-full flex-col justify-center gap-2 p-4">
            <label className="capitalize">nombre</label>
            <input
              type="text"
              className={`input-form "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
              placeholder="Nombre"
              id="name"
            />
          </div>
          <div className="relative flex w-full flex-col justify-center gap-1 px-4 py-2">
            <label className="capitalize">apellido</label>
            <input
              type="text"
              className={`input-form "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
              placeholder="Apellido"
              id="lastName"
            />
          </div>
          <div className="relative flex w-full flex-col justify-center gap-1 px-4 py-2">
            <label className="capitalize">télefono</label>
            <input
              type="tel"
              className={`input-form  "focus:outline-wrong"  "focus:outline-secondary-violet"}`}
              placeholder="+34 123 456 789"
              id="phone"
          
              maxLength={14}
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
            />
          </div>
          <div className="p-3">
            <h3>Tus intereses</h3>
            <p className="text-sm text-gray-400">Elige hasta 3 opciones:</p>
          </div>
        </form>
      </div>
    </section>
  );
}
