import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"
import ImpactCounter from "@/components/impact-counter"

export const metadata = {
  title: "Our Impact - Charity Foundation",
  description: "Learn about the impact of our work and how we are making a difference in communities around the world.",
}

interface ImpactStory {
  id: string
  title: string
  description: string
  image: string
  location: string
  year: string
}

const impactStories: ImpactStory[] = [
  {
    id: "1",
    title: "Clean Water for Maweni Village",
    description:
      "We installed a water purification system that now provides clean drinking water to over 500 people in Maweni Village, Kenya.",
    image: "/placeholder.svg?height=400&width=600",
    location: "Kenya",
    year: "2024",
  },
  {
    id: "2",
    title: "New School in Rural Nepal",
    description:
      "Our education initiative built a new school that provides quality education to 200 children in a remote village in Nepal.",
    image: "/placeholder.svg?height=400&width=600",
    location: "Nepal",
    year: "2023",
  },
  {
    id: "3",
    title: "Emergency Relief After Hurricane",
    description:
      "We provided emergency supplies, temporary shelter, and medical aid to 1,500 people affected by a devastating hurricane in the Caribbean.",
    image: "/placeholder.svg?height=400&width=600",
    location: "Haiti",
    year: "2023",
  },
  {
    id: "4",
    title: "Women's Empowerment Program",
    description:
      "Our microfinance program helped 300 women start their own businesses, improving their financial independence and family well-being.",
    image: "/placeholder.svg?height=400&width=600",
    location: "India",
    year: "2022",
  },
  {
    id: "5",
    title: "Healthcare Clinic in Rural Community",
    description:
      "We established a healthcare clinic that provides essential medical services to over 5,000 people in a previously underserved area.",
    image: "/placeholder.svg?height=400&width=600",
    location: "Guatemala",
    year: "2022",
  },
  {
    id: "6",
    title: "Sustainable Agriculture Training",
    description:
      "Our agricultural program trained 150 farmers in sustainable farming techniques, improving crop yields and food security.",
    image: "/placeholder.svg?height=400&width=600",
    location: "Uganda",
    year: "2021",
  },
]

export default function ImpactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-accent py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Through the generosity of our donors and the dedication of our volunteers, we've made a significant impact
            around the world.
          </p>
        </div>
      </section>

      {/* Impact Counter Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ImpactCounter />
        </div>
      </section>

      {/* Impact Map Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Where We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our projects span across 50+ countries, bringing positive change to communities around the world.
            </p>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?height=800&width=1600" alt="Impact Map" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg font-semibold">
                Our global reach continues to expand as we work to create positive change in communities facing
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Impact Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories of how our work is making a difference in the lives of people around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {story.year}
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>

                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href={`/impact/${story.id}`}>Read Full Story</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Annual Reports & Transparency</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to transparency and accountability in all our operations. View our annual reports and
              financial statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[2024, 2023, 2022].map((year) => (
              <div key={year} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{year} Annual Report</h3>
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <p className="text-gray-600 mb-6">
                  A comprehensive overview of our activities, impact, and financial performance for the year {year}.
                </p>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link href={`/reports/${year}`}>Download Report</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Voices from the Field</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from the people whose lives have been changed by our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl relative">
              <div className="absolute top-4 right-4 text-6xl text-primary/20 font-serif">"</div>
              <blockquote className="text-lg italic mb-6 relative z-10">
                "The clean water system installed by Charity Foundation has transformed our village. Our children are
                healthier, and women no longer have to walk miles each day to fetch water."
              </blockquote>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Maria" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold">Maria</p>
                  <p className="text-sm text-gray-600">Maweni Village, Kenya</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-2xl relative">
              <div className="absolute top-4 right-4 text-6xl text-secondary/20 font-serif">"</div>
              <blockquote className="text-lg italic mb-6 relative z-10">
                "Thanks to the microfinance program, I was able to start my own tailoring business. Now I can provide
                for my family and send my children to school."
              </blockquote>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Priya" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold">Priya</p>
                  <p className="text-sm text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Our Work */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-primary via-accent to-secondary text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Work</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Your support enables us to continue making a positive impact in communities around the world. Together, we
            can create lasting change.
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

