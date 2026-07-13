"use client";

import CommonBanner from "@/components/Common/CommonBanner";
import { translations } from "@/constants/locales";
import { AnimatePresence, motion } from "framer-motion";
import { Cog, Eye, Layers, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface RickshawItem {
  id: number;
  name: string;
  desc: string;
  spec: string;
  image: string;
  tag: string;
}

export default function RickshawVariants({
  lang,
}: {
  lang: "en" | "bn";
}): React.JSX.Element {
  const t = translations[lang] || translations.bn;
  const r = t.rickshawPage;

  // মোডাল স্টেট ম্যানেজমেন্ট
  const [selectedProduct, setSelectedProduct] = useState<RickshawItem | null>(
    null,
  );

  const variantsData: RickshawItem[] = [
    {
      id: 1,
      name: r.m1Name,
      desc: r.m1Desc,
      spec: r.m1Spec,
      image:
        "/vehicles/mini-borak.png",
      tag: lang === "bn" ? "মিনি বোরাক" : "Mini Borak Series",
    },
    {
      id: 2,
      name: r.m2Name,
      desc: r.m2Desc,
      spec: r.m2Spec,
      image:
        "/vehicles/doyodo-borak.png",
      tag: lang === "bn" ? "স্ট্যান্ডার্ড" : "Standard Model",
    },
    {
      id: 3,
      name: r.m2vName,
      desc: r.m2vDesc,
      spec: r.m2vSpec,
      image:
        "/vehicles/4.png",
      tag: lang === "bn" ? "ভাও সিট ভ্যারিয়েন্ট" : "Vao Seat Edition",
    },
    {
      id: 4,
      name: r.m3Name,
      desc: r.m3Desc,
      spec: r.m3Spec,
      image:
        "/vehicles/sandy-borak.png",
      tag: lang === "bn" ? "প্রিমিয়াম সিরিজ" : "Premium Sandy",
    },
    {
      id: 5,
      name: r.m3vName,
      desc: r.m3vDesc,
      spec: r.m3vSpec,
      image:
        "/vehicles/5.webp",
      tag: lang === "bn" ? "লাক্সারি ভাও সিট" : "Luxury Vao Seat",
    },
  ];

  return (
    <div className="min-h-screen pb-20 relative">
      {/* 🚀 রিইউজেবল কমন ব্যানার */}
      <CommonBanner
        lang={lang}
        badge={r.badge}
        title={r.bannerTitle}
        subtitle={r.bannerDesc}
      />

      {/* 🛠️ মেইন গ্রিড সেকশন */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 mt-16">
        <div className="flex items-center space-x-2 mb-10 border-b border-slate-200 pb-4">
          <Layers className="text-amber-500" size={22} />
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {lang === "bn"
              ? "উপলব্ধ মডেল ক্যাটাগরি সমূহ"
              : "Available Model Categories"}
          </h2>
        </div>

        {/* ই-রিকশা কার্ডস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {variantsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="border border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
            >
              <span className="absolute top-4 left-4 z-30 text-[9px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-1 rounded">
                {item.tag}
              </span>

              {/* 📷 ইমেজ সেকশন */}
              <div className="relative h-[240px] w-full bg-[#f8fafc] border-b border-slate-100 p-4 overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  priority={idx < 3}
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* 📝 টেক্সট ডিটেইলস */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-lg text-slate-900 leading-snug group-hover:text-amber-600 transition-colors capitalize">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-start space-x-2">
                    <Cog className="text-slate-400 shrink-0 mt-0.5" size={15} />
                    <div className="text-xs text-slate-600 font-semibold leading-tight">
                      <span className="text-[10px] block uppercase tracking-wider text-slate-400 font-bold mb-0.5">
                        {r.specSpecs}
                      </span>
                      {item.spec}
                    </div>
                  </div>

                  {/* 🎯 ক্লিক করলে মোডাল ওপেন হবে */}
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="w-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all duration-200 flex items-center justify-center space-x-2 active:scale-95 cursor-pointer shadow-sm"
                  >
                    <span>{r.viewDetails}</span>
                    <Eye size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🚀 ফ্রেমর মোশন পপ-আপ মোডাল (Jinpeng / Made-In-China Specs) */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
            {/* ব্লার ব্যাকড্রপ ওভারলে */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* মোডাল কন্টেন্ট বক্স */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white border border-slate-200/80 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative z-10 my-8 flex flex-col"
            >
              {/* ক্লোজ বাটন */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 border border-slate-100 p-1.5 rounded-full hover:bg-slate-50 transition cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* মোডাল হেডার */}
              <div className="p-6 border-b border-slate-100 bg-[#f8fafc] pr-12">
                <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded mb-1.5 inline-block">
                  {selectedProduct.tag}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 capitalize leading-tight">
                  {selectedProduct.name}
                </h3>
              </div>

              {/* মোডাল বডি (টেকনিক্যাল স্পেসিফিকেশন) */}
              <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  {selectedProduct.desc}
                </p>

                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                  {r.modalTitle}
                </h4>

                {/* জিনপেং মডেল এনালাইজড স্পেস টেবিল */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden text-xs sm:text-sm font-semibold shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="p-3 font-bold text-slate-500 w-1/3 border-r border-slate-100">
                          {r.specMotor}
                        </td>
                        <td className="p-3 text-slate-800">{r.specMotorVal}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 font-bold text-slate-500 w-1/3 border-r border-slate-100">
                          {r.specBattery}
                        </td>
                        <td className="p-3 text-slate-800">
                          {r.specBatteryVal}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="p-3 font-bold text-slate-500 w-1/3 border-r border-slate-100">
                          {r.specRange}
                        </td>
                        <td className="p-3 text-slate-800">{r.specRangeVal}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 font-bold text-slate-500 w-1/3 border-r border-slate-100">
                          {r.specSpeed}
                        </td>
                        <td className="p-3 text-slate-800">{r.specSpeedVal}</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="p-3 font-bold text-slate-500 w-1/3 border-r border-slate-100">
                          {r.specCapacity}
                        </td>
                        <td className="p-3 text-slate-800">
                          {r.specCapacityVal}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-500 w-1/3 border-r border-slate-100">
                          {r.specChassis}
                        </td>
                        <td className="p-3 text-slate-800">
                          {r.specChassisVal}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* মোডাল ফুটার বাটন */}
              <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50/30">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition active:scale-95 cursor-pointer"
                >
                  {r.closeBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
