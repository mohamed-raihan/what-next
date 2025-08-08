import Image from 'next/image';

const memberships = [
  { src: '/ai_rc.png', alt: 'AIRC Certification' },
  { src: '/nafsalogo.svg', alt: 'NAFSA' },
];

const certifications = [
  { src: '/toefl-grace.webp', alt: 'ETS TOEFL' },
  { src: '/idp.png', alt: 'IDP IELTS' },
  { src: '/ielts-logo.png', alt: 'IDP IELTS' }
];

const accreditations = [
  { src: '/icefLogo.png', alt: 'ICEF Agency Status' },
];

const IndustryPartnerships = () => {
  return (
    <section className="text-center py-22 px-4 bg-white">
      <h2 className="text-xl xl:text-[40px] font-bold font-roboto text-[#1A4FA3]">
        OUR INDUSTRY <span className="text-[#288737]">AFFILIATIONS</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-3xl lg:text-xl font-montserrat mx-auto">
        Our affiliations with industry leaders, accreditations, and partnerships speak
        volumes about our credibility and standing.
      </p>

      <div className="mt-12 flex flex-col lg:flex-row justify-center gap-16 lg:gap-20">
        {/* Memberships Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Memberships</h3>
          <div className="flex flex-col lg:flex-row gap-8">
            {memberships.map((logo, index) => (
              <div
                key={index}
                className="w-40 h-40 relative"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Accreditations</h3>
          <div className="flex flex-col lg:flex-row gap-8">
            {accreditations.map((logo, index) => (
              <div
                key={index}
                className="w-40 h-40 relative"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Certifications</h3>
          <div className="flex flex-row gap-12">
            {/* ETS TOEFL */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-32 h-32 relative">
                <Image
                  src={certifications[0].src}
                  alt={certifications[0].alt}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </div>
            </div>
            {/* IDP IELTS */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-32 h-16 relative">
                <Image
                  src={certifications[1].src}
                  alt={certifications[1].alt}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </div>
              <div className="w-32 h-16 relative">
                <Image
                  src={certifications[2].src}
                  alt={certifications[2].alt}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPartnerships;
