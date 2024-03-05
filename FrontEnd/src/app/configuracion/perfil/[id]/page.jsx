
import ConfigurationProfile from "@/src/components/configuracion/ConfigurationProfile";
import { getCategories, getProfile } from "@/src/lib/api";

export  default async function ConfigurationPage({params}) {
  const categories = await getCategories();
  const profile = await getProfile(params.id);
 
  return <ConfigurationProfile categories={categories} profile={profile} />;
}
