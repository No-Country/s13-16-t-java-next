"use client";

import { ChevronDownIcon } from "@/src/components/Icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { publicationSchema } from "@/src/validations/userSchema";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../../Button";

const URLPostData =
  "https://deployreciclame-production.up.railway.app/posts/save";

export const dataBackendFormat = (data, imageData) => {
  const allData = {
    title: data.title,
    category: data.category,
    description: data.description,
    image: imageData,
  };

  return allData;
};

export default function FormCreatePost({ categories }) {
  const [isActive, setIsActive] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(publicationSchema),
  });

  const [objectImage, setObjectImage] = useState({});

  const toggleSwitch = () => {
    setIsActive(!isActive);
    const newIsActive = !isActive;
    setIsActive(newIsActive);
  };

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("image", objectImage);

    const response = await fetch(URLPostData, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      reset();
      alert("Publicación creada");
      router.push("/");
    } else {
      alert("Error al crear la publicación");
    }
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    setObjectImage(file);
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
    <main className="min-h-[calc(100dvh_-_64px)] md:grid md:place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-20 w-full max-w-5xl p-12 md:flex md:flex-row-reverse md:justify-between md:gap-4"
        encType="multipart/form-data"
      >
        <div className="md:w-1/2">
          <input
            className="input-form mb-3 w-full hover:border-secondary-violet focus:outline-secondary-violet"
            type="text"
            placeholder="Título"
            id="title"
            {...register("title")}
          />
          {errors.title && (
            <p className="mb-2 text-wrong">{errors.title.message}</p>
          )}
          <div className="relative">
            <select
              className="input-form mb-3 w-full hover:border-secondary-violet focus:outline-secondary-violet"
              type="select"
              placeholder="Categoría"
              id="category"
              {...register("category")}
            >
              <option value="">Categoría</option>
              <hr />
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="chevron-down-icon mr-1 p-1" />
            {errors.category && (
              <p className="mb-2 text-wrong">{errors.category.message}</p>
            )}
          </div>
          <textarea
            className="input-form mb-3 max-h-80 min-h-40 w-full resize-none hover:border-secondary-violet focus:outline-secondary-violet"
            type="text"
            placeholder="Desripción"
            id="description"
            {...register("description")}
          />
          {errors.description && (
            <p className="mb-2 text-wrong">{errors.description.message}</p>
          )}

          <div className="flex items-center gap-2 mb-3">
            <Button
              className={`relative h-6 w-12 rounded-full bg-gray-300 focus:outline-none ${isActive ? "bg-primary-green" : "bg-[#E3E3E3]"}`}
              handle={toggleSwitch}
            >
              <span
                className={`absolute bottom-0 left-0 h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${isActive ? "translate-x-full" : ""}`}
              ></span>
            </Button>
            <p className="text-[#D9D9D9]">Activar Comentarios</p>
          </div>
          <div className="hidden w-full text-end md:block">
            <button
              className="mb-4 w-full rounded-3xl border border-secondary-violet p-2 text-center text-secondary-violet transition duration-500 hover:scale-105 lg:m-2 lg:w-28"
              type="submit"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="mb-5 mt-4 w-full rounded-3xl bg-accent-yellow p-2 text-center transition duration-500 hover:scale-105 lg:m-2 lg:w-28"
            >
              Publicar
            </button>
          </div>
        </div>
        <label className="dark:hover:bg-bray-800 grid aspect-square h-32 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 md:h-[400px] md:w-[400px] dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex h-[100px] w-[100px] items-center justify-center object-cover md:h-[120px] md:w-[120px]">
            <Image
              src={imagePreview ? imagePreview : "/image/imagePost.png"}
              width={120}
              height={120}
              alt="foto de publicacion"
              className="rounded-xl object-cover"
              objectFit="cover"
            />
          </div>
          <input
            name="file"
            id="file"
            type="file"
            className="hidden"
            {...register("image", {
              onChange: (e) => {
                setObjectImage(e.target.files[0]);
              },
            })}
            onChange={handleChange}
          />
        </label>
        <div className="w-full text-end md:hidden">
          <button
            type="submit"
            className="mb-5 mt-4 w-full rounded-3xl bg-accent-yellow p-2 text-center transition duration-500 hover:scale-105 lg:m-2 lg:w-28"
          >
            Publicar
          </button>
          <button
            className="mb-4 w-full rounded-3xl border border-secondary-violet p-2 text-center text-secondary-violet transition duration-500 hover:scale-105 lg:m-2 lg:w-28"
            type="submit"
          >
            Cancelar
          </button>
        </div>
      </form>
    </main>
  );
}
