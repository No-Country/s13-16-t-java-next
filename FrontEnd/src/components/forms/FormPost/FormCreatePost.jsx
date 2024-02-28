"use client";

import { ChevronDownIcon } from "@/src/components/Icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { publicationSchema } from "@/src/validations/userSchema";
import { useState } from "react";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(publicationSchema),
  });

  const [objectImage, setObjectImage] = useState({});

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
      alert("Publicación creada");
    } else {
      alert("Error al crear la publicación");
    }
  }

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
          <svg
            className="block aspect-square w-20 md:h-40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 160"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.147 21.147c-7.814 7.806-7.814 20.38-7.814 45.52v26.666c0 25.14 0 37.714 7.814 45.52 7.806 7.814 20.38 7.814 45.52 7.814h26.666c25.14 0 37.714 0 45.52-7.814 7.814-7.806 7.814-20.38 7.814-45.52V66.667c0-18.934 0-30.734-3.334-38.74v85.406a24.135 24.135 0 0 1-17.066-7.066l-5.014-5.014c-4.813-4.813-7.213-7.213-9.94-8.226a13.333 13.333 0 0 0-9.293 0c-2.727 1.013-5.133 3.413-9.933 8.226l-.76.754c-3.9 3.9-5.854 5.853-7.927 6.213a6.666 6.666 0 0 1-4.66-.893c-1.787-1.107-2.873-3.647-5.053-8.72l-.354-.827c-5-11.667-7.493-17.493-11.853-19.68a13.333 13.333 0 0 0-7.1-1.367c-4.86.414-9.34 4.9-18.313 13.867l-12.734 12.733V19.247a18.99 18.99 0 0 0-2.186 1.9Z"
              fill="#BDBDBD"
            />
            <path
              d="M16 62.934c0-13.27.015-22.527.994-29.509.943-6.78 2.678-10.372 5.328-12.93 2.664-2.566 6.393-4.23 13.435-5.138 7.25-.943 16.862-.957 30.643-.957h28.8c13.781 0 23.393.014 30.643.957 7.042.908 10.772 2.58 13.428 5.13 2.664 2.566 4.392 6.157 5.343 12.938.972 6.982.986 16.238.986 29.509v27.733c0 13.27-.014 22.526-.986 29.508-.951 6.781-2.686 10.372-5.343 12.931-2.656 2.565-6.386 4.229-13.428 5.144-7.25.936-16.862.95-30.643.95H66.4c-13.78 0-23.393-.014-30.643-.95-7.042-.915-10.771-2.586-13.428-5.144-2.664-2.559-4.392-6.15-5.335-12.931-.98-6.982-.994-16.238-.994-29.508V62.934Z"
              stroke="#BDBDBD"
              strokeWidth="2"
            />
            <path
              d="M100 73.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.969-13.333-13.333-13.333S86.667 52.637 86.667 60c0 7.364 5.97 13.333 13.333 13.333Z"
              fill="#BDBDBD"
            />
          </svg>
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
