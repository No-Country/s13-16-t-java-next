"use client";

import { ChevronDownIcon } from "@/src/components/Icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { publicationSchema } from "@/src/validations/userSchema";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../Button";
import { toast } from "sonner";
import Link from "next/link";

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
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(publicationSchema),
  });

  const profileId =
    typeof window !== "undefined" && localStorage.getItem("profileId");

  const [objectImage, setObjectImage] = useState({});

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("image", objectImage);
    formData.append("enableComments", isActive);
    formData.append("profileId", profileId);

    const response = await fetch(URLPostData, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      reset();
      toast.success("Publicación creada");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } else {
      toast.error("Error al crear la publicación");
    }
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    setObjectImage(file);
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

          <div className="mb-3 flex items-center gap-2">
            <Button
              type="button"
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
            <Link
              href={"/"}
              className="mb-4 w-full rounded-3xl border border-secondary-violet p-2 text-center text-secondary-violet transition duration-500 hover:scale-105 lg:m-2 lg:w-28"
            >
              Cancelar
            </Link>
            <button
              disabled={isSubmitting}
              type="submit"
              className="mb-5 mt-4 w-full rounded-3xl bg-accent-yellow p-2 text-center transition duration-500 hover:scale-105 disabled:bg-gray-300 disabled:text-black lg:m-2 lg:w-28"
            >
              Publicar
            </button>
          </div>
        </div>
        <label className="dark:hover:bg-bray-800 grid aspect-square w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 md:h-[400px] md:w-[400px] dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex items-center justify-center object-cover p-10">
            {/* eslint-disable-next-line */}
            <img
              src={imagePreview ? imagePreview : "/image/imagePost.png"}
              alt="foto de publicacion"
              className="w-full rounded-xl object-cover"
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
                handleChange(e);
              },
            })}
          />
        </label>
        <div className="w-full text-end md:hidden">
          <button
            disabled={isSubmitting}
            type="submit"
            className="mb-5 mt-4 w-full rounded-3xl bg-accent-yellow p-2 text-center transition duration-500 hover:scale-105 disabled:bg-gray-300 disabled:text-black lg:m-2 lg:w-28"
          >
            Publicar
          </button>
          <Link
            href={"/"}
            className="mb-4 w-full rounded-3xl border border-secondary-violet p-2 text-center text-secondary-violet transition duration-500 hover:scale-105 lg:m-2 lg:w-28"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </main>
  );
}
