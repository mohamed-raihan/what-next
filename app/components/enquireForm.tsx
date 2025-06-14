'use client';

// import { useState } from 'react';

export default function EnquireForm({ setIsEnquireFormOpen}: {setIsEnquireFormOpen: (isOpen: boolean) => void}) {

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
              It's effective, it's beneficial and it's absolutely free.
              <br />
              Take your virtual counselling session today!
            </p>

            <form className="space-y-4 mt-6">
              <input
                type="text"
                placeholder="Name *"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                placeholder="Phone number *"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>How did you find us?</option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Friend</option>
                <option>Other</option>
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
