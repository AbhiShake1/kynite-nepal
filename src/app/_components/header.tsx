"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  return <header className="px-4 lg:px-6 h-14 flex items-center backdrop-blur-sm bg-white/30 border-b border-white/20 sticky top-0 z-50">
    <a className="flex items-center justify-center" href="#">
      <Image
        src="/placeholder.svg?height=40&width=40"
        alt="Nepal"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="ml-2 text-2xl font-bold text-blue-900">Kyanite Nepal</span>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6 text-primary">
      {links.map((link) => (
        <a
          key={link.name}
          className={cn("text-sm font-medium hover:text-blue-700 transition-colors", {
            "text-blue-700": pathname === link.href,
          })}
          href={link.href}
        >
          {link.name}
        </a>
      ))}
    </nav>
  </header>
}
