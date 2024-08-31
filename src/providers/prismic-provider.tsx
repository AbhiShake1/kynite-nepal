import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider as Provider } from "@prismicio/react"
import { repositoryName } from '@/prismicio'
import Link from "next/link"

export function PrismicProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Provider internalLinkComponent={p => <Link {...p} />}>
      <PrismicPreview repositoryName={repositoryName}>
        {children}
      </PrismicPreview>
    </Provider>
  )
}
