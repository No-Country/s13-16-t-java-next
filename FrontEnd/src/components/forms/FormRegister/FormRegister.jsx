"use client";
import React, { useContext } from "react";
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

import Index from "..";
import { EyeClose, EyeOpen } from "../../Icons/EyesIcon";
import { getLocalitiesFromProvince } from "@/src/lib/api";
import { PostNewUser } from ".";
import Configuration from "../../configuracion/Configuration";
import { Context } from "@/src/context/ContextProvider";

function FormRegister({ provinces, categories }) {
  const { showPassword, handleShowPassword } = Index();
  const Provinces = provinces;

  const { setIsLogged } = useContext(Context);

  const [ProvinceSelected, setProvinceSelected] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [locations, setLocations] = React.useState([]);

  const [LocationSelected, setLocationSelected] = React.useState(0);

  React.useEffect(() => {
    async function fetchLocationsByProvince() {
      if (ProvinceSelected) {
        try {
          const provinceId = Provinces.find(
            (p) => p.name === ProvinceSelected,
          ).id;

          const LocationsByProvince =
            await getLocalitiesFromProvince(provinceId);

          setLocations(LocationsByProvince);
        } catch (error) {
          console.error("Error fetching locations:", error);
        }
      }
    }

    fetchLocationsByProvince();
  }, [ProvinceSelected]);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userRegisterSchema),
  });

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const onSubmit = async (data) => {
    const birthdate = new Date(data.year, data.month - 1, data.day);

    const formData = {
      name: data.name,
      lastName: data.lastname,
      email: data.email,
      phone: data.phone,
      password: data.password,
      location_id: LocationSelected,
      birthdate: birthdate.toISOString(),
    };

    try {
      const data = await PostNewUser(JSON.stringify(formData));
      
      if (typeof window !== "undefined" && data) {
        localStorage.setItem("userLoggedId", data.userId);
        localStorage.setItem("profileId", data.profileId);
        localStorage.setItem("isLogged", true)
        setIsLogged(true);
        setModalVisible(true);
      }

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <>
      <form
        id="form-register"
        className="flex h-full w-full max-w-2xl flex-col items-center justify-center gap-6 overflow-y-auto bg-white p-5 md:px-24 md:py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-star w-full text-2xl font-bold uppercase">
          registrarse
        </p>
        <div className="flex w-full items-center justify-center gap-2">
          <div className="relative flex w-full flex-col justify-center gap-2">
            <label className="capitalize">nombre</label>
            <input
              type="text"
              className={`input-form ${errors.name ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
              placeholder="Nombre"
              id="name"
              {...register("name")}
            />
            {errors.name && <p className="text-wrong">{errors.name.message}</p>}
          </div>
          <div className="relative flex w-full flex-col justify-center gap-2">
            <label className="capitalize">apellido</label>
            <input
              type="text"
              className={`input-form ${errors.lastname ? "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
              placeholder="Apellido"
              id="lastname"
              {...register("lastname")}
            />
            {errors.lastname && (
              <p className="text-wrong">{errors.lastname.message}</p>
            )}
          </div>
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
          {errors.email && <p className="text-wrong">{errors.email.message}</p>}
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
            <p className="text-wrong">{errors.password.message}</p>
          )}
        </div>
        <div className="relative flex w-full flex-col justify-center gap-2">
          <div className="flex items-center">
            <label className="font-[400] capitalize">
              confirmar contraseña
            </label>
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
            <p className="text-wrong">{errors.confirmPassword.message}</p>
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
          {errors.phone && <p className="text-wrong">{errors.phone.message}</p>}
        </div>
        <div className="relative flex w-full gap-5 ">
          <div className="relative flex w-[80%] flex-col justify-center gap-2">
            <div className="flex items-center justify-between">
              <label className="font-[400] capitalize">Provincia</label>
            </div>
            <div className="relative">
              <select
                className={`input-form truncate pr-8 ${errors.city ? "focus:outline-wrong" : "hover:border-secondary-violet focus:outline-secondary-violet"}`}
                placeholder="Ciudad"
                id="province"
                {...register("province")}
                onChange={(e) => setProvinceSelected(e.target.value)}
              >
                <option value="">Provincia</option>
                <hr />
                {Provinces.map((province) => {
                  const { id, name } = province;
                  return (
                    <option key={id} value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
              <ChevronDownIcon className="chevron-down-icon" />
            </div>
            {errors.province && (
              <p className="text-wrong">{errors.province.message}</p>
            )}
          </div>
          <div className="flex w-[80%] flex-col justify-center gap-2">
            <div className="flex items-center justify-between">
              <label className="font-[400] capitalize">localidad</label>
            </div>
            <div className="relative">
              <select
                className={`input-form ${errors.city ? "focus:outline-wrong" : "hover:border-secondary-violet focus:outline-secondary-violet"}`}
                placeholder="Ciudad"
                id="city"
                {...register("city")}
                onChange={(e) => setLocationSelected(e.target.value)}
              >
                <option value="">Localidad</option>
                <hr />
                {locations &&
                  locations.map((location) => {
                    const { id, name } = location;
                    return (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    );
                  })}
              </select>
              <ChevronDownIcon className="chevron-down-icon" />
            </div>
            {errors.city && <p className="text-wrong">{errors.city.message}</p>}
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
              {errors.day && <p className="text-wrong">{errors.day.message}</p>}
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
                <p className="text-wrong">{errors.month.message}</p>
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
                <p className="text-wrong">{errors.year.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <button
            id="register-btn-submit"
            className="w-full rounded-3xl bg-primary-green p-3 text-white transition duration-300 hover:bg-green-500 disabled:bg-gray-300 disabled:text-black md:w-[40%]"
            type="submit"
          >
            Registrate
          </button>
        </div>
        <div className="flex w-full justify-center">
          <p className="md:text-star flex w-full justify-center gap-2 text-lg md:justify-normal">
            ¿ Tienes cuenta?{" "}
            <Link href="/login" className="text-lg font-[500] underline">
              Inicia sesion
            </Link>
          </p>
        </div>
      </form>
      {modalVisible && (
        <div className="fixed inset-0 z-40 grid h-full w-full place-items-center bg-white backdrop-blur-sm">
          <Configuration categories={categories} />
        </div>
      )}
    </>
  );
}

export default FormRegister;
