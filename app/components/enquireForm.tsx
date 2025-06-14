'use client';

import { useState } from "react";
import api from "../api-services/axios";
import { API_URL } from "../api-services/api_url";
import { toast } from "react-toastify";

// import { useState } from 'react';

export default function EnquireForm({ setIsEnquireFormOpen}: {setIsEnquireFormOpen: (isOpen: boolean) => void}) {

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
            setIsEnquireFormOpen(false);
        } catch (error) {
            console.log(error);
            toast.error('Message not sent');
        }
    };

  return (
    <>
        <div className="fixed inset-0 z-50 bg-transparent bg-opacity-40  flex justify-center items-center">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-lg relative">
            <button
              onClick={() => setIsEnquireFormOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold">
              Get in <span className="text-green-600">Touch</span>
            </h2>
            <p className="mt-2 text-gray-700 font-medium">
              It&apos;s effective, it&apos;s beneficial and it&apos;s absolutely free.
              <br />
              Take your virtual counselling session today!
            </p>

            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name *"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                placeholder="Phone number *"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-bold text-lg shadow-md"
              >
                SEND
              </button>
            </form>

            <div className="mt-6 border-t pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-700">
              <div>
                <div className="font-bold">📞 PHONE</div>
                <div className="text-green-600">+91 99005 42429</div>
              </div>
              <div>
                <div className="font-bold">📠 FAX</div>
                <div className="text-green-600">03 5432 1234</div>
              </div>
              <div>
                <div className="font-bold">📧 EMAIL</div>
                <div className="text-green-600 break-words">
                  info@whatnextoverseas.com
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
