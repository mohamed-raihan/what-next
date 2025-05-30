import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-t-4 font-roboto ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="WhatNext Logo" width={108} height={55} />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-[#4B4B4B] hover:text-blue-600 font-bold">Home</Link>
          <Link href="/about" className="text-[#4B4B4B] hover:text-blue-600 font-bold">About Us</Link>
          <div className="relative group">
            <button className="text-[#4B4B4B] hover:text-blue-600 font-bold flex items-center gap-1">
              Study Abroad
              <svg
                className="w-4 h-4 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            {/* Dropdown (optional) */}
            {/* <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 rounded">
              <Link href="/study-abroad/usa" className="block px-4 py-2 hover:bg-gray-100">USA</Link>
              <Link href="/study-abroad/uk" className="block px-4 py-2 hover:bg-gray-100">UK</Link>
            </div> */}
          </div>
          <Link href="/services" className="text-[#4B4B4B] hover:text-blue-600 font-bold">Services</Link>
          <Link href="/blog" className="text-[#4B4B4B] hover:text-blue-600 font-bold">Blog</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#0046AA] text-white px-4 py-2 rounded-md hover:bg-blue-900 w-[164px] h-[39px] transition font-bold text-sm font-inter">
              Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}