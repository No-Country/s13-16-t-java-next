import ProfileCard from "./ProfileCard";

import { ProfileCardSkeleton } from "../../components/skeletons";
import { Suspense } from "react";

export default function ProfileLayout({ profile }) {
  return (
    <>
      <div className="max-h-96 min-h-72 bg-primary-green" />
      <Suspense fallback={<ProfileCardSkeleton />}>
        <ProfileCard profile={profile} />
      </Suspense>
    </>
  );
}
