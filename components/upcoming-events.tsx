import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Event {
  id: string
  title: string
  description: string
  image: string
  date: string
  time: string
  location: string
}

const events: Event[] = [
  {
    id: "1",
    title: "Annual Charity Gala",
    description: "Join us for an evening of celebration and fundraising for our initiatives across Nigeria.",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 15, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Eko Hotel & Suites, Victoria Island, Lagos",
  },
  {
    id: "2",
    title: "Volunteer Training Workshop",
    description: "Learn how you can make a difference as a volunteer in your community.",
    image: "/placeholder.svg?height=400&width=600",
    date: "July 8, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Charity Foundation HQ, Lekki, Lagos",
  },
  {
    id: "3",
    title: "Charity Run for Clean Water",
    description: "Participate in our 5K run to raise funds for clean water projects in Ogun State.",
    image: "/placeholder.svg?height=400&width=600",
    date: "August 22, 2025",
    time: "8:00 AM - 12:00 PM",
    location: "Lekki Conservation Centre, Lagos",
  },
]

export default function UpcomingEvents() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-4">{event.description}</p>

            <div className="space-y-2">
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
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0">
            <Button asChild className="w-full">
              <Link href={`/events/${event.id}`}>Register Now</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

