import { SliceZone } from "@prismicio/react"
import Image from "next/image"
import { createClient } from "@/prismicio"
import { components } from "@/slices"

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

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
