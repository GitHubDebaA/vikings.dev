"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export default function ContactPage() {
    return (
        <section className="w-screen py-16 px-6">
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-emerald-600 mb-6">
                    Contact Us
                </h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Have questions or want to book your next trip with{" "}
                    <span className="font-[cursive] italic text-emerald-600">Vikings</span>?
                    We’d love to hear from you! Reach out through the form below or connect with us directly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-emerald-600 text-xl" />
                            <span>123 Viking Street, Rishikesh, Uttarakhand, India</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-emerald-600 text-xl" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-emerald-600 text-xl" />
                            <span>info@vikings-travel.com</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6 mt-6 text-gray-600 text-2xl">
                            <a href="#" className="hover:text-emerald-600">
                                <FaFacebook />
                            </a>
                            <a href="#" className="hover:text-emerald-600">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-emerald-600">
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium">Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Phone</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="+91 9876543210"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}