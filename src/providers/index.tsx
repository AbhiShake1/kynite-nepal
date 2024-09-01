"use client"

import { QueryClient, QueryClientProvider } from "react-query"
import { PrismicProvider } from "./prismic-provider"

const queryClient = new QueryClient()

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <PrismicProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </PrismicProvider>
  )
}
