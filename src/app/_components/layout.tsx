import { Header } from "./header"
import { Footer } from "./footer"
import { motion } from "motion/react"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-blue-900 overflow-x-hidden">
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow justify-center items-center w-full flex flex-col py-8 px-4"
      >
        {children}
      </motion.section>
      <Footer />
    </main>
  )
}
