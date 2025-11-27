"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Premium Kyanite Specimen",
    price: "$89.99",
    image: "https://t4.ftcdn.net/jpg/06/09/51/79/360_F_609517985_tzJD0C3LmZDrHJlayickpoW7WiqlJ6UQ.jpg",
    description: "A beautiful blue kyanite specimen with excellent crystal formation",
    category: "Specimen",
    featured: true
  },
  {
    id: 2,
    name: "Raw Kyanite Crystal",
    price: "$59.99",
    image: "https://t3.ftcdn.net/jpg/06/57/09/60/360_F_657096022_4I2KlZXpuXkNjHwk9CpFiLDh1XDErAwL.jpg",
    description: "Raw kyanite crystal with natural edges and vibrant blue color",
    category: "Raw Stone",
    featured: false
  },
  {
    id: 3,
    name: "Blue Kyanite Healing Stone",
    price: "$74.99",
    image: "https://cdn.articlefiesta.com/rep/d57c81e8c39e4eb099d4020d953353c9.png",
    description: "Carefully selected kyanite stone for healing and meditation practices",
    category: "Healing",
    featured: true
  },
  {
    id: 4,
    name: "Kyanite Quartz Specimen",
    price: "$109.99",
    image: "https://cdn11.bigcommerce.com/s-v1jc6q/product_images/uploaded_images/a-professional-jeweller-looking-at-kyanite-stones.png",
    description: "Unique kyanite and quartz combination specimen",
    category: "Specimen",
    featured: false
  },
  {
    id: 5,
    name: "Natural Kyanite Slice",
    price: "$44.99",
    image: "https://i.redd.it/bxfa639l68rb1.jpg",
    description: "Thin slice of natural kyanite showing beautiful crystal structure",
    category: "Slice",
    featured: false
  },
  {
    id: 6,
    name: "Kyanite Raw Mineral",
    price: "$67.99",
    image: "https://i.pinimg.com/736x/44/b7/46/44b746c1bbc5377fa41f1246fca4292f.jpg",
    description: "High quality raw kyanite mineral from Nepalese mines",
    category: "Raw Stone",
    featured: true
  },
];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-blue-900 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300 mb-4">
            Kyanite Collection
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Discover our carefully curated selection of authentic Nepalese kyanite stones
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
              Ethically Sourced
            </Badge>
            <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200">
              Premium Quality
            </Badge>
            <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200">
              Hand Selected
            </Badge>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full flex flex-col bg-white/70 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl">
                {product.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500">Featured</Badge>
                  </div>
                )}
                <CardHeader className="p-0">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                      {product.name}
                    </CardTitle>
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                      {product.price}
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Badge variant="outline" className="bg-blue-50/50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                      {product.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/shop/${product.id}`} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
