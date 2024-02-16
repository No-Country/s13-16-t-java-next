"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Context } from "../../context/ContextProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../validations/userSchema";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {EyeOpen, EyeClose} from '../../components/Icons/EyesIcon'

// TODO -> Verificar si ya está logeado, en lugar de mostrarle el login, redirigirlo a la página de configuración de perfil.
// ! usando useRouter enviarlo a ('/configuracion/perfil')

export default function Login() {
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
    <main className="mt-[65px]  grid min-h-[100vh] items-center justify-items-center bg-[#D9D9D9] lg:grid-cols-2">
      <picture className="  flex h-[400px] w-[400px] items-center justify-center rounded-2xl bg-[#838383] xl:p-5">
        <Image
          src={"/image/login.png"}
          alt={"Image login"}
          width={176}
          height={176}
          priority
          className=""
        />
      </picture>
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
        <div className="flex w-full flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <label className="font-[400] capitalize">contraseña</label>
            <a href="#" className="text-[12px]">
              ¿Has olvidado tu contraseña?
            </a>
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              className="relative h-10 w-full rounded-lg bg-[#D9D9D9] p-3 text-lg italic placeholder-white"
              placeholder="tu contraseña"
              id="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            {showPassword ? (
              <button
                className="absolute right-[110px] mt-3"
                onClick={handleShowPassword}
              >
               <EyeOpen/>
              </button>
            ) : (
              <button
                className="absolute right-[110px] mt-3"
                onClick={handleShowPassword}
              >
               <EyeClose/>
              </button>
            )}
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
    </main>
  );
}
