export interface FundraisingBenefit {
  icon: string
  title: string
  description: string
}

export interface FundraisingIdea {
  title: string
  icon: string
  image: string
  description: string
  benefits: string[]
}

export interface SuccessStory {
  name: string
  title: string
  amount: string
  image: string
  quote: string
  impact: string
}

export interface FAQ {
  question: string
  answer: string
}

export const fundraisePageData = {
  hero: {
    title: "Start Your Fundraising Campaign",
    description:
      "Rally your friends, family, and community to support our mission and make a meaningful impact together.",
  },
  benefits: [
    {
      icon: "Heart",
      title: "Amplify Your Impact",
      description:
        "By rallying your network, you can make a bigger difference than you could alone, multiplying your contribution.",
    },
    {
      icon: "Users",
      title: "Engage Your Community",
      description:
        "Bring together friends, family, and colleagues around a cause you care about, creating meaningful connections.",
    },
    {
      icon: "Target",
      title: "Personalize Your Cause",
      description:
        "Choose a specific project or initiative that resonates with you and your network, making your campaign more meaningful.",
    },
  ] as FundraisingBenefit[],
  ideas: [
    {
      title: "Birthday Fundraiser",
      icon: "Gift",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Ask for donations instead of gifts for your birthday. It's a meaningful way to celebrate while making a difference.",
      benefits: ["Easy to set up online", "Share with friends and family", "Makes your birthday more meaningful"],
    },
    {
      title: "Charity Run or Walk",
      icon: "Calendar",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Organize a run or walk event where participants collect pledges from sponsors for each mile completed.",
      benefits: ["Promotes health and fitness", "Creates a community event", "Can be scaled to any size"],
    },
    {
      title: "Virtual Fundraiser",
      icon: "Users",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Host an online event like a virtual concert, game night, or auction that people can join from anywhere.",
      benefits: ["No geographical limitations", "Lower overhead costs", "Easily shareable on social media"],
    },
  ] as FundraisingIdea[],
  successStories: [
    {
      name: "Sarah",
      title: "Sarah's Marathon Challenge",
      amount: "Raised $5,200",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "I decided to run my first marathon and use it as an opportunity to raise funds for clean water projects. The support I received was overwhelming, and knowing that my effort would help provide clean water to communities in need kept me going through the tough training days.",
      impact: "Sarah's fundraiser provided clean water access to over 200 people in a rural village.",
    },
    {
      name: "Michael",
      title: "Michael's Birthday Campaign",
      amount: "Raised $3,800",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "For my 30th birthday, I asked friends and family to donate to education programs instead of giving me gifts. It was the most meaningful birthday I've ever had, knowing that we were helping children get the education they deserve.",
      impact: "Michael's fundraiser provided school supplies and resources for an entire classroom for a year.",
    },
  ] as SuccessStory[],
  howItWorks: [
    "Fill out the form with your fundraising idea",
    "Our team will contact you to discuss details",
    "We'll set up your personalized fundraising page",
    "You'll share your page with friends, family, and social networks",
    "Watch your impact grow as donations come in",
  ],
  support: [
    "A personalized fundraising page",
    "Fundraising tips and resources",
    "Marketing materials and templates",
    "Dedicated support from our team",
  ],
  faq: [
    {
      question: "How much of the money raised goes to the cause?",
      answer:
        "At least 85% of all funds raised go directly to our programs and initiatives. The remaining amount covers essential administrative costs and fundraising expenses to ensure we can continue our work effectively.",
    },
    {
      question: "Can I fundraise for a specific project?",
      answer:
        "Yes! You can choose to direct your fundraising efforts toward a specific project or initiative that resonates with you, such as clean water, education, or emergency relief.",
    },
    {
      question: "How long should my fundraiser run?",
      answer:
        "Most successful fundraisers run for 2-4 weeks. This gives you enough time to promote your campaign without losing momentum. However, you can adjust the timeline based on your specific fundraiser type.",
    },
    {
      question: "Will donors receive tax receipts?",
      answer:
        "Yes, all donors who contribute to your fundraiser will automatically receive a tax receipt for their donation, as our organization is a registered nonprofit.",
    },
  ] as FAQ[],
}
