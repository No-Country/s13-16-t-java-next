"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Context } from "../../context/ContextProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../validations/userSchema";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const { isLogged, setIsLogged } = useContext(Context);

  console.log(isLogged);

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
    <main className="mt-[65px]  grid h-[100vh] items-center justify-items-center bg-[#D9D9D9] lg:grid-cols-2">
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
        onSubmit={handleSubmit((data) => console.log(data))}
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
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.874 6.50427C19.234 5.39427 15.714 -0.175734 9.73397 0.00426608C4.20397 0.144266 1.00397 5.00427 0.133975 6.50427C0.0462063 6.65629 0 6.82873 0 7.00427C0 7.1798 0.0462063 7.35225 0.133975 7.50427C0.763975 8.59427 4.13398 14.0043 10.024 14.0043H10.274C15.804 13.8643 19.014 9.00427 19.874 7.50427C19.9617 7.35225 20.0079 7.1798 20.0079 7.00427C20.0079 6.82873 19.9617 6.65629 19.874 6.50427ZM10.224 12.0043C5.91398 12.1043 3.10397 8.41427 2.22397 7.00427C3.22397 5.39427 5.83397 2.10427 9.83397 2.00427C14.124 1.89427 16.944 5.59427 17.834 7.00427C16.804 8.61427 14.224 11.9043 10.224 12.0043Z"
                    fill="#39353F"
                  />
                  <path
                    d="M10.0039 3.50439C9.31167 3.50439 8.63498 3.70967 8.05941 4.09425C7.48384 4.47884 7.03524 5.02546 6.77033 5.665C6.50542 6.30454 6.43611 7.00828 6.57116 7.68721C6.70621 8.36614 7.03955 8.98978 7.52903 9.47927C8.01852 9.96875 8.64216 10.3021 9.32109 10.4371C10 10.5722 10.7038 10.5029 11.3433 10.238C11.9828 9.97307 12.5295 9.52446 12.9141 8.94889C13.2986 8.37332 13.5039 7.69663 13.5039 7.00439C13.5039 6.07614 13.1352 5.1859 12.4788 4.52952C11.8224 3.87314 10.9322 3.50439 10.0039 3.50439ZM10.0039 8.50439C9.70724 8.50439 9.41723 8.41642 9.17055 8.2516C8.92388 8.08678 8.73162 7.85251 8.61809 7.57842C8.50456 7.30433 8.47485 7.00273 8.53273 6.71176C8.59061 6.42079 8.73347 6.15351 8.94325 5.94373C9.15303 5.73396 9.4203 5.59109 9.71127 5.53322C10.0022 5.47534 10.3038 5.50504 10.5779 5.61858C10.852 5.73211 11.0863 5.92437 11.2511 6.17104C11.4159 6.41771 11.5039 6.70772 11.5039 7.00439C11.5039 7.40222 11.3459 7.78375 11.0646 8.06505C10.7833 8.34636 10.4017 8.50439 10.0039 8.50439Z"
                    fill="#39353F"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="absolute right-[110px] mt-3"
                onClick={handleShowPassword}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.58494 8.58691C8.20992 8.96206 7.9993 9.47082 7.99939 10.0013C7.99948 10.5317 8.21029 11.0404 8.58544 11.4154C8.96059 11.7904 9.46935 12.0011 9.99979 12.001C10.5302 12.0009 11.0389 11.7901 11.4139 11.4149"
                    stroke="#39353F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.681 14.673C13.2782 15.5507 11.6547 16.0109 10 16C6.4 16 3.4 14 1 10C2.272 7.88 3.712 6.322 5.32 5.326M8.18 4.18C8.77904 4.05873 9.38881 3.99842 10 4C13.6 4 16.6 6 19 10C18.334 11.11 17.621 12.067 16.862 12.87M1 1L19 19"
                    stroke="#39353F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="w-full">
          <button
            className=" w-1/3 rounded-3xl bg-[#838383] p-3 text-white"
            type="submit"
            onClick={() => {
              setIsLogged(true)
            }}
          >
            Acceder
          </button>
        </div>
        <p className="text-star w-full">O ingresar con</p>
        <div className="flex w-full items-center gap-4">
          <div className="flex items-center justify-center rounded-[50%] bg-[#D9D9D9] p-2">
            <button className="">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_130_321)">
                  <path
                    d="M12.541 1.1839C8.94399 2.43172 5.84198 4.80012 3.69055 7.94122C1.53912 11.0823 0.451678 14.8306 0.587947 18.6354C0.724215 22.4402 2.07701 26.101 4.44764 29.0802C6.81826 32.0593 10.0818 34.1997 13.7588 35.187C16.7398 35.9562 19.863 35.99 22.86 35.2855C25.575 34.6756 28.085 33.3712 30.1444 31.4998C32.2877 29.4927 33.8435 26.9393 34.6444 24.1142C35.5146 21.042 35.6695 17.8112 35.0972 14.6698H18.3572V21.6139H28.0519C27.8581 22.7214 27.4429 23.7785 26.8311 24.7218C26.2193 25.6651 25.4235 26.4753 24.4913 27.1039C23.3076 27.8873 21.973 28.4142 20.5735 28.6508C19.1699 28.9118 17.7302 28.9118 16.3266 28.6508C14.9039 28.357 13.5581 27.7698 12.375 26.9267C10.4742 25.5812 9.04692 23.6696 8.29689 21.4648C7.53439 19.2187 7.53439 16.7838 8.29689 14.5377C8.83078 12.9633 9.71336 11.5298 10.8788 10.3442C12.2124 8.96257 13.9009 7.97496 15.7589 7.48974C17.6169 7.00453 19.5726 7.04046 21.4116 7.59359C22.8482 8.03438 24.1619 8.80487 25.2478 9.84359C26.341 8.75609 27.4322 7.66578 28.5216 6.57265C29.0841 5.98484 29.6972 5.42515 30.2513 4.82328C28.5934 3.28067 26.6475 2.08026 24.525 1.29078C20.6598 -0.112686 16.4306 -0.150403 12.541 1.1839Z"
                    fill="white"
                  />
                  <path
                    d="M12.5409 1.18429C16.4302 -0.15092 20.6595 -0.114196 24.525 1.28836C26.6478 2.0832 28.5929 3.2894 30.2484 4.83773C29.6859 5.43961 29.0925 6.00211 28.5187 6.58711C27.4275 7.67648 26.3372 8.76211 25.2478 9.84398C24.1619 8.80526 22.8482 8.03477 21.4116 7.59398C19.5732 7.03891 17.6175 7.0009 15.759 7.48413C13.9006 7.96736 12.2111 8.95316 10.8759 10.3334C9.71053 11.5189 8.82794 12.9524 8.29406 14.5268L2.46375 10.0127C4.55064 5.87431 8.16398 2.70874 12.5409 1.18429Z"
                    fill="#E33629"
                  />
                  <path
                    d="M0.916857 14.4846C1.23 12.9314 1.75027 11.4274 2.46373 10.0127L8.29404 14.538C7.53155 16.7841 7.53155 19.2191 8.29404 21.4652C6.35154 22.9652 4.40811 24.4727 2.46373 25.9877C0.678218 22.4336 0.133668 18.3841 0.916857 14.4846Z"
                    fill="#F8BD00"
                  />
                  <path
                    d="M18.3572 14.667H35.0972C35.6695 17.8084 35.5146 21.0391 34.6444 24.1114C33.8435 26.9365 32.2877 29.4898 30.1444 31.497C28.2628 30.0289 26.3728 28.572 24.4913 27.1039C25.4241 26.4747 26.2203 25.6636 26.8321 24.7192C27.444 23.7749 27.8588 22.7168 28.0519 21.6082H18.3572C18.3544 19.2964 18.3572 16.9817 18.3572 14.667Z"
                    fill="#587DBD"
                  />
                  <path
                    d="M2.46094 25.9873C4.40531 24.4873 6.34875 22.9798 8.29125 21.4648C9.04277 23.6704 10.4721 25.582 12.375 26.9267C13.5617 27.7659 14.9105 28.3483 16.335 28.6367C17.7386 28.8978 19.1783 28.8978 20.5819 28.6367C21.9815 28.4001 23.316 27.8732 24.4997 27.0898C26.3813 28.558 28.2712 30.0148 30.1528 31.483C28.0938 33.3553 25.5837 34.6608 22.8684 35.2714C19.8715 35.976 16.7482 35.9422 13.7672 35.173C11.4095 34.5435 9.20721 33.4337 7.29844 31.9133C5.2783 30.3091 3.62822 28.2877 2.46094 25.9873Z"
                    fill="#319F43"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_130_321">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center rounded-[50%] bg-[#D9D9D9] p-2">
            <button className="">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42 21C42 9.40209 32.5979 0 21 0C9.40209 0 0 9.40209 0 21C0 31.4816 7.67944 40.1696 17.7188 41.7449V27.0703H12.3867V21H17.7188V16.3734C17.7188 11.1103 20.854 8.20312 25.6508 8.20312C27.9484 8.20312 30.3516 8.61328 30.3516 8.61328V13.7812H27.7036C25.0948 13.7812 24.2812 15.4001 24.2812 17.0609V21H30.1055L29.1744 27.0703H24.2812V41.7449C34.3206 40.1696 42 31.4818 42 21Z"
                  fill="#1877F2"
                />
                <path
                  d="M29.1744 27.0703L30.1055 21H24.2812V17.0609C24.2812 15.3999 25.0948 13.7812 27.7036 13.7812H30.3516V8.61328C30.3516 8.61328 27.9484 8.20312 25.6507 8.20312C20.854 8.20312 17.7188 11.1103 17.7188 16.3734V21H12.3867V27.0703H17.7188V41.7449C18.8042 41.915 19.9013 42.0003 21 42C22.0987 42.0003 23.1958 41.915 24.2812 41.7449V27.0703H29.1744Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}