import GetProfileId from "@/src/app/explorar/GetProfileId";
import { getPublicationsByTitle, getAllPublications } from "@/src/lib/api";

export default async function CardsContainer({ query }) {
  let publications = [];
  if (query) publications = await getPublicationsByTitle(query);
  else publications = await getAllPublications();
  return <GetProfileId publications={publications} />;
}
