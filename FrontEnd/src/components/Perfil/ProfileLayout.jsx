"use client";

import ProfileCard from "./ProfileCard";
import Image from "next/image";

import { useEffect, useState } from "react";
import { ProfileCardSkeleton } from "../../components/skeletons";
import { Suspense } from "react";

export default function ProfileLayout({ profile }) {
  console.log(profile);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <Image
        src={""}
        alt="Imagen de portada"
        height={30}
        width={100}
        layout="responsive"
        className="max-h-96 min-h-72 bg-primary-green"
      />
      <Suspense fallback={<ProfileCardSkeleton />}>
        <ProfileCard profile={profile} />
      </Suspense>
    </>
  );
}
