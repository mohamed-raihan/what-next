"use client"
import api from '@/app/api-services/axios';
import { API_URL } from '@/app/api-services/api_url';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import { useState } from 'react';

const initialReviews = [
  {
    name: 'Agnes Remi',
    designation: 'Back-end Developer at MyDodow',
    review:
      'Dico is finally addressing a long time problem we had when building UIs. It&apos;s ease of use and workflow seems really intuitive. Promising!',
    date: '2021.03.02',
    profile_image: '/reviewimage.svg',
    company: 'MyDodow',
    country: 'Nigeria',
  },
  {
    name: 'John Carter',
    designation: 'Full Stack Developer at CodeX',
    review:
      'An excellent UI tool that helped us speed up our development process. The team loves it!',
    date: '2021.05.12',
    profile_image: '/reviewimage.svg',
    company: 'CodeX',
    country: 'United States',
  },
  {
    name: 'Lisa Wong',
    designation: 'Frontend Engineer at BrightTech',
    review:
      'Very user-friendly and saves a lot of time. The UX is clean and efficient. Highly recommended!',
    date: '2022.01.18',
    profile_image: '/reviewimage.svg',
    company: 'BrightTech',
    country: 'United States',
  },
  // Repeat or add more reviewers here
];

type Review = {
  name: string;
  designation: string;
  company: string;
  review: string;
  date: string;
  country: string;
  profile_image: string;
};

export async function getReviews() {
  const response = await api.get(API_URL.HOME.REVIEWS);
  console.log(response.data);
  return response.data;
}

// const universities = [
//   { name: 'Buckinghamshire New University', logo: '/universities/buckinghamshire.png' },
//   { name: 'Aberystwyth University', logo: '/universities/aberystwyth.png' },
//   { name: 'Birmingham Newman University', logo: '/universities/newman.png' },
//   { name: 'Durham University', logo: '/universities/durham.png' },
//   { name: 'UWE Bristol', logo: '/universities/uwe.png' },
//   { name: 'Arts University Bournemouth', logo: '/universities/artsbournemouth.png' },
//   { name: 'Birmingham City University', logo: '/universities/birminghamcity.png' },
//   { name: 'Bournemouth University', logo: '/universities/bournemouth.png' },
//   { name: 'Canterbury Christ Church University', logo: '/universities/canterbury.png' },
//   { name: 'Bangor University', logo: '/universities/bangor.png' },
//   { name: 'David Game College', logo: '/universities/davidgame.png' },
//   { name: 'BPP University', logo: '/universities/bpp.png' },
//   { name: 'Bishop Grosseteste University', logo: '/universities/bishopgrosseteste.png' },
//   { name: 'Birkbeck University of London', logo: '/universities/birkbeck.png' },
//   { name: 'Bath Spa University', logo: '/universities/bathspa.png' },
// ];

export default function StudentReviewsAndUniversities() {
  // const [currentIndex, setCurrentIndex] = useState(0);\
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews();
        if (reviews && reviews.length > 0) {
          setReviews(reviews);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  console.log(reviews);

  return (
    <section className='-mb-30'>
      {/* Student Reviews Section */}
      <div className="bg-[url('/reviewbg.svg')] bg-cover bg-center text-white pb-25 pt-15 relative">
        <h2 className="text-3xl font-bold font-roboto text-center mb-10">Student Reviews</h2>
        <div className="flex justify-center gap-6 flex-wrap px-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-lg max-w-sm p-6 flex flex-col items-start"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={review.profile_image}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold text-lg">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.designation}</p>
                </div>
              </div>
              <p className="text-sm mb-4">«{review.review}»</p>
              <p className="text-xs text-gray-500">
                {review.date}
              </p>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white/40" />
          <span className="w-3 h-3 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Featured UK Universities */}
      <div className="bg-white py-16 px-8 relative">
        <div className='rounded-3xl relative -top-30 bottom-0 left-0 w-full h-full bg-white shadow-lg p-8'>
          <h2 className="text-3xl font-bold text-center mb-12">Featured UK Universities</h2>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md flex items-center justify-center h-24"
            >
              <Image
                src={uni.logo}
                alt={uni.name}
                width={150}
                height={80}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div> */}
          <div>
            <Image src="/university.svg" alt="University" width={100} height={50} className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
