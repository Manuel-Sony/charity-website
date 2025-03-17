import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Target, Award } from "lucide-react"

export const metadata = {
  title: "About Us - Charity Foundation",
  description: "Learn about our mission, vision, and the team behind Charity Foundation.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-accent py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Foundation</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We are dedicated to creating positive change and supporting communities in need around the world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="Our story" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Charity Foundation began with a simple mission: to create positive change in
                communities facing challenges around the world. What started as a small group of dedicated volunteers
                has grown into a global organization with projects in over 50 countries.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been guided by the belief that everyone deserves access to basic necessities, education,
                and opportunities to thrive. Through the generosity of our donors and the dedication of our volunteers,
                we've been able to make a significant impact in the lives of thousands of people.
              </p>
              <p className="text-gray-600">
                Today, we continue to expand our reach and deepen our impact, always staying true to our core values of
                compassion, integrity, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission, Vision & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These guiding principles shape everything we do and help us create lasting positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                To empower communities facing challenges by providing resources, support, and sustainable solutions that
                create lasting positive change.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Our Vision</h3>
              <p className="text-gray-600">
                A world where all communities have the resources and opportunities they need to thrive, and where
                compassion and collaboration drive global progress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Our Values</h3>
              <p className="text-gray-600">
                Compassion, integrity, sustainability, collaboration, and innovation guide our approach to creating
                positive change in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who guide our organization and drive our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Executive Director", image: "/placeholder.svg?height=400&width=400" },
              { name: "Michael Chen", role: "Director of Operations", image: "/placeholder.svg?height=400&width=400" },
              { name: "Emily Rodriguez", role: "Director of Programs", image: "/placeholder.svg?height=400&width=400" },
              { name: "David Kim", role: "Director of Development", image: "/placeholder.svg?height=400&width=400" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-primary via-accent to-secondary text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            There are many ways to get involved and support our mission. Whether you donate, volunteer, or spread the
            word, your contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" className="rounded-full px-8 py-6 text-lg font-semibold">
              <Link href="/donate">Make a Donation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-semibold bg-transparent border-2 border-white hover:bg-white/10"
            >
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

