import { getAuthorAction } from "@/actions/getAuthorAction";
import Link from "next/link";
import { notFound } from "next/navigation";

export const AuthorView = async ({ id }: { id: string }) => {
  const author = await getAuthorAction(id); // get current author (from pathname params)

  if (!author) {
    notFound(); // 404 when no author
  }

  return (
    <div>
      <h1 className="font-bold text-3xl uppercase">{author.name}</h1>

      <div className="mt-2 pt-2 border-t border-gray-200">
        <div>username: {author.username}</div>
        <div>email: {author.email}</div>
      </div>

      <div className="mt-10">
        <Link href="/authors/" className="underline">All authors</Link>
      </div>
    </div>
  )
}
