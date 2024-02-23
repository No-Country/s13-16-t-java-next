"use client";
import React, { useContext } from "react";
import { Context } from "../../../context/ContextProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../../validations/userSchema";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EyeOpen, EyeClose } from "../../Icons/EyesIcon";

import Index from "..";

// TODO -> Verificar si ya está logeado, en lugar de mostrarle el login, redirigirlo a la página de configuración de perfil.
// ! usando useRouter enviarlo a ('/configuracion/perfil')
function FormLogin() {
  const { showPassword, handleShowPassword } = Index();

  const { setIsLogged } = useContext(Context);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        router.push("/");
        setIsLogged(true);
      })}
      className="flex h-full w-full max-w-2xl flex-col items-center gap-6 bg-white p-8 md:mt-3 md:p-16  lg:justify-center  lg:p-24"
    >
      <p className="text-star w-full text-2xl font-bold uppercase">ingresar</p>
      <div className="relative flex w-full flex-col justify-center gap-2">
        <label className="capitalize">correo electronico</label>
        <input
          type="email"
          className={`input-form ${errors.email ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
          placeholder="Correo"
          id="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="absolute -bottom-6 text-wrong">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative flex w-full flex-col justify-center gap-2">
        <div className="flex items-center justify-between">
          <label className="font-[400] capitalize">contraseña</label>
        </div>
        <div className="">
          <input
            type={showPassword ? "text" : "password"}
            className={`input-form ${errors.password ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
            id="password"
            placeholder="contraseña"
            {...register("password")}
          />
          <div className="flex w-full justify-end">
            <Link href="" className="mt-2 text-[12px] underline">
              ¿Has olvidado tu contraseña?
            </Link>
          </div>
          {errors.password && (
            <p className="absolute -bottom-6 text-wrong">
              {errors.password.message}
            </p>
          )}
          <div
            className="absolute right-4 top-8 mt-4 cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? (
              <EyeOpen fill={"#838383"} />
            ) : (
              <EyeClose stroke={"#838383"} />
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <button
          className="w-full rounded-3xl bg-primary-green p-3 text-white md:w-1/3"
          type="submit"
        >
          Ingresar
        </button>
      </div>
      <div className="w-full">
        <p className="text-star mt-24 flex w-full  gap-2 text-sm lg:mt-0 lg:text-lg">
          ¿No tienes cuenta?{" "}
          <Link
            href="/registro"
            className="text-sm  font-semibold underline lg:text-lg lg:font-[500]  "
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </form>
  );
}

export default FormLogin;
