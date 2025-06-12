import React from 'react';
import type { CountryData } from './countryData';
// import Image from 'next/image';
import GetintouchForm from '@/app/components/getintouch-form';
import Link from 'next/link';

const CountrySection: React.FC<CountryData> = ({
    name,
    paragraph,
    backgroundImage,
    greenSectionContent,
    animalShadow,
    universityLogos,
    whyChooseCards,
    blueAnimal,
}) => {

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div
                className="relative flex text-white h-[60vh] md:h-[80vh] min-h-[320px]"
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="relative z-10 mt-10 md:mt-20 ms-4 md:ms-20 flex flex-col  h-full items-start">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">
                        Study in <br />
                        <span className="block text-5xl md:text-7xl lg:text-[120px] font-bold">{name}</span>
                    </h1>
                    <p className="mt-4 max-w-xs md:max-w-xl font-montserrat font-semibold text-base md:text-lg lg:text-[20px]">
                        {paragraph}
                    </p>
                    <button className="mt-6 bg-[#0046AA] text-white w-fit px-6 py-2 rounded hover:bg-[#0046AB] transition font-inter font-semibold">
                        <Link href={`/contact-us`}>
                            Enquire Now
                        </Link>
                    </button>
                </div>
            </div>

            {/* Green Section */}
            <div className="flex  items-center bg-[#288737] text-white relative py-8 md:py-12 font-roboto px-4 md:px-10 lg:px-32">
                <img src="/bird.svg" alt="animal shadow" className="absolute right-2 md:right-8 top-0 hidden md:block w-16 md:w-24" />
                <ul className="list-disc pl-6 space-y-2 relative z-10 text-base md:text-lg lg:text-[18px] w-full md:w-2/3">
                    {greenSectionContent.map((item, idx) => (
                        <li className='font-roboto' key={idx}>{item}</li>
                    ))}
                </ul>
                <div className='absolute right-2 md:right-20  hidden md:block w-24 md:w-32 lg:w-70 '>
                    <img src={animalShadow} className="w-24 md:w-50 lg:w-70" />
                </div>
            </div>

            {/* Top Universities */}
            <div className="py-8 md:py-12 text-center font-roboto px-2 md:px-0">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-[#0046AA] font-roboto">
                    Top Universities <span>in</span> <span className='text-[#288737]'>{name}</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-20 py-6 md:py-12 items-center w-full">
                    {universityLogos.map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo.logo}
                            alt="university logo"
                            className="h-10 md:h-14 lg:h-20 object-contain max-w-[120px] md:max-w-[160px] lg:max-w-[200px]"
                        />
                    ))}
                </div>
            </div>

            {/* Why Choose Section */}
            <div className='px-7 md:px-8 lg:px-20 py-6 md:py-10 rounded-lg flex justify-center items-center'>
                <div className="py-8 md:py-18 px-2 md:px-10 bg-[url('/whychoose.svg')] bg-cover bg-center w-full rounded-lg bg-no-repeat">
                    <div className='relative flex justify-center items-center'>
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-roboto mb-8 md:mb-20 font-semibold text-center text-[#0046AA] ">
                            WHY CHOOSE <span className='text-[#288737] uppercase'>{name}</span> <br /><span className='text-[#000000]'>FOR STUDY?</span>
                        </h3>
                        <img src={blueAnimal} alt="blue animal" className="absolute right-0 -top-14 xl:top-0 md:w-40 lg:w-50 xl:w-60 hidden md:block" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto ">

                        {whyChooseCards.map((card, idx) => (
                            <div key={idx} className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center justify-center min-h-[180px] md:min-h-[230px] max-w-full md:max-w-md mx-auto">
                                {/* Number in colored circle, alternating */}
                                <div className="absolute -top-8 md:-top-10 -left-8 md:-left-10">
                                    <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-3xl md:text-5xl font-bold ${((idx % 5 === 0) || (idx % 5 === 3) || (idx % 5 === 4)) ? 'bg-[#0046AA]' : 'bg-[#288737]'}`}>
                                        <span className='text-5xl md:text-7xl absolute -bottom-2 md:-bottom-3 right-2'>{idx + 1}</span>
                                    </div>
                                </div>
                                {/* Title */}
                                <h4 className="font-bold text-base md:text-lg uppercase text-center mb-2 md:mb-3 mt-2 tracking-wide font-roboto">{card.title}</h4>
                                {/* Description */}
                                <p className="text-gray-700 text-sm md:text-base text-center text-[16px] md:text-[18px] leading-relaxed font-montserrat">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="relative bg-[url(/service-bg.svg)] bg-cover flex flex-col xl:flex-row justify-between items-center xl:items-start bg-no-repeat md:mt-0 pt-10 md:pt-35 px-2 md:px-10 py-10 lg:px-25 h-auto md:h-[80vh]">
                <div className="ms-2 md:ms-10 mb-8 md:mb-0 flex-1 flex flex-col">
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
    );
};

export default CountrySection; 