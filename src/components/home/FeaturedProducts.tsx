"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { translations } from "@/constants/locales"; // 👈 গ্লোবাল ডিকশনারি ইম্পোর্ট

export default function FeaturedProducts({ lang }: { lang: "en" | "bn" }): React.JSX.Element {
  // 🌐 ডিকশনারি থেকে ডেটা রিড করা হচ্ছে
  const t = translations[lang] || translations.bn;

  return (
    // 🎨 লাইট মোড সফট অফ-হোয়াইট ব্যাকগ্রাউন্ড (#f1f5f9)
    <section id="featured-products" className="bg-[#f1f5f9] text-slate-900 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">
              {t.featured.catalog}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {lang === "bn" ? (
                <>
                  {t.featured.title.slice(0, 5)}{" "}
                  <span className="text-amber-600">{t.featured.title.slice(5)}</span>
                </>
              ) : (
                <>
                  Top Wholesale <span className="text-amber-600">Import Categories</span>
                </>
              )}
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-sm">
            {t.featured.desc}
          </p>
        </div>

        {/* ডাইনামিক প্রোডাক্ট ক্যাটাগরি গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.featured.categories.map((cat, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-500/30 transition group shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)]"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  {cat.tag}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3 text-slate-900 group-hover:text-amber-600 transition-colors">
                  {cat.title}
                </h3>

                <div className="relative w-full h-48 my-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain filter drop-shadow-md"
                  />
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 mb-6 pl-1">
                  {cat.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-3 bg-slate-50 group-hover:bg-amber-500 group-hover:text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all duration-300 flex items-center justify-center space-x-2 border border-slate-200 group-hover:border-transparent">
                <span>{t.featured.btnText}</span>
                <ArrowRight size={14} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}