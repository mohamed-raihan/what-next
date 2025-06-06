"use client"
import React, { useState } from "react";
import Image from "next/image";
import GetintouchForm from "@/app/components/getintouch-form";

const services = [
    "Application Process",
    "Admission Formalities",
    "Choosing Right Courses and University",
    "Career Counselling Admission Guidance",
    "Financial Guidance",
    "Scholarship Guidance",
    "Travel Assistance",
    "Visa Assistance",
    "Orientation About Country Place",
    "Value Added Services",
];

const ServiceBanner = () => {
    const [selected, setSelected] = useState(services[0]);
    const [serviceDetails, setServiceDetails] = useState({
        title: "Application Process",
        description: "Our team manages point-to-point communications, from providing information to ensuring it reaches the appropriate source. At WhatNext, we devote our time and attention to assisting you with the time-consuming application filing process.",
        image: "/applicationImage.svg"
    });

    // This function will be replaced with actual API call
    const fetchServiceDetails = async (serviceName: string) => {
        // TODO: Replace with actual API call
        // Example API call:
        // const response = await fetch(`/api/services/${serviceName}`);
        // const data = await response.json();
        // setServiceDetails(data);

        // Temporary mock data
        setServiceDetails({
            title: serviceName,
            description: `Description for ${serviceName}. This will be replaced with actual API data.`,
            image: "/applicationImage.svg"
        });
    };

    const handleServiceSelect = (service: string) => {
        setSelected(service);
        fetchServiceDetails(service);
    };

    return (
        <div>
            <div className="relative bg-black bg-[url(/bannerBg1.svg)] flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-8 h-auto md:h-[80vh]">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pl-28 mb-8 md:mb-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-[#686868] font-roboto">Services</h2>
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
                    <div className="relative flex flex-col md:flex-row border-[5px] border-[#0046AA] rounded-xl overflow-hidden w-full h-auto md:h-[85vh] shadow-lg bg-white">
                        <div className="bg-transparent p-4 md:p-6 flex flex-col justify-between relative md:absolute top-0 md:top-30 w-full md:w-2/5 lg:w-1/4 z-20">
                            <div className="overflow-y-auto max-h-[300px] md:max-h-none">
                                <ul className="space-y-1">
                                    {services.map((service) => (
                                        <li
                                            key={service}
                                            onClick={() => handleServiceSelect(service)}
                                            className={`px-4 py-2 rounded cursor-pointer ${selected === service
                                                ? "bg-black text-white"
                                                : "hover:bg-gray-100"
                                                }`}
                                        >
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="hidden md:block md:mt-20">
                                <span className="text-4xl lg:text-6xl font-bold text-[#B2B2B2] leading-none">Our<br />Services</span>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-end p-4 md:p-8 relative w-full md:w-1/2 h-full">
                            <div className="relative px-4 md:px-8 py-8 md:py-16 w-full md:w-2/3">
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
                                <button className="bg-[#2563eb] text-white px-4 md:px-6 py-2 rounded font-semibold font-inter float-right relative md:absolute bottom-4 md:bottom-20 right-4 md:right-10">
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-[url(/service-bg.svg)] bg-cover flex flex-col lg:flex-row justify-between bg-no-repeat pt-10 md:pt-35 px-4 md:px-10 lg:px-25 h-auto md:h-[80vh]">
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