import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PrismicRichText, SliceZone } from "@prismicio/react"
import Image from "next/image"
import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { PrismicNextImage } from "@prismicio/next"

const products = [
  {
    title: "Ethical Sourcing",
    desc: "We responsibly source our kyanite and gemstones from local Nepalese mines."
  },
  {
    title: "Expert Craftsmanship",
    desc: "Our skilled artisans combine traditional techniques with modern technology."
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous quality control ensures each piece meets our high standards."
  }
]

export default async function Page() {
  const client = createClient()

  const home = await client.getSingle("home")

  return <>
    <SliceZone slices={home.data.slices} components={components} />
    <FeaturedProducts />
    <section className="w-full py-12 md:py-24 lg:py-32 backdrop-blur-sm bg-blue-500/10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-blue-900">
          Manufacturing Capabilities
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 backdrop-blur-md bg-white/30 rounded-xl">
              <Image
                alt={`${item.title} Icon`}
                className="mx-auto mb-4"
                height="64"
                src={`/placeholder.svg?height=64&width=64&text=${item.title.replace(' ', '+')}`}
                width="64"
              />
              <h3 className="text-xl font-bold mb-2 text-blue-900">{item.title}</h3>
              <p className="text-blue-700">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
}

async function FeaturedProducts() {
  const client = createClient()

  const products = await client.getAllByType("product", {
    limit: 3,
    filters: [],
  })

  if (products.length === 0) return null

  return <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-blue-900">Featured Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(({ data: { title, description, image } }, i) => (
          <Card key={i} className="backdrop-blur-md bg-white/30 border-white/20 overflow-hidden">
            <CardContent className="p-4">
              <PrismicNextImage field={image} />
              <h3 className="text-lg font-bold mt-2 text-blue-900">
                <PrismicRichText field={title} />
              </h3>
              <p className="text-sm text-blue-700">
                <PrismicRichText field={description} />
              </p>
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
}
