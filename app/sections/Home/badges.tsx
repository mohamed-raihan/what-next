import Image from 'next/image';

const logos = [
  { src: '/ai_rc.png', alt: 'AIRC Certification' },
  { src: '/icefLogo.png', alt: 'ICEF Agency Status' },
  { src: '/nafsalogo.svg', alt: 'NAFSA' },
  { src: '/toefl-grace.webp', alt: 'ETS TOEFL' },
  { src: '/idp.png', alt: 'IDP IELTS' },
  { src: '/ielts.png', alt: 'IDP IELTS' },
];

const IndustryPartnerships = () => {
  return (
    <section className="text-center py-22 px-4 bg-white">
      <h2 className="text-xl xl:text-5xl font-bold font-roboto text-[#1A4FA3]">
        OUR INDUSTRY <span className="text-[#288737]">PARTNERSHIPS</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-3xl lg:text-xl font-montserrat mx-auto">
        Our affiliations with industry leaders, accreditations, and partnerships speak
        volumes about our credibility and standing.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-22">
        {logos.map((logo, index) => (
          <div key={index} className="w-40 h-40 relative">
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
    </section>
  );
};

export default IndustryPartnerships;
