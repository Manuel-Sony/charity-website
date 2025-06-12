export interface VolunteerBenefit {
  icon: string
  title: string
  description: string
}

export interface VolunteerOpportunity {
  title: string
  image: string
  description: string
  details: {
    icon: string
    text: string
  }[]
}

export const volunteerPageData = {
  hero: {
    title: "Become a Volunteer",
    description: "Join our community of dedicated volunteers and help us create positive change around the world.",
  },
  benefits: [
    {
      icon: "Heart",
      title: "Make an Impact",
      description:
        "Your time and skills directly contribute to improving the lives of people in need around the world.",
    },
    {
      icon: "Users",
      title: "Join a Community",
      description: "Connect with like-minded individuals who share your passion for making a positive difference.",
    },
    {
      icon: "Award",
      title: "Develop Skills",
      description:
        "Gain valuable experience and develop new skills that can benefit both your personal and professional life.",
    },
  ] as VolunteerBenefit[],
  opportunities: [
    {
      title: "Local Volunteering",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Make a difference in your own community by volunteering at local events, fundraisers, and programs.",
      details: [
        { icon: "Calendar", text: "Flexible scheduling" },
        { icon: "Clock", text: "2-4 hours per week" },
        { icon: "Users", text: "No experience required" },
      ],
    },
    {
      title: "International Volunteering",
      image: "/placeholder.svg?height=400&width=600",
      description: "Travel to communities around the world and contribute to our global projects and initiatives.",
      details: [
        { icon: "Calendar", text: "2-12 week commitments" },
        { icon: "Globe", text: "Travel to various countries" },
        { icon: "Users", text: "Some experience preferred" },
      ],
    },
  ] as VolunteerOpportunity[],
  process: [
    "Submit your application",
    "Initial screening call with our volunteer coordinator",
    "Orientation and training session",
    "Placement in a volunteer role that matches your skills",
    "Ongoing support and regular check-ins",
  ],
}
