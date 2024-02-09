import { UserCard, iUserData } from "../cards/UserCard"

export const AuthorsList = ({ authors }: { authors: iUserData[] | null | undefined}) => {

  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl uppercase">All authors</h2>
      </div>
      <div className="mt-2 grid max-w-2xl grid-cols-1 gap-8 border-t border-gray-200 pt-10 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        { authors && authors.length ? authors.map((author) => <UserCard key={author.id} data={author} />) : (
          'No authors...'
        ) }
      </div>
    </div>
  )
}
