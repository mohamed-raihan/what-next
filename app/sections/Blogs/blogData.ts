import { API_URL } from "@/app/api-services/api_url";
import api from "@/app/api-services/axios";

export interface BlogData {
  title: string;
  slug: string;
  author: string;
  date: string;
  mainImage: string;
  content: string;
  tags: string[];
  category: string;
  readTime: string;
}

export async function getBlogCategories() {
  const response = await api.get(API_URL.BLOGS.GET_BLOG_CATEGORIES);
  const data = await response.data;
  return data;
}

export const blogData: Record<string, BlogData> = {

  'why-canada-top-choice': {
    title: 'Why Canada Remains A Top Choice For Indian Students',
    slug: 'why-canada-top-choice',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/canadaBlog.svg',
    content: `<h1><b>Why Canada Remains a Top Choice for Indian Students</b></h1>
<p>
  Canada has consistently ranked among the top destinations for international education—and for Indian students, it stands out as a preferred choice. Over the past decade, thousands of Indian students have chosen Canada to pursue their academic and professional dreams. So, what makes Canada so attractive to aspiring students from India?
</p>
<br />
<h3>1. <b>World-Class Education and Globally Recognized Institutions</b></h3>
<p>
  Canada is home to some of the world&apos;s leading universities and colleges. Institutions like the University of Toronto, University of British Columbia, McGill University, and many others offer high academic standards, cutting-edge research opportunities, and career-oriented programs across various disciplines. A Canadian degree is globally recognized and respected by employers and academic institutions worldwide.
</p>
<br />
<h3>2. <b>Affordable Education with Scholarship Options</b></h3>
<p>
  Compared to countries like the USA, UK, or Australia, Canada offers relatively affordable tuition fees. Additionally, there are numerous scholarship options available for international students, including those funded by the government, individual universities, and private organizations. These financial supports make studying in Canada more accessible for Indian students.
</p>
<br />
<h3>3. <b>Friendly and Inclusive Immigration Policies</b></h3>
<p>
  Canada is known for its welcoming stance toward immigrants. With the availability of post-graduate work permits (up to 3 years), students can gain valuable international work experience after completing their studies. Moreover, immigration pathways like the Canadian Experience Class (CEC) and Provincial Nominee Program (PNP) allow students to apply for permanent residency—making Canada not just a place to study, but also to settle and build a future.
</p>
<br />
<h3>4. <b>A Safe, Multicultural Environment</b></h3>
<p>
  Canada consistently ranks as one of the safest countries in the world. It&apos;s also highly multicultural, with a significant Indian diaspora. Indian students feel comfortable and supported in communities that celebrate cultural diversity, inclusion, and mutual respect.
</p>
<br />
<h3>5. <b>High Quality of Life</b></h3>
<p>
  Canada offers a high standard of living with excellent healthcare, infrastructure, and social services. Cities like Toronto, Vancouver, and Montreal offer vibrant student life, job opportunities, and cultural exposure, ensuring a balanced and fulfilling experience both inside and outside the classroom.
</p>`,
    tags: ['Canada', 'Study Abroad', 'Indian Students'],
    category: 'Canada',
    readTime: '20 mins',  
  },

  'study-in-australia': {
    title: 'Study In Australia',
    slug: 'study-in-australia',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/study-in-australia.webp',
    content: `<h1><b>Discover Australia: Your Gateway to Global Success</b></h1>
        <br />
        <h2>Thinking of Studying Abroad? Here's Why Australia Could Be Your Best Decision Yet</h2>
        <br />
        <p>
            When Indian students dream of studying abroad, Australia stands out as a land full of promise. It's not just about world-class education — it's about launching a career, gaining global exposure, and living in a vibrant, welcoming society.
        </p>
        <br />
        <h1><b>What Makes Australia the Smart Choice?</b></h1>
        <br />
        <h3>1. <b>Globally Trusted Degrees</b></h3>
        <p>
            Whether you're looking at business, engineering, IT, or healthcare, Australian universities are globally respected. Graduates from institutions like the University of Queensland, Monash, or UNSW are in demand worldwide.
        </p>
        <br />
        <h3>2. <b>Stay and Work After Graduation</b></h3>
        <p>
            Australia's post-study work visa lets you stay and work for up to 4 years, depending on your qualification. It's the perfect way to gain experience and build an international career.
        </p>
        <br />  
        <h3>3. <b>Live and Learn in a Multicultural Hub</b></h3>
        <p>
            From Sydney to Melbourne, cities in Australia are alive with culture, safety, and diversity. You'll meet students from across the world and feel at home from day one.
        </p>
        <br />
        <h3>4. <b>Permanent Residency Pathways</b></h3>
        <p>
            Australia values skilled graduates. After studying and working there, many students take the next step — applying for permanent residency through easy-to-access immigration channels.
        </p>
        <br />
        <h3>5. <b>Financial Support is Within Reach</b></h3>
        <p>
            Think Australia is expensive? Think again. From university-specific scholarships to national aid, there are many ways to make your education affordable.
        </p>
        <br />
        <div class="cta-section">
            <h2>How "What Next" Helps You Every Step of the Way</h2>
            <p>We're not just a consultancy — we're your partner from the first step to your flight. Here's what we offer:</p>
            <br />
            <div class="service-list">
                <ul>
                    <li><b>Career-focused university selection</b></li>
                    <li><b>Complete application and SOP support</b></li>
                </ul>
            </div>
        </div>`,
    tags: ['StudyInAustralia', 'AustralianEducation', 'Indian Students'],
    category: 'Australia',
    readTime: '20 mins',
  },

  'uk-visa-checklist': {
    title: 'UK Visa Checklist',
    slug: 'uk-visa-checklist',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/uk-visa.webp',
    content: `<div class="container">
        <p><b>
            If you are applying for a visa to come to the UK, you need to make sure you have all the necessary documents at the ready. There are a number of supporting documents required to prove your identity and demonstrate that you meet the eligibility criteria for any UK visa application. However, each visa is subject to different requirements and the documents you will need to supply as evidence differs in each case.
        </b></p>
        <br />
        <p>
            Depending on the nature of the visa you are seeking, you may need to provide evidence in the form of financial documents, proof of a relationship with a British citizen, an endorsement or a job offer from an eligible business, and additional documents that demonstrate your eligibility.
        </p>
        <br />
        <p>
            It is best to secure as much evidence as possible, and before you start filling in your visa application form. If, for example, your supporting documents are in a language other than English, you will need to provide a certified translation of each one alongside a copy of the original, and this can take time to prepare. Any delays in sourcing evidence can slow down your visa application and, if you are moving to the UK for work, could affect your relationship with your prospective employer or have other unintended consequences. After all, the timing of a visa application is very important and must be managed carefully.
        </p>
        <br />
        <p>
            By speaking to an expert immigration solicitor, you can find out the correct documents to supply in your specific circumstances, and give yourself a better chance of a successful outcome. Here, the immigration experts at Latitude Law have provided checklists for each of the most common visa types to help you gather the evidence you will need.
        </p>
        <br />
        <h2><b>What supporting documents do you need for a visa application?</b></h2>
        <br />
        <p>
            Every visa application is different, but there are some general documents that you will need to provide in almost all cases. If you are applying from overseas, you will usually need to present supporting documents during an appointment at a visa application centre in your home country. In some cases, you can also upload documents to the online portal where you will fill out your application form.
        </p>
        <br />
        <p>
            Common documents that you will need for most types of UK visa applications include:
        </p>
        <br />
        <ul>
            <li><b>A valid passport or other travel documents:</b> You will need to provide a valid passport that will not expire before the end of your stay in the UK. This should have at least one blank page, on which a sticker or stamp will be applied if your visa is granted.</li>
            <br />
            <li><b>A tuberculosis (TB) test certificate:</b> Applicants from certain countries must supply a valid TB test certificate. This proves that you have undergone an X-ray or other test for TB and been found negative.</li>
            <br />
            <li><b>Biometric information:</b> For stays longer than six months, you will need to provide fingerprints and a digital photograph at a visa application centre. This will be used to issue a biometric residence permit, a legal document that can be used to prove your immigration status.</li>
            <br />
            <li><b>An English language test certificate:</b> For most types of visa, you will need to prove that you have a minimum level of proficiency in the English language. This will usually mean providing a test certificate from an approved English language test, unless you have an exemption. You may be exempt if you hold a degree that was taught or researched in English, or if you come from a majority English-speaking country.</li>
        </ul>
        <br />
        <p>These are the only documents that remain consistent across all types of visa application. However, as we have noted, there are many other types of supporting documents you may be asked to show. The specific documents differ according to the category, and we have explained some of the ones that are most frequently requested. For some of the most common visas, we have identified documents listed below that will support your application in the form of a checklist.</p>
    </div>`,
    tags: ['UK', 'Study Abroad', 'Indian Students'],
    category: 'UK',
    readTime: '20 mins',
  },

  'automated-test-results': {
    title: 'Automated Test Results',
    slug: 'automated-test-results',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/automatedBlog.svg',
    content: `The UK has long been a popular destination for Indian students seeking a high-quality education in a culturally rich and globally connected environment. The country&apose;s prestigious universities consistently rank among the world&apose;s best, offering cutting-edge research opportunities, innovative teaching methods, and a strong emphasis on practical learning. The UK&apose;s education system is designed to foster critical thinking, problem-solving skills, and a global perspective, preparing students for success in a rapidly changing world. The country&apose;s multicultural society makes it an ideal place to study, with a vibrant mix of cultures and languages that create a rich and inclusive learning environment. The UK government has also implemented several initiatives to attract international students, including the Post-Study Work Visa (Subclass 485), which allows graduates to stay and work in the country for up to four years after completing their studies. This visa is particularly beneficial for Indian students, as it provides a pathway to permanent residency and citizenship, making the UK a strong choice for those looking to build a future in the country. The country&apose;s natural beauty, outdoor lifestyle, and strong economy also make it an attractive destination for students, offering a unique blend of academic excellence and a high quality of life. With its commitment to innovation, sustainability, and a focus on international collaboration, the UK continues to be a top choice for Indian students seeking a rewarding and enriching study experience.`,
    tags: ['UK', 'Study Abroad', 'Indian Students'],
    category: 'UK',
    readTime: '20 mins',
  },

  'using-automated-test-results': {
    title: 'Using Automated Test Results',
    slug: 'using-automated-test-results',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/automatedBlog.svg',
    content: `The UK has long been a popular destination for Indian students seeking a high-quality education in a culturally rich and globally connected environment. The country&apose;s prestigious universities consistently rank among the world&apose;s best, offering cutting-edge research opportunities, innovative teaching methods, and a strong emphasis on practical learning. The UK&apose;s education system is designed to foster critical thinking, problem-solving skills, and a global perspective, preparing students for success in a rapidly changing world. The country&apose;s multicultural society makes it an ideal place to study, with a vibrant mix of cultures and languages that create a rich and inclusive learning environment. The UK government has also implemented several initiatives to attract international students, including the Post-Study Work Visa (Subclass 485), which allows graduates to stay and work in the country for up to four years after completing their studies. This visa is particularly beneficial for Indian students, as it provides a pathway to permanent residency and citizenship, making the UK a strong choice for those looking to build a future in the country. The country&apose;s natural beauty, outdoor lifestyle, and strong economy also make it an attractive destination for students, offering a unique blend of academic excellence and a high quality of life. With its commitment to innovation, sustainability, and a focus on international collaboration, the UK continues to be a top choice for Indian students seeking a rewarding and enriching study experience.`,
    tags: ['UK', 'Study Abroad', 'Indian Students'],
    category: 'UK',
    readTime: '20 mins',
  },

  'using-automated-test-results-to-improve-accessibility': {
    title: 'Using Automated Test Results To Improve Accessibility',
    slug: 'using-automated-test-results-to-improve-accessibility',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/automatedBlog.svg',
    content: `<h1><b>Using Automated Test Results To Improve Accessibility in Study Abroad Services</b></h1>

<p>In today&apos;s digital-first world, accessibility is not just a legal or ethical obligation—it&apos;s a key part of creating an inclusive, student-friendly experience. <b>At What Next Study Abroad Consultancy</b>, we&apos;re committed to ensuring that our services are accessible to every aspiring international student, regardless of physical or cognitive limitations. One powerful way we are achieving this is by leveraging <b>automated test results</b> to constantly improve our digital accessibility.</p>
<br />
<h3><b>Why Accessibility Matters in International Education</b></h3>
<br />
<p>Students from across the globe rely on digital platforms to research universities, apply for courses, track visa applications, and attend virtual counseling. If a website or application isn&apos;t accessible, it creates a barrier between the student and their academic future.</p>
<br />
<p>Accessibility means everyone—regardless of disability—can interact with your services efficiently. This includes visually impaired users using screen readers, users with motor impairments navigating by keyboard, and many others.</p>
<br />
<h3><b>The Role of Automated Accessibility Testing</b></h3>
<br />
<p>Automated testing tools like Axe, Lighthouse, and WAVE can scan websites and applications to detect issues such as:</p>
<br />
<ul>
  <li>Missing alt text for images</li>
  <li>Poor color contrast</li>
  <li>Unlabeled form fields</li>
  <li>Improper heading structures</li>
</ul>
<p><b>At What Next</b>, we regularly run these tools across our website and student portal. The insights we gather help us fix problems quickly—often before a student ever encounters them.</p>
<br />
<h3><b>Turning Test Results into Action</b></h3>
<br />
<p>Here&apos;s how we transform test data into meaningful improvements:</p>
<br />
<ol>
  <li><b>Real-Time Monitoring:</b> Automated scans flag new issues as we update pages, helping us maintain high accessibility standards.</li>
  <li><b>Prioritized Fixes:</b> We categorize issues by severity and user impact, ensuring that critical barriers are removed first.</li>
  <li><b>Continuous Learning:</b> Every issue is a learning opportunity. Our development and content teams receive regular training on accessibility best practices.</li>
</ol>
<br />
<h2><b>Benefits for Our Students</b></h2>
<br />
<p>By using automated test results to improve accessibility, students experience:</p>
<br />
<ul>
  <li>Easier navigation on all devices</li>
  <li>Faster access to application tools and information</li>
  <li>Inclusive support regardless of ability or location</li>
  <li>A more professional, trustworthy interaction with our brand</li>
</ul>
<br />
<h2><b>Looking Ahead</b></h2>
<br />
<p>Accessibility is not a one-time task—it&apos;s an ongoing commitment. We&apos;re planning to integrate manual user testing, including feedback from students with disabilities, to supplement our automated systems. Together, these efforts will ensure that What Next Study Abroad Consultancy is a place where every student&apos;s journey begins on equal footing.</p>
<br />
<h2><b>Final Thoughts</b></h2>
<br />
<p>Technology allows us to build smarter, more inclusive systems. By embracing automation and putting student needs first, we can break down digital barriers and empower students from all walks of life to study abroad with confidence.</p>
`,

    tags: ['UK', 'Study Abroad', 'Indian Students','Automation'],
    category: 'USA',
    readTime: '20 mins',
  },

  'usa-f1-visa': {
    title: 'USA F1 Visa',
    slug: 'usa-f1-visa',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/f1-visa.webp',
    content: `<h1><b>USA F1 Visa: Your Gateway to World-Class Education</b></h1>
<br />
<p>The United States has long been a top destination for international students seeking high-quality education, cultural exposure, and global opportunities. If you're planning to study in the U.S., obtaining an <b>F1 Student Visa</b> is your first major step toward making that dream a reality.</p>
<br />
<h3><b>1. What is the F1 Visa?</b></h3>
<p>The F1 Visa is a non-immigrant student visa that allows international students to enter the U.S. and study full-time at accredited academic institutions such as universities, colleges, high schools, or language training programs.</p>
<br />
<h3><b>2. Why Choose the USA for Higher Education?</b></h3>
<ul>
  <li>Home to Ivy League universities and globally ranked institutions</li>
  <li>Diverse programs and research opportunities across disciplines</li>
  <li>Access to cutting-edge technology and innovation hubs</li>
  <li>Exposure to multicultural experiences and global networking</li>
</ul>
<br />
<h3><b>3. Key F1 Visa Requirements</b></h3>
<p>To qualify for an F1 Visa, you must:</p>
<ul>
  <li>Be accepted by a SEVP-approved U.S. institution</li>
  <li>Provide proof of sufficient financial support</li>
  <li>Demonstrate strong ties to your home country</li>
  <li>Intend to return home after completing your studies</li>
</ul>
<br />
<h3><b>4. Application Process Made Simple</b></h3>
<p>Here&apos;s a step-by-step overview:</p>
<ol>
  <li>Secure admission and receive your <b>I-20 form</b> from a U.S. school</li>
  <li>Pay the SEVIS I-901 fee</li>
  <li>Complete the DS-160 online application</li>
  <li>Schedule and attend a visa interview at the U.S. Embassy or Consulate</li>
</ol>
<br />
<h3><b>5. Tips to Ace Your F1 Visa Interview</b></h3>
<ul>
  <li>Be clear and confident about your academic goals</li>
  <li>Explain why you chose your university and course</li>
  <li>Provide strong evidence of your intent to return home</li>
  <li>Carry all supporting documents neatly organized</li>
</ul>
<br />
<h3><b>6. Life After Getting the F1 Visa</b></h3>
<p>With your F1 Visa in hand, you're ready to begin an exciting academic journey in the U.S. From participating in campus life to gaining Optional Practical Training (OPT) experience after graduation, the opportunities are endless!</p>

<p>Start preparing today and take the first step towards achieving your dreams with an F1 Visa!</p>
`,

    tags: ['USA ','F1 Visa', 'Study Abroad', 'Indian Students'],
    category: 'USA',
    readTime: '20 mins',
  },

  'ielts-vs-toefl': { 
    title: 'IELTS Vs TOEFL: Which Exam Should You Take?',
    slug: 'ielts-vs-toefl',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/ielts-toefl.webp',
    content: `<h1><b>IELTS vs TOEFL: Which Exam Should You Take?</b></h1>
    <br />
<p>If you're planning to study abroad in an English-speaking country, chances are you&apose;ll need to prove your English language proficiency. Two of the most popular exams for this purpose are <b>IELTS (International English Language Testing System)</b> and <b>TOEFL (Test of English as a Foreign Language)</b>. But which one is right for you?</p>
<br />
<h3><b>1. Understanding the Basics</b></h3>
<p>Both IELTS and TOEFL test your English proficiency across four key skills: <b>Listening, Reading, Writing, and Speaking</b>. However, their formats and scoring systems differ.</p>
<br />
<h3><b>2. Test Format Comparison</b></h3>
<table border="1" cellspacing="0" cellpadding="8">
  <tr>
    <th>Section</th>
    <th>IELTS</th>
    <th>TOEFL</th>
  </tr>
  <tr>
    <td>Listening</td>
    <td>4 recordings, 40 questions</td>
    <td>Lectures & conversations, 28-39 questions</td>
  </tr>
  <tr>
    <td>Reading</td>
    <td>3 sections, 40 questions</td>
    <td>3-4 passages, 30-40 questions</td>
  </tr>
  <tr>
    <td>Writing</td>
    <td>2 tasks (essay + data interpretation)</td>
    <td>2 tasks (integrated + independent essay)</td>
  </tr>
  <tr>
    <td>Speaking</td>
    <td>Face-to-face interview</td>
    <td>Recorded answers via computer</td>
  </tr>
</table>
<br />
<h3><b>3. IELTS: Key Highlights</b></h3>
<ul>
  <li>Offered in both paper-based and computer-based formats</li>
  <li>Widely accepted in the UK, Australia, Canada, and Europe</li>
  <li>Speaking section is conducted in person</li>
  <li>Scored on a band scale of 1-9</li>
</ul>
<br />
<h3><b>4. TOEFL: Key Highlights</b></h3>
<ul>
  <li>Internet-based test (TOEFL iBT) is most common</li>
  <li>Preferred by universities in the USA</li>
  <li>Entire test (including speaking) is computer-based</li>
  <li>Scored out of 120</li>
</ul>
<br />
<h3><b>5. Which Test Should You Choose?</b></h3>
<p>Here&apos;s a quick guide to help you decide:</p>
<br />
<ul>
  <li><b>Choose IELTS</b> if you&apos;re more comfortable with face-to-face speaking, or applying to institutions in the UK, Australia, or Canada.</li>
  <li><b>Choose TOEFL</b> if you prefer a fully computer-based test and are applying to U.S. universities.</li>
</ul>
<br />
<h3><b>6. Final Thoughts</b></h3>
<p>Both exams are highly respected and accepted worldwide. Your choice should depend on your study destination, test format preference, and personal strengths.</p>
<br />  
<p><b>Pro Tip:</b> Take practice tests for both IELTS and TOEFL to see which one aligns better with your skills before making a decision!</p>
<br />
<p>Whichever you choose, preparation is key. Good luck on your journey to studying abroad!</p>
`,

    tags: ['IELTS', 'TOEFL', 'Study Abroad', 'Indian Students'],
    category: 'USA',
    readTime: '20 mins',
  },
  // Add more blogs here...
}; 