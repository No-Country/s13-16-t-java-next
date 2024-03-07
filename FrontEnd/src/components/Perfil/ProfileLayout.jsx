import ProfileCard from "./ProfileCard";
import { getFavorites, getDonations } from "@/src/lib/api";
import { ProfileCardSkeleton } from "../../components/skeletons";
import { Suspense } from "react";

export default async function ProfileLayout({ profile }) {
  const favs = await getFavorites(profile.id);
  const donations = await getDonations(profile.id);
  return (
    <>
      <div className="max-h-96 min-h-72 bg-primary-green" />
      <Suspense fallback={<ProfileCardSkeleton />}>
        <ProfileCard profile={profile} favs={favs} donations={donations} />
      </Suspense>
    </>
  );
}
