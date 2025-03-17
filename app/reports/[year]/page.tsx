import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, FileText, BarChart, DollarSign } from "lucide-react"

// This would typically come from a database or API
const annualReports = [
  {
    year: "2024",
    title: "Annual Report 2024",
    description: "A comprehensive overview of our activities, impact, and financial performance for the year 2024.",
    coverImage: "/placeholder.svg?height=800&width=600",
    fileSize: "4.2 MB",
    fileFormat: "PDF",
    highlights: [
      "Reached over 100,000 beneficiaries across 15 states in Nigeria",
      "Completed 45 new projects in water, education, and healthcare",
      "Mobilized ₦250 million in donations and grants",
      "Expanded volunteer program to include 500+ active volunteers",
      "Launched new initiatives in climate resilience and youth empowerment",
    ],
    sections: [
      {
        title: "Message from the Executive Director",
        preview:
          "This year marked a significant milestone in our journey as we celebrated our 14th anniversary. Despite the challenges posed by economic uncertainties and security concerns in some regions, we've expanded our reach and deepened our impact across Nigeria...",
      },
      {
        title: "Program Highlights",
        preview:
          "Our Clean Water Initiative provided access to safe drinking water to 25,000 people through the installation of 50 boreholes across Lagos, Ogun, and Osun states. Our Education Support Program renovated 15 schools and provided scholarships to 500 students...",
      },
      {
        title: "Financial Summary",
        preview:
          "We maintained our commitment to financial transparency and efficiency, with 85% of funds directed to program activities. Total revenue increased by 15% compared to the previous year, while administrative costs were kept below 10%...",
      },
      {
        title: "Looking Ahead",
        preview:
          "As we move into 2025, we're focusing on scaling our most effective programs while exploring innovative approaches to address emerging challenges. We're particularly excited about our new digital inclusion initiative and expanded healthcare outreach...",
      },
    ],
    financialHighlights: {
      totalRevenue: "₦250,000,000",
      programExpenses: "₦212,500,000",
      administrativeExpenses: "₦25,000,000",
      fundraisingExpenses: "₦12,500,000",
      programPercentage: "85%",
    },
  },
  {
    year: "2023",
    title: "Annual Report 2023",
    description: "A comprehensive overview of our activities, impact, and financial performance for the year 2023.",
    coverImage: "/placeholder.svg?height=800&width=600",
    fileSize: "3.8 MB",
    fileFormat: "PDF",
    highlights: [
      "Served over 85,000 beneficiaries across 12 states in Nigeria",
      "Implemented 38 projects in water, education, healthcare, and emergency relief",
      "Raised ₦220 million in donations and grants",
      "Engaged 400+ volunteers in program delivery",
      "Formed 5 new strategic partnerships with local and international organizations",
    ],
    sections: [
      {
        title: "Message from the Board Chair",
        preview:
          "2023 was a year of growth and resilience for Charity Foundation Nigeria. Despite the economic challenges facing our country, we expanded our programs and reached more communities than ever before, thanks to the generosity of our donors and the dedication of our team...",
      },
      {
        title: "Program Impact",
        preview:
          "Our Emergency Relief Initiative responded to flooding in Ogun State, providing immediate assistance to 5,000 affected individuals. Our Healthcare Outreach Program conducted 20 medical camps, serving 15,000 patients with free consultations and medications...",
      },
      {
        title: "Financial Overview",
        preview:
          "We maintained strong financial health in 2023, with a 10% increase in total revenue compared to 2022. Our commitment to efficiency ensured that 83% of all funds were directed to program activities, directly benefiting communities in need...",
      },
      {
        title: "Strategic Priorities",
        preview:
          "Looking ahead, we're focusing on deepening our impact in existing program areas while expanding geographically to reach underserved communities in northern Nigeria. We're also investing in monitoring and evaluation to better measure and communicate our impact...",
      },
    ],
    financialHighlights: {
      totalRevenue: "₦220,000,000",
      programExpenses: "₦182,600,000",
      administrativeExpenses: "₦24,200,000",
      fundraisingExpenses: "₦13,200,000",
      programPercentage: "83%",
    },
  },
  {
    year: "2022",
    title: "Annual Report 2022",
    description: "A comprehensive overview of our activities, impact, and financial performance for the year 2022.",
    coverImage: "/placeholder.svg?height=800&width=600",
    fileSize: "3.5 MB",
    fileFormat: "PDF",
    highlights: [
      "Impacted the lives of 70,000 beneficiaries across 10 states in Nigeria",
      "Completed 30 projects focused on sustainable development and humanitarian aid",
      "Mobilized ₦200 million in financial resources",
      "Expanded our team to 45 full-time staff and 350 volunteers",
      "Received recognition for transparency and accountability from NGO regulatory bodies",
    ],
    sections: [
      {
        title: "Executive Summary",
        preview:
          "2022 marked a year of strategic growth for Charity Foundation Nigeria as we strengthened our core programs while responding to emerging needs. We focused on building community resilience, enhancing local partnerships, and improving our operational efficiency...",
      },
      {
        title: "Program Achievements",
        preview:
          "Our Women's Empowerment Initiative provided microloans and business training to 500 women entrepreneurs across Lagos and Ogun states. Our Youth Development Program engaged 2,000 young people in skills training, mentorship, and community service activities...",
      },
      {
        title: "Financial Report",
        preview:
          "We maintained strong financial stewardship in 2022, with 82% of funds directed to program implementation. We diversified our funding sources, with increases in individual giving, corporate partnerships, and institutional grants...",
      },
      {
        title: "Organizational Development",
        preview:
          "We invested in strengthening our organizational capacity through staff training, improved systems, and enhanced monitoring and evaluation frameworks. We also updated our strategic plan to guide our work for the next three years...",
      },
    ],
    financialHighlights: {
      totalRevenue: "₦200,000,000",
      programExpenses: "₦164,000,000",
      administrativeExpenses: "₦24,000,000",
      fundraisingExpenses: "₦12,000,000",
      programPercentage: "82%",
    },
  },
]

export async function generateMetadata({ params }: { params: { year: string } }) {
  const report = annualReports.find((report) => report.year === params.year)

  if (!report) {
    return {
      title: "Report Not Found - Charity Foundation Nigeria",
      description: "The requested annual report could not be found.",
    }
  }

  return {
    title: `${report.title} - Charity Foundation Nigeria`,
    description: report.description,
  }
}

export default function ReportPage({ params }: { params: { year: string } }) {
  const report = annualReports.find((report) => report.year === params.year)

  if (!report) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Report Not Found</h1>
          <p className="text-gray-600 mb-6">The annual report you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/impact">Return to Impact</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{report.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">{report.description}</p>
          <Button asChild size="lg" className="rounded-full">
            <a href="#" download>
              <Download className="mr-2 h-5 w-5" /> Download Report ({report.fileFormat}, {report.fileSize})
            </a>
          </Button>
        </div>
      </section>

      {/* Report Content */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Report Highlights</h2>
                  <ul className="space-y-3 mb-8">
                    {report.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                          <div className="bg-primary rounded-full w-2 h-2"></div>
                        </div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">Report Contents</h2>
                  <div className="space-y-6">
                    {report.sections.map((section, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                        <p className="text-gray-600">{section.preview}</p>
                        <Button variant="link" className="p-0 h-auto mt-2">
                          Read more in the full report
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Financial Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center mb-4">
                        <DollarSign className="h-6 w-6 text-primary mr-2" />
                        <h3 className="text-lg font-bold">Total Revenue</h3>
                      </div>
                      <p className="text-3xl font-bold text-primary">{report.financialHighlights.totalRevenue}</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center mb-4">
                        <BarChart className="h-6 w-6 text-primary mr-2" />
                        <h3 className="text-lg font-bold">Program Expenses</h3>
                      </div>
                      <p className="text-3xl font-bold text-primary">{report.financialHighlights.programExpenses}</p>
                      <p className="text-sm text-gray-500">
                        {report.financialHighlights.programPercentage} of total expenses
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <h3 className="text-lg font-bold mb-4">Expense Breakdown</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Program Services</span>
                          <span className="font-medium">{report.financialHighlights.programPercentage}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{ width: report.financialHighlights.programPercentage }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Administrative</span>
                          <span className="font-medium">10%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-secondary h-2.5 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Fundraising</span>
                          <span className="font-medium">5%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-accent h-2.5 rounded-full" style={{ width: "5%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600">
                    For detailed financial information, including audited financial statements, please download the
                    complete annual report.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/impact">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Impact
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-[400px]">
                    <Image
                      src={report.coverImage || "/placeholder.svg"}
                      alt={`${report.year} Annual Report Cover`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Button asChild className="w-full mb-4">
                      <a href="#" download>
                        <Download className="mr-2 h-4 w-4" /> Download Full Report
                      </a>
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      {report.fileFormat} format, {report.fileSize}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Other Annual Reports</h3>
                  <div className="space-y-4">
                    {annualReports
                      .filter((r) => r.year !== report.year)
                      .map((otherReport) => (
                        <div key={otherReport.year} className="flex items-center">
                          <FileText className="h-5 w-5 text-primary mr-3" />
                          <Link href={`/reports/${otherReport.year}`} className="text-primary hover:underline">
                            {otherReport.title}
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-primary text-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Support Our Work</h3>
                  <p className="mb-4">
                    Your donation helps us continue our vital work supporting communities in need across Nigeria.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/donate">Make a Donation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

