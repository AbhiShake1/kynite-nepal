import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Component() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                  Discover the Beauty of Kyanite
                </h1>
                <p className="max-w-[600px] text-primary-foreground md:text-xl">
                  Exquisite jewelry crafted with the finest Nepalese kyanite and precious gemstones.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary">Shop Now</Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <Image
              alt="Featured Kyanite"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="550"
              src="/placeholder.svg?height=550&width=400"
              width="400"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">About Us</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
            Kyanite Nepal is a premier manufacturer and retailer of high-quality kyanite and gemstone jewelry. With
            decades of experience, we combine traditional Nepalese craftsmanship with modern design to create unique,
            stunning pieces that capture the essence of Nepal's natural beauty.
          </p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <Image
                    alt={`Featured Product ${i}`}
                    className="aspect-square object-cover w-full rounded-lg"
                    height="300"
                    src={`/placeholder.svg?height=300&width=300&text=Product+${i}`}
                    width="300"
                  />
                  <h3 className="text-lg font-bold mt-2">Kyanite {["Necklace", "Earrings", "Bracelet"][i - 1]}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Handcrafted with genuine Nepalese kyanite
                  </p>
                  <Button className="w-full mt-4">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Manufacturing Capabilities
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Image
                alt="Sourcing Icon"
                className="mx-auto mb-4"
                height="64"
                src="/placeholder.svg?height=64&width=64&text=Sourcing"
                width="64"
              />
              <h3 className="text-xl font-bold mb-2">Ethical Sourcing</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We responsibly source our kyanite and gemstones from local Nepalese mines.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                alt="Crafting Icon"
                className="mx-auto mb-4"
                height="64"
                src="/placeholder.svg?height=64&width=64&text=Crafting"
                width="64"
              />
              <h3 className="text-xl font-bold mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our skilled artisans combine traditional techniques with modern technology.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                alt="Quality Icon"
                className="mx-auto mb-4"
                height="64"
                src="/placeholder.svg?height=64&width=64&text=Quality"
                width="64"
              />
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Rigorous quality control ensures each piece meets our high standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
