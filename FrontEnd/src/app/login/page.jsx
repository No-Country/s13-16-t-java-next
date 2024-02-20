
import Image from "next/image";
import FormLogin from "../../components/forms/FormLogin/FormLogin";

export default function Login() {
  
  return (
    <main className="mt-[65px]  grid min-h-[100vh] items-center justify-items-center bg-[#D9D9D9] lg:grid-cols-2">
      <picture className=" hidden  md:flex h-[400px] w-[400px] items-center justify-center rounded-2xl bg-[#838383] xl:p-5">
        <Image
          src={"/image/login.png"}
          alt={"Image login"}
          width={176}
          height={176}
          priority
          className=""
        />
      </picture>
      <FormLogin/>
      
    </main>
  );
}
