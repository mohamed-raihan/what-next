'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const StudyAbroadSection = () => {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveringRef = useRef(false);

  const countries = [
    {
      name: 'United States',
      image: '/usa.svg',
      description: 'The USA offers diverse programs and vibrant campus life.',
      link: '/study-abroad/usa'
    },
    {
      name: 'Canada',
      image: '/canada.svg',
      description: 'Canada is known for its excellent universities and welcoming culture.',
      link: '/study-abroad/canada'
    },
    {
      name: 'United Kingdom',
      image: '/uk.svg',
      description: "The UK is home to some of the world's top universities.",
      link: '/study-abroad/uk'
    },
    {
      name: 'Europe',
      image: '/europe.svg',
      description: 'Europe offers world-class education and vibrant student life.',
      link: '/study-abroad/europe'
    },
    {
      name: 'Australia',
      image: '/australia.svg',
      description: 'Australia offers world-class education and vibrant student life.',
      link: '/study-abroad/australia'
    },
    {
      name: 'New Zealand',
      image: '/newzealand.svg',
      description: 'When you choose to study in New Zealand, you can be confident.',
      link: '/study-abroad/newzealand'
    },
    {
      name: 'UAE',
      image: '/uae-slide.png',
      description: 'UAE welcomes international students to thrive in a global classroom.',
      link: '/study-abroad/uae'
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const itemWidth = 324; // 300px card + 24px gap
    const totalItems = countries.length + 3; // including duplicates
    const maxScroll = (totalItems - 5) * itemWidth; // scroll until we show the last 5 items

    const autoScroll = () => {
      if (isHoveringRef.current) return; // Pause on hover
      
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      carousel.style.transform = `translateX(-${scrollPosition}px)`;
    };

    const startAutoScroll = () => {
      intervalRef.current = setInterval(autoScroll, 50); // 50ms = 20fps
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Mouse event handlers
    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      stopAutoScroll();
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      startAutoScroll();
    };

    // Add event listeners
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    // Start auto-scroll
    startAutoScroll();

    return () => {
      stopAutoScroll();
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="">
      <section className="relative xl:h-screen mx-auto py-16 px-4 bg-[url('/education-learning1.svg')] bg-no-repeat bg-cover bg-center">
        <div className="text-center h-full flex flex-col justify-center items-center">
          <p className="text-xl md:text-2xl font-semibold text-[#686868]">About Us</p>
          <h2 className="font-bold mt-2 font-roboto text-[#0046AA] font-semibold text-[25px] md:text-[40px]">Experience a Different Kind of</h2>
          <h2 className="text-[#288737] font-roboto font-semibold text-[35px] md:text-[75px]">Study Abroad Journey</h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-md md:text-lg font-montserrat">
            WhatNext provides professional education services that are equitable, far reaching,
            extensive, existent, virtuous and of high quality. We assist students in connecting with
            higher education institutions all across the world.
          </p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-md md:text-lg font-montserrat">
            We allure the best flair in terms of counsellors and enablers without regard to
            contention, divinity, or communal as a chosen partner for top worldwide educational
            institutions, and we provide a tremendous working environment. While being equipped to be
            globally productive citizens, student&apos;s lives are enriched.
          </p>
          <button className="mt-6 bg-[#288737] text-white px-6 py-2 rounded hover:bg-green-800 transition font-inter font-semibold" onClick={() => router.push('/services')}> 
            Discover More
          </button>
        </div>

        {/* Left torn paper image */}
        <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2">
          <Image
            src="/study-abroad3.png"
            alt="Left decoration"
            width={300}
            height={600}
            className="w-auto h-[80vh]"
          />
        </div>

        {/* Right top torn paper image */}
        <div className="hidden xl:block absolute top-0 right-0">
          <Image
            src="/study-abroad1.png"
            alt="Right top decoration"
            width={300}
            height={300}
            className="w-auto h-[40vh]"
          />
        </div>

        {/* Right bottom torn paper image */}
        <div className="hidden xl:block absolute bottom-0 right-0">
          <Image
            src="/study-abroad2.png"
            alt="Right bottom decoration"
            width={300}
            height={300}
            className="w-auto h-[40vh]"
          />
        </div>
      </section>

      <div className="bg-white px-8 py-10 bg-[url('/vector3.svg')] bg-cover object-fill flex justify-center items-center">
        <div className='rounded-lg bg-white shadow-lg p-8 w-fit'>
          <h3 className="text-center text-3xl font-bold mb-12 text-[#1e3a8a]">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { title: 'Unlock Your Future', img: '/ourservice1.svg' },
              { title: 'Courses & Universities', img: '/ourservice3.svg' },
              { title: 'Enrollment Guidelines', img: '/ourservice2.svg' },
              { title: 'Quick & Easy Enrollment', img: '/ourservice5.svg' },
              { title: 'Immigration Support', img: '/ourservice6.svg' },
              { title: 'Scholarship Assistance', img: '/ourservice7.svg' },
              { title: 'Monetary Guidance', img: '/ourservice8.svg' },
              { title: 'Student Travel Assistance', img: '/ourservice4.svg' },

            ].map((service, index) => (
              <Link href={`/services?service=${service.title}`} key={index}>
                <div
                  key={index}
                  className="group relative border-2 border-[#D4D4D4] overflow-hidden transition-all duration-300 hover:shadow-xl"
                  style={{
                    
                    borderRadius: '1rem',
                  }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={service.img}
                      width={100}
                      height={100}
                      alt={service.title}
                      className="w-full transition-all duration-300 group-hover:grayscale"
                    />
                    <div className="absolute p-4">
                      <h4 className="font-semibold text-[#0046AA] text-lg font-roboto">
                        {service.title}
                      </h4>
                    </div>
                    <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 w-28 h-2 bg-[#288737]"></div>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="relative bg-[#0046AA] bg-[url('/flight.svg')] bg-cover pt-19 text-white mt-26">
        <div className="flex justify-center items-center">
          <Image src="/gosectionblue.svg" alt="Study Abroad" width={200} height={200} className='absolute -top-17 w-150' />
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 font-roboto font-semibold">Where would you like to go?</h3>
          <p className="mb-10 text-sm font-montserrat">Choose from the best courses from top global universities with WhatNext.</p>
        </div>
        {/* Auto-scroll Carousel */}
        <div className="flex flex-col items-center">
          <div className="w-full px-2 sm:px-10 relative">
            {/* Carousel Container - Fixed width to show exactly 5 items */}
            <div className="w-[1620px] mx-auto overflow-hidden" style={{ width: '1620px' }}> {/* 5 items * 300px + 4 gaps * 30px = 1620px */}
              <div 
                ref={carouselRef}
                className="flex gap-6 transition-all duration-100 ease-in-out"
                style={{
                  width: `${(countries.length + 3) * 324}px` // Total width for all items plus duplicates
                }}
              >
                {countries.map((country, idx) => (
                  <Link
                    href={country.link}
                    key={idx}
                    className="bg-white rounded-lg overflow-hidden shadow-md w-[300px] h-[350px] flex-shrink-0 hover:shadow-xl transition-all duration-300"
                  >
                    <img src={country.image} alt={`Study in ${country.name}`} className="w-full h-50 object-cover" />
                    <div className="p-4 text-black">
                      <h4 className="text-sm font-roboto font-semibold">STUDY IN</h4>
                      <p className="text-2xl font-bold text-[#0046AA] font-roboto">{country.name}</p>
                      <p className="text-[14px] mt-1 text-[#242424] font-montserrat">{country.description}</p>
                    </div>
                  </Link>
                ))}
                {/* Duplicate first few items for seamless loop */}
                {countries.slice(0, 3).map((country, idx) => (
                  <Link
                    href={country.link}
                    key={`duplicate-${idx}`}
                    className="bg-white rounded-lg overflow-hidden shadow-md w-[300px] h-[350px] flex-shrink-0 hover:shadow-xl transition-all duration-300"
                  >
                    <img src={country.image} alt={`Study in ${country.name}`} className="w-full h-50 object-cover" />
                    <div className="p-4 text-black">
                      <h4 className="text-sm font-roboto font-semibold">STUDY IN</h4>
                      <p className="text-2xl font-bold text-[#0046AA] font-roboto">{country.name}</p>
                      <p className="text-[14px] mt-1 text-[#242424] font-montserrat">{country.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <Image src="/gosectionwhite.svg" alt="Study Abroad" width={200} height={200} className='relative -bottom-10 md:-bottom-19 w-150' />
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadSection;
