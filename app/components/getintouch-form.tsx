'use client';
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { API_URL } from "../api-services/api_url";
import { toast } from "react-toastify";
import api from "../api-services/axios";

const GetintouchForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        find_us: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await api.post(API_URL.CONTACT_US.POST_CONTACT_US, formData);
            console.log(response);
            toast.success('Message sent successfully');
            setFormData({
                name: '',
                email: '',
                phone_number: '',
                find_us: ''
            });
        } catch (error) {
            console.log(error);
            toast.error('Message not sent');
        }
    };  

    return (
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 w-full max-w-xl mx-auto text-[#0a0a0a]">
            <h2 className="text-2xl sm:text-3xl md:text-[45px] font-bold mb-2 font-montserrat">
                Get in <span className="text-[#288737]">Touch</span>
            </h2>
            <p className="text-[#000000] mb-4 sm:mb-6 font-montserrat text-sm sm:text-base md:text-[14px] font-semibold">
            It&apos;s effective, it&apos;s beneficial and it&apos;s absolutely free. Take your virtual counselling session today!
            </p>

            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Name *"
                        className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-sm sm:text-base"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-sm sm:text-base"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Phone number *"
                        className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-sm sm:text-base"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <select     
                        className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-gray-700 text-sm sm:text-base"
                        name="find_us"
                        value={formData.find_us}
                        onChange={handleChange}
                    >
                        <option value="">How did you find us?</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Whatsapp">Whatsapp</option>
                        <option value="Telegram">Telegram</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Other">Other</option>
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