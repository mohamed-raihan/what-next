// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16 relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div className="space-y-6">
          <div>
            <Image src="/Whatnext-logo.png" alt="WhatNext Logo" width={320} height={60} />
          </div>
          <p className="text-sm text-gray-600 mt-4 font-rubik">
            <span className="font-semibold">Companyname</span> is a private virtual network that has unique features and has high security.
          </p>
          <div className="flex space-x-6 mt-6">
            <a href="#" className="bg-white shadow-md rounded-full p-2.5 hover:shadow-lg transition-shadow">
              <Image src="/faceook.png" alt="Facebook" width={30} height={30} />
            </a>
            <a href="#" className="bg-white shadow-md rounded-full p-2.5 hover:shadow-lg transition-shadow">
              <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
            </a>
            <a href="#" className="bg-white shadow-md rounded-full p-2.5 hover:shadow-lg transition-shadow">
              <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
            </a>
          </div>
          <p className="text-xs text-gray-400">©2020 WhatNext</p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4 mx-auto">
          <h4 className="font-semibold text-gray-900 text-lg mb-6">Home</h4>
          <div className="flex flex-col space-y-4">
            <Link href="/about" className="text-[#4F5665] text-sm hover:text-blue-600">About Us</Link>
            <Link href="/pricing" className="text-[#4F5665] text-sm hover:text-blue-600">Pricing</Link>
            <Link href="/services" className="text-[#4F5665] text-sm hover:text-blue-600">Services</Link>
            <Link href="/contact" className="text-[#4F5665] text-sm hover:text-blue-600">Contact Us</Link>
            <Link href="/blog" className="text-[#4F5665] text-sm hover:text-blue-600">Blog</Link>
          </div>
        </div>

        {/* Study Abroad Links */}
        <div className="space-y-4 mx-auto">
          <h4 className="font-semibold text-gray-900 text-lg mb-6">Study Abroad</h4>
          <div className="flex flex-col space-y-4">
            <Link href="/study/australia" className="text-[#4F5665] text-sm hover:text-blue-600">Study in Australia</Link>
            <Link href="/study/canada" className="text-[#4F5665] text-sm hover:text-blue-600">Study in Canada</Link>
            <Link href="/study/uk" className="text-[#4F5665] text-sm hover:text-blue-600">Study in UK</Link>
            <Link href="/study/usa" className="text-[#4F5665] text-sm hover:text-blue-600">Study in USA</Link>
            <Link href="/study/europe" className="text-[#4F5665] text-sm hover:text-blue-600">Study in Europe</Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col justify-center w-fit mx-auto">
          <h4 className="text-2xl font-semibold text-[#262626] mb-6">Book a free <br /> Consultation today</h4>
          <Link href="/contact">
            <button className="bg-blue-800 text-white px-3 py-3 rounded-md hover:bg-blue-900 transition w-full font-bold font-inter text-base">
              Free Consultation
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Banner with Illustration */}
      <div className="relative">
        <Image
          src="/footer-image.png"
          alt="Footer Background"
          layout="responsive"
          width={1600}
          height={200}
          className="w-full h-auto"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
          © 2025 WhatNext. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
