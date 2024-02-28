import FormCreatePost from "@/src/components/forms/FormPost/FormCreatePost";
import { getCategories } from "@/src/lib/api";

export default async function NuevoPost() {
  const categories = await getCategories();
  return (
    <>
      <FormCreatePost categories={categories} />
    </>
  );
}
