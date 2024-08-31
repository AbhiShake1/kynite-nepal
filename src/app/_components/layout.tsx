import { Header } from "./header"
import { Footer } from "./footer"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
