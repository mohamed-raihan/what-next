// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md border-t-4 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="WhatNext Logo" width={100} height={50} />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/about-us" className="text-gray-800 hover:text-blue-600 font-medium">About Us</Link>
          <div className="relative group">
            <button className="text-gray-800 hover:text-blue-600 font-medium flex items-center gap-1">
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
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 w-[130px] rounded">
              <Link href="/study-abroad/canada" className="block px-4 py-2 hover:bg-gray-100">Canada</Link>
              <Link href="/study-abroad/usa" className="block px-4 py-2 hover:bg-gray-100">USA</Link>
              <Link href="/study-abroad/uk" className="block px-4 py-2 hover:bg-gray-100">UK</Link>
              <Link href="/study-abroad/australia" className="block px-4 py-2 hover:bg-gray-100">Australia</Link>
              <Link href="/study-abroad/europe" className="block px-4 py-2 hover:bg-gray-100">Europe</Link>
            </div>
          </div>
          <Link href="/services" className="text-gray-800 hover:text-blue-600 font-medium">Services</Link>
          <Link href="/blogs" className="text-gray-800 hover:text-blue-600 font-medium">Blog</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md font-inter font-semibold text-[18px] hover:bg-blue-900 transition">
              Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
