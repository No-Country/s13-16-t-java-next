import Image from "next/image";
import { FormRegister } from "@/src/components/forms/FormRegister";
import RegisterBackground from "@/src/assets/background/background-1.png";

export default function Register() {
  return (
    <main className=" md:mt-[55px] relative grid items-center justify-items-center lg:grid-cols-2">
      <picture className="min-h-full self-start pt-16 lg:pt-0">
        <Image
          width={1416}
          height={1574}
          src={RegisterBackground}
          alt={"Image register"}
          priority
        />
      </picture>
      <FormRegister />
    </main>
  );
}
