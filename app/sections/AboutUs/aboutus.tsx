import React from "react";
import Image from "next/image";

const destinations = [
    { country: "USA", image: "/usa.svg", flag: "/flags/us.png" },
    { country: "United Kingdom", image: "/uk.svg", flag: "/flags/uk.png" },
    { country: "Canada", image: "/canada.svg", flag: "/flags/ca.png" },
    { country: "Europe", image: "/europe.svg", flag: "/flags/eu.png" },
    { country: "Australia", image: "/australia.svg", flag: "/flags/au.png" },
];

export default function AboutSection() {
    return (
        <section className=" overflow-hidden">
            {/* Top Bird Graphic */}


            {/* About Us Text Section */}
            <div className="relative">
                <div className=" max-w-4xl lg:h-[800px] lg:ms-30 px-4 py-20 lg:py-24 text-left">
                    <Image src="/bird-right.svg" alt="Top Bird" width={100} height={100} className="absolute w-[200px] lg:w-[800px] right-0 -top-15 md:-top-15 md:right-0" />
                    <h3 className="text-2xl md:text-4xl font-semibold text-[#686868] mt-10 md:mt-0">About Us</h3>
                    <h1 className="text-3xl md:text-6xl font-bold leading-tight font-roboto mb-20">
                        <span className="text-[#0046AA]">Experience</span> a Different Kind of <span className="text-[#288737]">Study Abroad Journey</span>
                    </h1>
                    <p className="my-16 text-[#000000]  font-[100] text-xl md:text-2xl  font-montserrat">
                        WhatNext provides professional education services that are equitable, far
                        reaching, extensive, existent, virtuous and of high quality. We assist students
                        in connecting with higher education institutions all across the world.
                    </p>
                    <p className="mt-4 text-[#000000] text-light text-xl md:text-2xl font-montserrat">
                        We allure the best flair in terms of counsellors and enablers without regard to
                        contention, divinity, or communal as a chosen partner for top worldwide
                        educational institutions, and we provide a tremendous working environment. While
                        being equipped to be globally productive citizens, students&apos; lives are enriched.
                    </p>
                </div>
            </div>

            {/* Destinations */}
            <div className="relative py-12 px-10 lg:h-[500px] text-center">
                <Image src="/bird-left.svg" alt="Bottom Bird" width={100} height={100} className="absolute -top-0 lg:-top-60 z-10 left-0 w-[200px] lg:w-[700px]" />
                <div className="flex justify-center items-center">
                    <p className="text-gray-700  max-w-5xl text-base md:text-xl mb-8 font-regular mb-20 font-montserrat">
                        WhatNext admits to deliver the excellent student advice and counselling. With us,
                        you can study in the top educational hubs across the world, including the United
                        States, Canada, the United Kingdom, Australia, New Zealand, and Europe.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 lg:pl-30 mt-10 lg:mt-0">
                    {destinations.map((dest, idx) => (
                        <div key={idx} className="">
                            <Image
                                src={dest.image}
                                alt={dest.country}
                                width={230}
                                height={140}
                                className="rounded shadow-md "
                            />
                            {/* <p className="mt-2 font-medium">Study in {dest.country}</p> */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Vision & Mission */}
            <div className="relative bg-[url('/blue-rectangle.svg')] bg-cover bg-center pt-10 lg:pt-[160px] lg:pb-16 px-4 lg:h-[70rem]">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 text-center">
                    {/* <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-bold mb-2">Vision</h3>
                        <p>
                            To make a revolutionary impact on the Study Abroad Service Sector all over the
                            world while maintaining a high level of professionalism through continuous
                            innovation in student services.
                        </p>
                    </div> */}
                    <div className="bg-gradient-to-br from-[#c5e4ff] to-[#3da8ff] p-4 rounded-[40px] max-w-xl mx-auto mt-10">
                        <div className="bg-white rounded-[30px] text-center p-8 md:p-10 shadow-lg">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-roboto">Vision</h2>
                            <p className="text-lg text-gray-800 leading-relaxed">
                                To make a revolutionary impact on the Study Abroad Service Sector all over the
                                world while maintaining a high level of professionalism through continuous
                                innovation in student services.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#c5e4ff] to-[#3da8ff] p-4 rounded-[40px] max-w-xl mx-auto lg:-mt-20 lg:absolute lg:right-30">
                        <div className="bg-white rounded-[30px] text-center p-8 md:p-10 shadow-lg">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-roboto">Mission</h2>
                            <p className="text-lg text-gray-800 leading-relaxed font-montserrat">
                                To be a global leader in the internationalisation of the student
                                experience by being inventive, collaborative, and globally
                                significant. To provide personalised solutions to the students who
                                want to study abroad, strive for organic growth for our firm through
                                integrity, honesty and excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:bottom-0 pb-15 lg:pb-0 mt-16 lg:mt-0 lg:h-[500px] w-full flex flex-col items-center justify-center lg:bg-[url('/valuecircle.svg')] bg-none">
                    <h2 className="text-[60px] lg:text-[90px] lg:hidden font-roboto font-bold mb-12 text-center text-[#000000]">Our Core <br /><span className="">Values</span></h2>
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-6">
                        {/* {coreValues.map((value, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow-lg rounded-xl p-6 w-48 text-center"
                            >
                                <Image src="/Sparkle.svg" alt="Value" width={40} height={40} className="mx-auto mb-2" />
                                <p className="font-semibold font-roboto">{value}</p>
                            </div>
                        ))} */}
                        <div
                            key=""
                            className="bg-white shadow-lg lg:absolute lg:left-40 lg:top-40 rounded-xl p-6 text-center w-[248px] h-[220px] lg:-rotate-8"
                        >
                            <Image src="/Sparkle.svg" alt="Value" width={80} height={80} className="mx-auto mb-2" />
                            <p className="font-semibold font-roboto text-[22px]">Driving Towards Innovation</p>
                        </div>
                        <div
                            key=""
                            className="bg-white shadow-lg rounded-xl p-6 w-48 lg:mx-15 lg:-mt-10 text-center w-[248px] h-[220px] lg:-rotate-6"
                        >
                            <Image src="/Sparkle.svg" alt="Value" width={80} height={80} className="mx-auto mb-2" />
                            <p className="font-semibold font-roboto text-[22px]">Striving Towards Excellence</p>
                        </div>
                        <div
                            key=""
                            className="bg-white shadow-lg rounded-xl p-6 w-48 lg:mx-15 lg:-mt-10 text-center w-[248px] h-[220px] lg:rotate-6"
                        >
                            <Image src="/Sparkle.svg" alt="Value" width={80} height={80} className="mx-auto mb-2" />
                            <p className="font-semibold font-roboto text-[22px]">Pursue With Passion</p>
                        </div>
                        <div
                            key=""
                            className="bg-white shadow-lg lg:absolute lg:right-40 lg:top-40 rounded-xl p-6 w-48 text-center w-[248px] h-[220px] lg:rotate-8"
                        >
                            <Image src="/Sparkle.svg" alt="Value" width={80} height={80} className="mx-auto mb-2" />
                            <p className="font-semibold font-roboto text-[22px]">Transparency</p>
                        </div>
                    </div>
                    <h2 className="text-[40px] md:text-[90px] hidden lg:block font-roboto font-bold mb-12 text-center text-white">Our Core <br /><span className="">Values</span></h2>
                </div>

            </div>

            {/* Core Values */}
            {/* <div className="relative py-20 bg-gradient-to-b from-white to-sky-300 text-center">
                
            </div> */}
        </section>
    );
}
