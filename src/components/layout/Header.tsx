import Link from "next/link"
import { MainMenu } from "../ui/menus/MainMenu"


export const Header = () => {

  return (
    <header className="header py-2">
      <div className="sm:max-w-xl lg:max-w-3xl w-full mx-auto px-4 sm:px-0">
        <div className="flex items-center">
          <div className="logo">
            <Link href="/" className="text-2xl font-bold">My APP</Link>
          </div>
          <div className="menu ml-auto">
            <MainMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
