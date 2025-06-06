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
                <div className="w-full md:w-1/2 md:pl-28 mb-8 md:mb-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-[#686868] font-roboto">Services</h2>
                    <h2 className="text-[#0046AA] font-semibold font-roboto text-3xl sm:text-4xl md:text-[62px] leading-tight md:leading-[1.1]">Expert Advice.<br />
                        Hassle-Free Process.<br />
                        Trusted by Students.</h2>
                    <div className="text-base sm:text-lg md:text-2xl text-grey-100 flex flex-col gap-4 md:gap-8 mt-6 md:mt-10">
                        <p className="text-[#686868] font-montserrat">With personalized support and expert advice, WhatNext helps aspiring students choose the right course, secure admission to top universities, and navigate visa and financial processes smoothly.</p>
                        <p className="text-[#686868] font-montserrat">Whether you're aiming for the UK, USA, Canada, Australia, or Europe, WhatNext simplifies the entire process—turning your global education dreams into reality.</p>
                        <p className="text-[#686868] font-montserrat">WhatNext Overseas is a trusted education consultancy dedicated to guiding students on their journey to study abroad.</p>
                    </div>
                </div>
            </div>
            <div className=" relative">
                <div className="h-[150px] w-full bg-[#288737]">
                </div>
                <div className="relative w-full max-w-7xl mx-auto -mt-27 flex items-start">
                    {/* Boy Icon - absolutely positioned */}
                    <div className="absolute -left-42 top-25 z-30">
                        <Image src="/boy.svg" alt="boy" className="w-full h-full object-cover" width={140} height={180} />
                    </div>
                    <div className="absolute -left-8 top-5 z-30">
                        <Image src="/pencil.svg" alt="pencil" className="w-full h-full object-cover" width={140} height={180} />
                    </div>
                    {/* Main Bordered Div */}
                    <div className="relative flex flex-col md:flex-row border-[5px] border-[#0046AA] rounded-xl overflow-hidden w-full h-[85vh] shadow-lg bg-white">
                        <div className="bg-transparent p-6 flex flex-col justify-between absolute top-30 w-1/23z-20">
                            <div>
                                <ul className="space-y-1">
                                    {services.map((service) => (
                                        <li
                                            key={service}
                                            onClick={() => handleServiceSelect(service)}
                                            className={`px-4 py-2 rounded cursor-pointer ${
                                                selected === service
                                                    ? "bg-black text-white"
                                                    : "hover:bg-gray-100"
                                            }`}
                                        >
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-20">
                                <span className="text-6xl font-bold text-[#B2B2B2] leading-none">Our<br />Services</span>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-end p-8 relative w-1/2 h-full">
                            <div className="relative px-8 py-16 w-2/3">
                                <Image 
                                    src={serviceDetails.image} 
                                    alt={serviceDetails.title} 
                                    className="w-full h-fit object-cover rounded mb-4" 
                                    width={100} 
                                    height={100} 
                                />
                                <h2 className="text-3xl font-bold mb-4">{serviceDetails.title}</h2>
                                <p className="mb-6 text-[#686868] text-lg font-montserrat">
                                    {serviceDetails.description}
                                </p>
                                <button className="bg-[#2563eb] text-white px-6 py-2 rounded font-semibold font-inter float-right absolute bottom-20 right-10">
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-[url(/service-bg.svg)] bg-cover bg-cover flex justify-between bg-no-repeat -mt-10 pt-35 px-25  h-[80vh] -z-30">
                    <div className="ms-10">
                        <h1 className="text-8xl text-[#0046AA] font-roboto ">
                            Get in Touch with<br/>
                            <span className="text-[#288737]">Our Team</span>
                        </h1>
                        <p className="w-xl text-[18px] text-gray-600 mt-5">
                        It's effective, it's beneficial and it's absolutely free. Take your virtual counselling session today!
                        </p>
                    </div>
                    <div className="max-w-xl">
                        <GetintouchForm />
                    </div>
                </div>
            </div>
            <div>

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