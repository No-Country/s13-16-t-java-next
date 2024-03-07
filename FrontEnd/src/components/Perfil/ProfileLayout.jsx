"use client";
import { useGetFavs } from "@/src/hooks/useGetFavs";
import { useGetDonations } from "@/src/hooks/useGetDonations";
import ProfileCard from "./ProfileCard";
import { ProfileCardSkeleton } from "../../components/skeletons";
import { Suspense } from "react";

export default function ProfileLayout({ profile }) {
  const {data} = useGetFavs(profile.id);
  const {donations} = useGetDonations(profile.id);
  return (
    <>
      <div className="max-h-96 min-h-72 bg-primary-green" />
      <Suspense fallback={<ProfileCardSkeleton />}>
        <ProfileCard profile={profile} favs={data} donations={donations} />
      </Suspense>
    </>
  );
}
