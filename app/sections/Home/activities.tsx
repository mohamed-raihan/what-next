'use client'
import React, { useEffect, useRef } from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const EventsSection = () => {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);

  // Sample photos for the photo wall
  const photos: Photo[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop', alt: 'Event photo 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop', alt: 'Event photo 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop', alt: 'Event photo 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=400&fit=crop', alt: 'Event photo 4' },
    { id: 5, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=400&fit=crop', alt: 'Event photo 5' },
    { id: 6, src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=400&fit=crop', alt: 'Event photo 6' },
    { id: 7, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop', alt: 'Event photo 7' },
    { id: 8, src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop', alt: 'Event photo 8' },
  ];

  // Split photos into two columns
  const column2Photos = photos.filter((_, index) => index % 2 === 0);
  const column1Photos = photos.filter((_, index) => index % 2 === 1);

  useEffect(() => {
    const animateColumns = () => {
      if (column1Ref.current && column2Ref.current) {
        const scrollSpeed = 0.5;
        const currentTime = Date.now() * 0.001;
        
        // Column 1 scrolls down
        const column1Offset = (currentTime * scrollSpeed * 50) % (column1Ref.current.scrollHeight / 2);
        column1Ref.current.style.transform = `translateY(-${column1Offset}px)`;
        
        // Column 2 scrolls up
        const column2Offset = (currentTime * scrollSpeed * 50) % (column2Ref.current.scrollHeight / 2);
        column2Ref.current.style.transform = `translateY(${column2Offset}px)`;
      }
      
      requestAnimationFrame(animateColumns);
    };

    const animationFrame = requestAnimationFrame(animateColumns);
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="h-[40rem] bg-gradient-to-br from-slate-50 to-blue-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Event Description */}
          <div className="space-y-8 py-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6 font-roboto">
                Events & Activities
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 animate-fade-in overflow-y-auto h-full" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-roboto">Guiding Dreams: Activities & Events for Indian Students Who Aspire to Study Abroad</h3>
                <p className="text-gray-600 leading-relaxed font-montserrat">
                Studying abroad is a life-changing journey. At "What Next", we ensure that Indian students are not only prepared academically but also emotionally and logistically for their global leap. Our range of activities and events are designed to provide clarity, confidence, and community throughout the process.
                </p>
              </div>

              {/* <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Workshop Sessions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hands-on learning experiences designed to enhance your skills. From coding bootcamps 
                  to design thinking workshops, we offer comprehensive training programs for all levels.
                </p>
              </div> */}

              {/* <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Networking Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with like-minded professionals in our exclusive networking events. 
                  Build meaningful relationships, share ideas, and create opportunities for collaboration.
                </p>
              </div> */}

              {/* <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation Showcases</h3>
                <p className="text-gray-600 leading-relaxed">
                  Witness groundbreaking innovations and creative solutions at our showcase events. 
                  Get inspired by brilliant minds and cutting-edge projects that are changing the world.
                </p>
              </div> */}
            </div>
          </div>

          {/* Right Side - Animated Photo Wall */}
          <div className="relative">

            <div className="relative h-[40rem] overflow-hidden rounded-2xl bg-gradient-to-b from-transparent via-white/10 to-transparent">
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
                {/* Column 1 - Scrolls Down */}
                <div 
                  ref={column1Ref}
                  className="flex flex-col gap-4"
                  style={{ willChange: 'transform' }}
                >
                  {/* Duplicate photos for seamless loop */}
                  {[...column1Photos, ...column1Photos].map((photo, index) => (
                    <div
                      key={`col1-${photo.id}-${index}`}
                      className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>

                {/* Column 2 - Scrolls Up */}
                <div 
                  ref={column2Ref}
                  className="flex flex-col gap-4"
                  style={{ willChange: 'transform' }}
                >
                  {/* Duplicate photos for seamless loop */}
                  {[...column2Photos, ...column2Photos].map((photo, index) => (
                    <div
                      key={`col2-${photo.id}-${index}`}
                      className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient overlays for smooth edges */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;