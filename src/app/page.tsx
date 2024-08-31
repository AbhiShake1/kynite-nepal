import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

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

export default function Component() {
  return <>
    <section className="py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6"> <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900">
              Discover the Beauty of Kyanite
            </h1>
            <p className="max-w-[600px] text-blue-800 md:text-xl">
              Exquisite jewelry crafted with the finest Nepalese kyanite and precious gemstones.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Shop Now</Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
              Learn More
            </Button>
          </div>
        </div>
        <div className="backdrop-blur-md bg-white/30 rounded-xl p-2">
          <Image
            alt="Featured Kyanite Necklace"
            className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center sm:w-full lg:order-last"
            height="550"
            src="/placeholder.svg?height=550&width=400"
            width="400"
          />
        </div>
      </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 backdrop-blur-sm bg-blue-500/10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-blue-900">About Us</h2>
        <p className="mx-auto max-w-[700px] text-blue-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
          Kyanite Nepal is a premier manufacturer and retailer of high-quality kyanite and gemstone jewelry. With
          decades of experience, we combine traditional Nepalese craftsmanship with modern design to create unique,
          stunning pieces that capture the essence of Nepal's natural beauty.
        </p>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-blue-900">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="backdrop-blur-md bg-white/30 border-white/20 overflow-hidden">
              <CardContent className="p-4">
                <Image
                  alt={`Featured Product ${i}`}
                  className="aspect-square object-cover w-full rounded-lg"
                  height="300"
                  src={`/placeholder.svg?height=300&width=300&text=Product+${i}`}
                  width="300"
                />
                <h3 className="text-lg font-bold mt-2 text-blue-900">Kyanite {["Necklace", "Earrings", "Bracelet"][i - 1]}</h3>
                <p className="text-sm text-blue-700">
                  Handcrafted with genuine Nepalese kyanite
                </p>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
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
