"use client";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { AddIcon, ChevronDownIcon } from "@/src/components/Icons";
import Link from "next/link";
import { toast } from "sonner";
import { getLocalitiesFromProvince, getProvinces } from "@/src/lib/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "@/src/validations/userSchema";
import { useRouter } from "next/navigation";
import { DeleteIcon } from "../Icons/EditIcon";
import { Context } from "@/src/context/ContextProvider";

export default function ConfigurationProfile({ categories, profile }) {
  const [imagePreview, setImagePreview] = useState(profile?.photoId);
  const [selectedCategories, setselectedCategories] = React.useState(
    profile.categories,
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [LocationSelected, setLocationSelected] = useState(
    profile?.userResponseDTO?.location?.id,
  );

  const [ProvinceSelected, setProvinceSelected] = React.useState(
    profile?.userResponseDTO?.location?.province?.name,
  );

  const [Provinces, setProvinces] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { logOut } = useContext(Context);
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

  useEffect(() => {
    async function getProvincesData() {
      const data = await getProvinces();
      setProvinces(data);
    }

    getProvincesData();
  });

  const DeleteProfile = async () => {
    try {
      const res = await fetch(
        `https://deployreciclame-production.up.railway.app/profiles/delete/${profile?.id}`,
        {
          method: "DELETE",
        },
      );
      
      if (res.ok) {
        toast.success("Perfil eliminado con exito");
        logOut();
        router.push("/login");
        router.push("/")
      
      } else {
        toast.error("Ocurrio un error al eliminar el perfil");
      }
    } catch {
      toast.error("Ocurrio un error al eliminar el perfil");
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
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

  const handleCategoriaClick = (categoria) => {
    if (
      selectedCategories.length === 0 &&
      !selectedCategories.includes(categoria)
    ) {
      setselectedCategories([categoria]);
    } else if (selectedCategories.includes(categoria)) {
      setselectedCategories(selectedCategories.filter((c) => c !== categoria));
    } else if (selectedCategories.length < 3) {
      setselectedCategories([...selectedCategories, categoria]);
    } else {
      toast.error("Solo se pueden seleccionar hasta tres categorías");
    }
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("lastName", data.lastname);
    formData.append("phone", data.phone);
    formData.append("password", profile?.userResponseDTO?.password);
    formData.append("email", profile?.userResponseDTO?.email);
    formData.append("birthdate", profile?.userResponseDTO?.birthdate);
    formData.append("location_id", LocationSelected);
    formData.append("image", selectedFile ? selectedFile : new Blob());
    formData.append("categories", selectedCategories);

    try {
      const response = await fetch(
        `https://deployreciclame-production.up.railway.app/profiles/update/${profile?.id}`,
        {
          method: "PUT",
          body: formData,
        },
      );
      if (response.ok) {
        reset();
        toast.success("Se actualizo el perfil correctamente");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error("Error al actualizar el perfil");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 grid h-full w-full place-items-center opacity-100 backdrop-blur-md ">
          <div className="relative flex flex-col items-center justify-center gap-6 rounded-3xl  border-wrong bg-white px-8 py-10 shadow-xl">
            <span
              className="absolute right-3 top-3 p-2 hover:cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L15 15M15 1L1 15"
                  stroke="#A5A5A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p>¿ Seguro desea eliminar el perfil?</p>
            <div className="flex w-full justify-between gap-2">
              <button
                onClick={() => setShowModal(false)}
                className=" rounded-full border border-[#D0D0D0] px-7 py-1 text-[#D0D0D0]"
              >
                Cancelar
              </button>
              <button
                onClick={() => DeleteProfile()}
                className=" rounded-full bg-wrong px-8 py-1 text-white"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
      <section className="mx-auto mt-[65px] min-h-dvh w-full max-w-7xl p-3 md:w-[70%] lg:w-full">
        <div className="mb-5 flex w-full items-center justify-between">
          <h2 className=" p-3 text-2xl">Editar Perfil</h2>
          <button
            className="items-center justify-center rounded-full bg-wrong p-2 py-2 lg:flex lg:gap-2 lg:rounded-3xl lg:px-3 lg:text-white"
            onClick={() => setShowModal(true)}
          >
            <DeleteIcon />
            <span className="hidden lg:block">Eliminar Perfil</span>
          </button>
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="justify-center lg:flex"
          >
            <div className="relative mx-auto h-full w-max lg:p-2">
              <p className="absolute -top-5 left-10">Foto de Perfil</p>
              <Image
                className="aspect-square min-w-40 rounded-full bg-gray-300"
                width={96}
                height={96}
                src={imagePreview || "/image/profileComent.png"}
                alt="foto de perfil"
              />
              <label className="absolute bottom-0 left-28 right-0 h-10 w-10 rounded-full bg-accent-yellow p-2 hover:cursor-pointer lg:bottom-5">
                <input type="file" className="hidden" onChange={handleChange} />
                <AddIcon />
              </label>
            </div>
            <div className="lg:w-[60%]">
              <div className="items-center justify-center lg:flex lg:w-full">
                <div className="lg:w-full">
                  <div className="relative flex w-full flex-col justify-center gap-2 p-4">
                    <label className="capitalize">nombre</label>
                    <input
                      type="text"
                      className={`input-form "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
                      placeholder="Nombre"
                      id="name"
                      defaultValue={profile?.userResponseDTO?.name}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-wrong">{errors.name.message}</p>
                    )}
                  </div>
                  {}
                  <div className="relative flex w-full flex-col justify-center gap-2 p-4">
                    <label className="capitalize">apellido</label>
                    <input
                      type="text"
                      className={`input-form "focus:outline-wrong" : "focus:outline-secondary-violet"}`}
                      placeholder="Apellido"
                      id="lastname"
                      defaultValue={profile?.userResponseDTO?.lastName}
                      {...register("lastname")}
                    />
                    {errors.lastname && (
                      <p className="text-wrong">{errors.lastname.message}</p>
                    )}
                  </div>
                </div>
                <div className="lg:w-full">
                  <div className="relative flex w-full flex-col justify-center gap-2 p-4">
                    <label className="capitalize">télefono</label>
                    <input
                      type="tel"
                      className={`input-form  "focus:outline-wrong"  "focus:outline-secondary-violet"}`}
                      placeholder="+34 123 456 789"
                      id="phone"
                      maxLength={14}
                      value={profile?.userResponseDTO?.phone}
                      onChange={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      }}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-wrong">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="relative flex w-full gap-4 p-4">
                    <div className="relative flex w-[80%] flex-col justify-center gap-2">
                      <div className="flex items-center justify-between">
                        <label className="font-[400] capitalize">
                          Provincia
                        </label>
                      </div>
                      <div className="relative">
                        <select
                          className={`input-form pr-8} truncate`}
                          placeholder="Ciudad"
                          id="province"
                          {...register("province")}
                          onChange={(e) => {
                            setProvinceSelected(e.target.value);
                            console.log(e.target.value);
                          }}
                          // defaultValue={profile?.userResponseDTO?.location?.province?.name}
                          value={ProvinceSelected}
                        >
                          <option
                            value={
                              profile?.userResponseDTO?.location?.province?.name
                            }
                          >
                            {profile?.userResponseDTO?.location?.province?.name}
                          </option>
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
                        <label className="font-[400] capitalize">
                          localidad
                        </label>
                      </div>
                      <div className="relative">
                        <select
                          className={`input-form pr-8"} truncate`}
                          placeholder="Ciudad"
                          id="city"
                          value={LocationSelected}
                          {...register("city")}
                          onChange={(e) => setLocationSelected(e.target.value)}
                          // defaultValue={profile?.userResponseDTO?.location?.name}
                        >
                          {locations.length < 1 &&
                            profile?.userResponseDTO?.location?.id && (
                            <option
                              value={profile?.userResponseDTO?.location?.id}
                            >
                              {profile?.userResponseDTO?.location?.name}
                            </option>
                          )}
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
                      {errors.city && (
                        <p className="text-wrong">{errors.city.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3>Tus intereses</h3>
                <p className="p- mb-2 text-sm text-gray-400">
                  Elige hasta 3 opciones:
                </p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
                  {categories.map((category, index) => (
                    <button
                      className={`flex h-10 items-center  justify-center rounded-[20px] border px-5 py-3 leading-5 lg:h-12 ${
                        selectedCategories.includes(category)
                          ? "border-secondary-violet bg-secondary-violet text-white"
                          : "border-secondary-violet  text-secondary-violet"
                      }`}
                      type="button"
                      key={index}
                      onClick={() => handleCategoriaClick(category)}
                    >
                      <span>{category}</span>
                    </button>
                  ))}
                </div>
                <div className="mb-5 mt-10 flex w-full justify-between gap-2 lg:col-span-5 lg:mt-40 lg:justify-start">
                  <Link
                    className=" w-full rounded-full border border-primary-green px-4 py-2 text-center text-primary-green lg:w-1/4 "
                    href={"/"}
                  >
                    Cancelar
                  </Link>
                  <button
                    className=" w-full rounded-full bg-primary-green px-4 py-2 text-white disabled:bg-gray-300 disabled:text-black lg:w-1/4 "
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
