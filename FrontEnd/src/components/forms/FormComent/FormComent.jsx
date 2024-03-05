"use client";
import Button from "@/src/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { comentSchema } from "@/src/validations/userSchema";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function FormComent({ postId, isEdit, setIsEdit, commentEdit }) {
  const profileId =
    typeof window !== "undefined" && localStorage.getItem("profileId");

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
  const [errorEdit, setErrorEdit] = useState();
  const [newDescription, setNewDescription] = useState(
    commentEdit?.description,
  );
  useEffect(() => {
    setNewDescription(commentEdit?.description);
    setErrorEdit();
  }, [commentEdit]);

  function validationError(event) {
    
    event.preventDefault();
    if (newDescription.length < 1) {
      setErrorEdit("No se puede enviar un comentario vacío");
    } else {
      handleEditComment()
      setErrorEdit()
    }
  }
  async function handleEditComment() {
    const requestBody = {
      description: newDescription,
    };
    try {
      const response = await fetch(
        `https://deployreciclame-production.up.railway.app/comments/update/${commentEdit.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        },
      );

      if (response.ok) {
        toast.success("Comentario editado con éxito.");
        document.getElementById("editForm").reset();
        setIsEdit(false);
      } else {
        const errorData = await response.json();
        console.error("Error al editar el comentario:", errorData);
        toast.error("Error al editar el comentario.");
      }
    } catch (error) {
      console.error("Error en la solicitud de edición:", error);
      toast.error("Error en la solicitud de edición.");
    }
  }

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
    <>
      {isEdit ? (
        <form
          id="editForm"
          className="flex w-full flex-col gap-4"
          onSubmit={validationError}
        >
          <h3 className="font-bold text-secondary-violet">
            Edición de comentario:
          </h3>
          <textarea
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
            rows="2"
            className="w-full resize-none rounded-xl bg-[#F0F0F0] p-3 text-sm"
            placeholder="Editar"
          ></textarea>
          {errorEdit && <p className=" text-sm text-wrong">{errorEdit}</p>}
          <div className="flex gap-2">
            <button
              className="w-1/2 rounded-3xl bg-primary-green p-1 text-lg font-[500] text-white disabled:bg-gray-300 disabled:text-black"
              type="submit"
            >
              Editar
            </button>
            <button
              className="w-1/2 rounded-3xl bg-red-300 p-1 text-lg font-[500] text-white disabled:bg-gray-300 disabled:text-black"
              type="submit"
              onClick={() => {
                setIsEdit(false);
                document.getElementById("editForm").reset();
                setErrorEdit();
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
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
      )}
    </>
  );
}
