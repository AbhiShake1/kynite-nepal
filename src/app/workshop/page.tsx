"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <main className="flex-1 py-6 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900 mb-4 text-center">Book a Workshop Tour</h1>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-blue-800 leading-7">
              Experience the magic of kyanite jewelry-making firsthand. Our guided tours offer a unique opportunity to see our skilled artisans at work and learn about the intricate process of creating our beautiful pieces.
            </p>
            <h2 className="text-2xl font-semibold text-blue-900 mt-6">What to Expect</h2>
            <ul className="list-disc list-inside text-blue-800 leading-7 space-y-2">
              <li>A warm welcome from our team</li>
              <li>An overview of kyanite and its properties</li>
              <li>Demonstration of traditional jewelry-making techniques</li>
              <li>Opportunity to see our artisans at work</li>
              <li>Q&A session with our master craftsmen</li>
              <li>Exclusive discount on purchases made after the tour</li>
            </ul>
            <Card className="backdrop-blur-md bg-white/30 border-white/20 overflow-hidden mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Tour Details</h3>
                <p className="text-blue-800 leading-7">
                  Tours are available Monday through Friday, from 10:00 AM to 4:00 PM. Each tour lasts approximately 1 hour and is limited to 10 participants to ensure a personalized experience.
                </p>
                <p className="text-blue-800 leading-7 mt-2">
                  Price: $20 per person (Redeemable as a discount on purchases over $100)
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="backdrop-blur-md bg-white/30 border-white/20 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-900">Book Your Tour</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="john.doe@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="participants">Number of Participants</Label>
                  <Select>
                    <SelectTrigger id="participants">
                      <SelectValue placeholder="Select number of participants" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Special Requests or Questions</Label>
                  <Textarea id="message" placeholder="Enter any special requests or questions here" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book Tour</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
