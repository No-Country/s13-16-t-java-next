"use client";

import ProfileCard from "./ProfileCard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Context } from "../../context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { ProfileCardSkeleton } from "../../components/skeletons";
import { Suspense } from "react";
import img from "../../assets/profile/Rectangle-2.png";

export default function ProfileLayout() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const router = useRouter();
  const { isLogged } = useContext(Context);
  if (!isLogged) router.push("/");

  return (
    <>
      <Image
        src={img}
        alt="Imagen de portada"
        height={30}
        width={100}
        layout="responsive"
        className="max-h-96 min-h-72 bg-primary-green"
      />
      <Suspense fallback={<ProfileCardSkeleton />}>
        <ProfileCard />
      </Suspense>
    </>
  );
}
