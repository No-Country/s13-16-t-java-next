"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CardPost from "../CardPost";

export default function ProfileCard({ profile }) {
  const pathname = usePathname();

  const profileData = {
    publications: { tittle: "Publicaciones", amount: "123" },
    donations: { tittle: "Donaciones", amount: "123" },
    favorites: { tittle: "Favoritos", amount: "123" },
    interests: ["Papeles", "Plásticos", "Maderas", "Botellas de vidrio"],
  };

  const links = [
    { name: "Publicaciones", href: "/perfil" },
    { name: "Favoritos", href: "/perfil/favoritos" },
  ];

  return (
    <>
      <article className="relative mx-auto h-fit w-11/12 -translate-y-16 rounded-[2.5rem] border-2 border-solid border-white bg-white shadow-xl max-[855px]:w-full max-[855px]:rounded-none max-[855px]:shadow-none">
        <div className="mb-8 flex flex-col justify-between min-[855px]:flex-row">
          <Image
            src={profile.photoId}
            alt="Foto de perfil"
            height={200}
            width={200}
            className="ml-10 -translate-y-16 rounded-full border-4 border-solid border-white bg-gray-300"
          />
          <div className="mt-8 max-[855px]:-mt-8">
            <h2 className="text-4xl max-[855px]:ml-10">
              {profile.userResponseDTO.name +
                " " +
                profile.userResponseDTO.lastName}
            </h2>
            <div className="mt-6 flex gap-x-10 max-[855px]:mx-auto max-[855px]:mt-12 max-[855px]:w-11/12 max-sm:flex-wrap">
              <LabelCard
                tittle={profileData.publications.tittle}
                value={profileData.publications.amount}
              />
              <LabelCard
                tittle={profileData.donations.tittle}
                value={profileData.donations.amount}
              />
              <LabelCard
                tittle={profileData.favorites.tittle}
                value={profileData.favorites.amount}
              />
            </div>
          </div>
          <div className="mt-8 max-[855px]:mx-auto max-[855px]:mt-12 max-[855px]:w-11/12 lg:pr-20">
            <h3 className="mb-4">Intereses</h3>
            {profile.categories && (
              <div className="flex w-52 flex-wrap gap-4 max-[855px]:w-full">
                {profile.categories.map((interest, index) => (
                  <InterestCard key={index} tittle={interest} />
                ))}
              </div>
            )}
          </div>
        </div>
        <nav className="mx-auto flex w-11/12 border-t-2  border-gray-bg max-[855px]:w-full max-[855px]:justify-center max-[855px]:border-b-2 min-[855px]:gap-x-6">
          {links.map((link) => (
            <Link
              className={`my-6 rounded-3xl px-6 py-2 hover:scale-105 max-[855px]:px-4 ${pathname === link.href ? "bg-primary-green text-white" : ""}`}
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </article>
      {profile.posts && (
        <div className="grid grid-cols-4 px-16 gap-5">
          {profile.posts.map((post) => (
            <CardPost key={post.id} publication={post} />
          ))}
        </div>
      )}
    </>
  );
}

export function InterestCard({ tittle }) {
  return (
    <p className="w-fit rounded-3xl bg-gray-dark-bg px-4 py-[4px]">{tittle}</p>
  );
}

export function LabelCard({ tittle, value }) {
  return (
    <div className="text-center">
      <h3 className="mb-2">{tittle}</h3>
      <p className="text-xl">{value}</p>
    </div>
  );
}
