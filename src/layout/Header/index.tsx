"use client"
import { usePathname } from "next/navigation";
import LinkHeader from "./LinkHeader"
import Link from "next/link";

export default function Header() {
  const linksList = [
    {
      href:"/dashboard",
      children: "Administrar",
    },
    {
      href: "/trends",
      children: "Tendencias"
    },
    {
      href:"/categories",
      children: "Categorías"
    }
  ]
  const pathname = usePathname();
  const fromUrl = pathname === "/" && "bg-slate-900 text-white";
  return (
    <header className={`${fromUrl} flex justify-between items-center p-2`}>
      <h1 className="font-bold" title="Ir a la página principal">
        <Link href="/">My Stand</Link>
      </h1>
      <ul className="flex p-2 gap-2">
        {linksList.map(({href, children}) => (
          <ul key={href}>
            <LinkHeader href={href}>{children}</LinkHeader>
          </ul>
        ))}
      </ul>
    </header>
  )
}
