import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Award, Heart, Globe } from "lucide-react"

export const metadata = {
  title: "Volunteer - Charity Foundation",
  description: "Join our volunteer program and help make a difference in communities around the world.",
}

export default function VolunteerPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-accent py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Volunteer</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Join our community of dedicated volunteers and help us create positive change around the world.
          </p>
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
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Make an Impact</h3>
              <p className="text-gray-600">
                Your time and skills directly contribute to improving the lives of people in need around the world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Join a Community</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals who share your passion for making a positive difference.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Develop Skills</h3>
              <p className="text-gray-600">
                Gain valuable experience and develop new skills that can benefit both your personal and professional
                life.
              </p>
            </div>
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
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Local Volunteering"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Local Volunteering</h3>
                <p className="text-gray-600 mb-4">
                  Make a difference in your own community by volunteering at local events, fundraisers, and programs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-gray-600">Flexible scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-primary mr-2" />
                    <span className="text-gray-600">2-4 hours per week</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 text-primary mr-2" />
                    <span className="text-gray-600">No experience required</span>
                  </li>
                </ul>
                <Button asChild className="w-full rounded-full">
                  <Link href="#volunteer-form">Apply Now</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="International Volunteering"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">International Volunteering</h3>
                <p className="text-gray-600 mb-4">
                  Travel to communities around the world and contribute to our global projects and initiatives.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-gray-600">2-12 week commitments</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="h-4 w-4 text-primary mr-2" />
                    <span className="text-gray-600">Travel to various countries</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 text-primary mr-2" />
                    <span className="text-gray-600">Some experience preferred</span>
                  </li>
                </ul>
                <Button asChild className="w-full rounded-full">
                  <Link href="#volunteer-form">Apply Now</Link>
                </Button>
              </div>
            </div>
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
                  <li>Submit your application</li>
                  <li>Initial screening call with our volunteer coordinator</li>
                  <li>Orientation and training session</li>
                  <li>Placement in a volunteer role that matches your skills</li>
                  <li>Ongoing support and regular check-ins</li>
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

