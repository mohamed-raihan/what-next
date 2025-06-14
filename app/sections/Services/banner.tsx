"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GetintouchForm from "@/app/components/getintouch-form";
import api from "@/app/api-services/axios";
import { API_URL } from "@/app/api-services/api_url";
// import { useSearchParams } from "next/navigation";

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
        title: "Career Counselling And Admission Guidance",
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
                <p>Our team manages point-to-point communications, from providing information to ensuring it reaches the appropriate source.</p>
                <br />
                <p>It&apos;s time-consuming, often stressful, and complicated; nevertheless, don&apos;t worry; we&apos;ll provide the greatest available support to make it hassle-free for you. We provide one-on-one help with the last steps of the application process. We give an interface as well as a detailed guide to assist you in completing each stage and level of difficulty. We can assist you in gaining confidence and skills in this area by assisting you with preparation.</p>
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
                <p>It is just as vital to identify and select the appropriate institution as it is to select your professional route and educational course. What Next can assist you in taking proactive steps in this direction and guiding you to the ideal venue for your academics. It is difficult to choose the right university when there are so many to choose from. We use discerning parameters that correspond to your preferences, professional goals, and other factors.</p>
                <br />
                <p>What Next will also walk you through the modules and curriculum you&apos;ll be studying when you&apos;ve been accepted. We keep track of socioeconomic and university-related data to keep you informed on all fronts.</p>
            </>
        ),
    },
    {
        id: 4,
        service_header: 4,
        title: "Career Counselling And Admission Guidance",
        image: "/applicationImage.svg",
        description: (
            <>
                <p>Choose our expertise and experience in assisting you in determining the best course for your desire and shaping your passion. Our professional counsellors provide you with the most up-to-date information and insights while also recognising your aspirations, aptitudes, and awareness, and preparing you properly both throughout the counselling and admission phases.</p>
                <br />
                <p>We assist you in learning about education, institutions, teachers, admission procedures, and a variety of other topics. Applying to institutions overseas can be a stressful process, but with the help of our knowledgeable counsellors, we make it simple and orderly. Based on the possibility of admissions for your profile and credentials, trust us to be ambitious, safe, and practical.</p>
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
                <p>Because we recognize that studying abroad entails not only your aspirations and deeds, but also a significant financial component that is difficult to achieve for everyone. Because of a lack of sufficient resources, right sources to approach, and most crucially, proper information about the availability and manner to acquire bank loans, it is frequently a lost game even before it begins for most students and their families.</p>
                <br />
                <p>What Next Overseas has put in place an experienced team to serve as a single point of contact for information in this direction. We&apos;re also forming strategic partnerships with financial institutions that will provide favorable interest rates, quicker and faster loan processing, and increased loan approval chances.</p>
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
                <p>What Next assists you in planning your trip and provides helpful advice.</p>
                <br />
                <p>What Next Overseas Education Consultancy provides assistance with everything from finding the best and cheapest airline to travel suggestions, airport information, and local commuting. In addition, we can assist you with forex.</p>
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
                <p>Complete visa assistance, including application preparation, simulated visa interviews, and documents. We take care of everything for you, from filling out forms to preparing for interviews.</p>
                <br />
                <p>Our skilled team has extensive knowledge and experience in dealing with visa requirements for a variety of destinations.</p>
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
                <p>Learn more about the country you are entering, the weather, the people, and a brief history of the city you will call home for the next few years.</p>
                <br />
                <p>We provide the most critical information to assist you in effectively negotiating with local communities, laws of the land, and weather conditions.</p>
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
                <p>Trust us to find more resources to assist you with your course preparation, travel, and admissions procedures.</p>
                <br />
                <p>We aid you in preparing for aptitude exams and in learning more about the GRE, TOEFL, and IELTS.</p>
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
    // const searchParams = useSearchParams();
    // const service = searchParams.get('service');
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
            if (response.data.length > 53) {
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
                <div className="relative xl:bg-[url(/bannerBg1.svg)] flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-8 h-auto xl:h-[52rem] w-fit bg-no-repeat">
                    {/* Left Column */}
                    <div className="w-full xl:w-1/2 xl:pl-20 mb-8 md:mb-0">
                        <h2 className="text-2xl sm:text-3xl xl:text-[36px] font-bold mb-2 md:mb-4 text-[#686868] font-roboto">Services</h2>
                        <h2 className="text-[#0046AA] font-semibold font-roboto text-3xl sm:text-4xl md:text-[52px] leading-tight md:leading-[1.1]">Expert Advice.<br />
                            Hassle-Free Process.<br />
                            Trusted by Students.</h2>
                        <div className="text-base sm:text-lg lg:text-[20px] 2xl:text-[20px] text-grey-100 flex flex-col gap-4 md:gap-8 mt-6 md:mt-10">
                            <p className="text-[#686868] font-montserrat">With personalized support and expert advice, WhatNext helps aspiring students choose the right course, secure admission to top universities, and navigate visa and financial processes smoothly.</p>
                            <p className="text-[#686868] font-montserrat">Whether you&apos;re aiming for the UK, USA, Canada, Australia, or Europe, WhatNext simplifies the entire process—turning your global education dreams into reality.</p>
                            <p className="text-[#686868] font-montserrat">WhatNext Overseas is a trusted education consultancy dedicated to guiding students on their journey to study abroad.</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="h-[100px] md:h-[180px] w-full bg-[#288737] xl:-mt-10">
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
                        <div className="relative flex flex-col md:flex-row border-[5px] border-[#0046AA] rounded-xl  w-full xl:h-[52rem]  shadow-lg bg-white">
                            <div className="bg-transparent p-4 md:p-6 flex flex-col justify-between relative md:absolute top-0 md:top-30 w-full md:w-2/5 lg:w-1/3 z-20 h-full">
                                <div className="flex flex-col h-full">
                                    <div className="flex-1 overflow-y-auto">
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
                                        <div className="hidden md:block sticky bottom-0 pt-14 bg-white">
                                            <span className="text-4xl lg:text-5xl font-bold text-[#B2B2B2] leading-none">Our<br />Services</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="flex-1 flex justify-end p-4 md:p-8 relative w-full md:w-1/2">
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
                                                    <p className="mb-6 text-[#686868] text-[18px] text-base md:text-lg font-montserrat">
                                                        {serviceDetails.description}
                                                    </p>
                                                    <button className="bg-[#2563eb] text-white px-4 md:px-6 py-2 rounded font-semibold font-inter float-right relative md:absolute bottom-0 md:bottom-0 right-4 md:right-10 hover:bg-[#1d4ed8] transition-colors duration-200">
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
                    <div className="relative bg-[url(/service-bg.svg)] bg-cover flex flex-col xl:flex-row justify-between items-center xl:items-start bg-no-repeat md:mt-0 pt-10 pt-18 xl:pt-35 px-2 md:px-10 py-10 lg:px-25 h-auto">
                        <div className="ms-2 md:ms-10 mb-8 md:mb-0 flex-1 flex flex-col hidden xl:block">
                            <h1 className="text-3xl md:text-5xl xl:text-7xl text-[#0046AA] font-medium font-roboto font-semibold">
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