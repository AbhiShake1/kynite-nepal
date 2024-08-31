import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/20 backdrop-blur-sm bg-white/30">
    <p className="text-xs text-blue-800">© 2023 Kyanite Nepal. All rights reserved.</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <a className="text-xs hover:text-blue-700 transition-colors" href="#">
        Terms of Service
      </a>
      <a className="text-xs hover:text-blue-700 transition-colors" href="#">
        Privacy
      </a>
    </nav>
    <div className="flex gap-4">
      <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
        <Facebook className="h-5 w-5" />
      </a>
      <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
        <Instagram className="h-5 w-5" />
      </a>
      <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
        <Twitter className="h-5 w-5" />
      </a>
    </div>
  </footer>
}
