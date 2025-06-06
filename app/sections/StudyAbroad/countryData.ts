export interface WhyChooseCard {
  title: string;
  description: string;
}

export interface CountryData {
  name: string;
  paragraph: string;
  backgroundImage: string;
  greenSectionContent: string[];
  animalShadow: string; // image path or component
  universityLogos: {logo: string, height: string}[]; // image paths
  whyChooseCards: WhyChooseCard[];
}

export const countryData: Record<string, CountryData> = {
  australia: {
    name: 'Australia',
    paragraph: 'The United States takes pride in its technical development, and it has ensured that all levels of education are well-equipped with cutting-edge equipment.', // placeholder
    backgroundImage: '/australia/australia-bg.svg',
    greenSectionContent: [
      'Australia has the second-most astounding human advancement list of all inclusive.',
      'Australian degrees are universally perceived.',
      'Australia positions with UK and US as a standout amongst the best places to live in.',
      'Australia positions very in worldwide examinations of national execution like personal satisfaction, wellbeing, training, and the security of common freedoms.',
      'You can work multi-week and settle after studies.'
    ],
    animalShadow: '/australia/kangaroo.svg',
    universityLogos: [
      {logo: '/australia/Melbourne1.svg', height: ''},
      {logo: '/australia/unsw.svg', height: ''},
      {logo: '/australia/logo-ANU.svg', height: ''},
      {logo: '/australia/westernAus.svg', height: ''},
      {logo: '/australia/adelaide.svg', height: ''},
    ],
    whyChooseCards: [
      { title: 'Globally Ranking Institutions', description: '36 of Australian Universities make it to the top 1000 list released by QS for World University Ranking 2021. Seven of these are ranked among the top 100 world universities.' },
      { title: 'Extensive Student Support', description: 'The ESOS (Education Services for Overseas Students) Act lays the framework for the enforcement of best law practices to protect the rights of international students studying in Australia.' },
      { title: 'Easy Policy for Student Visa', description: 'The process to obtain Student Visa Australia is quite easy and hassle-free as compared to other countries. To study in Australia, foreign students can apply for Student Visa subclass 500. The student visa acceptance rate is 85%- 95%, so any prospective student with good grades and necessary documents can expect visa grant mail.' },
      { title: 'Employment Opportunities', description: 'Education from Australia makes you work-ready for the competitive global market. As per statistics, around 79% of graduates find employment after completion of their program from Australia, six percent of graduates enroll for further studies, and four percent of the total student population are self-employed.' },
      { title: 'Funding Option', description: 'Australian government invests around 300 million AUD in international student scholarships. Around 300 Australian Awards were offered to international students from over 55 countries in 2019.' },
    ]
  },
  // Add other countries here...
}; 