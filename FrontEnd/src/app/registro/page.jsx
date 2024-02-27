import Image from "next/image";
import { FormRegister } from "@/src/components/forms/FormRegister";
import RegisterBackground from "@/src/assets/background/background-1.png";
import { getProvinces } from "@/src/lib/api";

export default async function Register() {
  const Provinces = await getProvinces();

  return (
    <main className="relative grid items-center justify-items-center md:mt-[55px] lg:grid-cols-2">
      <picture className="min-h-full self-start pt-16 lg:pt-0">
        <Image
          width={1416}
          height={1574}
          src={RegisterBackground}
          alt={"Image register"}
          priority
        />
      </picture>
      <FormRegister provinces={Provinces} />
    </main>
  );
}
