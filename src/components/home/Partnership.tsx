"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, CheckCircle2, Send } from "lucide-react";
import React, { useState } from "react";
import { translations } from "@/constants/locales";

export default function Partnership({ lang }: { lang: "en" | "bn" }): React.JSX.Element {
  // 🌐 ডিকশনারি থেকে ডেটা রিড করা হচ্ছে
  const t = translations[lang] || translations.bn;

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    location: "",
    type: "Wholesale",
  });
  const [success, setSuccess] = useState<boolean>(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setInfo({ name: "", phone: "", location: "", type: "Wholesale" });
  };

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-[#edf2f7] text-slate-800 py-16 md:py-24 relative overflow-hidden border-b border-slate-200">
      
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* বাম কলাম: ডাইনামিক মেসেজ */}
        <div className="lg:col-span-5 space-y-5">
          <span className="text-xs uppercase tracking-widest text-amber-700 font-bold bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 w-fit block">
            {t.partnership.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900">
            {t.partnership.title1}
            <span className="text-amber-600">{t.partnership.title2}</span>
            {t.partnership.title3}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.partnership.desc}
          </p>
          <div className="pt-2 hidden lg:block">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              {t.partnership.fastTrackTitle}
            </p>
            <p className="text-sm text-amber-600 font-bold mt-1">
              {t.partnership.fastTrackDesc}
            </p>
          </div>
        </div>

        {/* ডান কলাম: লাইট মোড ডিলারশিপ/হোলসেল ইনকোয়ারি ফর্ম */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.06)] relative overflow-hidden">
          <div className="flex items-center space-x-2 mb-6 text-amber-600">
            <Briefcase size={18} />
            <h3 className="text-lg font-bold text-slate-900">
              {t.partnership.formTitle}
            </h3>
          </div>

          <form
            onSubmit={handleApply}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-wide text-slate-500 mb-2 font-semibold">
                {t.partnership.fieldName}
              </label>
              <input
                type="text"
                required
                value={info.name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                placeholder={lang === "bn" ? "যেমন: মেসার্স রহমান অটোস" : "e.g. Rahman Autos"}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-slate-900 transition shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wide text-slate-500 mb-2 font-semibold">
                {t.partnership.fieldPhone}
              </label>
              <input
                type="tel"
                required
                value={info.phone}
                onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                placeholder="017XXXXXXXX"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-slate-900 transition shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wide text-slate-500 mb-2 font-semibold">
                {t.partnership.fieldLocation}
              </label>
              <input
                type="text"
                required
                value={info.location}
                onChange={(e) => setInfo({ ...info, location: e.target.value })}
                placeholder={lang === "bn" ? "যেমন: গাজীপুর চৌরাস্তা" : "e.g. Gazipur, Comilla"}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-slate-900 transition shadow-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-wide text-slate-500 mb-2 font-semibold">
                {t.partnership.fieldType}
              </label>
              <select
                value={info.type}
                onChange={(e) => setInfo({ ...info, type: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-slate-900 transition shadow-sm cursor-pointer"
              >
                <option value="Wholesale">{t.partnership.optWholesale}</option>
                <option value="Retail">{t.partnership.optRetail}</option>
              </select>
            </div>

            <button
              type="submit"
              className="sm:col-span-2 w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-xl text-sm transition shadow-lg flex items-center justify-center space-x-2 active:scale-95 mt-2"
            >
              <span>{t.partnership.btnSubmit}</span>
              <Send size={14} />
            </button>
          </form>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center text-center p-6 z-30 text-white"
              >
                <CheckCircle2 size={44} className="text-emerald-400 mb-3" />
                <h4 className="text-lg font-bold">{t.partnership.successTitle}</h4>
                <p className="text-xs text-slate-400 max-w-xs mt-1 leading-relaxed">
                  {t.partnership.successDesc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}