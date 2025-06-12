export interface DonationBenefit {
  icon: string
  title: string
  description: string
}

export interface ImpactExample {
  amount: string
  description: string
}

export const donationPageData = {
  hero: {
    title: "Make a Difference Today",
    description: "Your donation helps us continue our vital work supporting communities in need across Nigeria.",
  },
  content: {
    title: "Your Support Matters",
    description:
      "Every donation, no matter the size, makes a significant impact on our ability to help those in need. Your generosity enables us to continue our mission of creating positive change in communities across Lagos, Ogun, Osun, and other states in Nigeria.",
  },
  benefits: [
    {
      icon: "Heart",
      title: "Make a Lasting Impact",
      description:
        "Your donation directly supports our programs and initiatives, helping us create sustainable change in communities facing challenges across Nigeria.",
    },
    {
      icon: "CreditCard",
      title: "Flexible Donation Options",
      description:
        "Choose between one-time, monthly, or annual donations to support our work in a way that works best for you.",
    },
    {
      icon: "Lock",
      title: "Secure Transactions",
      description: "All donations are processed securely, and your personal information is protected at all times.",
    },
    {
      icon: "Award",
      title: "Tax-Deductible",
      description:
        "Your donation may be tax-deductible. You'll receive a receipt for your records after your donation is processed.",
    },
  ] as DonationBenefit[],
  impact: {
    title: "How Your Donation Helps",
    description: "Your generosity enables us to make a real difference in the lives of people across Nigeria.",
    examples: [
      {
        amount: "₦10,000",
        description: "Provides clean drinking water for a family in Lagos State for one month.",
      },
      {
        amount: "₦25,000",
        description: "Supplies educational materials for a classroom of children in Osun State.",
      },
      {
        amount: "₦50,000",
        description: "Funds emergency relief supplies for a family affected by flooding in Ogun State.",
      },
      {
        amount: "₦100,000",
        description: "Provides medical care for 10 children in underserved communities in rural Nigeria.",
      },
      {
        amount: "₦250,000",
        description: "Builds a sustainable water well for a village in need in Osun State.",
      },
      {
        amount: "₦500,000",
        description: "Funds a microloan program to help entrepreneurs start businesses in Lagos State.",
      },
    ] as ImpactExample[],
  },
}
