import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"

// This would typically come from a database or API
const impactStories = [
  {
    id: "1",
    title: "Clean Water for Maweni Village",
    description:
      "We installed a water purification system that now provides clean drinking water to over 500 people in Maweni Village, Kenya.",
    fullDescription: `
      <p>Access to clean water is a fundamental human right, yet millions of people around the world still lack this basic necessity. In Maweni Village, located in rural Kenya, residents previously had to walk several kilometers each day to collect water from a contaminated river, leading to frequent waterborne illnesses and other health challenges.</p>
      
      <h3>The Challenge</h3>
      
      <p>Before our intervention, the situation in Maweni Village was dire:</p>
      <ul>
        <li>The nearest water source was a river 3 kilometers away, contaminated by agricultural runoff and animal waste</li>
        <li>Women and children spent up to 4 hours daily collecting water, limiting time for education and income-generating activities</li>
        <li>Waterborne diseases like cholera and typhoid were common, especially among children</li>
        <li>The local health clinic reported that over 60% of illnesses treated were related to contaminated water</li>
        <li>School attendance was irregular as children were often sick or needed to help collect water</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>In partnership with local leaders and water engineers, we implemented a comprehensive clean water solution:</p>
      <ul>
        <li>Drilled a borehole to access groundwater at a depth of 120 meters</li>
        <li>Installed a solar-powered pump system to ensure sustainable operation without electricity costs</li>
        <li>Built a 10,000-liter water storage tank and distribution system with six water points throughout the village</li>
        <li>Implemented a water purification system using filtration and UV treatment</li>
        <li>Formed and trained a local water committee to manage and maintain the system</li>
        <li>Conducted community education on water hygiene and conservation</li>
      </ul>
      
      <h3>The Impact</h3>
      
      <p>The results have been transformative for the community:</p>
      <ul>
        <li>Over 500 people now have reliable access to clean, safe drinking water within 300 meters of their homes</li>
        <li>Cases of waterborne diseases have decreased by 80% according to the local health clinic</li>
        <li>School attendance has improved by 35%, with girls showing the most significant improvement</li>
        <li>Women report having 3-4 more hours each day for other activities, including farming and small businesses</li>
        <li>Several small businesses that rely on water have emerged, including a community garden and brick-making enterprise</li>
      </ul>
      
      <h3>Sustainability</h3>
      
      <p>To ensure long-term sustainability, we implemented several key measures:</p>
      <ul>
        <li>The water committee collects small user fees that go into a maintenance fund for future repairs</li>
        <li>Three local residents were trained as technicians who can perform basic maintenance and repairs</li>
        <li>Quarterly water quality testing ensures the system continues to provide safe water</li>
        <li>Solar power eliminates ongoing electricity costs and ensures operation even during power outages</li>
        <li>Regular follow-up visits from our technical team provide additional support as needed</li>
      </ul>
      
      <h3>Personal Stories</h3>
      
      <p>Amina, a mother of four in Maweni Village, shared: "Before the water system, my children were always sick. I spent so much time collecting water and caring for them that I couldn't work or tend to our farm properly. Now, my children are healthier and in school regularly, and I've started a small vegetable garden that brings in extra income for our family."</p>
      
      <p>James, the headteacher at Maweni Primary School, noted: "The difference in our students is remarkable. Attendance has improved significantly, especially among girls who previously missed school to help collect water. Academic performance is improving, and we're seeing fewer children drop out."</p>
      
      <h3>Looking Forward</h3>
      
      <p>Building on the success in Maweni Village, we're expanding our Clean Water Initiative to neighboring communities facing similar challenges. With continued support, we aim to bring clean water to an additional 5,000 people in the region over the next two years.</p>
      
      <p>This project demonstrates how targeted infrastructure investment, combined with community engagement and education, can create lasting positive change that extends far beyond access to clean water—improving health, education, gender equality, and economic opportunity.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    location: "Kenya",
    year: "2024",
    date: "March 15, 2024",
    category: "Water",
    beneficiaries: 500,
    investment: "₦15,000,000",
    partners: ["Local Government", "WaterAid", "Community Leaders"],
    relatedStories: ["5", "3"],
  },
  {
    id: "2",
    title: "New School in Rural Nepal",
    description:
      "Our education initiative built a new school that provides quality education to 200 children in a remote village in Nepal.",
    fullDescription: `
      <p>Education is a powerful tool for breaking the cycle of poverty, yet many children in remote areas of Nepal lack access to quality education facilities. In the mountain village of Gorkha, children previously had to walk several hours each day to reach the nearest school, or study in a damaged building that was unsafe and inadequate for learning.</p>
      
      <h3>The Challenge</h3>
      
      <p>The educational situation in Gorkha village faced several critical challenges:</p>
      <ul>
        <li>The original school building was severely damaged in the 2015 earthquake and deemed unsafe</li>
        <li>Classes were being conducted in temporary shelters that leaked during monsoon season and were cold in winter</li>
        <li>Many children, especially girls, dropped out after primary education due to the 2-hour walk to the nearest secondary school</li>
        <li>The community lacked resources to rebuild the school themselves</li>
        <li>Teacher retention was poor due to inadequate facilities</li>
        <li>Learning materials and resources were extremely limited</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>Working closely with the local community and education authorities, we implemented a comprehensive solution:</p>
      <ul>
        <li>Constructed a new earthquake-resistant school building with 8 classrooms, administrative offices, and sanitation facilities</li>
        <li>Built separate toilet facilities for boys and girls to ensure privacy and encourage girls' attendance</li>
        <li>Installed a clean water system for drinking and handwashing</li>
        <li>Established a library with over 1,000 books in both Nepali and English</li>
        <li>Equipped classrooms with desks, chairs, blackboards, and teaching aids</li>
        <li>Provided teacher training for 12 local educators</li>
        <li>Implemented a school meal program to improve nutrition and attendance</li>
      </ul>
      
      <h3>The Impact</h3>
      
      <p>The new school has transformed educational opportunities in the community:</p>
      <ul>
        <li>200 children now have access to quality education in a safe, conducive learning environment</li>
        <li>Enrollment has increased by 35%, with the most significant increase among girls</li>
        <li>Dropout rates have decreased from 28% to less than 5%</li>
        <li>Teacher retention has improved, with all teaching positions now filled</li>
        <li>Academic performance has improved, with standardized test scores increasing by an average of 40%</li>
        <li>The first group of students is now preparing for secondary school examinations, with many planning to continue to higher education</li>
      </ul>
      
      <h3>Community Ownership</h3>
      
      <p>To ensure sustainability, we emphasized community involvement throughout the project:</p>
      <ul>
        <li>Local residents contributed labor during construction, creating a sense of ownership</li>
        <li>A School Management Committee was formed with representatives from parents, teachers, and community leaders</li>
        <li>Parents and community members participate in regular school maintenance days</li>
        <li>Local farmers contribute to the school meal program</li>
        <li>The community has established a small fund for ongoing maintenance and improvements</li>
      </ul>
      
      <h3>Personal Stories</h3>
      
      <p>Sunita, a 12-year-old student, shared: "I used to hate going to school because the temporary shelter was always cold and wet. Now, I love coming to our new school. I have my own desk, we have a library with many books, and I'm learning so much. I want to become a teacher someday and help other children in my village."</p>
      
      <p>Ram, the school principal, noted: "The transformation has been incredible. Before, we struggled to keep teachers and students. Now, we have a waiting list of teachers who want to work here, and our students are thriving. Parents who previously saw little value in education are now encouraging their children to study and have aspirations for their futures."</p>
      
      <h3>Looking Forward</h3>
      
      <p>Building on the success in Gorkha village, we're expanding our Education Initiative to other remote communities in Nepal. We're also developing a scholarship program to support promising students from the village who wish to pursue higher education.</p>
      
      <p>This project demonstrates how investing in quality educational infrastructure and resources can transform not just individual lives but entire communities, creating pathways out of poverty and opening doors to new opportunities.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    location: "Nepal",
    year: "2023",
    date: "November 10, 2023",
    category: "Education",
    beneficiaries: 200,
    investment: "₦25,000,000",
    partners: ["Nepal Ministry of Education", "Local Community", "Engineers Without Borders"],
    relatedStories: ["4", "6"],
  },
  {
    id: "3",
    title: "Emergency Relief After Hurricane",
    description:
      "We provided emergency supplies, temporary shelter, and medical aid to 1,500 people affected by a devastating hurricane in the Caribbean.",
    fullDescription: `
      <p>When Hurricane Maria struck the Caribbean in September 2023, it left a trail of destruction across several islands. Communities lost homes, infrastructure, and access to basic necessities like clean water, food, and healthcare. Our emergency response team mobilized quickly to provide critical aid to those most affected.</p>
      
      <h3>The Crisis</h3>
      
      <p>The situation in the aftermath of Hurricane Maria was dire:</p>
      <ul>
        <li>Winds of over 280 km/h and torrential rain caused catastrophic damage</li>
        <li>Over 3,000 homes were destroyed or severely damaged</li>
        <li>Critical infrastructure including roads, water systems, and power lines was devastated</li>
        <li>Healthcare facilities were damaged and overwhelmed with patients</li>
        <li>Food and water supplies were contaminated or inaccessible</li>
        <li>Many communities were completely cut off due to blocked roads and damaged bridges</li>
      </ul>
      
      <h3>Our Response</h3>
      
      <p>Within 48 hours of the hurricane, our emergency response team was on the ground, working with local authorities and other humanitarian organizations to:</p>
      <ul>
        <li>Distribute emergency food packages to 500 families</li>
        <li>Provide clean drinking water through water purification systems and bottled water distribution</li>
        <li>Set up temporary shelter for 300 families whose homes were destroyed</li>
        <li>Establish mobile medical clinics that treated over 800 patients</li>
        <li>Distribute hygiene kits and essential non-food items</li>
        <li>Help clear roads and establish access to isolated communities</li>
        <li>Provide psychosocial support to traumatized survivors, especially children</li>
      </ul>
      
      <h3>The Impact</h3>
      
      <p>Our emergency response reached approximately 1,500 people across the most affected areas:</p>
      <ul>
        <li>Immediate life-saving assistance prevented further loss of life</li>
        <li>Waterborne disease outbreaks were prevented through clean water provision and hygiene promotion</li>
        <li>Medical treatment was provided for injuries, infections, and chronic conditions</li>
        <li>Temporary shelter protected families from the elements during the critical first weeks</li>
        <li>Food security was maintained during the period when local markets were non-functional</li>
        <li>Children received psychosocial support to help them process the traumatic experience</li>
      </ul>
      
      <h3>Beyond Emergency Relief</h3>
      
      <p>As the immediate emergency phase transitioned to early recovery, we expanded our support to include:</p>
      <ul>
        <li>Distribution of shelter repair kits to families whose homes were damaged but repairable</li>
        <li>Cash assistance to 200 households to help restart livelihoods</li>
        <li>Support for local schools to resume classes as quickly as possible</li>
        <li>Training in disaster preparedness to build community resilience for future events</li>
        <li>Advocacy for "building back better" to reduce vulnerability to future disasters</li>
      </ul>
      
      <h3>Personal Stories</h3>
      
      <p>Maria, a mother of three whose home was destroyed, shared: "When the hurricane hit, we lost everything. We had nowhere to go and no food for the children. The emergency team came with tents, food, and clean water. The doctors treated my youngest son who had a high fever. Without this help, I don't know what would have happened to us."</p>
      
      <p>Dr. James, who volunteered with our medical team, noted: "The conditions were challenging, but the team's quick response made a real difference. We treated everything from injuries sustained during the hurricane to chronic conditions that had gone untreated because local health facilities were damaged. The gratitude from patients was overwhelming."</p>
      
      <h3>Lessons Learned</h3>
      
      <p>Each emergency response provides valuable lessons that help us improve future interventions:</p>
      <ul>
        <li>Pre-positioning emergency supplies in hurricane-prone regions allows for faster response</li>
        <li>Strong partnerships with local organizations are essential for effective coordination</li>
        <li>Community engagement from the earliest stages improves the relevance and acceptance of aid</li>
        <li>Integrating early recovery planning into the emergency response creates a smoother transition</li>
        <li>Psychosocial support is as important as material assistance, especially for children</li>
      </ul>
      
      <h3>Looking Forward</h3>
      
      <p>Building on our experience responding to Hurricane Maria, we're strengthening our emergency preparedness and response capacity. This includes pre-positioning supplies in strategic locations, expanding our network of trained emergency responders, and working with communities on disaster risk reduction measures.</p>
      
      <p>While we hope that such devastating events can be prevented, we remain ready to respond quickly and effectively when disasters strike, bringing critical aid to those who need it most.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    location: "Haiti",
    year: "2023",
    date: "September 25, 2023",
    category: "Emergency Relief",
    beneficiaries: 1500,
    investment: "₦30,000,000",
    partners: ["Red Cross", "Local Government", "UN Agencies"],
    relatedStories: ["1", "5"],
  },
  {
    id: "4",
    title: "Women's Empowerment Program",
    description:
      "Our microfinance program helped 300 women start their own businesses, improving their financial independence and family well-being.",
    fullDescription: `
      <p>Economic empowerment is a powerful tool for transforming women's lives and their communities. In rural India, many women have limited access to financial services, education, and economic opportunities, keeping them and their families trapped in cycles of poverty. Our Women's Empowerment Program in Maharashtra state has helped break these cycles by providing microfinance, training, and support to women entrepreneurs.</p>
      
      <h3>The Challenge</h3>
      
      <p>Women in rural Maharashtra faced numerous barriers to economic participation:</p>
      <ul>
        <li>Limited access to formal financial services like loans and savings accounts</li>
        <li>High interest rates from informal moneylenders (often 50-100% annually)</li>
        <li>Lack of business skills and financial literacy</li>
        <li>Limited mobility and market access</li>
        <li>Social norms that discouraged women's economic participation</li>
        <li>Time poverty due to household responsibilities</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>We implemented a comprehensive approach that addressed both financial and non-financial barriers:</p>
      <ul>
        <li>Formed 30 self-help groups with 10-15 women each</li>
        <li>Provided microloans ranging from ₹10,000 to ₹50,000 (approximately ₦50,000 to ₦250,000) for business start-up or expansion</li>
        <li>Delivered training in financial literacy, business planning, and management</li>
        <li>Offered skills development in areas like tailoring, food processing, and handicrafts</li>
        <li>Created market linkages through exhibitions and buyer connections</li>
        <li>Facilitated peer learning and mentorship among women entrepreneurs</li>
        <li>Engaged with families and communities to build support for women's economic activities</li>
      </ul>
      
      <h3>The Impact</h3>
      
      <p>The program has created significant positive change for participants and their communities:</p>
      <ul>
        <li>300 women have started or expanded businesses in sectors including tailoring, food processing, livestock, retail, and handicrafts</li>
        <li>Average household income has increased by 65%</li>
        <li>Loan repayment rate exceeds 98%</li>
        <li>Women report greater decision-making power within their households</li>
        <li>Children's school enrollment has increased, especially for girls</li>
        <li>Participants have improved access to healthcare and nutrition</li>
        <li>The businesses have created employment for an additional 150 community members</li>
      </ul>
      
      <h3>Beyond Financial Gains</h3>
      
      <p>The impact of the program extends far beyond economic improvements:</p>
      <ul>
        <li>Women report increased confidence and self-esteem</li>
        <li>Participants have greater mobility and social networks</li>
        <li>Several women have taken on leadership roles in their communities</li>
        <li>Domestic violence has reportedly decreased in families of participants</li>
        <li>Attitudes toward women's economic participation have become more positive</li>
        <li>The self-help groups have begun addressing other community issues beyond economic concerns</li>
      </ul>
      
      <h3>Personal Stories</h3>
      
      <p>Lakshmi, who started a tailoring business with a ₹15,000 loan, shared: "Before joining the program, I was completely dependent on my husband's income, which was irregular. Now I earn ₹8,000-10,000 per month from my tailoring shop. I've hired two assistants, and we're getting orders from nearby towns. I've been able to send my daughter to a better school and save for her college education. My husband now respects my opinion in family decisions."</p>
      
      <p>Sunita, who leads one of the self-help groups, noted: "When we first started meeting, many women were shy and wouldn't speak. Now they confidently discuss business plans and negotiate with suppliers and customers. We've also started addressing other issues in our village, like water access and girls' education. The change I've seen in these women is remarkable."</p>
      
      <h3>Sustainability</h3>
      
      <p>The program is designed for long-term sustainability:</p>
      <ul>
        <li>Loan repayments go into a revolving fund that provides loans to new participants</li>
        <li>Self-help groups are being linked to formal banking institutions</li>
        <li>Advanced participants mentor newcomers to the program</li>
        <li>Local women are being trained as program facilitators</li>
        <li>Successful entrepreneurs are forming business associations for ongoing support and advocacy</li>
      </ul>
      
      <h3>Looking Forward</h3>
      
      <p>Building on the success in Maharashtra, we're expanding the Women's Empowerment Program to other states in India. We're also developing advanced business development services for graduates of the basic program who are ready to scale their enterprises to the next level.</p>
      
      <p>This project demonstrates how targeted support for women's economic empowerment can create ripple effects that benefit entire families and communities, addressing not just income poverty but also gender inequality and social exclusion.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    location: "India",
    year: "2022",
    date: "June 15, 2022",
    category: "Empowerment",
    beneficiaries: 300,
    investment: "₦20,000,000",
    partners: ["Local Women's Groups", "Microfinance Institutions", "Skills Training Centers"],
    relatedStories: ["2", "6"],
  },
  {
    id: "5",
    title: "Healthcare Clinic in Rural Community",
    description:
      "We established a healthcare clinic that provides essential medical services to over 5,000 people in a previously underserved area.",
    fullDescription: `
      <p>Access to healthcare is a fundamental right, yet millions of people in rural areas around the world lack basic medical services. In the remote region of Alta Verapaz, Guatemala, indigenous communities previously had to travel up to eight hours to reach the nearest healthcare facility, resulting in preventable suffering and deaths. Our Rural Healthcare Initiative has changed this reality by establishing a permanent clinic that serves over 5,000 people across 12 villages.</p>
      
      <h3>The Challenge</h3>
      
      <p>The healthcare situation in Alta Verapaz faced multiple challenges:</p>
      <ul>
        <li>The nearest hospital was 80 kilometers away on poor roads, requiring up to 8 hours of travel</li>
        <li>Transportation costs to reach medical care often exceeded monthly household incomes</li>
        <li>Preventable and treatable conditions frequently became life-threatening due to delayed care</li>
        <li>Maternal and infant mortality rates were among the highest in the country</li>
        <li>Vaccination rates were below 40% for children under five</li>
        <li>Language barriers (most residents speak Q'eqchi' Maya) further limited access to care</li>
        <li>Cultural barriers and mistrust of formal healthcare systems discouraged seeking treatment</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>Working closely with local communities and health authorities, we implemented a comprehensive solution:</p>
      <ul>
        <li>Constructed a permanent healthcare clinic with examination rooms, a small laboratory, pharmacy, and maternity area</li>
        <li>Staffed the clinic with a doctor, two nurses, and a midwife who speak the local language</li>
        <li>Trained 24 community health workers from surrounding villages</li>
        <li>Established a regular schedule of specialist visits (pediatrician, dentist, gynecologist)</li>
        <li>Implemented a motorcycle ambulance service for emergencies</li>
        <li>Created a culturally appropriate health education program</li>
        <li>Developed a referral system with the regional hospital for complex cases</li>
      </ul>
      
      <h3>The Impact</h3>
      
      <p>The clinic has transformed healthcare access and outcomes in the region:</p>
      <ul>
        <li>Over 5,000 people now have access to primary healthcare within 1-2 hours of their homes</li>
        <li>The clinic provides approximately 500 consultations per month</li>
        <li>Vaccination rates have increased to over 85% for children under five</li>
        <li>Maternal mortality has decreased by 60% in the service area</li>
        <li>Chronic conditions like hypertension and diabetes are now being managed effectively</li>
        <li>Early diagnosis and treatment have reduced complications from common illnesses</li>
        <li>Community health workers have conducted over 1,000 home visits for health education and monitoring</li>
      </ul>
      
      <h3>Cultural Integration</h3>
      
      <p>A key aspect of the clinic's success has been its cultural sensitivity and integration:</p>
      <ul>
        <li>Traditional birth attendants work alongside the clinic midwife, combining traditional practices with modern medical care</li>
        <li>The clinic includes a medicinal plant garden that acknowledges and incorporates traditional healing</li>
        <li>Health education materials are available in Q'eqchi' Maya with culturally appropriate illustrations</li>
        <li>Community health committees provide input on clinic operations and services</li>
        <li>Local cultural events and ceremonies are respected and sometimes incorporated into health promotion activities</li>
      </ul>
      
      <h3>Personal Stories</h3>
      
      <p>Maria, a mother of four, shared: "When my youngest son had a high fever and difficulty breathing, I was terrified. Before the clinic, we would have had to find money for transportation and travel all day to reach a doctor. Instead, we reached the clinic in one hour, and they treated his pneumonia immediately. They saved his life."</p>
      
      <p>Carlos, a community health worker, noted: "I'm proud to serve my community. I visit families in my village regularly to check on pregnant women, monitor children's growth, and teach about disease prevention. People trust me because I speak their language and understand their traditions. When someone needs more help, I can connect them with the clinic."</p>
      
      <h3>Sustainability</h3>
      
      <p>To ensure long-term sustainability, we've implemented several key measures:</p>
      <ul>
        <li>The clinic operates on a sliding scale fee system, with services free for those unable to pay</li>
        <li>The Ministry of Health provides vaccines and some essential medications</li>
        <li>A portion of operational costs is covered by a community health insurance scheme</li>
        <li>Local government has committed to gradually increasing its financial support</li>
        <li>The clinic serves as a training site for medical and nursing students, who contribute to service delivery</li>
      </ul>
      
      <h3>Looking Forward</h3>
      
      <p>Building on the success of this clinic, we're working to expand the model to other underserved regions. We're also developing a telemedicine program to connect the clinic with specialists for consultation on complex cases, further reducing the need for patients to travel long distances for care.</p>
      
      <p>This project demonstrates how targeted healthcare infrastructure, combined with cultural sensitivity and community engagement, can dramatically improve health outcomes and quality of life in remote rural areas.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    location: "Guatemala",
    year: "2022",
    date: "August 30, 2022",
    category: "Healthcare",
    beneficiaries: 5000,
    investment: "₦35,000,000",
    partners: ["Ministry of Health", "Doctors Without Borders", "Local Community Council"],
    relatedStories: ["3", "1"],
  },
  {
    id: "6",
    title: "Sustainable Agriculture Training",
    description:
      "Our agricultural program trained 150 farmers in sustainable farming techniques, improving crop yields and food security.",
    fullDescription: `
      <p>Agriculture is the backbone of Uganda's economy and the primary livelihood for millions of rural families. However, many small-scale farmers struggle with declining soil fertility, erratic rainfall patterns due to climate change, and limited access to modern agricultural knowledge. Our Sustainable Agriculture Program in eastern Uganda has helped 150 farmers adopt climate-smart farming techniques that increase yields while protecting the environment for future generations.</p>
      
      <h3>The Challenge</h3>
      
      <p>Farmers in the target region faced multiple challenges:</p>
      <ul>
        <li>Declining crop yields due to soil degradation and erosion</li>
        <li>Increasing drought frequency and unpredictable rainfall patterns</li>
        <li>Limited access to quality seeds and inputs</li>
        <li>Reliance on a single crop (maize), creating vulnerability to crop failure</li>
        <li>Post-harvest losses of up to 40% due to poor storage</li>
        <li>Limited market access and unfavorable prices for produce</li>
        <li>Traditional farming methods that were becoming less effective in changing conditions</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>Working with agricultural experts and local farmers, we implemented a comprehensive program:</p>
      <ul>
        <li>Established 5 Farmer Field Schools where farmers learn and experiment with new techniques</li>
        <li>Trained farmers in climate-smart agriculture practices including:
          <ul>
            <li>Conservation agriculture (minimum tillage, crop rotation, soil cover)</li>
            <li>Agroforestry (integrating trees with crops)</li>
            <li>Water harvesting and irrigation techniques</li>
            <li>Organic pest management and composting</li>
            <li>Crop diversification and intercropping</li>
          </ul>
        </li>
        <li>Introduced drought-resistant crop varieties</li>
        <li>Provided training in improved post-harvest handling and storage</li>
        <li>Established seed banks for local seed preservation and exchange</li>
        <li>Formed farmer cooperatives for collective marketing</li>
        <li>Connected farmers with fair trade buyers and value-addition opportunities</li>
      </ul>
      
      <h3>The Impact</h3>
      
      <p>The program has created significant improvements for participating farmers and their communities:</p>
      <ul>
        <li>Average crop yields have increased by 40-60% across different crops</li>
        <li>Soil health has improved, with increased organic matter and water retention</li>
        <li>Crop diversity has increased from an average of 2 crops to 5-7 crops per farm</li>
        <li>Farmers report greater resilience to drought and heavy rainfall events</li>
        <li>Post-harvest losses have been reduced to less than 15%</li>
        <li>Household food security has improved, with families reporting more consistent food availability throughout the year</li>
        <li>Income from agricultural activities has increased by an average of 45%</li>
        <li>The techniques have spread to an additional 300 farmers through peer learning</li>
      </ul>
      
      <h3>Environmental Benefits</h3>
      
      <p>Beyond productivity and income improvements, the program has created significant environmental benefits:</p>
      <ul>
        <li>Reduced soil erosion and improved soil structure</li>
        <li>Increased biodiversity on farms and surrounding areas</li>
        <li>Reduced use of chemical pesticides and fertilizers</li>
        <li>Improved water management and conservation</li>
        <li>Carbon sequestration through agroforestry and improved soil organic matter</li>
        <li>Preservation of local crop varieties and agricultural biodiversity</li>
      </ul>
      
      <h3>Personal Stories</h3>
      
      <p>John, a farmer who has adopted conservation agriculture techniques, shared: "Before the training, I was thinking of leaving farming because my harvests were getting smaller every year. Now, my soil is healthier, and I'm growing more food than ever before. Even when we had a drought last year, my crops survived when many others failed. I've added fruit trees and vegetables to my farm, so my family eats better food, and I have different products to sell throughout the year."</p>
      
      <p>Sarah, who leads a women's farming cooperative, noted: "The training changed how we think about farming. We now see our farms as systems that need care, not just land to extract from. Women in our group have become leaders in sustainable farming. We're teaching others and even selling our organic produce at a premium. Our children are healthier, and we can pay school fees more easily."</p>
      
      <h3>Sustainability and Scaling</h3>
      
      <p>The program is designed for long-term sustainability and expansion:</p>
      <ul>
        <li>Farmer-to-farmer training ensures knowledge continues to spread</li>
        <li>Lead farmers have been equipped to continue demonstration and training activities</li>
        <li>The techniques require minimal external inputs, making them accessible to resource-poor farmers</li>
        <li>Seed banks and farmer cooperatives are self-sustaining after initial support</li>
        <li>Local agricultural extension officers have been involved throughout to continue support</li>
      </ul>
      
      <h3>Looking Forward</h3>
      
      <p>Building on the success in eastern Uganda, we're expanding the Sustainable Agriculture Program to other regions facing similar challenges. We're also developing advanced components focused on value addition and market access to help farmers further increase their incomes from sustainable production.</p>
      
      <p>This project demonstrates how environmentally sound agricultural practices can also be economically beneficial, creating a win-win situation for farmers and the planet. By working with nature rather than against it, small-scale farmers can build resilience to climate change while improving their livelihoods and food security.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    location: "Uganda",
    year: "2021",
    date: "December 10, 2021",
    category: "Agriculture",
    beneficiaries: 150,
    investment: "₦18,000,000",
    partners: ["Ministry of Agriculture", "Local Farmers' Association", "Agricultural Research Institute"],
    relatedStories: ["4", "2"],
  },
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const story = impactStories.find((story) => story.id === params.id)

  if (!story) {
    return {
      title: "Impact Story Not Found - Charity Foundation Nigeria",
      description: "The requested impact story could not be found.",
    }
  }

  return {
    title: `${story.title} - Charity Foundation Nigeria`,
    description: story.description,
  }
}

export default function ImpactStoryPage({ params }: { params: { id: string } }) {
  const story = impactStories.find((story) => story.id === params.id)

  if (!story) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Impact Story Not Found</h1>
          <p className="text-gray-600 mb-6">The impact story you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/impact">Return to Impact</Link>
          </Button>
        </div>
      </main>
    )
  }

  const relatedStories = story.relatedStories
    ? story.relatedStories.map((id) => impactStories.find((s) => s.id === id)).filter(Boolean)
    : []

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">{story.category}</span>
            <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">{story.location}</span>
            <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">{story.year}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{story.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">{story.description}</p>
        </div>
      </section>

      {/* Story Content */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="relative h-[400px] w-full">
              <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Beneficiaries</h3>
                  <p className="text-primary text-xl font-bold">{story.beneficiaries.toLocaleString()}</p>
                  <p className="text-gray-600 text-sm">People Impacted</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Investment</h3>
                  <p className="text-primary text-xl font-bold">{story.investment}</p>
                  <p className="text-gray-600 text-sm">Project Budget</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Partners</h3>
                  <p className="text-gray-600 text-sm">{story.partners.join(", ")}</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: story.fullDescription }} />
            </div>
          </div>

          {/* Share Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-6 rounded-xl mb-12">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold mb-2">Share this story</h3>
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
              <Link href="/impact">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Impact
              </Link>
            </Button>
          </div>

          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {story.gallery.map((image, index) => (
                <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${story.title} - image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Related Stories */}
          {relatedStories.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Impact Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedStories.map(
                  (relatedStory) =>
                    relatedStory && (
                      <div
                        key={relatedStory.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="relative h-48">
                          <Image
                            src={relatedStory.image || "/placeholder.svg"}
                            alt={relatedStory.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {relatedStory.category}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{relatedStory.year}</span>
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{relatedStory.location}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{relatedStory.title}</h3>
                          <p className="text-gray-600 mb-4">{relatedStory.description}</p>

                          <Button asChild variant="outline" className="w-full">
                            <Link href={`/impact/${relatedStory.id}`}>Read Full Story</Link>
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

      {/* CTA Section */}
      <section className="w-full py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Help Us Create More Impact</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Your support enables us to continue making a positive difference in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" className="rounded-full px-8 py-6 text-lg font-semibold">
              <Link href="/donate">Make a Donation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-semibold bg-transparent border-2 border-white hover:bg-white/10"
            >
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

