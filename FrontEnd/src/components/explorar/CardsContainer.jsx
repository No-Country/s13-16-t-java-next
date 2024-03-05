import CardPost from "../CardPost";
import { getPublicationsByTitle, getAllPublications } from "@/src/lib/api";

export default async function CardsContainer({ query }) {
  let publications = [];
  query == ""
    ? (publications = await getAllPublications())
    : (publications = await getPublicationsByTitle(query));

  return (
    <div className="my-10 flex flex-wrap justify-center gap-4 p-2  md:mx-auto md:columns-6">
      {publications.length !== 0 ? (
        publications.map((publication) => (
          <CardPost key={publication.id} publication={publication} />
        ))
      ) : (
        <p className="mt-14 text-xl">No hay coincidencias</p>
      )}
    </div>
  );
}
