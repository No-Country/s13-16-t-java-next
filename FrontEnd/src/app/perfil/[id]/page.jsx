import ProfileLayout from "@/src/components/Perfil/ProfileLayout";
import { getProfile } from "@/src/lib/api";

export default async function Page({ params }) {
  const ProfileData = await getProfile(params.id);

  return (
    <>
      <div>
        <ProfileLayout profile={ProfileData} />
      </div>
    </>
  );
}
