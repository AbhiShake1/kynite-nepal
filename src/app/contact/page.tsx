"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
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
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Have questions about our kyanite collection or need assistance with an order?
            Our team is here to help you find the perfect specimen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/70 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl overflow-hidden h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Kathmandu, Nepal</p>
                    <p className="text-gray-600 dark:text-gray-300">In the heart of the Himalayas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-100 dark:bg-cyan-900/50 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@kynitenepal.com</p>
                    <p className="text-gray-600 dark:text-gray-300">sales@kynitenepal.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+977 123 456 789</p>
                    <p className="text-gray-600 dark:text-gray-300">Available 9AM - 5PM (NPT)</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                      <span className="text-gray-800 dark:text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                      <span className="text-gray-800 dark:text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                      <span className="text-gray-800 dark:text-white">Closed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white/70 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-white/50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-white/50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="bg-white/50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Your inquiry about..."
                      className="bg-white/50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      className="bg-white/50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consent"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      I agree to the processing of my personal data
                    </label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our kyanite collection and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I care for my kyanite specimen?",
                answer: "Kyanite is a relatively hard mineral but should be stored away from harder stones to prevent scratching. Clean with warm soapy water and a soft brush."
              },
              {
                question: "What are the healing properties of kyanite?",
                answer: "Kyanite is known for its calming energy, ability to align chakras, and support meditation practices. It's also believed to facilitate communication and clarity."
              },
              {
                question: "Where is your kyanite sourced?",
                answer: "All our kyanite specimens are ethically sourced from mines in the Himalayan region of Nepal, ensuring authenticity and supporting local communities."
              },
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we ship worldwide with tracking and insurance. Shipping costs and delivery times vary by destination."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
              >
                <Card className="bg-white/70 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl overflow-hidden h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800 dark:text-white">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
