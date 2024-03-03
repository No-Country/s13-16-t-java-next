import Post from "./Post";
import { getPublication } from "@/src/lib/api";

export default async function PostIntermediaryLayer({ param }) {
  const post = await getPublication(param.id);
  return <Post post={post} post_id={param.id} />;
}
