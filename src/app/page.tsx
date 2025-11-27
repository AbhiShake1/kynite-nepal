"use client";

import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    title: "Premium Kyanite Specimen",
    link: "/shop/kyanite-specimen",
    thumbnail: "https://t4.ftcdn.net/jpg/06/09/51/79/360_F_609517985_tzJD0C3LmZDrHJlayickpoW7WiqlJ6UQ.jpg",
  },
  {
    title: "Raw Kyanite Crystal",
    link: "/shop/raw-kyanite",
    thumbnail: "https://t3.ftcdn.net/jpg/06/57/09/60/360_F_657096022_4I2KlZXpuXkNjHwk9CpFiLDh1XDErAwL.jpg",
  },
  {
    title: "Blue Kyanite Healing Stone",
    link: "/shop/healing-stone",
    thumbnail: "https://cdn.articlefiesta.com/rep/d57c81e8c39e4eb099d4020d953353c9.png",
  },
  {
    title: "Kyanite Quartz Specimen",
    link: "/shop/kyanite-quartz",
    thumbnail: "https://cdn11.bigcommerce.com/s-v1jc6q/product_images/uploaded_images/a-professional-jeweller-looking-at-kyanite-stones.png",
  },
  {
    title: "Natural Kyanite Slice",
    link: "/shop/natural-slice",
    thumbnail: "https://i.redd.it/bxfa639l68rb1.jpg",
  },
  {
    title: "Kyanite Raw Mineral",
    link: "/shop/raw-mineral",
    thumbnail: "https://i.pinimg.com/736x/44/b7/46/44b746c1bbc5377fa41f1246fca4292f.jpg",
  },
  {
    title: "Rare Blue Kyanite Specimen",
    link: "/shop/rare-specimen",
    thumbnail: "https://ae01.alicdn.com/kf/S3a97b1c9be8342dd955c0acb223432d8H/Amazing-Rare-Natural-Beautiful-Blue-Kyanite-Quartz-Crystal-Mineral-Specimen-Healing-Home-Office-Degaussing-Decorative-Energy.jpg",
  },
  {
    title: "Kyanite Crystal Stone",
    link: "/shop/crystal-stone",
    thumbnail: "https://ae01.alicdn.com/kf/Ha54ddfdcfb9d4c3a8e0aa7b801646a53e/kyanite-crystal-stone-Natural-rough-Mineral-sample-cyanite-quartz-raw-stone-Crystals-Healing-Chakra.jpg",
  },
  {
    title: "Aura Blue Kyanite",
    link: "/shop/aura-blue",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4_8vRxEqWtHLtXcHq4ItM5y7EMW86LRD5Q&usqp=CAU",
  },
  {
    title: "Home Decor Kyanite",
    link: "/shop/home-decor",
    thumbnail: "https://ae01.alicdn.com/kf/He4ea0cc2926a4b4ea58d01d1654aea3aG/Natural-Crystal-Gemstone-Raw-Healing-Stones-Aura-Blue-Kyanite-For-Home-Decoration.jpg",
  },
  {
    title: "Kyanite Raw Specimen",
    link: "/shop/raw-specimen",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVRtboHDkT-pFJ7kGCtY27qReDH4MyBfw6w&usqp=CAU",
  },
  {
    title: "Gemstone Quality Kyanite",
    link: "/shop/gemstone-quality",
    thumbnail: "https://5.imimg.com/data5/IOS/Default/2022/5/DM/MF/UN/97342625/product-jpeg-500x500.png",
  },
  {
    title: "Chakra Healing Kyanite",
    link: "/shop/chakra-healing",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigWX7q2f58I0dr4cyaWyoOpg9O__NikQUFIj2x3TTYco5d0KK32D9TR2eaWbWZ_9OhUo&usqp=CAU",
  },
  {
    title: "Mineral Collection Kyanite",
    link: "/shop/mineral-collection",
    thumbnail: "https://newmoonminerals.com/cdn/shop/files/1793637D-B141-43FD-8AE1-A997C728CEB3.jpg?v=1666375709&width=1500",
  },
  {
    title: "Premium Kyanite Piece",
    link: "/shop/premium-piece",
    thumbnail: "https://t3.ftcdn.net/jpg/05/85/49/20/360_F_585492007_SP71ZoBq5h6F7lG3Bv2NmErN2pJArIXc.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Crystal Collector",
    content: "The kyanite specimens from Kyanite Nepal are absolutely breathtaking. The color and clarity exceeded my expectations!",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Michael T.",
    role: "Meditation Practitioner",
    content: "Using kyanite from Nepal has enhanced my meditation practice. The stones have a calming energy that's palpable.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: 3,
    name: "Priya K.",
    role: "Healing Practitioner",
    content: "The quality of kyanite stones I received was exceptional. My clients love the beautiful specimens I use in sessions.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default async function Page() {
  const client = createClient();
  const home = await client.getSingle("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-blue-900 w-full overflow-x-hidden">
      {/* Hero Parallax Section */}
      <HeroParallax products={products} />

      {/* Additional Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-20">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300 mb-4">
            Discover the Beauty of Kyanite
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-2xl mx-auto">
            Experience the unique beauty and healing properties of authentic Nepalese kyanite stones.
            Each piece is carefully selected and ethically sourced.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10 sm:mb-16">
          <div className="bg-white/80 dark:bg-blue-900/50 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200/50 dark:border-blue-800/50">
            <div className="text-blue-600 dark:text-blue-300 text-2xl sm:text-3xl mb-3 sm:mb-4">💎</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">Authentic Origin</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Sourced directly from the Himalayan mines of Nepal, ensuring authenticity and quality.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-blue-900/50 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200/50 dark:border-blue-800/50">
            <div className="text-blue-600 dark:text-blue-300 text-2xl sm:text-3xl mb-3 sm:mb-4">✨</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">Healing Properties</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Kyanite is known for its calming energy and ability to align chakras.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-blue-900/50 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200/50 dark:border-blue-800/50">
            <div className="text-blue-600 dark:text-blue-300 text-2xl sm:text-3xl mb-3 sm:mb-4">🏔️</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">Ethical Sourcing</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We ensure fair trade practices and support local Nepalese communities.
            </p>
          </div>
        </div>

        <div className="text-center mb-10 sm:mb-20">
          <Link href="/shop">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-4 text-base sm:text-lg sm:px-8 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore Our Collection
            </Button>
          </Link>
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300 mb-3 sm:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience with our kyanite collection.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 dark:bg-blue-900/50 backdrop-blur-lg rounded-2xl p-4 sm:p-6 h-full border border-blue-200/50 dark:border-blue-800/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 flex items-center justify-center mr-3 sm:mr-4">
                      <span className="font-semibold text-blue-600 dark:text-blue-300 text-sm sm:text-base">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-300">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
                  <div className="flex mt-3 sm:mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-3xl p-6 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            Ready to Experience Kyanite?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto mb-6 sm:mb-8">
            Join thousands of satisfied customers who have discovered the beauty and healing properties of authentic Nepalese kyanite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/shop">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 text-sm sm:text-base sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Shop Now
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 dark:border-cyan-400 dark:text-cyan-300 px-6 py-3 text-sm sm:text-base sm:px-8 sm:py-4 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// export async function generateMetadata() {
//   const client = createClient();
//   const page = await client.getSingle("home");
//
//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }
