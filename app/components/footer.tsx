'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EnquireForm from "./enquireForm";

export default function Footer() {
  const [isEnquireFormOpen, setIsEnquireFormOpen] = useState(false);
  return (
    <footer className="bg-white mt-4 relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo + Description */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex justify-center md:justify-start items-center md:items-start">
              <Image
                src="/Whatnext-logo.png"
                alt="WhatNext Logo"
                width={320}
                height={60}
                className="w-auto h-auto max-w-[250px] lg:max-w-[320px]"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 font-rubik">
              <span className="font-semibold">WhatNext</span> is a private virtual network that has unique features and has high security.
            </p>
            <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-6 justify-center md:justify-start md:items-start items-center">
              <a href="#" className="bg-white shadow-md rounded-full p-2 sm:p-2.5 hover:shadow-lg transition-shadow">
                <Image src="/faceook.png" alt="Facebook" width={50} height={50} className="w-10 h-10 sm:w-10 sm:h-10" />
              </a>
              <a href="#" className="bg-white shadow-md rounded-full p-2 sm:p-2.5 hover:shadow-lg transition-shadow">
                <Image src="/twitter.png" alt="Twitter" width={50} height={50} className="w-10 h-10 sm:w-10 sm:h-10" />
              </a>
              <a href="#" className="bg-white shadow-md rounded-full p-2 sm:p-2.5 hover:shadow-lg transition-shadow">
                <Image src="/instagram.png" alt="Instagram" width={50} height={50} className="w-10 h-10 sm:w-10 sm:h-10" />
              </a>
            </div>
            <div className="flex gap-6 w-full justify-center md:justify-start">
              
            </div>
            {/* <p className="text-xs text-gray-400">©2020 WhatNext</p> */}
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 lg:flex lg:flex-col lg:items-center lg:text-left">
            <div>
              <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6">Home</h4>
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <Link href="/about-us" className="text-[#4F5665] text-sm hover:text-blue-600">About Us</Link>
                <Link href="/services" className="text-[#4F5665] text-sm hover:text-blue-600">Services</Link>
                <Link href="/contact-us" className="text-[#4F5665] text-sm hover:text-blue-600">Contact Us</Link>
                <Link href="/blogs" className="text-[#4F5665] text-sm hover:text-blue-600">Blog</Link>
              </div>
            </div>
          </div>

          {/* Study Abroad Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6">Study Abroad</h4>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <Link href="/study-abroad/australia" className="text-[#4F5665] text-sm hover:text-blue-600">Study in Australia</Link>
              <Link href="/study-abroad/canada" className="text-[#4F5665] text-sm hover:text-blue-600">Study in Canada</Link>
              <Link href="/study-abroad/uk" className="text-[#4F5665] text-sm hover:text-blue-600">Study in UK</Link>
              <Link href="/study-abroad/usa" className="text-[#4F5665] text-sm hover:text-blue-600">Study in USA</Link>
              <Link href="/study-abroad/europe" className="text-[#4F5665] text-sm hover:text-blue-600">Study in Europe</Link>
              <Link href="/study-abroad/newzealand" className="text-[#4F5665] text-sm hover:text-blue-600">Study in New Zealand</Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-4 ">
            <h4 className="text-xl sm:text-2xl font-semibold text-[#262626]">
              Book a free<br />Consultation today
            </h4>
            <Link href="" onClick={() => setIsEnquireFormOpen(true)}>
              <button className="bg-blue-800 text-white px-6 py-2.5 sm:py-3 rounded-md hover:bg-blue-900 transition w-full font-bold font-inter text-sm sm:text-base">
                Free Consultation
              </button>
            </Link>
            <div className="flex justify-center md:justify-start gap-3">
              <Link href="https://www.icef.com/agency/0016M00002h2lxNQAQ" target="_blank">
                <Image src="/icefLogo.png" alt="" width={100} height={100} className="w-20 md:w-100 " />
              </Link>
              <Image src="/airc-whatnext-comments.png" alt="" width={50} height={50} className="h-20 w-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner with Illustration */}
      <div className="relative lg:-mt-10">
        <Image
          src="/footer-image.png"
          alt="Footer Background"
          width={1600}
          height={200}
          className="w-full h-auto"
        />
        <div className="  bg-[#288737] w-full h-10 text-white text-xs sm:text-sm flex items-center justify-center">
          © 2025 WhatNext. All Rights Reserved.
        </div>
      </div>
      {isEnquireFormOpen &&
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 transition-all duration-300 ease-in-out flex justify-center items-center">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-lg relative">
            <button
              onClick={() => setIsEnquireFormOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <EnquireForm setIsEnquireFormOpen={setIsEnquireFormOpen} />
          </div>
        </div>
      }
    </footer>
  );
}
