"use client";

import { translations } from "@/constants/locales"; // 👈 ডিকশনারি ইম্পোর্ট করা হলো
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import React from "react";

export default function CallToAction({
  lang,
}: {
  lang: "en" | "bn";
}): React.JSX.Element {
  // 🌐 ডিকশনারি থেকে ডেটা রিড করা হচ্ছে
  const t = translations[lang] || translations.bn;

  return (
    <section className="bg-white text-slate-900 py-16 px-6 md:px-8 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-5xl w-full mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 sm:p-12 text-slate-950 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 shadow-2xl">
        {/* ডাইনামিক টেক্সট এরিয়া */}
        <div className="space-y-3 text-center md:text-left max-w-xl">
          <h2 className="text-xl  md:text-2xl font-black tracking-tight leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-slate-950/80 text-xs sm:text-sm font-semibold">
            {t.cta.desc}
          </p>
        </div>

        {/* 📞 ডাইনামিক ক্লিক-টু-কল বাটন */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shrink-0 w-full md:w-auto"
        >
          <a
            href={`tel:${t.header.phone}`}
            className="flex items-center justify-center space-x-3 bg-slate-950 hover:bg-slate-900 text-white font-black px-8 py-4 rounded-2xl text-base shadow-xl transition-all"
          >
            <Phone size={18} className="fill-current text-amber-500" />
            <span>
              {t.cta.btnText} {t.header.phone}
            </span>
            <ArrowUpRight size={16} className="text-amber-500" />
          </a>
        </motion.div>
      </div>

      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/5 blur-[140px] rounded-full pointer-events-none z-0" />
    </section>
  );
}
