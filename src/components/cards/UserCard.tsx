import Link from "next/link"


export interface iUserData {
  id: number,
  name: string,
  username: string,
  email: string,
}

export const UserCard = ({ data }: { data: iUserData }) => {
  const { name, username, email, id } = data;

  return (
    <article className="flex max-w-xl flex-col items-start justify-between border border-gray-200 p-2">
      <div className="group relative">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/authors/${id}`}>
            <span className="absolute inset-0" />
            {name}
          </Link>
        </h3>
      </div>
    </article>
  )
}
