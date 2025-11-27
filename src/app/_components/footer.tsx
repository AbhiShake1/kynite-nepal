import { Facebook, Instagram, Twitter } from "lucide-react"
import { motion } from "motion/react"

export function Footer() {
  return <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-200/30 dark:border-blue-800/50 backdrop-blur-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-blue-900/50">
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-sm text-gray-600 dark:text-gray-400"
    >
      © {new Date().getFullYear()} Kyanite Nepal. All rights reserved.
    </motion.p>
    <nav className="sm:ml-auto flex flex-wrap gap-4 sm:gap-6 justify-center">
      <motion.a
        href="#"
        className="text-sm hover:text-blue-600 dark:hover:text-cyan-300 transition-colors text-gray-600 dark:text-gray-400"
        whileHover={{ y: -2 }}
      >
        Terms of Service
      </motion.a>
      <motion.a
        href="#"
        className="text-sm hover:text-blue-600 dark:hover:text-cyan-300 transition-colors text-gray-600 dark:text-gray-400"
        whileHover={{ y: -2 }}
      >
        Privacy
      </motion.a>
    </nav>
    <div className="flex gap-4">
      <motion.a
        href="#"
        className="text-blue-600 dark:text-cyan-300 hover:text-blue-800 dark:hover:text-cyan-200 transition-colors"
        whileHover={{ y: -3, scale: 1.1 }}
      >
        <Facebook className="h-5 w-5" />
      </motion.a>
      <motion.a
        href="#"
        className="text-blue-600 dark:text-cyan-300 hover:text-blue-800 dark:hover:text-cyan-200 transition-colors"
        whileHover={{ y: -3, scale: 1.1 }}
      >
        <Instagram className="h-5 w-5" />
      </motion.a>
      <motion.a
        href="#"
        className="text-blue-600 dark:text-cyan-300 hover:text-blue-800 dark:hover:text-cyan-200 transition-colors"
        whileHover={{ y: -3, scale: 1.1 }}
      >
        <Twitter className="h-5 w-5" />
      </motion.a>
    </div>
  </footer>
}
