import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// Mock product data - in a real app this would come from your data source
const product = {
  id: 1,
  name: "Premium Kyanite Specimen",
  price: "$89.99",
  image: "https://t4.ftcdn.net/jpg/06/09/51/79/360_F_609517985_tzJD0C3LmZDrHJlayickpoW7WiqlJ6UQ.jpg",
  description: "This is a stunning example of premium kyanite from the mines of Nepal. With its vibrant blue coloration and excellent crystal formation, this specimen is perfect for collectors and those interested in the metaphysical properties of kyanite.",
  details: [
    "Origin: Nepal",
    "Dimensions: 4.5 x 2.3 x 1.7 inches",
    "Weight: 185g",
    "Crystal Formation: Excellent",
    "Color: Deep Blue",
  ],
  category: "Specimen",
  healingProperties: [
    "Promotes tranquility and inner calm",
    "Assists in meditation practices",
    "Helps align the chakras",
    "Encourages expression of truth",
  ],
};

const ProductDetailPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-blue-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/shop" className="text-blue-600 dark:text-cyan-300 hover:underline flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Shop
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-200/30 to-cyan-200/30 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-3xl p-8 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="object-contain max-h-[500px] rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Featured
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4">
              <Badge variant="outline" className="bg-blue-50/50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                {product.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-300">
                {product.price}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {product.description}
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Healing Properties</h3>
                <ul className="space-y-2">
                  {product.healingProperties.map((property, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">{property}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white h-12 text-lg">
                Add to Cart
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 dark:border-cyan-500 dark:text-cyan-300 h-12">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Add to Wishlist
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <Card 
                key={id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-white/70 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="https://t3.ftcdn.net/jpg/06/57/09/60/360_F_657096022_4I2KlZXpuXkNjHwk9CpFiLDh1XDErAwL.jpg"
                    alt={`Product ${id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                      Similar Kyanite Stone {id}
                    </CardTitle>
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                      ${60 + id * 15}.99
                    </span>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                    Beautiful blue kyanite with excellent crystal formation
                  </CardDescription>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;