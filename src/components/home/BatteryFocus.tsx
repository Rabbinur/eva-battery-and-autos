"use client";

import { translations } from "@/constants/locales";
import { motion } from "framer-motion";
import { BatteryCharging, ShieldAlert, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function BatteryFocus({
  lang,
}: {
  lang: "en" | "bn";
}): React.JSX.Element {
  // 🌐 ডিকশনারি থেকে ডেটা রিড করা হচ্ছে
  const t = translations[lang] || translations.bn;
  const b = t.battery;

  // ৪টি কার্ডের আইকন
  const icons = [
    <BatteryCharging className="text-emerald-600 shrink-0 mt-1 relative z-10" size={18} key="charging" />,
    <TrendingUp className="text-emerald-600 shrink-0 mt-1 relative z-10" size={18} key="trend" />,
    <Zap className="text-emerald-600 shrink-0 mt-1 relative z-10" size={18} key="zap" />,
    <ShieldAlert className="text-emerald-600 shrink-0 mt-1 relative z-10" size={18} key="shield" />,
  ];

  // লুপের সুবিধার জন্য কার্ডগুলোর ডেটা স্ট্রাকচার
  const cardsData = [
    { title: b.card1Title, desc: b.card1Desc },
    { title: b.card2Title, desc: b.card2Desc },
    { title: b.card3Title, desc: b.card3Desc },
    { title: b.card4Title, desc: b.card4Desc },
  ];

  return (
    // 🎨 লাইট মোড গ্রেডিয়েন্ট এবং মেইন সেকশন
    <section className="bg-gradient-to-b from-[#f0fbf7] to-[#f8fafc] text-slate-800 py-16 md:py-24 border-t border-b border-slate-200/60 relative overflow-hidden">
      {/* 🛠️ মেইন ব্যাকগ্রাউন্ড টেক্সচার */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* ব্যাকগ্রাউন্ড সফট রিফ্লেকশন গ্লো */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-emerald-500/[0.05] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-20">
        
        {/* বাম পাশ: ব্যাটারি ডিসপ্লে কার্ড */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[280px] sm:h-[400px] w-full bg-white border border-slate-200/80 p-6 flex items-center justify-center group shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute -bottom-4 w-[80%] h-[15px] bg-slate-900/10 blur-xl rounded-full" />
          
          <div className="relative w-full h-full transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105">
            <Image
              src="/battery.jpg"
              alt="EVA Premium Smart China Lead-acid Battery Pack"
              fill
              className="object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)]"
            />
          </div>
        </motion.div>

        {/* ডান পাশ: ইনফরমেশন ও ফিচার গ্রিড */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 w-fit block">
              {b.badge}
            </span>
            {/* 🎯 ফিক্স: কন্ডিশনাল JSX বাদ দিয়ে সরাসরি locales ফাইলের ডাইনামিক টাইটেল দেওয়া হয়েছে */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900">
              {b.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {b.desc}
            </p>
          </div>

          {/* ফিচার গ্রিড কার্ডস */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {cardsData.map((card, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden group/card"
              >
                <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:10px_10px]" />
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 opacity-0 group-hover/card:opacity-100 transition-opacity" />

                {icons[idx]}

                <div className="relative z-10">
                  <h4 className="font-bold text-sm text-slate-900">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}