import { SearchIcon } from "../../components/Icons";
import CardPost from "../CardPost";
import { getAllPublications } from "@/src/lib/api";
/* import CardPostWrapper from "../CardPostWrapper"; */
export default async function Explorar() {
  const publications = await getAllPublications();
  return (
    <div>
      <div className="mt-32 min-h-[80vh]">
        <label
          id="input-search"
          className="mx-auto mt-8 flex w-full max-w-xs items-center gap-4 text-pretty rounded-full bg-gray-200 p-4 md:max-w-xl"
        >
          <SearchIcon className="aspect-square w-[1.875rem]" />
          <input
            className="w-full border-none bg-transparent outline-none"
            type="search"
            name="search"
            id="input-search"
            placeholder="Busca materiales (ej: papel, plástico, etc)"
          />
        </label>
        <div className="my-10 flex flex-wrap justify-center gap-4 p-2  md:mx-auto md:columns-6">
          {publications?.map((publication) => (
            <CardPost key={publication.id} publication={publication} />
          ))}
        </div>
        {/* <CardPostWrapper /> */}
      </div>
    </div>
  );
}
