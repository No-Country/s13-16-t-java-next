import BlogPost from "../../components/BlogPost";
import InputSearch from "../../components/InputSearch";
import { Suspense } from "react";
import { BlogsPostsSkeleton } from "@/src/components/skeletons";

export default async function BlogPage({ searchParams }) {
  const queryParam = searchParams?.search || "";
  return (
    <>
      <InputSearch query={"search"} placeHolder={"Busca noticia"} />
      <Suspense key={searchParams} fallback={<BlogsPostsSkeleton />}>
        <BlogPost query={queryParam} />
      </Suspense>
    </>
  );
}
