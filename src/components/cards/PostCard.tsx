import Link from "next/link";


export interface iPostData {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export const PostCard = ({ data }: { data: iPostData }) => {
  const { title, body, id } = data;

  return (
    <article className="flex max-w-xl flex-col items-start justify-between border border-gray-200 p-2">
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/posts/${id}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{body}</p>
      </div>
    </article>
  )
}
