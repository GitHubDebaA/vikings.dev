import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-white bg-blue-600">
      {/* Top Section */}
      <div className="bg-emerald-600 px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left side */}
        <div className="text-center md:text-left max-w-md">
          <div className="font-[cursive] font-extrabold text-4xl mb-2">
            Vikings
          </div>
          <p className="text-sm leading-relaxed">
            At <span className="font-[cursive]">Vikings</span>, we specialize
            in affordable <span className="font-[cursive]">Char Dham Yatra</span>{" "}
            packages, providing comfortable travel, guided experiences, and
            complete support to make your spiritual journey memorable.
          </p>
        </div>

        {/* Right side */}
        <div className="text-center md:text-left">
          <h4 className="uppercase font-bold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-base" />
              <span>
                732/21 Second Street, Manchester, King Street, Kingston United
                Kingdom
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-base" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaMobileAlt className="text-base" />
              <span>+91 98765 43211</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-base" />
              <span>info@vikings.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:text-emerald-600 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-emerald-600 transition-colors">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-emerald-600 transition-colors">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-sm">
          © {new Date().getFullYear()} Vikings Travel Agency. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}