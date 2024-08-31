import Image from "next/image"

export function Header() {
  return <header className="px-4 lg:px-6 h-14 flex items-center">
    <a className="flex items-center justify-center" href="#">
      <Image
        src="/placeholder.svg?height=40&width=40"
        alt="Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="ml-2 text-2xl font-bold text-primary">Kyanite Nepal</span>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
        Home
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="/shop">
        Shop
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
        About
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
        Contact
      </a>
    </nav>
  </header>
}
