import { getFavorites } from "@/src/lib/api";
import CardPost from "@/src/components/CardPost";

export default async function Page({ params }) {
  const postsFavs = await getFavorites(params.id);
  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-4 p-2  md:mx-auto md:columns-6">
        {postsFavs?.map((post) => (
          <CardPost
            key={post.id}
            publication={post}
            profileId={params.id}
            favorites={postsFavs}
          />
        ))}
      </div>
    </div>
  );
}
