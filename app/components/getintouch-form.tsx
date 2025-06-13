import { Mail, Phone } from "lucide-react";
import { FaX } from "react-icons/fa6";

const GetintouchForm = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 w-full max-w-xl mx-auto text-[#0a0a0a]">
            <h2 className="text-2xl sm:text-3xl md:text-[45px] font-bold mb-2 font-montserrat">
                Get in <span className="text-[#288737]">Touch</span>
            </h2>
            <p className="text-[#000000] mb-4 sm:mb-6 font-montserrat text-sm sm:text-base md:text-[14px] font-semibold">
            It&apos;s effective, it&apos;s beneficial and it&apos;s absolutely free. Take your virtual counselling session today!
            </p>

            <form className="space-y-3 sm:space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Name *"
                        className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-sm sm:text-base"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-sm sm:text-base"
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Phone number *"
                        className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-sm sm:text-base"
                    />
                </div>
                <div>
                    <select className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-gray-700 text-sm sm:text-base">
                        <option>How did you find us?</option>
                        <option>Google</option>
                        <option>Referral</option>
                        <option>Social Media</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#003DA5] text-white py-2 sm:py-3 font-bold rounded text-base sm:text-lg"
                >
                    SEND
                </button>
            </form>

            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 sm:mt-8 text-sm">
                <div className="flex items-center col-span-1 mb-2 sm:mb-0 ">
                    <Phone className="w-6 h-6 mb-1" />
                    <div className="ms-3">
                        <p className="font-bold">PHONE</p>
                        <p className="text-green-600">+91 99005 42429</p>
                    </div>
                </div>
                <div className="flex items-center col-span-1 mb-2 sm:mb-0">
                    <FaX className="w-6 h-6 mb-1" />
                    <div className="ms-3">
                        <p className="font-bold">FAX</p>
                        <p className="text-green-600">03 5432 1234</p>
                    </div>
                </div>
                <div className="flex items-center col-span-1">
                    <Mail className="w-12 h-10" />
                    <div className="ms-3">
                        <p className="font-bold">EMAIL</p>
                        <p className="text-green-600 break-words">info@whatnextov erseas.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetintouchForm