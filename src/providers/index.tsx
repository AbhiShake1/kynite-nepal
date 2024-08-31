"use client"

import { PrismicProvider } from "./prismic-provider"

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <PrismicProvider>
      {children}
    </PrismicProvider>
  )
}
