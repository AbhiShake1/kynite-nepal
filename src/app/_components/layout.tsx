import { Header } from "./header"
import { Footer } from "./footer"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <Header />
      <main className="justify-center items-center w-full flex flex-col items-center py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
