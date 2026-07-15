"use client";

import CommonBanner from "@/components/Common/CommonBanner";
import { translations } from "@/constants/locales";
import { AnimatePresence, motion } from "framer-motion";
import { Battery, CheckCircle2, ShieldCheck, Sparkles, Wrench, X, Zap } from "lucide-react";
import React, { useState } from "react";

interface BatteryModel {
  id: number;
  name: string;
  desc: string;
  tag: string;
}

export default function WaterBattery({
  lang,
}: {
  lang: "en" | "bn";
}): React.JSX.Element {
  const t = translations[lang] || translations.bn;
  const w = t.waterBatteryPage;

  // মোডাল পপ-আপের জন্য স্টেট
  const [activeModel, setActiveModel] = useState<BatteryModel | null>(null);

  // 🎯 ডাইনামিক মডেল লিস্ট: ভবিষ্যতে নতুন মডেল আসলে জাস্ট এই অ্যারেতে অবজেক্ট বাড়িয়ে দেবেন
  const batteryModels: BatteryModel[] = w.products || [];

  return (
    <div className="min-h-screen pb-20 relative">
      {/* 🚀 রিইউজেবল কমন ব্যানার */}
      <CommonBanner
        lang={lang}
        badge={w.badge}
        title={w.bannerTitle}
        subtitle={w.bannerDesc}
      />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 mt-16 space-y-20">
        
        {/* 🛠️ সেকশন ১: টেক্সট-বেসড প্রিমিয়াম মডেল গ্রিড */}
        <div className="space-y-8">
          <div className="flex items-center space-x-2 border-b border-slate-200 pb-4">
            <Battery className="text-emerald-600 animate-pulse" size={24} />
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {w.availableModels}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {batteryModels.map((model, idx) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-4 group relative overflow-hidden"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200/60">
                      {model.tag}
                    </span>
                    <Sparkles size={14} className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors tracking-wide">
                    {model.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                    {model.desc}
                  </p>
                </div>

                {/* স্পেসিফিকেশন দেখার ডাইনামিক বাটন */}
                <button
                  onClick={() => setActiveModel(model)}
                  className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition active:scale-95 cursor-pointer shadow-sm flex items-center justify-center space-x-2"
                >
                  <span>{w.viewSpecs}</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🛠️ সেকশন ২: কেন আমাদের পানি ব্যাটারি সেরা (কোর ফিচারস) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
          <div className="border border-slate-200 bg-white p-6 rounded-2xl shadow-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20">
              <Zap size={18} />
            </div>
            <h4 className="font-extrabold text-slate-900 text-base">{w.f1Title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">{w.f1Desc}</p>
          </div>

          <div className="border border-slate-200 bg-white p-6 rounded-2xl shadow-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20">
              <Battery size={18} />
            </div>
            <h4 className="font-extrabold text-slate-900 text-base">{w.f2Title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">{w.f2Desc}</p>
          </div>

          <div className="border border-slate-200 bg-white p-6 rounded-2xl shadow-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center border border-blue-500/20">
              <Wrench size={18} />
            </div>
            <h4 className="font-extrabold text-slate-900 text-base">{w.f3Title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">{w.f3Desc}</p>
          </div>
        </div>

      </div>

      {/* 🚀 ফ্রেমর মোশন পপ-আপ মোডাল (Technical Table Display) */}
      <AnimatePresence>
        {activeModel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModel(null)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white border border-slate-200/80 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative z-10 my-8 flex flex-col"
            >
              <button
                onClick={() => setActiveModel(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 border border-slate-100 p-1.5 rounded-full hover:bg-slate-50 transition cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* মোডাল হেডার */}
              <div className="p-6 border-b border-slate-100 bg-[#f8fafc]">
                <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded mb-1 inline-block">
                  {activeModel.tag}
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-wide">
                  {activeModel.name} Specs
                </h3>
              </div>

              {/* মোডাল বডি: স্পেসিফিকেশন টেবিল */}
              <div className="p-6 space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center space-x-1">
                  <ShieldCheck size={14} />
                  <span>{w.specsTitle}</span>
                </h4>

                <div className="border border-slate-100 rounded-2xl overflow-hidden text-xs sm:text-sm font-semibold shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="p-3 font-bold text-slate-500 w-1/3 border-r border-slate-100">{w.specBrand}</td>
                        <td className="p-3 text-slate-800 font-extrabold">{activeModel.name}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 font-bold text-slate-500 border-r border-slate-100">{w.specTech}</td>
                        <td className="p-3 text-slate-800">{w.specTechVal}</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="p-3 font-bold text-slate-500 border-r border-slate-100">{w.specVoltage}</td>
                        <td className="p-3 text-slate-800">{w.specVoltageVal}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-3 font-bold text-slate-500 border-r border-slate-100">{w.specCapacity}</td>
                        <td className="p-3 text-slate-800">{w.specCapacityVal}</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-500 border-r border-slate-100">{w.specWarranty}</td>
                        <td className="p-3 text-emerald-600 font-black">{w.specWarrantyVal}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ক্লোজ ফুটার */}
              <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50/30">
                <button
                  onClick={() => setActiveModel(null)}
                  className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  {w.closeBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}