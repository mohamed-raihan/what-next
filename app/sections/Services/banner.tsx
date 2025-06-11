"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GetintouchForm from "@/app/components/getintouch-form";
import api from "@/app/api-services/axios";
import { API_URL } from "@/app/api-services/api_url";

const services = [
    {
        id: 1,
        title: "Application Process",

    },
    {
        id: 2,
        title: "Admission Formalities",
    },
    {
        id: 3,
        title: "Choosing Right Courses and University",
    },
    {
        id: 4,
        title: "Career Counselling Admission Guidance",
    },
    {
        id: 5,
        title: "Financial Guidance",
    },
    {
        id: 6,
        title: "Travel Assistance",
    },
    {
        id: 7,
        title: "Visa Assistance",
    },
    {
        id: 8,
        title: "Orientation About Country Place",
    },
    {
        id: 9,
        title: "Value Added Services",
    }
];

const details = [
    {
        id: 1,
        service_header: 1,
        title: "Application Process",
        image: "/applicationImage.svg",
        description: (
            <>
                <p>Our team manages point-to-point communications, from providing information to ensuring it reaches the appropriate source. At WhatNext, we devote our time and attention to assisting you with the time-consuming application filing process.</p>
                <br />
                <p>We make sure the documents are free of errors and readable. Our skilled team is here to assist you in adhering to all norms and rules in order to decrease misunderstanding, eliminate unnecessary errors, and build a compelling case through accurate information presentation.</p>
            </>
        ),
    },
    {
        id: 2,
        service_header: 2,
        title: "Admission Formalities",
        image: "/applicationImage.svg",
        description: (
            <>
                <p>Our comprehensive admission formalities service ensures every step of your enrollment process is handled with precision and care. From initial document verification to final enrollment confirmation, we guide you through each requirement with detailed attention to institutional protocols.</p>
                <br />
                <p>We coordinate with university admission offices on your behalf, ensuring all deadlines are met and requirements fulfilled. Our team maintains updated knowledge of changing admission criteria across different institutions and programs, providing you with accurate, timely guidance throughout the formal admission process.</p>
            </>
        ),
    },
    {
        id: 3,
        service_header: 3,
        title: "Choosing Right Courses and University",
        image: "/applicationImage.svg",
        description: (
            <>
                <p>Making the right choice in courses and universities is crucial for your future success. Our expert counselors provide personalized guidance based on your academic background, career aspirations, and financial considerations. We analyze your profile comprehensively to match you with programs that align with your goals.</p>
                <br />
                <p>We maintain detailed databases of universities, course offerings, faculty expertise, campus facilities, and employment outcomes. Our guidance includes program comparisons, ranking analysis, location benefits, and long-term career prospects to help you make informed decisions that shape your academic and professional future.</p>
            </>
        ),
    },
    {
        id: 4,
        service_header: 4,
        title: "Career Counselling Admission Guidance",
        image: "/applicationImage.svg",
        description: (
            <>
                <p>Our career counseling service bridges the gap between academic choices and professional aspirations. We provide comprehensive career assessments, industry trend analysis, and skill gap identification to ensure your educational path leads to meaningful employment opportunities.</p>
                <br />
                <p>Through one-on-one counseling sessions, aptitude testing, and career mapping exercises, we help you understand your strengths and interests. Our counselors stay updated with global job market trends, emerging industries, and skill requirements to provide relevant guidance for your career development.</p>
            </>
        ),
    },
    {
        id: 5,
        service_header: 5,
        title: "Financial Guidance",
        image: "/applicationImage.svg",
        description: (
            <>
                <p>Understanding the financial aspects of international education is crucial for successful planning. Our financial guidance service covers tuition fee planning, living cost estimation, scholarship opportunities, and education loan assistance. We help you create realistic budgets and explore funding options.</p>
                <br />
                <p>We provide detailed cost breakdowns for different destinations, guidance on currency fluctuations, and strategies for managing expenses while studying abroad. Our team assists with scholarship applications, education loan documentation, and financial planning to ensure your education investment yields maximum returns.</p>
            </>
        ),
    },
    {
        id: 6,
        service_header: 6,
        title: "Travel Assistance",
        image: "/applicationImage.svg",
        description: (
            <>
                <p>Our travel assistance service ensures your journey to your destination country is smooth and well-coordinated. We handle flight bookings, travel insurance, airport transfers, and provide pre-departure briefings to prepare you for your international travel experience.</p>
                <br />
                <p>We coordinate with airline partners to secure student-friendly fares and flexible booking options. Our travel support includes luggage guidelines, customs regulations, transit procedures, and emergency contact information to ensure you're fully prepared for your journey abroad.</p>
            </>
        ),
    },
    {
        id: 7,
        service_header: 7,
        title: "Visa Assistance",
        image: "/applicationImage.svg",
        description: (
            <>
                <p>Visa processing can be complex and time-sensitive. Our experienced visa consultants provide end-to-end assistance with visa applications, document preparation, interview coaching, and submission procedures. We stay updated with changing visa regulations and requirements across different countries.</p>
                <br />
                <p>Our visa services include document checklist preparation, application form completion, appointment scheduling, and post-submission tracking. We provide country-specific guidance, interview preparation, and continued support until your visa is approved, ensuring a stress-free visa application experience.</p>
            </>
        ),
    },
    {
        id: 8,
        service_header: 8,
        title: "Orientation About Country Place",
        image: "/applicationImage.svg",
        description: (
            <>
                <p>Cultural adaptation is essential for academic and personal success abroad. Our comprehensive orientation program covers cultural norms, social etiquette, climate considerations, transportation systems, and local regulations to help you integrate smoothly into your new environment.</p>
                <br />
                <p>We provide detailed insights into local customs, food habits, accommodation options, banking procedures, and emergency contacts. Our orientation includes practical tips for daily life, cultural sensitivity training, and connection with local student communities to ease your transition.</p>
            </>
        ),
    },
    {
        id: 9,
        service_header: 9,
        title: "Value Added Services",
        image: "/applicationImage.svg",
        description: (
            <>
                <p>Our value-added services encompass additional support that enhances your international education experience. These include accommodation assistance, health insurance guidance, part-time job counseling, and ongoing academic support throughout your studies.</p>
                <br />
                <p>We offer specialized services such as language preparation courses, cultural mentorship programs, alumni networking opportunities, and career placement assistance. Our extended support system ensures you have comprehensive guidance not just for admission, but for your entire educational journey and beyond.</p>
            </>
        ),
    },
];

// const details = [
//     {
//         id: 1,
//         service_header: 1,
//         title: "Application Process",
//         image: "/applicationImage.svg",
//         description: (
//             <>
//                 <p>Our team manages point-to-point communications, from providing information to ensuring it reaches the appropriate source. At WhatNext, we devote our time and attention to assisting you with the time-consuming application filing process.</p>
//                 <br />
//                 <p>We make sure the documents are free of errors and readable. Our skilled team is here to assist you in adhering to all norms and rules in order to decrease misunderstanding, eliminate unnecessary errors, and build a compelling case through accurate information presentation.</p>
//             </>
//         ),
//     },
//     {
//         id: 2,
//         service_header: 2,
//         title: "Admission Formalities",
//         image: "/applicationImage.svg",
//         description: (
//             <>
//                 <p>Our comprehensive admission formalities service ensures every step of your enrollment process is handled with precision and care. From initial document verification to final enrollment confirmation, we guide you through each requirement with detailed attention to institutional protocols.</p>
//                 <br />
//                 <p>We coordinate with university admission offices on your behalf, ensuring all deadlines are met and requirements fulfilled. Our team maintains updated knowledge of changing admission criteria across different institutions and programs, providing you with accurate, timely guidance throughout the formal admission process.</p>
//             </>
//         ),
//     }
// ];

type ServiceDetails = {
    id: number;
    service_header: number | string;
    title: string;
    image: string;
    description: string | React.ReactNode;
    // ...other fields
};

type ServiceHeading = {
    id: number;
    title: string;
}

// type ServiceResponse = {
//     data: {
//         title?: string;
//         description?: string;
//         image?: string;
//         [key: string]: any;
//     }
// }

export async function getServiceHeading() {
    const response = await api.get(API_URL.SERVICES.GET_SERVICE_HEADING);
    return response;
}

export async function getServiceDetails() {
    const response = await api.get(API_URL.SERVICES.GET_SERVICE_DETAILS);
    return response;
}

const ServiceBanner = () => {
    const [selected, setSelected] = useState(services[0].title);
    const [allServiceDetails, setAllServiceDetails] = useState<ServiceDetails[]>(details);
    const [serviceDetails, setServiceDetails] = useState<ServiceDetails | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [serviceHeading, setServiceHeading] = useState<ServiceHeading[]>(services);

    // Fetch all services on mount
    useEffect(() => {

        const fetchServiceHeading = async () => {
            const response = await api.get(API_URL.SERVICES.GET_SERVICE_HEADING);
            console.log(response.data);
            if (response.data.length > 3) {
                setServiceHeading(response.data);
            }
        }
        fetchServiceHeading();

        const fetchAllServices = async () => {
            setIsLoading(true);
            try {
                const response = await api.get(API_URL.SERVICES.GET_SERVICE_DETAILS);
                console.log(response.data);
                if (response.data.length > 3) {
                    setAllServiceDetails(response.data);
                }
            } catch (error) {
                console.error("Error fetching all services:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAllServices();
    }, []);

    // Filter the correct service when selected changes or allServiceDetails updates
    useEffect(() => {
        console.log("selected", selected);
        console.log("allServiceDetails", allServiceDetails);
        if (!allServiceDetails?.length) return;
        console.log(selected);
        console.log(allServiceDetails);
        // You need a way to map `selected` to the correct service_header or slug
        // For example, if your menu items are slugs:
        // const found = allServiceDetails.find(s => s.slug === selected);
        // If your menu items are titles:
        const found = allServiceDetails.find(s => s.title.toLowerCase() === selected.toLowerCase());
        console.log("found", found);
        setServiceDetails(found || null);
    }, [selected, allServiceDetails]);

    const handleServiceSelect = (service: string) => {
        setSelected(service);
    };

    return (
        <div>
            <div className="relative xl:bg-[url(/bannerBg1.svg)] flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-8 h-auto md:h-[80vh]">
                {/* Left Column */}
                <div className="w-full xl:w-1/2 xl:pl-28 mb-8 md:mb-0">
                    <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-2 md:mb-4 text-[#686868] font-roboto">Services</h2>
                    <h2 className="text-[#0046AA] font-semibold font-roboto text-3xl sm:text-4xl md:text-[62px] leading-tight md:leading-[1.1]">Expert Advice.<br />
                        Hassle-Free Process.<br />
                        Trusted by Students.</h2>
                    <div className="text-base sm:text-lg lg:text-2xl text-grey-100 flex flex-col gap-4 md:gap-8 mt-6 md:mt-10">
                        <p className="text-[#686868] font-montserrat">With personalized support and expert advice, WhatNext helps aspiring students choose the right course, secure admission to top universities, and navigate visa and financial processes smoothly.</p>
                        <p className="text-[#686868] font-montserrat">Whether you&apos;re aiming for the UK, USA, Canada, Australia, or Europe, WhatNext simplifies the entire process—turning your global education dreams into reality.</p>
                        <p className="text-[#686868] font-montserrat">WhatNext Overseas is a trusted education consultancy dedicated to guiding students on their journey to study abroad.</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="h-[100px] md:h-[150px] w-full bg-[#288737]">
                </div>
                <div className="relative w-full max-w-7xl mx-auto -mt-20 md:-mt-27 flex items-start px-4 md:px-8">
                    {/* Boy Icon - absolutely positioned */}
                    <div className="absolute -left-20 md:-left-34 top-10 md:top-25 z-30 hidden md:block">
                        <Image src="/boy.svg" alt="boy" className="w-full h-full hidden lg:block object-cover" width={140} height={180} />
                    </div>
                    <div className="absolute -left-4 md:-left-0 top-2 md:top-5  z-30 hidden md:block">
                        <Image src="/pencil.svg" alt="pencil" className="w-full h-full object-cover" width={140} height={180} />
                    </div>
                    {/* Main Bordered Div */}
                    <div className="relative flex flex-col md:flex-row border-[5px] border-[#0046AA] rounded-xl overflow-hidden w-full h-auto xl:h-[85vh] shadow-lg bg-white">
                        <div className="bg-transparent p-4 md:p-6 flex flex-col justify-between relative md:absolute top-0 md:top-30 w-full md:w-2/5 lg:w-1/3 z-20">
                            <div className="overflow-y-auto max-h-[300px] md:max-h-none">
                                <ul className="space-y-1">
                                    {serviceHeading.map((service: ServiceHeading) => (
                                        <li
                                            key={service.id}
                                            onClick={() => handleServiceSelect(service.title)}
                                            className={`px-4 py-2 rounded cursor-pointer transition-colors duration-200 ${selected === service.title
                                                    ? "bg-black text-white"
                                                    : "hover:bg-gray-100"
                                                }`}
                                        >
                                            {service.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="hidden md:block md:mt-10 xl:absolute xl:-bottom-120">
                                <span className="text-4xl lg:text-5xl font-bold text-[#B2B2B2] leading-none">Our<br />Services</span>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-end p-4 md:p-8 relative w-full md:w-1/2 h-full">
                            <div className="relative px-4 md:px-8 py-8 md:py-16 w-full md:w-2/3">
                                {isLoading ? (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0046AA]"></div>
                                    </div>
                                ) : (
                                    <>
                                        {serviceDetails ? (
                                            <>
                                                <Image
                                                    src={serviceDetails.image}
                                                    alt={serviceDetails.title}
                                                    className="w-full h-fit object-cover rounded mb-4"
                                                    width={100}
                                                    height={100}
                                                />
                                                <h2 className="text-2xl md:text-3xl font-bold mb-4">{serviceDetails.title}</h2>
                                                <p className="mb-6 text-[#686868] text-base md:text-lg font-montserrat">
                                                    {serviceDetails.description}
                                                </p>
                                                <button className="bg-[#2563eb] text-white px-4 md:px-6 py-2 rounded font-semibold font-inter float-right relative md:absolute bottom-4 md:bottom-10 right-4 md:right-10 hover:bg-[#1d4ed8] transition-colors duration-200">
                                                    Enquire Now
                                                </button>
                                            </>
                                        ) : (
                                            <div>No details found.</div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-[url(/service-bg.svg)] bg-cover flex flex-col xl:flex-row justify-between items-center xl:items-start bg-no-repeat md:mt-0 pt-10 md:pt-35 px-2 md:px-10 py-10 lg:px-25 h-auto md:h-[80vh]">
                    <div className="ms-2 md:ms-10 mb-8 md:mb-0 flex-1 flex flex-col">
                        <h1 className="text-3xl md:text-6xl lg:text-8xl text-[#0046AA] font-medium font-roboto font-semibold">
                            Get in Touch with<br />
                            <span className="text-[#288737]">Our Team</span>
                        </h1>
                        <p className="w-full md:w-xl text-base md:text-[18px] text-gray-600 mt-5 font-montserrat">
                            It&apos;s effective, it&apos;s beneficial and it&apos;s absolutely free. Take your virtual counselling session today!
                        </p>
                    </div>
                    <div className="max-w-full md:max-w-xl flex-1 flex items-center justify-center">
                        <GetintouchForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner




{/* Sidebar */ }
{/* <div className="bg-transparent p-6 flex flex-col justify-between absolute top-30 left-40 w-1/4">
<div>
    <ul className="space-y-1">
        <li className="bg-black text-white px-4 py-2 rounded font-medium">Application Process</li>
        <li className="hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">Admission Formalities</li>
        <li className="hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">Choosing Right Courses and University</li>
        <li className="hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">Career Counselling Admission Guidance</li>
        <li className="hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">Financial Guidance</li>
        <li className="hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">Scholarship Guidance</li>
        <li className="hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">Travel Assistance</li>
        <li className="hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">Visa Assistance</li>
        <li className="hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">Orientation About Country Place</li>
        <li className="hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">Value Added Services</li>
    </ul>
</div>
<div className="mt-10">
    <span className="text-6xl font-bold text-gray-300 leading-none">Our<br />Services</span>
</div>
</div> */}
{/* Main Content */ }
{/* <div className="flex-1 flex  justify-end  p-8 relative w-1/2 h-full">
<div className="relative px-8 py-16 w-2/3">
    <Image src="/applicationImage.svg" alt="" className="w-full h-fit object-cover rounded mb-4" width={100} height={100} />
    <h2 className="text-3xl font-bold mb-4">Application Process</h2>
    <p className="mb-4">
        Our team manages point-to-point communications, from providing information to ensuring it reaches the appropriate source. At WhatNext, we devote our time and attention to assisting you with the time-consuming application filing process.
    </p>
    <p className="mb-6">
        We make sure the documents are free of errors and readable. Our skilled team is here to assist you in adhering to all norms and rules in order to decrease misunderstanding, eliminate unnecessary errors, and build a compelling case through accurate information presentation.
    </p>
    <button className="bg-[#2563eb] text-white px-6 py-2 rounded font-semibold float-right absolute bottom-20 right-10">Enquire Now</button>
</div>
</div> */}