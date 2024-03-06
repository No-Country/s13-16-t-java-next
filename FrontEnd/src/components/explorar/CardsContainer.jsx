import GetProfileId from "@/src/app/explorar/GetProfileId";
import { getPublicationsByTitle, getAllPublications } from "@/src/lib/api";

export default async function CardsContainer({ query }) {
  let publications = [];
  query == ""
    ? (publications = await getAllPublications())
    : (publications = await getPublicationsByTitle(query));

  return <GetProfileId publications={publications} />;
}
