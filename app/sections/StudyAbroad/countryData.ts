import { getStudyAbroadData } from "@/app/api-services/services/studyAbroad";

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
    universityLogos: { logo: string, height: string }[]; // image paths
    whyChooseCards: WhyChooseCard[];
    blueAnimal: string;
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
            { logo: '/australia/Melbourne1.svg', height: '' },
            { logo: '/australia/unsw.svg', height: '' },
            { logo: '/australia/logo-ANU.svg', height: '' },
            { logo: '/australia/westernAus.svg', height: '' },
            { logo: '/australia/adelaide.svg', height: '' },
        ],
        blueAnimal: '/australia/kangaroo-blue.svg',
        whyChooseCards: [
            { title: 'Globally Ranking Institutions', description: '36 of Australian Universities make it to the top 1000 list released by QS for World University Ranking 2021. Seven of these are ranked among the top 100 world universities.' },
            { title: 'Extensive Student Support', description: 'The ESOS (Education Services for Overseas Students) Act lays the framework for the enforcement of best law practices to protect the rights of international students studying in Australia.' },
            { title: 'Easy Policy for Student Visa', description: 'The process to obtain Student Visa Australia is quite easy and hassle-free as compared to other countries. To study in Australia, foreign students can apply for Student Visa subclass 500. The student visa acceptance rate is 85%- 95%, so any prospective student with good grades and necessary documents can expect visa grant mail.' },
            { title: 'Employment Opportunities', description: 'Education from Australia makes you work-ready for the competitive global market. As per statistics, around 79% of graduates find employment after completion of their program from Australia, six percent of graduates enroll for further studies, and four percent of the total student population are self-employed.' },
            { title: 'Funding Option', description: 'Australian government invests around 300 million AUD in international student scholarships. Around 300 Australian Awards were offered to international students from over 55 countries in 2019.' },
        ]
    },

    usa: {
        name: 'USA',
        paragraph:
            'The United States takes pride in its technical development, and it has ensured that all levels of education are well-equipped with cutting-edge equipment.',
        backgroundImage: '/usa/usa-bg.svg', // Replace with actual background image path if different
        greenSectionContent: [
            'The US has six of the top 10 universities in the world. Degrees from these colleges have a global repute.',
            'Campus life is famous for its diversity; people across the globe to study here and you get to mix with people from various cultural and linguistic backgrounds.',
            'You will have a wonderful classroom with interactive professors, debates and discussions and rubbing shoulders with the greats in the field.',
            'The universities provide state-of-the-art facilities such as knowledge resources, computers, the internet, modern classrooms and trending technology.',
        ],
        animalShadow: '/usa/eagle-green.svg', // Replace with actual image path used in the image (e.g., eagle)
        universityLogos: [
            { logo: '/usa/massachusetts.svg', height: '' },
            { logo: '/usa/luxcet.svg', height: '' },
            { logo: '/usa/vettesen.svg', height: '' },
            { logo: '/usa/stanford.svg', height: '' },
            { logo: '/usa/harvard.svg', height: '' },
        ],
        blueAnimal: '/usa/eagle-blue.svg',
        whyChooseCards: [
            {
                title: 'Outstanding Education',
                description:
                    'Through the unique curriculum, the education system not only emphasizes on majors but also on liberal arts. Liberal arts may not provide much of subject knowledge as a major does but instead contributes to more creative, thoughtful, and bold problem-solving ability. You will start thinking beyond the boundaries of only "majors".',
            },
            {
                title: 'Multicultural Environment',
                description:
                    'Diversity helps you grow to/from all aspects of life. The U.S. being a favorite destination for the students has a variety in every feature such as race, culture, religion, and intellect. University students get to know a lot outside the classroom. Be a part of various clubs and activities which can help in building network with diverse people and find students with the same interests.',
            },
            {
                title: 'Flexibility in the U.S. Education System',
                description:
                    "A flexible education system is available in the country, so you are not forced to pursue general studies all over the year. Liberal arts of choosing the interesting subjects help the U.S. your want to study in a concentrated & narrowed-down view. University is available at all levels such as associate, bachelor's, master's, and doctorate. It is distinctly different from other rigid education systems.",
            },
            {
                title: 'Practical Aspects of Education',
                description:
                    'Studies in the U.S. universities is focused on practical aspects of the subject which, on a broader view makes the students all-rounder.',
            },
        ],
    },

    canada: {
        name: 'Canada',
        paragraph:
            'Get an education in Canada, and your diploma will be instantly recognized around the world.',
        backgroundImage: '/canada/canada-bg.svg', // Update the path based on your project
        greenSectionContent: [
            'Great Canadian universities.',
            'Accessible Canadian student visa process.',
            'Canada has a great social system.',
            'Canada has affordable tuition fees and living costs.',
            'Canada has a perfect blend of nature, technology, and culture.',
        ],
        animalShadow: '/canada/animal-green.svg', // Placeholder, update with correct asset if available
        universityLogos: [
            { logo: '/canada/mcMaster.svg', height: '' },
            { logo: '/canada/grandscunt.svg', height: '' },
            { logo: '/canada/velute.svg', height: '' },
            { logo: '/canada/waterloo.svg', height: '' },
            { logo: '/canada/uOttawa.svg', height: '' },
        ],
        blueAnimal: '/canada/animal-blue.svg',
        whyChooseCards: [
            {
                title: 'How much money will it take to study in Canada?',
                description:
                    "Cost of studying in Canada will depend upon the level of degree, university and program you are applying to. Average tuition fees of bachelor's degree is between 18000 to 20000 CAD per annum and masters costs around 25000 to 17000 CAD per annum.",
            },
            {
                title: 'Which course is best for study in Canada?',
                description:
                    'MBA, computer science & IT, business, finance, engineering, engineering management, physical & earth sciences, agricultural sciences, etc. are some of the popular courses to study in Canada.',
            },
            {
                title: 'Is there any age limit for Canada student visa?',
                description:
                    'No, there is no age limit for Canada student visa. However, students of higher age are required to provide substantial explanation about the gap years in their studies.',
            },
            {
                title: 'How much student can earn in Canada?',
                description:
                    'Students get paid on an hourly basis for their part-time work in Canada. The average pay is 10 CAD per hour.',
            },
        ],
    },

    newzealand: {
        name: 'New Zealand',
        paragraph:
            "New Zealand, one of the finest locations to live, is home to some of the world's most prestigious educational institutions. Because New Zealand is tiny and uncrowded, moving around and getting things done is simple.",
        backgroundImage: '/new-zealand/newzealand-bg.svg', // Update based on your asset path
        greenSectionContent: [
            "New Zealand is the world's second most peaceful country with all the 8 State-Funded Universities in the top 3% world university rankings.",
            'Easy entry requirements.',
            'A great destination.',
            'The healthy outdoor student lifestyle.',
        ],
        animalShadow: '/newzealand/kiwi-bird.svg', // Placeholder path, adjust if needed
        universityLogos: [
            { logo: '/new-zealand/lincoln.svg', height: '' },
            { logo: '/new-zealand/ingenio.svg', height: '' },
            { logo: '/new-zealand/unvstylogo.svg', height: '' },
            { logo: '/new-zealand/canterbury.svg', height: '' },
            { logo: '/new-zealand/massey.svg', height: '' },
        ],
        blueAnimal: '/newzealand/kiwi-bird-blue.svg',
        whyChooseCards: [
            {
                title: 'Imparts High Quality Education',
                description:
                    'Depending upon the QS world ranking, all state-funded universities of New Zealand rank within top 500 educational institutions around the world. It is ranked within 3% of all the well-known universities in the world.',
            },
            {
                title: 'Ease of Migration',
                description:
                    'If the students benefit the country through some skills, they are prioritized more than the remaining. The process of student visa acceptance and becoming a permanent citizen is easier for them in comparison to others.',
            },
            {
                title: 'Post Study Work Visa (Open)',
                description:
                    'After graduating, students are allowed to work in New Zealand for next 12 months starting from the date of completion of their program. They can apply for post study work visa (open) for the same.',
            },
            {
                title: 'Safety in NZ',
                description:
                    'It is 2nd most peaceful and considerably low corruption country in the world.',
            },
        ],
    },

    uk: {
        name: 'United Kingdom',
        paragraph:
            "The United Kingdom has been the favored destination for some of history's most influential thinkers. The United Kingdom's long-standing reputation for intellectual achievement, as well as its universities, continue to raise the standard in the academic world.",
        backgroundImage: '/uk/uk-bg.svg', // Update with actual image path
        greenSectionContent: [
            'Colleges in UK are reliably positioning among the best on the planet and capabilities are globally valued and recognized.',
            "The UK expects 5 percent of the world's systematic research and creates 14 percent of the world's most regularly referred to papers.",
            'Joined Kingdom colleges give suppleness of decision and grant you to blend scholastic and professional courses of your decision.',
            'The educating and study technique utilized in the UK offer you the opportunity to be unique and improve aptitudes sets and independence.',
        ],
        animalShadow: '/uk/beever.svg', // Placeholder, update as needed
        universityLogos: [
            { logo: '/uk/lse.svg', height: '' },
            { logo: '/uk/cambridge.svg', height: '' },
            { logo: '/uk/oxford.svg', height: '' },
            { logo: '/uk/edinburgh.svg', height: '' },
        ],
        blueAnimal: '/uk/beever-blue.svg',
        whyChooseCards: [
            {
                title: 'Great Place to Live and Study',
                description:
                    'If you are in UK, you have got Europe right on your doorstep. Within one hour, you can be in Amsterdam or Paris. A 2-hour flight can take you to Spain, Germany or Italy.',
            },
            {
                title: 'Shorter Duration of Courses',
                description:
                    "Courses in the UK are generally shorter than in many other countries. The country offers 3-year undergraduate degrees and 1-year master's programmers at the universities. It helps reduce tuition and accommodation costs to study in the UK for international students.",
            },
            {
                title: 'Scholarship and Financial Aid',
                description:
                    'There are hundreds of scholarships, grant schemes and bursaries offered by UK. International students get up to 100% Scholarship on tuition fees in selected Universities.',
            },
        ],
    },

    europe: {
        name: 'Europe',
        paragraph:
            "With over 40 countries in Europe, it can be hard to decide where to spend a semester, summer, J-term, or year learning overseas! Each country has something to offer whether it's the cuisine, culture, stunning landscapes, or captivating languages.",
        backgroundImage: '/europe/europe-bg.svg', // Update with actual path
        greenSectionContent: [
            'The continent of Europe has always been one of the world centers of learning and technological development. Europe today has over 4000 higher education institutions.',
            'Education in Europe is highly subsidized through taxes.',
            "Besides the high academic standards in Europe, foreign students also gain a rich cultural experience thanks to Europe's cultural and linguistic diversity.",
        ],
        animalShadow: '/europe/eagle-shadow.svg', // Replace with accurate shadow if different
        universityLogos: [
            { logo: '/europe/kth.svg', height: '' },
            { logo: '/europe/ludovich.svg', height: '' },
            { logo: '/europe/munich.svg', height: '' },
            { logo: '/europe/sigillvm.svg', height: '' },
            { logo: '/europe/osloensis.svg', height: '' },
        ],
        blueAnimal: '/europe/eagle-blue.svg',
        whyChooseCards: [
            {
                title: 'Quality of Education',
                description:
                    "Europe's quality of universities is extremely good and includes some of the world's top-ranked institutions. These universities – as well as many other European universities – are all held in high regard worldwide and demonstrate Europe's ability to provide an exceptional standard of teaching for postgraduate students.",
            },
            {
                title: 'High Standard of Living',
                description:
                    'Studying abroad and in a country that speaks a language which is different to your mother tongue will definitely reflect well on you. It demonstrates that you are adventurous, adaptable and willing to learn about a different culture and way of living.',
            },
            {
                title: 'Job Prospects',
                description:
                    'Studying in a European city is beneficial for your future career as they tend to be large and diverse in their student population. This enables the postgraduate student a wider life experience as well as offering an excellent networking potential.',
            },
        ],
    },
    uae: {
        name: 'UAE',
        paragraph:
            "The United Arab Emirates (UAE) is rapidly emerging as a global education hub with its futuristic cities, world-class infrastructure, and diverse student population. From business to AI, the UAE offers top-tier education aligned with global industry needs.",
        backgroundImage: '/uae/uae-bg.png', // Update with actual background image path
        greenSectionContent: [
            'UAE is home to globally ranked universities including international campuses from the US, UK, and Australia.',
            'The country offers a safe, multicultural environment and modern lifestyle with excellent student amenities.',
            'UAE\'s strategic location provides access to global opportunities, internships, and employment across sectors.',
        ],
        animalShadow: '/uae/falcon.png', // Replace with accurate falcon shadow
        universityLogos: [
            { logo: '/uae/Khalifa.png', height: '' },
            { logo: '/uae/ueau.jpg', height: '' },
            { logo: '/uae/aus.png', height: '' },
            { logo: '/uae/nyu.png', height: '' },
            { logo: '/uae/zu.png', height: '' },
        ],
        blueAnimal: '/uae/falcon-blue.png', // Stylized falcon image
        whyChooseCards: [
            {
                title: 'Global Education Hub',
                description:
                    'UAE hosts top-ranking universities and international campuses offering globally recognized degrees across various disciplines.',
            },
            {
                title: 'Safe & Diverse Environment',
                description:
                    'The UAE is known for its safety, hospitality, and cultural diversity, making it a welcoming destination for international students.',
            },
            {
                title: 'Work Opportunities & Career Growth',
                description:
                    'Students can access internships, part-time work (with approvals), and job opportunities in sectors like technology, finance, media, and hospitality.',
            },
            {
                title: 'Affordable Tuition & Modern Living',
                description:
                    'Compared to other study destinations, UAE offers competitive tuition fees, world-class housing, and modern amenities tailored for student life.',
            },
            {
                title: 'Post-Study Residency Options',
                description:
                    'Graduates can apply for job-seeker or long-term visas, and exceptional students may qualify for the UAE Golden Visa program.',
            },
        ],
    },

    // Add other countries here...
};

export const getCountryData = async () => {
    try {
        const apiData = await getStudyAbroadData();
        console.log(apiData);

        if (Object.keys(apiData).length > 5) {
            return apiData;
        }
        return countryData;
    } catch (error) {
        console.error("API call failed, falling back to mock data", error);
        return countryData;
    }
}; 