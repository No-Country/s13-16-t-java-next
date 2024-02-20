import Image from "next/image";
import { FormRegister } from "@/src/components/forms/FormRegister";

export default function Register() {
  return (
    <main className="mt-[65px] grid items-center justify-items-center bg-[#D9D9D9] lg:grid-cols-2">
      <picture className=" hidden  h-[400px] w-[400px] items-center justify-center rounded-2xl bg-[#838383] lg:flex xl:p-5">
        <Image
          src={"/image/login.png"}
          alt={"Image login"}
          width={176}
          height={176}
          priority
          className=""
        />
      </picture>
      <FormRegister />
    </main>
  );
}
