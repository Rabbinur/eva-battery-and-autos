"use client";

import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[#070c19] text-gray-300 border-t border-white/[0.06] relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
      {/* মেইন ফুটার কন্টেন্ট গ্রিড */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {" "}
        {/* ১ম কলাম: লোগো এবং কোম্পানি পরিচিতি */}
        <div className="space-y-5">
          <div className="relative w-32 h-12 flex items-center">
            <Image
              src="/eva-logo.png"
              alt="EVA Logo"
              fill
              className="object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Leading the green revolution in transportation with top-grade
            electric auto-rickshaws, premium lithium batteries, and authentic
            spare parts.
          </p>
          {/* সোশ্যাল মিডিয়া লিঙ্কস */}
          <div className="flex space-x-3 pt-2">
            <a
              href="#"
              className="p-2.5 bg-white/5 hover:bg-amber-500 hover:text-slate-900 rounded-xl border border-white/10 transition-all duration-300"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="p-2.5 bg-white/5 hover:bg-amber-500 hover:text-slate-900 rounded-xl border border-white/10 transition-all duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="p-2.5 bg-white/5 hover:bg-amber-500 hover:text-slate-900 rounded-xl border border-white/10 transition-all duration-300"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>
        {/* ২য় কলাম: কুইক লিঙ্কস (About Us সহ) */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base tracking-wide uppercase border-b border-white/10 pb-2 w-fit">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <a
                href="#"
                className="hover:text-amber-400 transition flex items-center group"
              >
                Home{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 ml-1 transition-all"
                />
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-amber-400 transition flex items-center group text-amber-400"
              >
                About Us <ArrowUpRight size={14} className="opacity-100 ml-1" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-amber-400 transition flex items-center group"
              >
                Our Fleet{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 ml-1 transition-all"
                />
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-amber-400 transition flex items-center group"
              >
                Contact Us{" "}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 ml-1 transition-all"
                />
              </a>
            </li>
          </ul>
        </div>
        {/* ৩য় কলাম: প্রোডাক্ট ও সার্ভিস */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base tracking-wide uppercase border-b border-white/10 pb-2 w-fit">
            Our Products
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Electric Auto Rickshaws
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Lithium Battery Packs
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Genuine Spare Parts
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Maintenance & Support
            </li>
          </ul>
        </div>
        {/* ৪র্থ কলাম: অফিস বা কন্টাক্ট ইনফো */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base tracking-wide uppercase border-b border-white/10 pb-2 w-fit">
            Contact Info
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <span>
                Kazia Kanda(indirapar), Eva Battery & Autos, haluaghat Road,
                phulpur, Mymensingh, Dhaka, Bangladesh
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-amber-500 shrink-0" />
              <a href="tel:01745607559" className="hover:text-white transition">
                01745607559
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-amber-500 shrink-0" />
              <a
                href="mailto:info@evabd.com"
                className="hover:text-white transition"
              >
                info@evabd.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* কপিরাইট বটম বার */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 font-medium">
          <p>
            © {new Date().getFullYear()} EVA Battery & Autos. All Rights
            Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
