import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Award, Heart, Globe } from "lucide-react"
import { volunteerPageData } from "@/data/volunteer-data"

export const metadata = {
  title: "Volunteer - Charity Foundation",
  description: "Join our volunteer program and help make a difference in communities around the world.",
}

const iconMap = {
  Heart,
  Users,
  Award,
  Calendar,
  Clock,
  Globe,
}

export default function VolunteerPage() {
  const { hero, benefits, opportunities, process } = volunteerPageData

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-accent py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{hero.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">{hero.description}</p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Volunteer With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Volunteering with Charity Foundation is a rewarding experience that allows you to make a real difference
              in the lives of others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
              const bgColorClass = index === 0 ? "bg-primary/10" : index === 1 ? "bg-secondary/10" : "bg-accent/10"
              const iconColorClass = index === 0 ? "text-primary" : index === 1 ? "text-secondary" : "text-accent"

              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div
                    className={`${bgColorClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <IconComponent className={`h-8 w-8 ${iconColorClass}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Volunteer Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a variety of volunteer opportunities to match your skills, interests, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={opportunity.image || "/placeholder.svg"}
                    alt={opportunity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <ul className="space-y-2 mb-6">
                    {opportunity.details.map((detail, detailIndex) => {
                      const IconComponent = iconMap[detail.icon as keyof typeof iconMap]
                      return (
                        <li key={detailIndex} className="flex items-center">
                          <IconComponent className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-600">{detail.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                  <Button asChild className="w-full rounded-full">
                    <Link href="#volunteer-form">Apply Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Apply to Volunteer</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below to express your interest in volunteering with us. Our volunteer coordinator will
                contact you to discuss opportunities that match your skills and interests.
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">What to Expect</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  {process.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Have Questions?</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about volunteering with us, please don't hesitate to reach out.
                </p>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
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
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" className="rounded-lg" required />
                </div>

                <div className="space-y-2">
                  <Label>Volunteer Interest</Label>
                  <Select>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local Volunteering</SelectItem>
                      <SelectItem value="international">International Volunteering</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Skills & Experience</Label>
                  <Textarea
                    id="skills"
                    placeholder="Tell us about your skills and relevant experience"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Textarea
                    id="availability"
                    placeholder="When are you available to volunteer?"
                    className="rounded-lg"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm text-gray-500">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        terms and conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        privacy policy
                      </Link>
                      .
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full rounded-full">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
