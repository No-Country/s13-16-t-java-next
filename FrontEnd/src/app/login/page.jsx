import Image from "next/image";
import FormLogin from "../../components/forms/FormLogin/FormLogin";
import LoginBackground from "@/src/assets/background/background-2.png";

export default function Login() {
  return (
    <main className="grid items-center justify-items-center lg:grid-cols-2 lg:overflow-hidden">
      <picture className="mt-[65px] self-start">
        <Image
          width={1416}
          height={1572}
          src={LoginBackground}
          alt={"Image login"}
          priority
        />
      </picture>
      <FormLogin />
    </main>
  );
}
