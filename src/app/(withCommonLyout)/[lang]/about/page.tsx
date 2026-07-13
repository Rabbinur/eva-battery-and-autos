"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

interface MissionCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const missions: MissionCard[] = [
  {
    icon: <Zap className="text-amber-500" size={24} />,
    title: "Eco-Friendly Power",
    desc: "Empowering auto-rickshaws with smart Lead-acid battery solutions for a zero-emission green future.",
  },
  {
    icon: <ShieldCheck className="text-emerald-500" size={24} />,
    title: "Uncompromised Quality",
    desc: "Providing 100% genuine spare parts tested for rugged Bangladeshi road conditions.",
  },
  {
    icon: <Award className="text-blue-500" size={24} />,
    title: "Industry Leadership",
    desc: "Setting standard performance parameters for electric three-wheelers nationwide.",
  },
];

export default function AboutUs(): React.JSX.Element {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen pt-28 pb-16 overflow-hidden">
      {/* 🚀 হিরো সেকশন */}
      <section className="max-w-7xl w-full mx-auto px-6 md:px-8 text-center space-y-4 mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-widest text-amber-500 font-bold bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Driving The Future Of{" "}
            <span className="text-amber-500">Green Logistics</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            EVA Battery & Autos is committed to revolutionizing public commuting
            in Bangladesh. We build endurance, supply power, and keep your
            vehicles rolling seamlessly.
          </p>
        </motion.div>

        {/* ৩ডি গ্লো ইফেক্ট ব্যাকগ্রাউন্ড */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
      </section>

      {/* 🛠️ স্টোরি ও ইমেজ সেকশন */}
      <section className="max-w-7xl w-full mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Our Journey & Philosophy</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Founded with a vision to streamline e-mobility, EVA has evolved into
            a trusted name for auto-rickshaw drivers and suppliers alike. We saw
            the operational struggles caused by local components and aimed to
            deliver exceptional engineering directly to the market.
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Whether it's custom high-capacity Lead-acid-Ion battery packs or
            critical suspension components, we prioritize durability, safety,
            and performance over everything.
          </p>

          {/* ছোট স্ট্যাটস গ্রিড */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-500">
                5,000+
              </h3>
              <p className="text-xs text-gray-400 mt-1">Happy Drivers</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-500">
                99.8%
              </h3>
              <p className="text-xs text-gray-400 mt-1">Battery Reliability</p>
            </div>
          </div>
        </motion.div>

        {/* ডান পাশের ৩ডি ইমেজ ফ্লোটিং ইফেক্ট */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] sm:h-[400px] w-full flex items-center justify-center bg-gradient-to-tr from-white/5 to-transparent border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20" />
          <Image
            src="/images/rickshaw.png"
            alt="About EVA"
            fill
            className="object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] p-6"
          />
        </motion.div>
      </section>

      {/* 🌟 কোর ভ্যালুস / মিশন কার্ডস */}
      <section className="max-w-7xl w-full mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Driven By Excellence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-6 rounded-2xl shadow-xl hover:border-white/10 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
