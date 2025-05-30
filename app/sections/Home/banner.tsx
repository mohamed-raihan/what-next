import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
    return (
        <div className="relative min-h-[700px] ">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/banner-home.png"
                    alt="University Building"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Company Name */}
                <div className="flex items-center gap-2">
                    <Image src="/flightlogo.png" alt="WhatNext Logo" width={100} height={21} className="mb-6" />
                    <h2 className="text-[#242424] font-semibold text-xl mb-6 font-montserrat">
                        What Next Overseas Educational Consultancy
                    </h2>
                </div>

                {/* Main Headlines */}
                <div className="space-y-4 mb-12 font-roboto">
                    <h1 className="text-6xl font-medium">
                        <span className="text-[#0046AA]">Empowering </span>
                        <span className="text-[#288737]">Dreams</span>
                    </h1>
                    <h1 className="text-6xl font-medium">
                        <span className="text-[#0046AA]">Extending </span>
                        <span className="text-[#288737]">Education</span>
                    </h1>
                </div>

                {/* Stats Card */}
                <div className="bg-white rounded-3xl p-6 max-w-3xl border border-[#E5E5E5]">
                    <div className="mb-8">
                        <div className="flex items-center gap-3">
                            <p className="text-[#464646] text-lg font-medium font-roboto">
                                Your gateway to world-class education in
                            </p>
                            <Image src="/flags.png" alt="Flags" width={188} height={34} className="ml-1" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        {/* Stats Section */}
                        <div className="flex items-center divide-x divide-gray-300">
                            <div className="pr-12 flex flex-col items-center justify-center">
                                <h3 className="text-[#0046AA] text-3xl font-bold mb-2">140+</h3>
                                <p className="text-gray-600 w-full text-sm">University Partners</p>
                            </div>
                            <div className="px-12">
                                <h3 className="text-[#28A745] text-3xl font-bold mb-2">20,000+</h3>
                                <p className="text-gray-600 text-sm">Student's Career</p>
                            </div>
                            <div className="pl-12">
                                <h3 className="text-[#0046AA] text-3xl font-bold mb-2">35+</h3>
                                <p className="text-gray-600 text-sm">Recruitment Awards</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4 ml-8">
                            <Link href="/enquire" className="w-full">
                                <button className="bg-[#0046AA] text-white px-3 py-3 rounded-lg hover:bg-blue-700 transition w-full text-sm font-semibold font-inter">
                                    Enquire Now
                                </button>
                            </Link>
                            <Link href="/about" className="w-full">
                                <button className="border-2 border-[#0046AA] text-[#0046AA] px-3 py-3 rounded-lg hover:bg-blue-50 transition w-full text-sm font-semibold font-inter">
                                    Know More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}