import DonationCard from "@/components/donation-card"
import { Heart, CreditCard, Lock, Award } from "lucide-react"

export const metadata = {
  title: "Donate - Charity Foundation Nigeria",
  description: "Support our mission by making a donation to help communities in need across Nigeria.",
}

export default function DonatePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-primary py-20 px-4 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your donation helps us continue our vital work supporting communities in need across Nigeria.
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Support Matters</h2>
              <p className="text-gray-600 mb-6">
                Every donation, no matter the size, makes a significant impact on our ability to help those in need.
                Your generosity enables us to continue our mission of creating positive change in communities across
                Lagos, Ogun, Osun, and other states in Nigeria.
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="mr-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Make a Lasting Impact</h3>
                    <p className="text-gray-600">
                      Your donation directly supports our programs and initiatives, helping us create sustainable change
                      in communities facing challenges across Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Flexible Donation Options</h3>
                    <p className="text-gray-600">
                      Choose between one-time, monthly, or annual donations to support our work in a way that works best
                      for you.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                    <p className="text-gray-600">
                      All donations are processed securely, and your personal information is protected at all times.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tax-Deductible</h3>
                    <p className="text-gray-600">
                      Your donation may be tax-deductible. You'll receive a receipt for your records after your donation
                      is processed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <DonationCard />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Your Donation Helps</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your generosity enables us to make a real difference in the lives of people across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">₦10,000</h3>
              <p className="text-gray-600">Provides clean drinking water for a family in Lagos State for one month.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">₦25,000</h3>
              <p className="text-gray-600">Supplies educational materials for a classroom of children in Osun State.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">₦50,000</h3>
              <p className="text-gray-600">
                Funds emergency relief supplies for a family affected by flooding in Ogun State.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">₦100,000</h3>
              <p className="text-gray-600">
                Provides medical care for 10 children in underserved communities in rural Nigeria.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">₦250,000</h3>
              <p className="text-gray-600">Builds a sustainable water well for a village in need in Osun State.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">₦500,000</h3>
              <p className="text-gray-600">
                Funds a microloan program to help entrepreneurs start businesses in Lagos State.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

