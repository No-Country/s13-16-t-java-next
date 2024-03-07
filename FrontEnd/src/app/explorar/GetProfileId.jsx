"use client";
import GetFavs from "./getFavs";
export default function GetProfileId({ publications }) {
  const profileId =
    typeof window !== "undefined" && localStorage.getItem("profileId");
  return <GetFavs publications={publications} profileId={profileId} />;
}
