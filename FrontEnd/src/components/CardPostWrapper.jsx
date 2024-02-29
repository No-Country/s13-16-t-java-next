import { getAllPublications } from "../lib/api";
import CardPost from "./CardPost";

export default async function CardPostWrapper() {
  const publications = await getAllPublications();
  return (
    <div className="my-10 flex flex-wrap justify-center gap-4 p-2  md:mx-auto md:columns-6">
      {publications?.map((publication) => (
        <CardPost key={publication.id} publication={publication} />
      ))}
    </div>
  );
}
