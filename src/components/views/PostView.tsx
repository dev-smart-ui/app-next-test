import { getAuthorAction } from "@/actions/getAuthorAction";
import { getPostAction } from "@/actions/getPostAction";
import Link from "next/link";
import { notFound } from "next/navigation";

export const PostView = async ({ id }: { id: string }) => {
  const post = await getPostAction(id); // get current post (from pathname params)

  if (!post) {
    notFound(); // 404 when no post
  }

  const author = await getAuthorAction(post.userId); // if posts exists - find author who own it

  return (
    <div>
      <h1 className="font-bold text-3xl uppercase">{post.title}</h1>
      <div className="mt-2 pt-12 border-t border-gray-200">
        {post.body}
      </div>

      { author ? (
        <div className="mt-12 pt-2 border-t border-gray-200">
          <span className="inline-block mr-2">Author: </span>
          <Link href={`/authors/${author.id}`} className="font-bold">{author.name}</Link>
        </div>
      ) : null }
    </div>
  )
}
