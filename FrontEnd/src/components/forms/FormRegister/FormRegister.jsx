"use client";
import React from "react";
import Link from "next/link";
import {
  getDaysInMonth,
  getMonthsOfYear,
  getYears,
} from "@/src/utils/functions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegisterSchema } from "@/src/validations/userSchema";
import { ChevronDownIcon } from "@/src/components/Icons";
// import { useRouter } from "next/navigation";

import Index from "..";
import { EyeClose, EyeOpen } from "../../Icons/EyesIcon";

function FormRegister() {
  const { showPassword, handleShowPassword } = Index();

  const months = getMonthsOfYear();
  const years = getYears();

  const [monthSelected, setMonthSelected] = React.useState(0);
  const [yearSelected, setYearSelected] = React.useState(2000);
  const [DaysOfMonth, setDaysOfMonth] = React.useState(
    getDaysInMonth(yearSelected, monthSelected),
  );

  React.useEffect(() => {
    setDaysOfMonth(getDaysInMonth(yearSelected, monthSelected));
  }, [yearSelected, monthSelected]);

  // const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userRegisterSchema),
  });

  // ! Esta es una solución alternativa para evitar el error del lado del servidor.
  // ? Comprobar con "sensors" si persiste el error (Dev tools) -> Me daba errores al obtener el idioma de los meses, en servidor me devolvía en español y el cliente en inglés.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <form
      className="flex h-full w-full max-w-2xl flex-col items-center justify-center gap-6 overflow-y-auto bg-white p-5  md:px-24 md:py-10"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        // router.push("/configuracion");
      })}
    >
      <p className="text-star w-full text-2xl font-bold uppercase">
        registrarse
      </p>
      <div className="relative flex w-full flex-col justify-center gap-2">
        <label className="capitalize">nombre</label>
        <input
          type="text"
          className={`input-form ${errors.name ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
          placeholder="Nombre"
          id="name"
          {...register("name")}
        />
        {errors.name && (
          <p className="absolute -bottom-6 text-wrong">{errors.name.message}</p>
        )}
      </div>
      <div className="relative flex w-full flex-col justify-center gap-2">
        <label className="capitalize">correo electronico</label>
        <input
          type="email"
          className={`input-form ${errors.email ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
          placeholder="Correo electronico"
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
        <div className="flex items-center">
          <label className="font-[400] capitalize">contraseña</label>
        </div>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            className={`input-form ${errors.password ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
            placeholder="Contraseña"
            id="password"
            {...register("password")}
          />
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
        {errors.password && (
          <p className="absolute -bottom-6 text-wrong">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="relative flex w-full flex-col justify-center gap-2">
        <div className="flex items-center">
          <label className="font-[400] capitalize">confirmar contraseña</label>
        </div>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            className={`input-form ${errors.confirmPassword ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
            placeholder="Contraseña"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
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
        {errors.confirmPassword && (
          <p className="absolute -bottom-6 text-wrong">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div className="relative flex w-full flex-col justify-center gap-2">
        <label className="capitalize">Número telefonico</label>
        <input
          type="tel"
          className={`input-form ${errors.phone ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
          placeholder="+34 123 456 789"
          id="phone"
          {...register("phone")}
          maxLength={14}
          onChange={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />
        {errors.phone && (
          <p className="absolute -bottom-6 text-wrong">
            {errors.phone.message}
          </p>
        )}
      </div>
      <div className="relative flex w-full gap-5 ">
        <div className="flex w-[80%] flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <label className="font-[400] capitalize">ciudad</label>
          </div>
          <div>
            <input
              type="text"
              className={`input-form ${errors.city ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
              placeholder="Ciudad"
              id="city"
              {...register("city")}
            />
          </div>
          {errors.city && (
            <p className="absolute -bottom-6 text-wrong">
              {errors.city.message}
            </p>
          )}
        </div>
        <div className="relative flex w-[80%] flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <label className="font-[400] capitalize">provincia</label>
          </div>
          <div>
            <input
              type="text"
              className={`input-form ${errors.province ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
              placeholder="Provincia"
              id="province"
              {...register("province")}
            />
          </div>
          {errors.province && (
            <p className="absolute -bottom-6 text-wrong">
              {errors.province.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 ">
        <label className="font-[400] capitalize">fecha de nacimiento</label>
        <div className="flex items-center justify-center gap-3">
          <div className="relative w-full">
            <select
              className={`input-form ${errors.day ? "hover:border-wrong focus:outline-wrong" : "hover:border-secondary-violet focus:outline-secondary-violet"}`}
              {...register("day")}
            >
              <option value="">dd</option>
              {Array.from({ length: DaysOfMonth || 30 }).map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="chevron-down-icon" />
            {errors.day && (
              <p className="absolute -bottom-6 text-wrong">
                {errors.day.message}
              </p>
            )}
          </div>
          <div className="relative w-full">
            <select
              className={`input-form ${errors.month ? "hover:border-wrong focus:outline-wrong" : "hover:border-secondary-violet focus:outline-secondary-violet"}`}
              {...register("month")}
              onChange={(e) => setMonthSelected(e.target.value)}
            >
              <option value="">mm</option>
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="chevron-down-icon" />
            {errors.month && (
              <p className="absolute -bottom-6 text-wrong">
                {errors.month.message}
              </p>
            )}
          </div>
          <div className="relative w-full">
            <select
              className={`input-form ${errors.year ? "hover:border-wrong focus:outline-wrong" : "hover:border-secondary-violet focus:outline-secondary-violet"}`}
              {...register("year")}
              onChange={(e) => setYearSelected(e.target.value)}
            >
              <option value="">yyyy</option>
              {years.map((year) => {
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
            <ChevronDownIcon className="chevron-down-icon" />
            {errors.year && (
              <p className="absolute -bottom-6 text-wrong">
                {errors.year.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <button
          className="w-full rounded-3xl bg-primary-green p-3 text-white md:w-[40%] transition duration-300 hover:bg-green-500"
          type="submit"
        >
          Registrate
        </button>
      </div>
      <div className="flex w-full justify-center">
        <p className="md:text-star flex w-full justify-center gap-2 text-lg md:justify-normal">
          ¿ Tienes cuenta?{" "}
          <Link href="/login" className="text-lg  font-[500] underline ">
            Inicia sesion
          </Link>
        </p>
      </div>
    </form>
  );
}

export default FormRegister;
