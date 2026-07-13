"use client";

import CommonBanner from "@/components/Common/CommonBanner";
import { translations } from "@/constants/locales";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AboutUs({
  lang,
}: {
  lang: "en" | "bn";
}): React.JSX.Element {
  // 🌐 লোকালস ফাইল থেকে ডাটা লোড করা হচ্ছে
  const t = translations[lang] || translations.bn;
  const a = t.aboutPage;

  // ডাইনামিক মিশনের আইকন এবং ডাটা ম্যাপিং
  const missions = [
    {
      icon: <Zap className="text-amber-500" size={24} />,
      title: a.mission1Title,
      desc: a.mission1Desc,
    },
    {
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
      title: a.mission2Title,
      desc: a.mission2Desc,
    },
    {
      icon: <Award className="text-blue-500" size={24} />,
      title: a.mission3Title,
      desc: a.mission3Desc,
    },
  ];

  return (
    // ❌ প্রধান কন্টেইনারে কোনো সলিড bg-কালার ক্লাস ব্যবহার করা হয়নি
    <div className="min-h-screen pb-16">
      
      {/* 🚀 রিইউজেবল কমন ব্যানার */}
      <CommonBanner
        lang={lang}
        badge={a.badge}
        title={a.bannerTitle}
        subtitle={a.bannerDesc}
      />

      {/* 🛠️ স্টোরি ও ইমেজ সেকশন */}
      <section className="max-w-7xl w-full mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight">{a.journeyTitle}</h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
            {a.journeyDesc1}
          </p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
            {a.journeyDesc2}
          </p>

          {/* ছোট স্ট্যাটস গ্রিড */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="border border-slate-200 bg-white shadow-sm rounded-2xl p-4 text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-500">
                ৫,০০০+
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-semibold">{a.statDrivers}</p>
            </div>
            <div className="border border-slate-200 bg-white shadow-sm rounded-2xl p-4 text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-500">
                ৯৯.৮%
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-semibold">{a.statReliability}</p>
            </div>
          </div>
        </motion.div>

        {/* ডান পাশের ৩ডি ইমেজ ফ্লোটিং ইফেক্ট */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] sm:h-[400px] w-full flex items-center justify-center bg-gradient-to-tr from-slate-100 to-transparent border border-slate-200 rounded-3xl p-8 shadow-md overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/5" />
          <Image
            src="/about.jpg" 
            alt="About EVA"
            fill
            className="object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)] p-6"
          />
        </motion.div>
      </section>

      {/* 🌟 কোর ভ্যালুস / মিশন কার্ডস */}
      <section className="max-w-7xl w-full mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{a.valuesTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-slate-200 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 border border-slate-100 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}