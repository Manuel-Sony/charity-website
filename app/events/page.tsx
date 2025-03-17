import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Events - Charity Foundation",
  description: "Join our upcoming events and help us make a difference in communities around the world.",
}

interface Event {
  id: string
  title: string
  description: string
  image: string
  date: string
  time: string
  location: string
  type: "in-person" | "virtual"
  category: string
}

const events: Event[] = [
  {
    id: "1",
    title: "Annual Charity Gala",
    description: "Join us for an evening of celebration and fundraising for our global initiatives.",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 15, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Hotel, New York",
    type: "in-person",
    category: "Fundraiser",
  },
  {
    id: "2",
    title: "Volunteer Training Workshop",
    description: "Learn how you can make a difference as a volunteer in your community.",
    image: "/placeholder.svg?height=400&width=600",
    date: "July 8, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center, Boston",
    type: "in-person",
    category: "Workshop",
  },
  {
    id: "3",
    title: "Charity Run for Clean Water",
    description: "Participate in our 5K run to raise funds for clean water projects in Africa.",
    image: "/placeholder.svg?height=400&width=600",
    date: "August 22, 2025",
    time: "8:00 AM - 12:00 PM",
    location: "Central Park, New York",
    type: "in-person",
    category: "Fundraiser",
  },
  {
    id: "4",
    title: "Virtual Fundraising Concert",
    description: "Enjoy performances by talented artists while supporting our cause from anywhere in the world.",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 5, 2025",
    time: "8:00 PM - 10:00 PM",
    location: "Online (Zoom)",
    type: "virtual",
    category: "Concert",
  },
  {
    id: "5",
    title: "Community Clean-Up Day",
    description: "Join us in cleaning up local parks and neighborhoods to create a better environment for all.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 10, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Various Locations",
    type: "in-person",
    category: "Community Service",
  },
  {
    id: "6",
    title: "Educational Webinar: Sustainable Living",
    description: "Learn practical tips for living more sustainably and reducing your environmental impact.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 15, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "Online (Zoom)",
    type: "virtual",
    category: "Webinar",
  },
]

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-accent py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Join us at our events and be part of our community making a difference around the world.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-8 px-4 bg-white shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search events..." className="pl-10 h-12 rounded-full" />
            </div>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-[180px] h-12 rounded-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="fundraiser">Fundraiser</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="concert">Concert</SelectItem>
                  <SelectItem value="community-service">Community Service</SelectItem>
                  <SelectItem value="webinar">Webinar</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px] h-12 rounded-full">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="next-month">Next Month</SelectItem>
                  <SelectItem value="next-3-months">Next 3 Months</SelectItem>
                  <SelectItem value="next-6-months">Next 6 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full h-12">
              <TabsTrigger value="all" className="rounded-full">
                All Events
              </TabsTrigger>
              <TabsTrigger value="in-person" className="rounded-full">
                In-Person
              </TabsTrigger>
              <TabsTrigger value="virtual" className="rounded-full">
                Virtual
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="in-person">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events
                  .filter((event) => event.type === "in-person")
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="virtual">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events
                  .filter((event) => event.type === "virtual")
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Host Your Own Event */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Host Your Own Event</h2>
                <p className="mb-6">
                  Interested in hosting a fundraising event for our cause? We can provide resources, guidance, and
                  support to help make your event a success.
                </p>
                <Button asChild variant="secondary" className="rounded-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
              <div className="relative h-64 lg:h-auto">
                <Image src="/placeholder.svg?height=600&width=800" alt="Host an event" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
          {event.category}
        </div>
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {event.type === "in-person" ? "In-Person" : "Virtual"}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>

        <Button asChild className="w-full rounded-full">
          <Link href={`/events/${event.id}`}>Register Now</Link>
        </Button>
      </div>
    </div>
  )
}

