import ProfileLayout from "@/src/components/Perfil/ProfileLayout";
import { getProfile } from "@/src/lib/api";

export default async function Layout({ params, children }) {
  const ProfileData = await getProfile(params.id);

  return (
    <section className="mx-auto mt-16 w-full">
      <ProfileLayout profile={ProfileData} />
      {children}
    </section>
  );
}
