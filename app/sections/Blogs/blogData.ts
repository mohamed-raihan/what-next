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
    content: `The UK has long been a popular destination for Indian students seeking a high-quality education in a culturally rich and globally connected environment. The country&apose;s prestigious universities consistently rank among the world&apose;s best, offering cutting-edge research opportunities, innovative teaching methods, and a strong emphasis on practical learning. The UK&apose;s education system is designed to foster critical thinking, problem-solving skills, and a global perspective, preparing students for success in a rapidly changing world. The country&apose;s multicultural society makes it an ideal place to study, with a vibrant mix of cultures and languages that create a rich and inclusive learning environment. The UK government has also implemented several initiatives to attract international students, including the Post-Study Work Visa (Subclass 485), which allows graduates to stay and work in the country for up to four years after completing their studies. This visa is particularly beneficial for Indian students, as it provides a pathway to permanent residency and citizenship, making the UK a strong choice for those looking to build a future in the country. The country&apose;s natural beauty, outdoor lifestyle, and strong economy also make it an attractive destination for students, offering a unique blend of academic excellence and a high quality of life. With its commitment to innovation, sustainability, and a focus on international collaboration, the UK continues to be a top choice for Indian students seeking a rewarding and enriching study experience.`,
    tags: ['UK', 'Study Abroad', 'Indian Students'],
    category: 'UK',
    readTime: '20 mins',
  },

  'usa-f1-visa': {
    title: 'USA F1 Visa',
    slug: 'usa-f1-visa',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/usaBlog.svg',
    content: `The UK has long been a popular destination for Indian students seeking a high-quality education in a culturally rich and globally connected environment. The country&apose;s prestigious universities consistently rank among the world&apose;s best, offering cutting-edge research opportunities, innovative teaching methods, and a strong emphasis on practical learning. The UK&apose;s education system is designed to foster critical thinking, problem-solving skills, and a global perspective, preparing students for success in a rapidly changing world. The country&apose;s multicultural society makes it an ideal place to study, with a vibrant mix of cultures and languages that create a rich and inclusive learning environment. The UK government has also implemented several initiatives to attract international students, including the Post-Study Work Visa (Subclass 485), which allows graduates to stay and work in the country for up to four years after completing their studies. This visa is particularly beneficial for Indian students, as it provides a pathway to permanent residency and citizenship, making the UK a strong choice for those looking to build a future in the country. The country&apose;s natural beauty, outdoor lifestyle, and strong economy also make it an attractive destination for students, offering a unique blend of academic excellence and a high quality of life. With its commitment to innovation, sustainability, and a focus on international collaboration, the UK continues to be a top choice for Indian students seeking a rewarding and enriching study experience.`,
    tags: ['UK', 'Study Abroad', 'Indian Students'],
    category: 'UK',
    readTime: '20 mins',
  },
  // Add more blogs here...
}; 