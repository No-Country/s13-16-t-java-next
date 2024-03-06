/* import ProfileLayout from "@/src/components/Perfil/ProfileLayout";
import { getProfile } from "@/src/lib/api";

export default async function Page({ params }) {
  const ProfileData = await getProfile(params.id);

  return (
    <div>
      <ProfileLayout profile={ProfileData} />
    </div>
  );
} */
import CardPost from "@/src/components/CardPost";
import { getProfile } from "@/src/lib/api";

export default async function Page({ params }) {
  const ProfileData = await getProfile(params.id);

  return (
    <div>
      {ProfileData.posts && (
        <div className="mb-10 flex flex-wrap justify-center gap-4 p-2  md:mx-auto md:columns-6">
          {ProfileData.posts.map((post) => (
            <CardPost key={post.id} publication={post} />
          ))}
        </div>
      )}
    </div>
  );
}
