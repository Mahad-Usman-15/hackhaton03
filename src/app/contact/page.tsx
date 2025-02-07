"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pict from "../carousel-inner (1).png";
import piic2 from "../technology 1.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    company: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Form data saved to localStorage!");
    setFormData({ name: "", email: "", phone: "", website: "", company: "", subject: "", message: "" });
  };

  return (
    <div>
      <div className="font-[sans-serif]">
        <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
          <img
            src="https://readymadeui.com/cardImg.webp"
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="-mt-28 mb-6 px-4">
          <div className="mx-auto max-w-6xl p-8 relative bg-white rounded">
            <h2 className="text-xl text-gray-800 font-bold">Product or Service Inquiry</h2>
            <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-800 text-sm block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Your Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No."
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Website</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Website"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div className="col-span-full">
                <label className="text-gray-800 text-sm block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded px-4 border border-gray-300 text-sm pt-3 focus:border-blue-600 outline-none"
                />
              </div>

              <button
                type="submit"
                className="text-white w-max bg-[#007bff] hover:bg-blue-600 tracking-wide rounded text-sm px-4 py-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2 inline"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
