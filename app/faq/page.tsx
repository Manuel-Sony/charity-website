import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "FAQ - Charity Foundation Nigeria",
  description:
    "Find answers to frequently asked questions about our charity organization and how you can get involved.",
}

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Find answers to common questions about our organization, donations, volunteering, and more.
          </p>
        </div>
      </section>

      {/* FAQ Tabs Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="donations">Donations</TabsTrigger>
              <TabsTrigger value="volunteering">Volunteering</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
            </TabsList>

            {/* General FAQs */}
            <TabsContent value="general">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary">About Our Organization</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      What is Charity Foundation Nigeria?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Charity Foundation Nigeria is a non-profit organization based in Lagos that works to improve the
                      lives of vulnerable communities across Nigeria. We focus on clean water access, education,
                      healthcare, and emergency relief in states like Lagos, Ogun, Osun, and beyond.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      When was your organization founded?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Our organization was founded in 2010 by a group of dedicated Nigerians who wanted to make a
                      positive impact in their communities. What started as a small local initiative has grown into a
                      nationwide charity with projects in 15+ states.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Is Charity Foundation Nigeria registered?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Yes, we are a fully registered non-profit organization with the Corporate Affairs Commission (CAC)
                      of Nigeria. We also have all necessary permits from the relevant government agencies to operate as
                      a charitable organization throughout Nigeria.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Where does Charity Foundation Nigeria operate?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Our headquarters is in Lagos, but we operate in multiple states across Nigeria including Ogun,
                      Osun, Oyo, Ekiti, Kwara, Abuja FCT, Kaduna, Kano, Rivers, and Delta. Our goal is to eventually
                      expand our reach to all 36 states of Nigeria.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How can I contact Charity Foundation Nigeria?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      You can reach us through our contact page on this website, by email at
                      info@charityfoundation.org.ng, by phone at +234 801 234 5678, or by visiting our office at 15
                      Charity Avenue, Lekki, Lagos, Nigeria during business hours (Monday to Friday, 9am to 5pm).
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            {/* Donations FAQs */}
            <TabsContent value="donations">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary">Donations & Financial Support</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How can I donate to Charity Foundation Nigeria?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      You can donate through our website using our secure payment system, which accepts debit/credit
                      cards and bank transfers. You can also donate via direct bank transfer to our account, or through
                      mobile money services like Paystack or Flutterwave. For large donations, please contact our office
                      directly.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Is my donation tax-deductible?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Yes, donations to Charity Foundation Nigeria are tax-deductible under Nigerian tax laws. We
                      provide official receipts for all donations that can be used for tax purposes. For corporate
                      donors, we can provide additional documentation as required.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Can I specify how my donation is used?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Yes, you can designate your donation for specific programs or projects. During the donation
                      process, you'll have the option to select which initiative you'd like to support, such as clean
                      water, education, healthcare, or emergency relief. If you have a specific project in mind, please
                      contact us directly.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      What percentage of my donation goes to the cause?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      We are committed to financial transparency and efficiency. At least 85% of all donations go
                      directly to our programs and services. The remaining amount covers essential administrative costs
                      and fundraising expenses to ensure we can continue our work effectively. Our annual reports with
                      detailed financial information are available on our website.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Can I donate items instead of money?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Yes, we accept in-kind donations such as clothing, food, books, medical supplies, and other items
                      depending on our current needs. Please contact our office before making an in-kind donation to
                      ensure we can accept and effectively use the items you wish to donate. We can also arrange pickup
                      for large donations within Lagos.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            {/* Volunteering FAQs */}
            <TabsContent value="volunteering">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary">Volunteering & Getting Involved</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How can I volunteer with Charity Foundation Nigeria?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      You can apply to volunteer through our website's volunteer page. We offer various opportunities
                      both in Lagos and in other states where we operate. After submitting your application, our
                      volunteer coordinator will contact you to discuss opportunities that match your skills and
                      interests.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      What skills are needed for volunteering?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      We welcome volunteers with diverse skills and backgrounds. We particularly need people with
                      experience in healthcare, education, construction, project management, IT, graphic design,
                      photography, social media, and event planning. However, many of our opportunities require no
                      specific skills—just enthusiasm and a willingness to help.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Is there a minimum time commitment for volunteers?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Time commitments vary depending on the role. Some opportunities require a regular commitment
                      (e.g., 4 hours per week for 3 months), while others are one-time events. We try to be flexible and
                      work with your schedule, especially for skilled volunteers. For outreach programs in other states,
                      we typically require a minimum commitment of 2-3 days.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Do you provide training for volunteers?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Yes, all volunteers receive an orientation and training specific to their role. For specialized
                      roles or outreach programs, we provide comprehensive training to ensure you're well-prepared. We
                      believe in equipping our volunteers with the knowledge and skills they need to make a meaningful
                      impact.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Can corporate groups volunteer together?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      We welcome corporate volunteer groups and can arrange special projects or events for your team.
                      Corporate volunteering is a great way to give back to the community while building team spirit.
                      Please contact us at least one month in advance to plan a corporate volunteering event tailored to
                      your team's size and interests.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            {/* Programs FAQs */}
            <TabsContent value="programs">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary">Our Programs & Impact</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      What types of programs does Charity Foundation Nigeria run?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Our main program areas include: Clean Water Initiatives (providing wells, boreholes, and water
                      purification systems), Education Support (building and renovating schools, providing scholarships
                      and learning materials), Healthcare Access (mobile clinics, health education, maternal care), and
                      Emergency Relief (responding to floods, displacement, and other crises across Nigeria).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How do you measure the impact of your programs?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      We use a comprehensive monitoring and evaluation framework to track the outcomes and impact of our
                      programs. This includes quantitative metrics (number of people served, facilities built, etc.) and
                      qualitative assessments (community feedback, quality of life improvements). We conduct regular
                      evaluations and publish the results in our annual impact reports.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How do you select communities for your programs?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      We select communities based on a needs assessment process that considers factors such as level of
                      need, potential impact, community engagement, and sustainability. We work closely with local
                      leaders and government agencies to identify underserved areas where our programs can make the
                      greatest difference. We prioritize communities with limited access to basic services.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Do you partner with other organizations?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Yes, we believe in the power of collaboration. We partner with local and international NGOs,
                      government agencies, corporate organizations, and community-based groups to maximize our impact.
                      Some of our current partners include the Lagos State Government, Federal Ministry of Health,
                      UNICEF, and several Nigerian corporations. We're always open to new partnerships that align with
                      our mission.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Can I suggest a community that needs help?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      Yes, we welcome suggestions for communities in need. Please contact us with details about the
                      community, their specific needs, and any relevant contact information. Our team will review the
                      information and may conduct a needs assessment to determine if and how we can help. Community
                      nominations from local residents are especially valuable to our work.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            If you couldn't find the answer to your question, please don't hesitate to contact us directly. Our team is
            always happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-full px-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="mailto:info@charityfoundation.org.ng">
                <Mail className="mr-2 h-4 w-4" /> Email Us Directly
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

