"use client";
import CardPost from "@/src/components/CardPost";
import { useGetFavs } from "@/src/hooks/useGetFavs";
export default function Page({ params }) {
  const {data} = useGetFavs(params.id);
  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-4 p-2  md:mx-auto md:columns-6">
        {data != 0?
          data?.map((post) => (
            <CardPost
              key={post.id}
              publication={post}
              profileId={params.id}
              favorites={data}
            />
          )):(
            <p>No tienes publicaciones en favoritos.</p>
          )}
      </div>
    </div>
  );
}
