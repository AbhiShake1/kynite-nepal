import { Header } from "./header"
import { Footer } from "./footer"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 overflow-y-hidden" style={{ colorScheme: "light" }}>
      <Header />
      <section className="justify-center items-center w-full flex flex-col items-center py-8">
        {children}
      </section>
      <Footer />
    </main>
  )
}
