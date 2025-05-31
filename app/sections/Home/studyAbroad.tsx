import Image from 'next/image';
import React from 'react';

const StudyAbroadSection = () => {
  return (
    <div className="">
      <section className="relative h-screen mx-auto py-16 bg-[url('/education-learning1.svg')] bg-no-repeat bg-cover bg-center">
        <div className="text-center h-full flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold text-[#686868]">About Us</p>
          <h2 className="font-bold mt-2 font-roboto text-[#0046AA] font-semibold text-[40px]">Experience a Different Kind of</h2>
          <h2 className="text-[#288737] font-roboto font-semibold text-[75px]">Study Abroad Journey</h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg font-montserrat">
            WhatNext provides professional education services that are equitable, far reaching,
            extensive, existent, virtuous and of high quality. We assist students in connecting with
            higher education institutions all across the world.
          </p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg font-montserrat">
            We allure the best flair in terms of counsellors and enablers without regard to
            contention, divinity, or communal as a chosen partner for top worldwide educational
            institutions, and we provide a tremendous working environment. While being equipped to be
            globally productive citizens, students&apos; lives are enriched.
          </p>
          <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition font-inter font-semibold">
            Discover More
          </button>
        </div>

        {/* Left torn paper image */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Image 
            src="/study-abroad3.png" 
            alt="Left decoration" 
            width={300} 
            height={600}
            className="w-auto h-[80vh]"
          />
        </div>
        
        {/* Right top torn paper image */}
        <div className="absolute top-0 right-0">
          <Image 
            src="/study-abroad1.png" 
            alt="Right top decoration" 
            width={300} 
            height={300}
            className="w-auto h-[40vh]"
          />
        </div>
        
        {/* Right bottom torn paper image */}
        <div className="absolute bottom-0 right-0">
          <Image 
            src="/study-abroad2.png" 
            alt="Right bottom decoration" 
            width={300} 
            height={300}
            className="w-auto h-[40vh]"
          />
        </div>

      </section>

      <div className="mt-16 bg-white p-8">
        <h3 className="text-center text-2xl font-bold mb-12 text-[#1e3a8a]">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: 'Career Counselling & Admission Guidance', img: '/ourservice1.svg' },
            { title: 'Admission Formalities', img: '/ourservice2.svg' },
            { title: 'Choosing Right Courses and University', img: '/ourservice3.svg' },
            { title: 'Travel Assistance', img: '/ourservice4.svg' },
            { title: 'Application Process', img: '/ourservice5.svg' },
            { title: 'Visa Assistance', img: '/ourservice6.svg' },
            { title: 'Scholarship Guidance', img: '/ourservice7.svg' },
            { title: 'Financial Guidance', img: '/ourservice8.svg' }
          ].map((service, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl border-2 border-[#1e3a8a] overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-square">
                <Image 
                  src={service.img} 
                  width={100}
                  height={100}
                  alt={service.title} 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFFFFF]/90"></div>
                <div className="absolute p-4">
                  <h4 className="font-semibold text-[#0046AA] text-lg font-roboto">
                    {service.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="relative bg-[#0046AA] pt-16 text-white mt-26">
        <div className="flex justify-center items-center">
            <Image src="/gosectionblue.svg" alt="Study Abroad" width={100} height={100} className='absolute -top-20 w-100'/>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Where would you like to go?</h3>
          <p className="mb-10 text-sm">Choose from the best courses from top global universities with WhatNext.</p>
        </div>
        <div className="max-w-8xl mx-auto px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/newzealand.svg" alt="Study in New Zealand" className="w-full h-40 object-cover" />
              <div className="p-4 text-black">
                <h4 className="font-regular text-sm font-montserrat">STUDY IN</h4>
                <p className="text-2xl font-medium text-[#363636] font-montserrat">New Zealand</p>
                <p className="text-[10px] mt-1 text-[#242424] font-roboto">When you choose to study in New Zealand, you can be confident.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center mt-10">
            <Image src="/gosectionwhite.svg" alt="Study Abroad" width={100} height={100} className='relative -bottom-1 w-100'/>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadSection;
