"use client";

import ProfileCard from "../../components/ProfileCard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Context } from "../../context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { ProfileCardSkeleton } from "../../components/skeletons";
import { Suspense } from "react";

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const router = useRouter();
  const { isLogged } = useContext(Context);
  if (!isLogged) router.push("/");

  return (
    <section className="mx-auto mt-16 w-full">
      <Image
        src=""
        alt=""
        height={30}
        width={100}
        layout="responsive"
        className="min-h-72 bg-primary-green"
      />
      <Suspense fallback={<ProfileCardSkeleton />}>
        <ProfileCard />
      </Suspense>
      {children}
    </section>
  );
}
