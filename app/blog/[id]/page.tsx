import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"

// This would typically come from a database or API
const blogPosts = [
  {
    id: "1",
    title: "The Impact of Clean Water on Community Health",
    excerpt: "Discover how access to clean water is transforming health outcomes in rural communities across Nigeria.",
    content: `
      <p>Access to clean water is a fundamental human right, yet millions of Nigerians still lack this basic necessity. In rural communities across Nigeria, the absence of clean water sources leads to preventable waterborne diseases, affecting health outcomes and overall quality of life.</p>
      
      <p>Our Clean Water Initiative in Ikorodu, Lagos State, has demonstrated the transformative power of providing reliable access to clean water. Over the past year, we've installed 15 boreholes and water purification systems, serving over 5,000 residents.</p>
      
      <h2>The Health Impact</h2>
      
      <p>The results have been remarkable. Local health centers report a 60% reduction in waterborne diseases such as diarrhea, cholera, and typhoid fever. Children, who are particularly vulnerable to these illnesses, are now able to attend school regularly instead of being sick at home or hospitalized.</p>
      
      <p>"Before the borehole was installed, I used to take my children to the clinic almost every month for diarrhea or typhoid," says Mrs. Adebisi, a mother of three in Ikorodu. "Now, it's been six months since our last visit for any waterborne illness."</p>
      
      <h2>Economic Benefits</h2>
      
      <p>The impact extends beyond health. Women and children, who traditionally bear the responsibility of water collection, now save several hours each day that were previously spent walking long distances to fetch water. This time is now invested in education, income-generating activities, and family care.</p>
      
      <p>Local businesses that rely on water, such as food vendors and small-scale farmers, have also seen improvements in their operations and income.</p>
      
      <h2>Sustainable Solutions</h2>
      
      <p>Sustainability is at the core of our approach. Each water project includes:</p>
      
      <ul>
        <li>Formation of a local water committee responsible for maintenance</li>
        <li>Training of community members in basic repairs and water quality testing</li>
        <li>Establishment of a community fund for future repairs</li>
        <li>Regular follow-up visits from our technical team</li>
      </ul>
      
      <p>This approach ensures that the benefits of clean water continue long after our initial intervention.</p>
      
      <h2>Looking Forward</h2>
      
      <p>Building on the success in Ikorodu, we're expanding our Clean Water Initiative to communities in Ogun and Osun states. With your support, we aim to reach an additional 10,000 people with clean water access by the end of the year.</p>
      
      <p>Clean water is not just about health—it's about dignity, opportunity, and potential. When communities gain access to this basic necessity, they can focus on education, economic development, and building a better future.</p>
      
      <p>Join us in making clean water a reality for more communities across Nigeria.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "May 15, 2025",
    author: "Dr. Adebayo Johnson",
    category: "Water",
    featured: true,
    relatedPosts: ["2", "5"],
  },
  {
    id: "2",
    title: "Education: The Key to Breaking the Cycle of Poverty",
    excerpt:
      "How our education initiatives are helping children build a brighter future for themselves and their communities.",
    content: `
      <p>Education is widely recognized as one of the most powerful tools for reducing poverty and creating sustainable development. In Nigeria, where approximately 10.5 million children are out of school—the highest number in the world—education initiatives are critical for breaking the cycle of poverty.</p>
      
      <p>Our Education Support Program in Osun State has been working to address this challenge by improving access to quality education for children from disadvantaged backgrounds.</p>
      
      <h2>Building and Renovating Schools</h2>
      
      <p>Over the past two years, we've built 3 new schools and renovated 7 existing structures in rural communities across Osun State. These schools now provide safe, conducive learning environments for over 2,500 children who previously studied in dilapidated buildings or under trees.</p>
      
      <p>"The new classrooms have changed everything," says Mr. Oladele, a headmaster at one of the renovated schools. "Attendance has improved by 40%, and our students are more engaged and motivated to learn."</p>
      
      <h2>Scholarship Program</h2>
      
      <p>For many families, the indirect costs of education—uniforms, books, transportation—remain significant barriers. Our scholarship program supports 350 students from the most vulnerable households, covering these expenses and ensuring that financial constraints don't prevent children from attending school.</p>
      
      <p>Fifteen-year-old Tunde, one of our scholarship recipients, dreams of becoming an engineer. "Without this scholarship, I would have had to drop out after primary school to help my family on the farm," he says. "Now I can continue my education and work toward my dream."</p>
      
      <h2>Teacher Training and Support</h2>
      
      <p>Quality education requires qualified teachers. We've provided training for 120 teachers in modern teaching methodologies, subject knowledge, and classroom management. Each participating teacher receives ongoing mentoring and access to teaching resources.</p>
      
      <p>The impact is evident in improved teaching quality and student learning outcomes. In schools where our teacher training program has been implemented, average test scores have increased by 25%.</p>
      
      <h2>Community Involvement</h2>
      
      <p>Sustainable education improvements require community ownership. We work closely with parent-teacher associations and community leaders to ensure local involvement in school management and decision-making.</p>
      
      <p>These community partnerships have led to increased enrollment, reduced dropout rates, and greater community investment in education.</p>
      
      <h2>The Ripple Effect</h2>
      
      <p>The benefits of education extend far beyond the individual child. Educated children grow up to have better health outcomes, higher earning potential, and are more likely to educate their own children—creating a positive cycle that lifts entire communities out of poverty.</p>
      
      <p>With your support, we plan to expand our Education Support Program to reach 5,000 more children in Ogun State over the next three years.</p>
      
      <p>Together, we can help build a future where every Nigerian child has access to quality education and the opportunity to reach their full potential.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 28, 2025",
    author: "Funmi Olatunji",
    category: "Education",
    featured: false,
    relatedPosts: ["4", "6"],
  },
  {
    id: "3",
    title: "Responding to Natural Disasters: Our Emergency Relief Efforts",
    excerpt: "Learn about our rapid response approach to providing aid in the aftermath of natural disasters.",
    content: `
      <p>Nigeria faces various natural disasters including floods, landslides, and droughts that displace thousands of people annually. When disaster strikes, immediate and effective response is crucial to save lives and alleviate suffering.</p>
      
      <p>Our Emergency Relief Program has developed a comprehensive approach to disaster response that allows us to mobilize quickly and provide targeted assistance to affected communities.</p>
      
      <h2>Recent Response: Ogun State Floods</h2>
      
      <p>In September 2024, heavy rainfall caused severe flooding in several communities in Ogun State, displacing over 5,000 people and destroying homes, crops, and infrastructure.</p>
      
      <p>Within 48 hours of the disaster, our emergency response team was on the ground, working with local authorities to assess needs and distribute immediate relief supplies.</p>
      
      <h2>Comprehensive Relief Package</h2>
      
      <p>Our emergency relief efforts included:</p>
      
      <ul>
        <li><strong>Emergency Shelter:</strong> Distribution of 500 emergency shelter kits, including tarpaulins, ropes, and tools for families whose homes were destroyed or damaged</li>
        <li><strong>Food Security:</strong> Provision of food packages containing rice, beans, oil, and other essentials to 1,200 families</li>
        <li><strong>Clean Water:</strong> Deployment of mobile water purification units and distribution of water purification tablets to prevent waterborne diseases</li>
        <li><strong>Healthcare:</strong> Mobile medical clinics providing free consultations and medications to treat injuries and prevent disease outbreaks</li>
        <li><strong>Hygiene Kits:</strong> Distribution of soap, sanitary pads, toothbrushes, and other hygiene items to promote health and dignity</li>
      </ul>
      
      <h2>Beyond Immediate Relief</h2>
      
      <p>While immediate relief is essential, we recognize that disaster recovery is a long-term process. Our approach includes:</p>
      
      <p><strong>Transitional Support:</strong> After the emergency phase, we provide support for transitional shelter, livelihood recovery, and school rehabilitation to help communities rebuild.</p>
      
      <p><strong>Disaster Risk Reduction:</strong> We work with communities to identify vulnerabilities and implement measures to reduce the impact of future disasters, such as early warning systems, evacuation plans, and flood-resistant construction techniques.</p>
      
      <h2>Community-Led Response</h2>
      
      <p>Local communities are not just recipients of aid but active participants in the response. We engage community members in needs assessment, aid distribution, and monitoring to ensure that assistance is appropriate and reaches those most in need.</p>
      
      <p>"The involvement of community members in the relief effort has been crucial," says Alhaji Ibrahim, a community leader in one of the affected areas. "We know our people and their needs, and working together with Charity Foundation has made the response more effective."</p>
      
      <h2>Preparedness for Future Disasters</h2>
      
      <p>Climate change is increasing the frequency and intensity of natural disasters in Nigeria. To strengthen our response capacity, we maintain emergency supplies in strategic locations, train staff and volunteers in disaster response, and develop partnerships with other organizations and government agencies.</p>
      
      <p>Your support enables us to respond quickly and effectively when disasters strike, providing life-saving assistance to those in greatest need. Together, we can help vulnerable communities survive crises and build back stronger.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 10, 2025",
    author: "Ibrahim Musa",
    category: "Emergency Relief",
    featured: false,
    relatedPosts: ["5", "1"],
  },
  {
    id: "4",
    title: "Empowering Women Through Microfinance",
    excerpt: "How small loans are making a big difference in the lives of women entrepreneurs in developing countries.",
    content: `
      <p>Economic empowerment is a powerful tool for transforming lives, particularly for women who often face significant barriers to financial independence. In Nigeria, where women make up a large portion of small-scale entrepreneurs but have limited access to formal financial services, microfinance can be a game-changer.</p>
      
      <p>Our Women's Empowerment through Microfinance Program in Lagos State is helping women start and grow businesses, increase their incomes, and improve their families' well-being.</p>
      
      <h2>The Power of Small Loans</h2>
      
      <p>The program provides small loans (ranging from ₦50,000 to ₦500,000) to women entrepreneurs who lack access to traditional banking services. These loans enable women to invest in their businesses, purchase inventory or equipment, and expand their operations.</p>
      
      <p>Mrs. Chinyere Okonkwo, who runs a small food processing business in Alimosho, Lagos, received a loan of ₦150,000 to purchase a grinding machine and packaging materials. "With the new equipment, I can process more food products and package them properly," she explains. "My daily income has increased from ₦3,000 to ₦7,000, and I've hired two assistants from my community."</p>
      
      <h2>Beyond Credit: A Comprehensive Approach</h2>
      
      <p>Our microfinance program goes beyond providing loans. It includes:</p>
      
      <ul>
        <li><strong>Business Training:</strong> Participants receive training in financial literacy, business planning, marketing, and record-keeping</li>
        <li><strong>Savings Groups:</strong> Women are organized into savings groups that meet regularly to save, access loans, and support each other</li>
        <li><strong>Mentorship:</strong> Successful entrepreneurs mentor new participants, sharing knowledge and experience</li>
        <li><strong>Market Access:</strong> We help connect women entrepreneurs to markets and supply chains</li>
      </ul>
      
      <p>This comprehensive approach ensures that women have the knowledge, skills, and support they need to succeed.</p>
      
      <h2>Ripple Effects</h2>
      
      <p>The impact of the program extends far beyond individual businesses. Research shows that when women earn income, they invest a significant portion in their children's education, healthcare, and nutrition, creating a positive cycle of development.</p>
      
      <p>"Since my business expanded, I've been able to pay my children's school fees without struggle and even save for their university education," says Mrs. Okonkwo. "My daughter wants to become a doctor, and now I believe she can achieve that dream."</p>
      
      <p>The program also strengthens women's decision-making power within their households and communities. Many participants report greater confidence and respect from family members and community leaders.</p>
      
      <h2>Program Results</h2>
      
      <p>Since its inception three years ago, our Women's Empowerment through Microfinance Program has:</p>
      
      <ul>
        <li>Provided loans to 1,200 women entrepreneurs</li>
        <li>Achieved a 98% loan repayment rate</li>
        <li>Helped create or expand 1,500 businesses</li>
        <li>Generated employment for an additional 800 community members</li>
        <li>Increased participants' average household income by 65%</li>
      </ul>
      
      <h2>Scaling for Greater Impact</h2>
      
      <p>Building on this success, we're expanding the program to Ogun State, with plans to reach 2,000 more women over the next two years. We're also developing partnerships with financial institutions to help successful participants transition to formal banking services and larger loans.</p>
      
      <p>With your support, we can continue to empower women entrepreneurs across Nigeria, helping them build businesses, support their families, and contribute to their communities' economic development.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "March 22, 2025",
    author: "Ngozi Okafor",
    category: "Empowerment",
    featured: true,
    relatedPosts: ["2", "6"],
  },
  {
    id: "5",
    title: "Sustainable Agriculture: Feeding Communities for Generations",
    excerpt:
      "Our approach to teaching sustainable farming practices that improve food security and protect the environment.",
    content: `
      <p>Agriculture is the backbone of Nigeria's economy, employing approximately 70% of the population. Yet, many small-scale farmers struggle with low productivity, soil degradation, and vulnerability to climate change. These challenges threaten both food security and livelihoods.</p>
      
      <p>Our Sustainable Agriculture Program in Osun State is addressing these challenges by promoting farming practices that increase yields while protecting the environment for future generations.</p>
      
      <h2>Climate-Smart Farming Techniques</h2>
      
      <p>Climate change is already affecting Nigerian farmers through irregular rainfall patterns, increased temperatures, and more frequent droughts and floods. Our program trains farmers in climate-smart agriculture techniques that build resilience to these changes:</p>
      
      <ul>
        <li><strong>Drought-resistant crop varieties</strong> that can thrive with less water</li>
        <li><strong>Intercropping and crop rotation</strong> to improve soil health and reduce pest problems</li>
        <li><strong>Agroforestry</strong> - integrating trees with crops to provide shade, prevent erosion, and create additional income sources</li>
        <li><strong>Water harvesting and conservation</strong> techniques to maximize available water</li>
        <li><strong>Organic fertilizers and pest management</strong> to reduce dependence on expensive chemical inputs</li>
      </ul>
      
      <p>Mr. Adewale, a farmer in Ife who has adopted these practices, reports: "Before, I would lose most of my crops during dry spells. Now, with the drought-resistant cassava varieties and water conservation techniques, I can harvest even in difficult years. My yield has increased by 40%."</p>
      
      <h2>Farmer Field Schools</h2>
      
      <p>Knowledge sharing is at the heart of our approach. We establish Farmer Field Schools where agricultural experts work directly with groups of farmers in their fields, providing hands-on training and allowing farmers to experiment with new techniques in a low-risk environment.</p>
      
      <p>These schools create a community of practice where farmers learn from experts and from each other, adapting techniques to their specific conditions and sharing successful innovations.</p>
      
      <h2>Market Access and Value Addition</h2>
      
      <p>Producing more food is only beneficial if farmers can sell their surplus at fair prices. Our program helps farmers:</p>
      
      <ul>
        <li>Form cooperatives to aggregate produce and access larger markets</li>
        <li>Develop simple food processing techniques to add value and extend shelf life</li>
        <li>Connect with buyers through market linkage initiatives</li>
        <li>Access price information to strengthen their negotiating position</li>
      </ul>
      
      <p>A women's cooperative in Ilesha has used these strategies to process cassava into garri and cassava flour, increasing their income by 60% compared to selling raw cassava.</p>
      
      <h2>Seed Banks and Biodiversity</h2>
      
      <p>Nigeria's agricultural biodiversity is a valuable resource that is increasingly threatened. Our program establishes community seed banks where traditional crop varieties are preserved and shared among farmers.</p>
      
      <p>These local varieties, adapted to local conditions over generations, often have natural resistance to pests and diseases and can be crucial for adaptation to climate change.</p>
      
      <h2>Impact and Expansion</h2>
      
      <p>To date, our Sustainable Agriculture Program has worked with 1,500 farmers in Osun State, resulting in:</p>
      
      <ul>
        <li>Average yield increases of 35-50%</li>
        <li>Improved food security for 7,500 family members</li>
        <li>Increased income from surplus sales and value-added products</li>
        <li>Enhanced resilience to climate variability</li>
        <li>Reduced environmental impact through decreased chemical use</li>
      </ul>
      
      <p>We're now expanding the program to Ogun State, with a focus on young farmers who can drive agricultural innovation for decades to come.</p>
      
      <p>With your support, we can help more Nigerian farmers adopt sustainable practices that feed communities today while preserving the land for future generations.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "March 5, 2025",
    author: "Oluwaseun Adeyemi",
    category: "Agriculture",
    featured: false,
    relatedPosts: ["3", "1"],
  },
  {
    id: "6",
    title: "The Power of Volunteerism: Stories from the Field",
    excerpt: "Volunteers share their experiences and the profound impact of giving their time to help others.",
    content: `
      <p>Volunteers are the lifeblood of our organization, bringing energy, skills, and compassion to our work across Nigeria. Their contributions extend far beyond the hours they give—they build connections, share knowledge, and often transform their own lives in the process.</p>
      
      <p>In this article, we share stories from some of our dedicated volunteers who are making a difference in communities from Lagos to Osun State.</p>
      
      <h2>Medical Outreach: Dr. Chidi's Story</h2>
      
      <p>Dr. Chidi Nnamdi, a physician in Lagos, volunteers with our medical outreach program that provides free healthcare services to underserved communities.</p>
      
      <p>"As a doctor in a private hospital, I mostly see patients who can afford healthcare," he explains. "Volunteering with the medical outreach team allows me to reach people who would otherwise have no access to medical care."</p>
      
      <p>During a recent outreach to a rural community in Ogun State, Dr. Chidi treated an elderly woman with undiagnosed hypertension. "We were able to start her on medication and connect her with a local health center for follow-up care. Without the outreach, she might have suffered a stroke or heart attack without ever knowing she had high blood pressure."</p>
      
      <p>Dr. Chidi volunteers one weekend each month. "It's exhausting but incredibly fulfilling. The gratitude from patients and the camaraderie with other volunteer healthcare workers keeps me coming back."</p>
      
      <h2>Education Support: Amina's Story</h2>
      
      <p>Amina Yusuf, a university student in Lagos, volunteers as a tutor in our after-school program for children from low-income families.</p>
      
      <p>"I was fortunate to have educational opportunities that many Nigerian children don't have," she says. "Tutoring is my way of paying it forward."</p>
      
      <p>Twice a week, Amina helps students with mathematics and science. She's particularly proud of a girl named Fatima who went from failing mathematics to achieving one of the highest scores in her class.</p>
      
      <p>"Seeing Fatima's confidence grow has been amazing," Amina shares. "She now talks about becoming an engineer, which she never thought possible before."</p>
      
      <p>The experience has also influenced Amina's career plans. "I was studying business, but this volunteer work has inspired me to pursue education policy. I want to help create systemic changes that give all Nigerian children access to quality education."</p>
      
      <h2>Disaster Response: Emeka's Story</h2>
      
      <p>Emeka Obi, a civil engineer from Enugu, joined our disaster response volunteer team after his own community was affected by flooding.</p>
      
      <p>"When the floods came to my hometown, Charity Foundation was there with relief supplies and support," he recalls. "I saw firsthand how much difference volunteers can make in a crisis, and I wanted to be part of that."</p>
      
      <p>After receiving training in disaster response, Emeka has deployed to three emergency situations, including recent flooding in Ogun State.</p>
      
      <p>"As an engineer, I help assess structural damage and advise on safe shelter options," he explains. "But I also distribute relief supplies, set up temporary shelters, and sometimes just listen to people who have lost everything. In a disaster, everyone does whatever is needed."</p>
      
      <p>The work is challenging but rewarding. "When you're helping people on the worst day of their lives, you form connections that are hard to describe. I've learned so much about resilience and community from the people we serve."</p>
      
      <h2>Corporate Volunteering: First Bank Team</h2>
      
      <p>Not all volunteers come as individuals. Many Nigerian companies partner with us for corporate volunteering days that allow employees to give back while building team spirit.</p>
      
      <p>A team from First Bank recently spent a day renovating a primary school in Lagos, painting classrooms, repairing furniture, and creating an educational mural.</p>
      
      <p>"It was incredible to see the transformation in just one day," says Nneka Eze, who organized the event for her department. "When the children saw their bright new classrooms, their faces lit up with excitement."</p>
      
      <p>Beyond the physical improvements, the day created lasting connections. "Several of our team members have continued to volunteer individually, and the bank has expanded its support for educational initiatives," Nneka reports.</p>
      
      <h2>Join Our Volunteer Community</h2>
      
      <p>These stories represent just a few of the hundreds of volunteers who contribute their time and talents to our work across Nigeria. Each brings unique skills and perspectives, but all share a commitment to creating positive change in their communities.</p>
      
      <p>Whether you can give a few hours, a regular commitment, or specialized professional skills, your contribution as a volunteer makes a difference. Visit our volunteer page to learn about current opportunities and how to get involved.</p>
      
      <p>As Dr. Chidi puts it: "Volunteering isn't just about what you give—it's also about what you receive. The experience has enriched my life in ways I never expected."</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "February 18, 2025",
    author: "Tolu Adeleke",
    category: "Volunteering",
    featured: false,
    relatedPosts: ["4", "2"],
  },
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    return {
      title: "Blog Post Not Found - Charity Foundation Nigeria",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - Charity Foundation Nigeria`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/blog">Return to Blog</Link>
          </Button>
        </div>
      </main>
    )
  }

  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map((id) => blogPosts.find((post) => post.id === id)).filter(Boolean)
    : []

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="flex items-center justify-center text-sm mb-4 space-x-4">
            <span className="bg-white/20 px-3 py-1 rounded-full">{post.category}</span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="relative h-[400px] w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-8">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

          {/* Share Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-6 rounded-xl mb-12">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold mb-2">Share this article</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Share on Facebook</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Share on Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Link>
              </div>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map(
                  (relatedPost) =>
                    relatedPost && (
                      <div
                        key={relatedPost.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="relative h-48">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {relatedPost.category}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{relatedPost.date}</span>
                            <User className="h-4 w-4 mr-1" />
                            <span>{relatedPost.author}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{relatedPost.title}</h3>
                          <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>

                          <Button asChild variant="outline" className="rounded-full">
                            <Link href={`/blog/${relatedPost.id}`}>
                              Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ),
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">
              Stay updated with our latest news, stories, and upcoming events. We'll send you a monthly digest of our
              most important updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button type="submit" variant="secondary" className="rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

