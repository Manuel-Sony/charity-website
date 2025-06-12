export interface Campaign {
  id: string
  title: string
  description: string
  image: string
  raised: number
  goal: number
  daysLeft: number
  category: string
}

export const metadata = {
  title: "Campaigns - Charity Foundation",
  description: "Browse and support our ongoing campaigns to help communities in need.",
}

export const categories = [
  { label: "All Categories", value: "all" },
  { label: "Water", value: "water" },
  { label: "Education", value: "education" },
  { label: "Emergency", value: "emergency" },
  { label: "Health", value: "health" },
  { label: "Food", value: "food" },
  { label: "Empowerment", value: "empowerment" },
]

export const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Ending Soon", value: "ending-soon" },
  { label: "Most Funded", value: "most-funded" },
  { label: "Least Funded", value: "least-funded" },
]

export const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Clean Water Initiative",
    description: "Providing clean water to communities in need across Africa.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 15000,
    goal: 25000,
    daysLeft: 45,
    category: "Water",
  },
  {
    id: "2",
    title: "Education for All",
    description: "Building schools and providing educational resources for children.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 32000,
    goal: 50000,
    daysLeft: 30,
    category: "Education",
  },
  {
    id: "3",
    title: "Emergency Relief Fund",
    description: "Supporting communities affected by natural disasters and conflicts.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 75000,
    goal: 100000,
    daysLeft: 60,
    category: "Emergency",
  },
  {
    id: "4",
    title: "Healthcare Access Program",
    description: "Providing medical care and supplies to underserved communities.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 45000,
    goal: 80000,
    daysLeft: 75,
    category: "Health",
  },
  {
    id: "5",
    title: "Sustainable Agriculture",
    description: "Teaching sustainable farming practices to rural communities.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 28000,
    goal: 40000,
    daysLeft: 20,
    category: "Food",
  },
  {
    id: "6",
    title: "Women Empowerment Initiative",
    description: "Supporting women entrepreneurs with training and microloans.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 62000,
    goal: 75000,
    daysLeft: 15,
    category: "Empowerment",
  },
]
