"use client";

import { motion } from "framer-motion";
import { Factory, ShieldCheck, Truck, Zap } from "lucide-react";
import React from "react";
import { translations } from "@/constants/locales"; // 👈 ডিকশনারি ইম্পোর্ট

export default function ValueProp({ lang }: { lang: "en" | "bn" }): React.JSX.Element {
  // 🌐 ডিকশনারি থেকে ডেটা লোড করা হচ্ছে
  const t = translations[lang] || translations.bn;

  // আইকনগুলোকে ক্রমানুসারে একটি অ্যারেতে রাখা হলো যাতে লুপে ম্যাপ করা যায়
  const icons = [
    <Factory className="text-amber-600" size={28} key="factory" />,
    <Zap className="text-emerald-600" size={28} key="zap" />,
    <ShieldCheck className="text-blue-600" size={28} key="shield" />,
    <Truck className="text-purple-600" size={28} key="truck" />,
  ];

  return (
    <section className="bg-[#f8fafc] text-slate-900 py-16 md:py-24 relative overflow-hidden border-t border-b border-slate-200">
      {/* সূক্ষ্ম লাইট ডট প্যাটার্ন টেক্সচার */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t.valueProp.title1}
            <span className="text-amber-600">{t.valueProp.title2}</span>
            {t.valueProp.title3}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t.valueProp.desc}
          </p>
        </div>

        {/* ডাইনামিক বেনিফিট কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.valueProp.cards.map((benefit, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-5 border border-slate-100">
                {icons[idx] || icons[0]}
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}