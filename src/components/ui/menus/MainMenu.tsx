'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface iMainMenu {
  title: string,
  href: string,
}

export const mainMenuPages: iMainMenu[] = [
  { title: "Home", href: '/' },
  { title: "About", href: '/about' },
  { title: "Authors", href: '/authors' },
];

export const MainMenu = () => {
  const pathname = usePathname();

  return (
    <>
      { mainMenuPages ? mainMenuPages.map(({ title, href }) => {
        return (
          <Link key={href} href={href} className={`ml-3 ${href == pathname ? 'font-bold underline pointer-events-none' : ''}`}>
            {title}
          </Link>
        )
      }) : null }
    </>
  )
}
