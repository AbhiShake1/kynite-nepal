"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Facebook, Instagram, Twitter, Menu, X, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  { id: 1, name: "Kyanite Pendant Necklace", price: 129.99, category: "Necklaces" },
  { id: 2, name: "Kyanite Stud Earrings", price: 79.99, category: "Earrings" },
  { id: 3, name: "Kyanite Tennis Bracelet", price: 199.99, category: "Bracelets" },
  { id: 4, name: "Kyanite and Diamond Ring", price: 299.99, category: "Rings" },
  { id: 5, name: "Kyanite Drop Earrings", price: 89.99, category: "Earrings" },
  { id: 6, name: "Kyanite Bangle", price: 149.99, category: "Bracelets" },
  { id: 7, name: "Kyanite Choker Necklace", price: 109.99, category: "Necklaces" },
  { id: 8, name: "Kyanite Cocktail Ring", price: 179.99, category: "Rings" },
  { id: 9, name: "Kyanite Anklet", price: 69.99, category: "Anklets" },
]

export default function Page() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortOrder, setSortOrder] = useState("featured")

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const filteredProducts = products
    .filter(product =>
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortOrder === "price-asc") return a.price - b.price
      if (sortOrder === "price-desc") return b.price - a.price
      return 0 // featured
    })

  return (
    <main className="flex-1 py-6">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900 mb-4">Shop Our Collection</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64 backdrop-blur-md bg-white/30 p-4 rounded-lg">
            <div className="flex items-center justify-between md:hidden mb-4">
              <h2 className="text-lg font-semibold text-blue-900">Filters</h2>
              <Button variant="ghost" size="sm" onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}>
                {mobileFiltersOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
            <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Categories</h3>
              {['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Anklets'].map((category) => (
                <div key={category} className="flex items-center mb-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <label htmlFor={category} className="ml-2 text-sm text-blue-800">
                    {category}
                  </label>
                </div>
              ))}
              <h3 className="text-lg font-semibold text-blue-900 mt-4 mb-2">Price Range</h3>
              <Slider
                min={0}
                max={300}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-blue-800">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4 text-primary">
              <p className="text-sm text-blue-800">{filteredProducts.length} products</p>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="backdrop-blur-md bg-white/30 border-white/20 overflow-hidden">
                  <CardContent className="p-4">
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=${product.name.replace(/ /g, '+')}`}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold text-blue-900">{product.name}</h3>
                    <p className="text-blue-800">${product.price.toFixed(2)}</p>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">Add to Cart</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
