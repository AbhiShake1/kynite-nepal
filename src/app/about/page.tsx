import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="container px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900 mb-4">About Kyanite Nepal</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-blue-800 leading-7">
            Kyanite Nepal is a premier manufacturer and retailer of high-quality kyanite and gemstone jewelry. Founded in 1995 in the heart of Kathmandu, we have been crafting exquisite pieces that capture the essence of Nepal&apos;s natural beauty for over two decades.
          </p>
          <p className="text-blue-800 leading-7">
            Our journey began with a passion for the stunning blue kyanite found in the Himalayan mountains. Today, we combine traditional Nepalese craftsmanship with modern design to create unique, stunning pieces that are worn and cherished around the world.
          </p>
          <h2 className="text-2xl font-semibold text-blue-900 mt-6">Our Mission</h2>
          <p className="text-blue-800 leading-7">
            At Kyanite Nepal, our mission is to showcase the beauty of Nepalese gemstones while supporting local communities and promoting sustainable practices in the jewelry industry. We are committed to:
          </p>
          <ul className="list-disc list-inside text-blue-800 leading-7 space-y-2">
            <li>Ethically sourcing our materials from local mines</li>
            <li>Providing fair wages and safe working conditions for our artisans</li>
            <li>Preserving traditional Nepalese jewelry-making techniques</li>
            <li>Innovating in design to create modern, wearable art</li>
          </ul>
        </div>
        <Card className="backdrop-blur-md bg-white/30 border-white/20 overflow-hidden">
          <CardContent className="p-6">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Kyanite+Nepal+Workshop"
              alt="Kyanite Nepal Workshop"
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Our Craftsmanship</h3>
            <p className="text-blue-800 leading-7">
              Every piece of jewelry from Kyanite Nepal is a testament to the skill and dedication of our master craftsmen. Using techniques passed down through generations, our artisans carefully select each stone, cut and polish it to perfection, and set it in designs that highlight its natural beauty.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Commitment to Quality</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Ethical Sourcing",
              description: "We work directly with local miners to ensure fair practices and sustainable extraction of kyanite and other gemstones."
            },
            {
              title: "Expert Craftsmanship",
              description: "Our team of skilled artisans combines traditional techniques with modern technology to create pieces of unparalleled quality."
            },
            {
              title: "Customer Satisfaction",
              description: "We stand behind every piece we create, offering a lifetime guarantee on all our jewelry."
            }
          ].map((item, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/30 border-white/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-blue-800">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Visit Our Workshop</h2>
        <p className="text-blue-800 mb-6">
          Experience the magic of kyanite jewelry-making firsthand. We offer guided tours of our workshop in Kathmandu.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
          <Link href="/workshop">
            Book a Tour
          </Link>
        </Button>
      </div>
    </div>
  )
}
