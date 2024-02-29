"use client";
import Button from "@/src/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { comentSchema } from "@/src/validations/userSchema";

export default function FormComent({ postId }) {
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

  async function onSubmit(data) {
    const currentDate = new Date().toISOString().split("T")[0];
    const requestBody = {
      postId: postId,
      description: data.description,
      date: currentDate,
    };

    

    const response = await fetch(urlPostComent, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    if (response.ok) {
      alert("comentario creado");
      reset();
      
    } else {
      alert("Error al crear el comentario");
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <textarea
        rows="2"
        className="w-full resize-none rounded-xl bg-[#d9d9d9] p-3"
        placeholder="Comentar"
        {...register("description")}
      ></textarea>
      {errors.description && (
        <p className=" text-sm text-wrong">{errors.description.message}</p>
      )}
      <Button
        className="w-1/2  rounded-3xl bg-primary-green p-1 text-lg font-[500] text-white"
        type="submit"
      >
        Enviar
      </Button>
    </form>
  );
}
