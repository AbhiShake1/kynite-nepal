"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"
import Link from "next/link"

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  return <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-lg bg-white/70 dark:bg-blue-950/70 border-b border-blue-200/30 dark:border-blue-800/50 sticky top-0 z-50">
    <Link className="flex items-center justify-center" href="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center"
      >
        <Image
          src="https://www.gemselect.com/graphics/kyanite-gem-large_info1.jpg"
          alt="Nepal"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Kyanite Nepal
        </span>
      </motion.div>
    </Link>
    <nav className="ml-auto flex gap-6 text-primary">
      {links.map((link) => (
        <motion.div
          key={link.name}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            className={cn("text-base font-medium hover:text-blue-600 dark:hover:text-cyan-300 transition-colors", {
              "text-blue-700 dark:text-cyan-300": pathname === link.href,
            })}
            href={link.href}
          >
            {link.name}
          </Link>
        </motion.div>
      ))}
    </nav>
  </header>
}
