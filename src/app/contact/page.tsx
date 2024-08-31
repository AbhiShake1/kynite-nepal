import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Component() {
  return (
    <main className="flex-1 py-6 h-[85vh] flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900 mb-4">Contact Us</h1>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-blue-800 leading-7">
              We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or want to learn more about our workshop tours, our team is here to help.
            </p>
            <Card className="backdrop-blur-md bg-white/30 border-white/20 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-700" />
                    <span className="text-blue-800">123 Jewelry Lane, Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-blue-700" />
                    <span className="text-blue-800">+977 1 234 5678</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-blue-700" />
                    <span className="text-blue-800">info@kyanitenepal.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/30 border-white/20 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-900">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-blue-800">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-blue-800">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-blue-800">Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <Card className="backdrop-blur-md bg-white/30 border-white/20 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-900">Send Us a Message</CardTitle>
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
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="order">Order Status</SelectItem>
                      <SelectItem value="product">Product Information</SelectItem>
                      <SelectItem value="tour">Workshop Tour</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message here" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
