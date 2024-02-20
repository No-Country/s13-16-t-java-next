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
        className="flex h-full w-full flex-col items-center lg:justify-center gap-6 bg-white md:p-16 md:mt-3  p-8  lg:p-24"
      >
        <p className="text-star w-full text-2xl font-bold uppercase">
          ingresar
        </p>
        <div className="flex w-full flex-col justify-center gap-2">
          <label className="capitalize">correo electronico</label>
          <input
            type="email"
            className="h-12 w-full rounded-3xl border-2 border-[#838383] p-3 placeholder-[#838383] "
            placeholder="Correo"
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
           
          </div>
          <div className="">
            <input
              type={showPassword ? "text" : "password"}
              className="h-12 w-full rounded-3xl border-2 border-[#838383] p-3 placeholder-[#838383] "
              id="password"
              placeholder="contraseña"
              {...register("password")}
            />
            <div className="flex justify-end w-full">
             <Link href="" className="text-[12px] mt-2 underline">
              ¿Has olvidado tu contraseña?
            </Link>
            </div>
             {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
             <div
            className="cursor-pointer absolute right-4 top-8 mt-4"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <EyeOpen fill={"#838383"}/> : <EyeClose stroke={"#838383"} />}
          </div>
         
          </div>
          
        </div>
        <div className="w-full">
          <button
            className="md:w-1/3 w-full rounded-3xl p-3 text-white bg-primary-green"
            type="submit"
          >
            Ingresar
          </button>
        </div>
        <div className="w-full">
        <p className="text-star w-full flex gap-2  lg:text-lg text-sm mt-24 lg:mt-0">¿No tienes cuenta? <Link href="/registro" className="lg:font-[500]  lg:text-lg text-sm underline font-semibold  ">Regístrate aquí</Link></p>
        </div>
      </form>
  )
}

export default FormLogin