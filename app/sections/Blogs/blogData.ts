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
    content: `Canada continues to be a preferred destination for Indian students, solidifying its position as the Great White North that offers an unparalleled combination of world-class education, multicultural acceptance, and life-changing opportunities. The country&apose;s prestigious universities like the University of Toronto, McGill University, and the University of British Columbia consistently rank among the world&apose;s best while offering significantly more affordable tuition fees compared to the US or UK, making quality education accessible to Indian families without compromising academic excellence. What truly sets Canada apart is its genuine commitment to multiculturalism, creating a welcoming environment where Indian students feel valued and supported, with established diaspora communities providing cultural connections and mentorship networks that ease the transition to international study. The post-graduation landscape is equally compelling, with the Post-Graduation Work Permit (PGWP) allowing graduates to work for up to three years after completion, while immigration-friendly policies through programs like the Canadian Experience Class (CEC) and Provincial Nominee Programs (PNP) provide clear pathways to permanent residence and citizenship. Students benefit from the ability to work part-time during studies (up to 20 hours per week), streamlined visa processes through the Student Direct Stream (SDS) program, and comprehensive support services that include academic guidance, career counseling, and mental health resources. Beyond academics, Canada offers an exceptional quality of life with its reputation as one of the world&apose;s safest countries, stunning natural beauty from the Rocky Mountains to pristine lakes, reasonable living costs compared to other major study destinations, and access to excellent healthcare and social services. The country&apose;s thriving research ecosystem provides opportunities to participate in cutting-edge projects across various fields, while strong industry partnerships create internship and job prospects in growing sectors like technology, healthcare, engineering, and business, particularly in dynamic cities like Toronto&apose;s financial hub, Vancouver&apose;s tech scene, Montreal&apose;s arts and aerospace industries, and Ottawa&apose;s government and international relations sector. With Canada&apose;s focus on innovation, sustainability, and digital advancement in education, combined with expanding program offerings that align with emerging industries, Indian students find themselves at the forefront of global education trends while building networks through established alumni communities and cultural organizations that support both academic success and personal growth. This comprehensive package of academic excellence, cultural acceptance, career opportunities, immigration pathways, and quality of life continues to attract thousands of Indian students annually, many of whom successfully establish careers and contribute to Canadian society, making Canada not just an educational destination but a launching pad for a bright international future that offers the perfect blend of professional growth, personal development, and the promise of building a new life in one of the world&apose;s most progressive and welcoming nations.
Tags: #Canada #StudyAbroad #IndianStudents #InternationalEducation #PostGraduateWorkPermit #CanadianUniversities #StudentVisa #QualityEducation`,
    tags: ['Canada', 'Study Abroad', 'Indian Students'],
    category: 'Canada',
    readTime: '20 mins',
  },

  'study-in-australia': {
    title: 'Study In Australia',
    slug: 'study-in-australia',
    author: 'Admin',
    date: '27 August, 2024',    
    mainImage: '/blogs/australiaBlog.svg',
    content:'Australia stands as the "Land of Opportunities" for international students, offering world-class education through prestigious universities like the University of Melbourne, Australian National University, and University of Sydney that consistently rank among global top institutions. What makes Australia exceptional is its unique blend of academic excellence and practical learning, with extensive work-integrated programs, internships, and industry partnerships in high-demand sectors like engineering, IT, healthcare, and renewable energy. The country&apose;s student-friendly Temporary Graduate visa (subclass 485) allows graduates to work for 2-4 years post-graduation, creating pathways to professional experience and potential permanent residency through skilled migration programs. Australia&apose;s multicultural society welcomes students from over 140 countries, with strong diaspora networks and cultural organizations supporting international students, while cities like Melbourne and Sydney consistently rank among the world&apose;s most liveable cities with excellent healthcare, transportation, and stunning natural landscapes. Financially attractive with competitive tuition fees, abundant scholarships including Australia Awards, and legal work rights of 48 hours per fortnight during studies, Australia helps students offset expenses while gaining valuable experience. The booming economy offers exceptional career prospects across diverse industries from traditional mining and agriculture to emerging fields like biotechnology, AI, and space technology, with major cities serving as Asia-Pacific hubs for multinational corporations. Australia&apose;s world-renowned research ecosystem provides opportunities to work alongside Nobel laureates on breakthrough discoveries, while the education system emphasizes critical thinking and practical application through innovative teaching and state-of-the-art facilities. Beyond academics, students enjoy an adventure-filled lifestyle exploring diverse ecosystems, outdoor activities, and indigenous culture, creating a holistic experience that shapes both professional capabilities and personal growth, making Australia a transformative destination where dreams meet reality.',
    tags: ['StudyInAustralia', 'AustralianEducation', 'Indian Students'],
    category: 'Australia',
    readTime: '20 mins',
  },

  'uk-visa-checklist': {
    title: 'UK Visa Checklist',
    slug: 'uk-visa-checklist',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/ukBlog.svg',
    content: `The UK has long been a popular destination for Indian students seeking a high-quality education in a culturally rich and globally connected environment. The country&apose;s prestigious universities consistently rank among the world&apose;s best, offering cutting-edge research opportunities, innovative teaching methods, and a strong emphasis on practical learning. The UK&apose;s education system is designed to foster critical thinking, problem-solving skills, and a global perspective, preparing students for success in a rapidly changing world. The country&apose;s multicultural society makes it an ideal place to study, with a vibrant mix of cultures and languages that create a rich and inclusive learning environment. The UK government has also implemented several initiatives to attract international students, including the Post-Study Work Visa (Subclass 485), which allows graduates to stay and work in the country for up to four years after completing their studies. This visa is particularly beneficial for Indian students, as it provides a pathway to permanent residency and citizenship, making the UK a strong choice for those looking to build a future in the country. The country&apose;s natural beauty, outdoor lifestyle, and strong economy also make it an attractive destination for students, offering a unique blend of academic excellence and a high quality of life. With its commitment to innovation, sustainability, and a focus on international collaboration, the UK continues to be a top choice for Indian students seeking a rewarding and enriching study experience.`,
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