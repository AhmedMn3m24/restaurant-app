"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function HomeContact() {
  return (
    <section className="w-full bg-[#111] py-20 text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="mb-16 text-center text-4xl font-bold uppercase tracking-[4px] hover:text-orange-400">
          <a href="/contacts">Contacts</a>
        </h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <MapPin className="h-6 w-6 text-[#CDA45E]" />
              <h3 className="text-xl font-bold uppercase">Location</h3>
            </div>

            <p className="text-gray-300">
              Alexandria, Egypt
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <Phone className="h-6 w-6 text-[#CDA45E]" />
              <h3 className="text-xl font-bold uppercase">Phone</h3>
            </div>

            <a
              href="tel:+201001234567"
              className="text-[#CDA45E] transition hover:text-white"
            >
              +20 100 123 4567
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <Mail className="h-6 w-6 text-[#CDA45E]" />
              <h3 className="text-xl font-bold uppercase">Email</h3>
            </div>

            <a
              href="mailto:info@restaurant.com"
              className="text-gray-300 transition hover:text-white"
            >
              info@restaurant.com
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center">
            <h3 className="mb-5 text-xl font-bold uppercase">
              Follow Us
            </h3>

            <div className="flex justify-center gap-6 text-2xl text-[#CDA45E]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="transition duration-300 hover:scale-125 hover:text-white" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter className="transition duration-300 hover:scale-125 hover:text-white" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="transition duration-300 hover:scale-125 hover:text-white" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube className="transition duration-300 hover:scale-125 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-700"></div>

        {/* Google Map */}
        <div className="mt-16 overflow-hidden rounded-xl">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps?q=Alexandria,Egypt&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}