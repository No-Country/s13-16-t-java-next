import CardPost from "./CardPost";
import { useGetPosts } from "../hooks/useGetPost";
import { CardsPostsSkeleton } from "./skeletons";

export default function CardPostWrapper() {
  const { publications, error, isLoading } = useGetPosts();
  if (error) {
    return (
      <p className="text-center">
        Algo salió mal:
        <br /> {error.message}
      </p>
    );
  }
  if (isLoading) return <CardsPostsSkeleton />;
  return (
    <div className="my-10 flex flex-wrap justify-center gap-4 p-2  md:mx-auto md:columns-6">
      {publications?.map((publication) => (
        <CardPost key={publication.id} publication={publication} />
      ))}
    </div>
  );
}
