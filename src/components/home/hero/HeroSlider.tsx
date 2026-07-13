"use client";

import { translations } from "@/constants/locales";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  Variants,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  bgColor: string;
  waveColor: string;
  btnColor: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    title: "Premium Electric Auto Rickshaws",
    subtitle:
      "Experience the future of eco-friendly commuting with high endurance and maximum comfort.",
    image: "/a1.png",
    bgColor: "bg-[#1e293b]",
    waveColor: "#334155",
    btnColor: "bg-amber-500 hover:bg-amber-600",
  },
  {
    id: 2,
    title: "High-Performance Lead-acid Batteries",
    subtitle:
      "Power that lasts. Heavy-duty batteries engineered for long life and fast charging capabilities.",
    image: "/b-1.png",
    bgColor: "bg-[#064e3b]",
    waveColor: "#047857",
    btnColor: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    id: 3,
    title: "Genuine Rickshaw Spare Parts",
    subtitle:
      "Top-grade, durable spare parts to keep your vehicle running smoothly without any interruptions.",
    image: "/p1.png",
    bgColor: "bg-[#7c2d12]",
    waveColor: "#9a3412",
    btnColor: "bg-orange-500 hover:bg-orange-600",
  },
];

export default function HeroSlider({
  lang,
}: {
  lang: "en" | "bn";
}): React.JSX.Element {
  // 🌐 ডিকশনারি থেকে ডেটা লোড করা হচ্ছে
  const t = translations[lang] || translations.bn;
  const slides: SlideItem[] = t.hero.slides;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const x = useMotionValue<number>(200);
  const y = useMotionValue<number>(200);
  const rotateX = useTransform(y, [0, 400], [10, -10]);
  const rotateY = useTransform(x, [0, 400], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>): void {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleMouseLeave(): void {
    x.set(200);
    y.set(200);
  }

  const slideNext = (): void =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  const slidePrev = (): void =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlide: SlideItem = slides[currentIndex];

  const image3DVariants: Variants = {
    enter: {
      y: -60, // মোবাইলের স্ক্রিনের ভেতরে রাখার জন্য অফসেট কমানো হয়েছে
      opacity: 0,
      scale: 0.85,
      rotateX: -15,
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const },
    },
    exit: {
      y: 100,
      opacity: 0,
      scale: 0.9,
      rotateX: 20,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  return (
    // 🛠️ ফিক্স: overflow-hidden নিশ্চিত করা হয়েছে এবং মোবাইলে max-h-screen দিয়ে স্ক্রল চিরতরে লক করা হয়েছে
    <div
      className={`relative h-screen max-h-screen w-full ${currentSlide.bgColor} text-white overflow-hidden transition-colors duration-1000 flex flex-col justify-between pt-24 sm:pt-32 lg:pt-16  pb-6 lg:pb-0`}
    >
      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="flex-1 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-8 pb-12 lg:pb-20 lg:pt-8 relative z-20 gap-4 lg:gap-0">
        {/* টেক্সট সেকশন */}
        <div className="space-y-3 sm:space-y-6 max-w-lg z-30 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center">
          <div className="inline-flex items-center justify-center lg:justify-start space-x-2 bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 mx-auto lg:mx-0 w-fit">
            <Star size={12} fill="currentColor" className="text-amber-400" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wide">
              4.9 (5k+ Trusted Reviews)
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-2xl sm:text-3xl  lg:text-4xl font-extrabold leading-tight mb-1 sm:mb-3 drop-shadow-md">
                {currentSlide.title}
              </h1>
              <p className="text-gray-300 text-[11px] sm:text-base md:text-lg mb-3 sm:mb-6 leading-relaxed max-w-xs sm:max-w-none mx-auto lg:mx-0 opacity-90">
                {currentSlide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* অ্যাকশন বাটন্স */}
          {/* অ্যাকশন বাটন্স */}
          <div className="flex flex-row justify-center lg:justify-start space-x-3 sm:space-x-4 items-center">
            {/* ১. কন্টাক্ট/অর্ডার বাটন (যোগাযোগ পেজে নিয়ে যাবে) */}
            <Link
             href={`/${lang}/contact`}>
              <button
                className={`px-5 cursor-pointer sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-base font-bold text-black transition-all transform hover:scale-105 shadow-xl ${currentSlide.btnColor}`}
              >
                {t.hero.btnOrder}
              </button>
            </Link>

            {/* ২. এক্সপ্লোর বাটন (ফিচার্ড প্রোডাক্টস সেকশনে স্ক্রল করবে) */}
            <Link href="#featured-products">
              <button className="px-4 sm:px-6 cursor-pointer py-2 sm:py-3 rounded-full text-xs sm:text-base font-semibold border border-white/20 hover:bg-white/10 transition">
                {t.hero.btnExplore}
              </button>
            </Link>
          </div>

          {/* নেভিগেশন কন্ট্রোল */}
          <div className="flex justify-center lg:justify-start space-x-3 pt-1 sm:pt-4">
            <button
              onClick={slidePrev}
              className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition border border-white/10 active:scale-95"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={slideNext}
              className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition border border-white/10 active:scale-95"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ৩ডি ইমেজ এরিয়া */}
        <div
          className="relative w-full h-[180px] sm:h-[285px] md:h-[350px] lg:h-[450px] flex items-center justify-center order-1 lg:order-2 mt-2"
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1200 }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentIndex}
              variants={image3DVariants}
              initial="enter"
              animate="center"
              exit="exit"
              // 🛠️ ফিক্স: মোবাইলে ইমেজের বাউন্ডারি overflow রিমুভ করতে w-[150px] করা হয়েছে
              className="absolute w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] flex items-center justify-center z-30"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute -bottom-3 w-[85%] h-[8px] bg-black/40 blur-md rounded-full" />
              <div className="relative w-full h-full transform translate-z-[20px]">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fill
                  className="object-contain filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* রাইট সাইড স্লাইড প্রিভিউ (মোবাইলে হিডেন) */}
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[140px] h-[140px] opacity-10 hidden xl:block blur-[2px] pointer-events-none">
            <Image
              src={slides[(currentIndex + 1) % slides.length].image}
              alt="Next Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </main>

      {/* ফ্লুইড ব্যাকগ্রাউন্ড SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[45px] sm:h-[80px] md:h-[120px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,4.75,55.05,10.3,81.18,17,148.66,34.33,218.67,75.45,321.39,56.44Z"
            fill={currentSlide.waveColor}
            className="transition-colors duration-1000"
          ></path>
        </svg>
      </div>
    </div>
  );
}
