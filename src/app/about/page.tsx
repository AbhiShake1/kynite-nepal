"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-blue-900 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300 mb-6">
            Our Story
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Kyanite Nepal is dedicated to bringing you the finest quality kyanite gems directly from the mines of Nepal.
            Our journey began with a passion for these beautiful blue stones and their unique properties.
          </p>
          <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full p-0.5">
            <div className="bg-white dark:bg-gray-900 rounded-full px-6 py-3 text-sm font-medium text-blue-700 dark:text-blue-300">
              Ethically Sourced • Premium Quality • Hand Selected
            </div>
          </div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              At Kyanite Nepal, our mission is to connect people with the authentic beauty and healing properties of kyanite stones from the Himalayan region. We believe in sustainable practices and ethical sourcing that benefits local communities.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Each piece in our collection is carefully selected for its quality, beauty, and energetic properties, ensuring that our customers receive only the finest specimens.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2">
                Ethical Mining
              </Badge>
              <Badge className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 px-4 py-2">
                Quality Assurance
              </Badge>
              <Badge className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 px-4 py-2">
                Community Support
              </Badge>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-200/30 to-cyan-200/30 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-3xl p-8 flex items-center justify-center">
            <Image
              src="https://cdn.articlefiesta.com/rep/d57c81e8c39e4eb099d4020d953353c9.png"
              alt="Kyanite specimen"
              width={500}
              height={500}
              className="object-contain rounded-xl shadow-xl"
            />
          </div>
        </motion.div>

        {/* Why Kyanite */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              The Beauty of Kyanite
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kyanite is a strikingly beautiful mineral known for its vibrant blue color and unique crystal structure.
              It is primarily found in metamorphic rocks and is particularly abundant in the Himalayan region of Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/70 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-300 text-xl">💎</span>
                </div>
                <CardTitle className="text-gray-800 dark:text-white">Natural Beauty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Each kyanite specimen is unique, with natural variations in color, pattern, and crystal formation that make it one-of-a-kind.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mb-4">
                  <span className="text-cyan-600 dark:text-cyan-300 text-xl">🧘</span>
                </div>
                <CardTitle className="text-gray-800 dark:text-white">Healing Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Kyanite is known for its calming energy, ability to align chakras, and support meditation practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4">
                  <span className="text-indigo-600 dark:text-indigo-300 text-xl">🏔️</span>
                </div>
                <CardTitle className="text-gray-800 dark:text-white">Authentic Origin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our kyanite comes directly from the mountains of Nepal, ensuring authenticity and quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Our Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our Ethical Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We maintain strict ethical standards throughout our sourcing and production process.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400 transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12 md:space-y-0 relative">
              {[
                {
                  step: 1,
                  title: "Sustainable Mining",
                  description: "We partner with local mining communities in Nepal, ensuring sustainable practices that protect the environment and provide fair compensation."
                },
                {
                  step: 2,
                  title: "Careful Selection",
                  description: "Each piece is hand-selected for quality, beauty, and authenticity by our expert team."
                },
                {
                  step: 3,
                  title: "Quality Processing",
                  description: "We maintain the natural beauty of each specimen while preparing it for our customers."
                },
                {
                  step: 4,
                  title: "Secure Shipping",
                  description: "Your kyanite is carefully packaged and shipped with tracking to ensure safe delivery."
                }
              ].map((item, index) => (
                <div
                  key={item.step}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 relative`}
                >
                  <div className="md:w-1/2">
                    <Card className="bg-white/70 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold mr-4">
                          {item.step}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </Card>
                  </div>
                  <div className="md:w-1/2 flex justify-center relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Experience Authentic Kyanite
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Discover the unique beauty and healing properties of kyanite from the mines of Nepal.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Explore Collection
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
