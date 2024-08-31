import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Kyanite Nepal. All rights reserved.</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Terms of Service
      </a>
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Privacy
      </a>
    </nav>
    <div className="flex gap-4">
      <a href="#" className="text-gray-500 hover:text-primary">
        <Facebook className="h-5 w-5" />
      </a>
      <a href="#" className="text-gray-500 hover:text-primary">
        <Instagram className="h-5 w-5" />
      </a>
      <a href="#" className="text-gray-500 hover:text-primary">
        <Twitter className="h-5 w-5" />
      </a>
    </div>
  </footer>
}
