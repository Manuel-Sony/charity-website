import Image from "next/image"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface Campaign {
  id: string
  title: string
  description: string
  image: string
  raised: number
  goal: number
  daysLeft: number
}

const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Clean Water for Ikorodu",
    description: "Providing clean water to communities in need across Lagos State.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 1500000,
    goal: 2500000,
    daysLeft: 45,
  },
  {
    id: "2",
    title: "Education for Osun Children",
    description: "Building schools and providing educational resources for children in rural Osun State.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 3200000,
    goal: 5000000,
    daysLeft: 30,
  },
  {
    id: "3",
    title: "Flood Relief in Ogun State",
    description: "Supporting communities affected by recent flooding in Ogun State.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 7500000,
    goal: 10000000,
    daysLeft: 60,
  },
]

export default function FeaturedCampaigns() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image src={campaign.image || "/placeholder.svg"} alt={campaign.title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
            <p className="text-gray-600 mb-4">{campaign.description}</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">₦{campaign.raised.toLocaleString()} raised</span>
                <span className="text-gray-500">of ₦{campaign.goal.toLocaleString()}</span>
              </div>
              <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">{campaign.daysLeft} days left</span>
              <span className="text-sm font-medium">{Math.round((campaign.raised / campaign.goal) * 100)}% funded</span>
            </div>

            <Button asChild className="w-full">
              <Link href={`/campaigns/${campaign.id}`}>Donate Now</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

