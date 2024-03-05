import BlogPost from "../../components/BlogPost";
import InputSearch from "../../components/InputSearch";
/* import { Suspense } from "react";
import { BlogsPostsSkeleton } from "@/src/components/skeletons";
 */
export default async function BlogPage({ searchParams }) {
  const queryParam = searchParams?.search || "";
  /* return (
    <div className="mt-32 min-h-[80vh]">
      <InputSearch query={"search"} placeHolder={"Busca noticia"} />
      <Suspense key={searchParams} fallback={<BlogsPostsSkeleton />}>
        <BlogPost query={queryParam} />
      </Suspense>
    </div>
  ); */
  return (
    <div className="mt-32 min-h-[80vh]">
      <InputSearch query={"search"} placeHolder={"Busca noticia"} />
      <BlogPost query={queryParam} />
    </div>
  );
}
