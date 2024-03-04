"use client";
import Button from "@/src/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { comentSchema } from "@/src/validations/userSchema";
import { toast } from "sonner";
import { useState } from "react";

export default function FormComent({ postId }) {
  const profileId = typeof window !== 'undefined' && localStorage.getItem('profileId');

  const urlPostComent =
    "https://deployreciclame-production.up.railway.app/comments/save";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(comentSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    setIsLoading(true);

    const currentDate = new Date().toISOString();
    const requestBody = {
      postId: postId,
      description: data.description,
      date: currentDate,
      profileId: profileId,
    };


    const response = await fetch(urlPostComent, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      setIsLoading(false);
      toast.success("Comentario publicado con éxito.");
      reset();
    } else {
      setIsLoading(false);
      toast.error("Error al publicar el comentario.");
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <textarea
        rows="2"
        className="w-full resize-none rounded-xl bg-[#F0F0F0] p-3 text-sm"
        placeholder="Comentar"
        {...register("description")}
      ></textarea>
      {errors.description && (
        <p className=" text-sm text-wrong">{errors.description.message}</p>
      )}
      <Button
        disabled={isLoading}
        className="w-1/2 rounded-3xl bg-primary-green p-1 text-lg font-[500] text-white disabled:bg-gray-300 disabled:text-black"
        type="submit"
      >
        Enviar
      </Button>
    </form>
  );
}
