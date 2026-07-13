"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface CommonBannerProps {
  lang: "en" | "bn";
  badge: string;
  title: string;
  subtitle: string;
}

export default function CommonBanner({
  lang,
  badge,
  title,
  subtitle,
}: CommonBannerProps): React.JSX.Element {
  return (
    // 🎨 হেডারের নাম স্পষ্ট দেখানোর জন্য এখানে প্রিমিয়াম ডিপ নেভি-ব্লু কালার মিক্সড করা হয়েছে
    <div className="relative bg-gradient-to-b from-[#064e3b] via-[#022c22] to-[#011f18] text-white pt-36 pb-20 overflow-hidden flex flex-col justify-between">
      {/* ব্যাকগ্রাউন্ড ডেকোরেটিভ গ্লো ইফেক্ট */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 text-center relative z-20 space-y-4">
        {/* ব্যাজ অ্যানিমেশন */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 mx-auto w-fit shadow-inner"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {badge}
          </span>
        </motion.div>

        {/* মেইন টাইটেল অ্যানিমেশন */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight drop-shadow-md text-white"
        >
          {title}
        </motion.h1>

        {/* সাবটাইটেল */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium"
        >
          {subtitle}
        </motion.p>

        {/* ব্রেডক্রাম্ব নেভিগেশন */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center space-x-2 text-xs font-semibold text-gray-500 pt-2"
        >
          <Link href={`/${lang}`} className="hover:text-amber-400 transition">
            {lang === "bn" ? "হোম" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-gray-300">{badge}</span>
        </motion.div>
      </div>

      {/* হিরো স্লাইডারের মতো ম্যাচিং ফ্লুইড SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] sm:h-[60px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,4.75,55.05,10.3,81.18,17,148.66,34.33,218.67,75.45,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
}