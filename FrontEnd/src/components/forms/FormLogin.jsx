"use client";
import React, { useContext, useState } from "react";
import { Context } from "../../context/ContextProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../validations/userSchema";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {EyeOpen, EyeClose} from '../Icons/EyesIcon'

// TODO -> Verificar si ya está logeado, en lugar de mostrarle el login, redirigirlo a la página de configuración de perfil.
// ! usando useRouter enviarlo a ('/configuracion/perfil')
function FormLogin() {
    const [showPassword, setShowPassword] = React.useState(false);

  const { isLogged, setIsLogged } = useContext(Context);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          router.push("/configuracion/perfil");
          setIsLogged(true);
        })}
        className="flex h-full w-full flex-col items-center justify-center gap-6 bg-white p-16 lg:p-24"
      >
        <p className="text-star w-full text-2xl font-bold uppercase">
          ingresar
        </p>
        <div className="flex w-full flex-col justify-center gap-2">
          <label className="capitalize">correo electronico</label>
          <input
            type="email"
            className="h-10 w-full rounded-lg bg-[#D9D9D9] p-3 text-lg italic placeholder-white"
            placeholder="tucorreo@correo.com"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className=" relative flex w-full flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <label className="font-[400] capitalize">contraseña</label>
            <Link href="" className="text-[12px]">
              ¿Has olvidado tu contraseña?
            </Link>
          </div>
          <div className="">
            <input
              type={showPassword ? "text" : "password"}
              className="h-10 w-full rounded-lg bg-[#D9D9D9] p-3 text-lg italic placeholder-white"
              placeholder="tu contraseña"
              id="password"
              {...register("password")}
            />
             {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
             <div
            className="cursor-pointer absolute right-2 top-8 mt-3"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <EyeOpen /> : <EyeClose />}
          </div>
         
          </div>
          
        </div>
        <div className="w-full">
          <button
            className="w-1/3 rounded-3xl bg-[#838383] p-3 text-white"
            type="submit"
          >
            Acceder
          </button>
        </div>
        <div className="w-full">
        <p className="text-star w-full flex gap-2 text-lg">¿No tienes cuenta? <Link href="/registro" className="font-[500]  text-lg underline ">Regístrate aquí</Link></p>
        </div>
      </form>
  )
}

export default FormLogin