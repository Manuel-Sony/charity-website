import Link from "next/link"
import { ArrowRight, Heart, Users, Calendar } from "lucide-react"
import ImpactCounter from "@/components/impact-counter"
import FeaturedCampaigns from "@/components/featured-campaigns"
import TestimonialSlider from "@/components/testimonial-slider"
import UpcomingEvents from "@/components/upcoming-events"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary via-secondary to-accent py-20 px-4 md:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Making a difference, one life at a time
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join us in our mission to create positive change and support communities in need across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className="bg-white text-primary hover:bg-white/90 font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Donate Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/volunteer"
                className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition-all flex items-center justify-center"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counter Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ImpactCounter />
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Current Campaigns</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Support our ongoing initiatives and help us make a lasting impact in communities across Nigeria.
            </p>
          </div>
          <FeaturedCampaigns />
          <div className="text-center mt-10">
            <Link href="/campaigns" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              View all campaigns <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ways to Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              There are many ways you can contribute to our mission and make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Make a Donation</h3>
              <p className="text-gray-600 mb-6">
                Your financial support helps us continue our vital work and reach more people in need across Nigeria.
              </p>
              <Link href="/donate" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                Donate now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Volunteer With Us</h3>
              <p className="text-gray-600 mb-6">
                Share your time and skills to help us deliver our programs and services effectively in Lagos and beyond.
              </p>
              <Link
                href="/volunteer"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                Join our team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Attend Events</h3>
              <p className="text-gray-600 mb-6">
                Participate in our fundraising events and help us raise awareness for important causes in Nigeria.
              </p>
              <Link href="/events" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                See upcoming events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our donors, volunteers, and the communities we've helped across Nigeria.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us at our upcoming events and be part of our community making a difference in Nigeria.
            </p>
          </div>
          <UpcomingEvents />
          <div className="text-center mt-10">
            <Link href="/events" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              View all events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8">
              Subscribe to our newsletter to receive updates on our work, upcoming events, and ways you can help.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary hover:bg-white/90 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

