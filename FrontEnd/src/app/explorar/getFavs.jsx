import CardPost from "@/src/components/CardPost";
import { getFavorites } from "@/src/lib/api";
export default async function GetFavs({ publications, profileId }) {
  let favorites;
  if (profileId) {
    favorites = await getFavorites(profileId);
  }
  return (
    <div className="my-10 flex flex-wrap justify-center gap-4 p-2  md:mx-auto md:columns-6">
      {publications != 0 ? (
        publications?.map((publication) => (
          <CardPost
            key={publication.id}
            publication={publication}
            profileId={profileId}
            favorites={favorites}
          />
        ))
      ) : (
        <p className="mt-14 text-xl">No hay coincidencias</p>
      )}
    </div>
  );
}
