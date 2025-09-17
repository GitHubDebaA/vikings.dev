"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaHome, FaGlobeAsia, FaSuitcaseRolling, FaUsers, FaCameraRetro, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/", icon: FaHome },
        { name: "Destinations", path: "/destinations", icon: FaGlobeAsia },
        { name: "Packages", path: "/packages", icon: FaSuitcaseRolling },
        { name: "About Us", path: "/about", icon: FaUsers },
        { name: "Gallery", path: "/gallery", icon: FaCameraRetro },
        { name: "Contact Us", path: "/contact", icon: FaPhoneAlt },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16">
            <div className="container mx-auto px-4 h-full flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-emerald-600 font-[cursive] italic">
                    Vikings
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`${pathname === item.path
                                    ? "text-emerald-600 font-semibold"
                                    : "text-gray-700 hover:text-emerald-600"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md w-full absolute top-16 left-0">
                    <ul className="flex flex-col p-4 space-y-6">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`flex items-center gap-3 text-lg transition ${pathname === item.path
                                        ? "text-emerald-600 font-semibold"
                                        : "text-gray-700 hover:text-emerald-600"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <item.icon className="w-5 h-5" /> {/* Icon */}
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}