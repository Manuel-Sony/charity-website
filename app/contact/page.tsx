import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us - Charity Foundation",
  description: "Get in touch with our team for inquiries, partnerships, or to learn more about our work.",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-accent py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Email Us</h3>
              <p className="text-gray-600 mb-4">For general inquiries or information about our programs.</p>
              <a href="mailto:info@charityfoundation.org" className="text-primary hover:underline font-medium">
                info@charityfoundation.org
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team about donations or volunteering.</p>
              <a href="tel:+1234567890" className="text-primary hover:underline font-medium">
                +1 (234) 567-890
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our headquarters is located in the heart of the city.</p>
              <address className="not-italic text-primary">
                123 Charity Street
                <br />
                New York, NY 10001
                <br />
                United States
              </address>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Office Hours</h3>
              <p className="text-gray-600 mb-4">Our team is available during the following hours.</p>
              <p className="text-primary">
                Monday - Friday
                <br />
                9:00 AM - 5:00 PM EST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We value your feedback and
                inquiries.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter your first name" className="rounded-lg" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" className="rounded-lg" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="rounded-lg" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" className="rounded-lg" />
                </div>

                <div className="space-y-2">
                  <Label>Inquiry Type</Label>
                  <Select>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select your inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="donation">Donation Information</SelectItem>
                      <SelectItem value="volunteer">Volunteering</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="media">Media Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="rounded-lg min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full rounded-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Location</h2>
              <p className="text-gray-600 mb-8">
                Visit our headquarters to learn more about our work and how you can get involved.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-gray-200">
                {/* This would be replaced with an actual map component in a real implementation */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500">Interactive Map Would Be Here</p>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Directions</h3>
                <p className="text-gray-600 mb-4">
                  Our office is conveniently located near public transportation and is easily accessible by car.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Subway: Take the A, C, or E train to 34th Street-Penn Station</li>
                  <li>• Bus: M34 or M20 bus to 34th Street</li>
                  <li>• Parking: Available in nearby garages on 33rd and 35th Streets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our organization, donations, and volunteering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How can I donate to your organization?</h3>
              <p className="text-gray-600">
                You can donate online through our secure donation page, by mail, or by phone. We accept various payment
                methods including credit cards, PayPal, and bank transfers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Is my donation tax-deductible?</h3>
              <p className="text-gray-600">
                Yes, all donations to Charity Foundation are tax-deductible to the extent allowed by law. You will
                receive a receipt for your donation that can be used for tax purposes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How can I volunteer with your organization?</h3>
              <p className="text-gray-600">
                You can apply to volunteer through our volunteer page. We offer various opportunities both locally and
                internationally, depending on your skills and availability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How is my donation used?</h3>
              <p className="text-gray-600">
                Your donation directly supports our programs and initiatives around the world. We are committed to
                transparency and publish annual reports detailing how funds are allocated.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="rounded-full">
              <a href="/faq">View All FAQs</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

