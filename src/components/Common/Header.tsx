
"use client";

import { translations } from "@/constants/locales";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header({
  lang,
}: {
  lang: "en" | "bn";
}): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const t = translations[lang] || translations.bn;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLanguageTogglePath = () => {
    if (!pathname) return lang === "bn" ? "/en" : "/bn";
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "bn") {
      segments[1] = lang === "bn" ? "en" : "bn";
      return segments.join("/");
    }
    return `/${lang === "bn" ? "en" : "bn"}${pathname}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 max-w-7xl w-full mx-auto">
        {/* লোগো সেকশন: স্ক্রল কন্ডিশন অনুযায়ী বর্ডার ও ব্যাকগ্রাউন্ড চেঞ্জ */}
        <div
          className={`relative w-28 sm:w-36 h-10 md:h-12 flex items-center px-3 py-1 rounded-xl border transition-all duration-300 ${
            isScrolled
              ? "bg-slate-50 border-slate-200 shadow-sm"
              : "bg-white/10 backdrop-blur-sm border-white/10 shadow-sm"
          }`}
        >
          <Link href={`/${lang}`}>
            <Image
              src="/eva-logo.png"
              alt="EVA Logo"
              fill
              className={`object-contain transition-all duration-300 ${
                isScrolled
                  ? "filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                  : "filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.7)] contrast-125"
              }`}
              priority
            />
          </Link>
        </div>

        {/* 💻 ডেস্কটপ ন্যাভিগেশন: স্ক্রল করলে টেক্সট কালার ডার্ক (text-slate-700) হবে */}
        <nav
          className={`hidden md:flex space-x-6 lg:space-x-8 font-semibold px-6 py-2 rounded-full border text-sm transition-all duration-300 ${
            isScrolled
              ? "bg-slate-50 border-slate-200 text-slate-700 shadow-sm"
              : "bg-white/5 backdrop-blur-md border-white/10 text-white"
          }`}
        >
          <Link
            href={`/${lang}`}
            className="hover:text-amber-500 transition-colors"
          >
            {t.header.home}
          </Link>
          <Link
            href={`/${lang}/vehicles`}
            className="hover:text-amber-500 transition-colors"
          >
            {t.header.vehicles}
          </Link>
          <Link
            href={`/${lang}/batteries`}
            className="hover:text-amber-500 transition-colors"
          >
            {t.header.batteries}
          </Link>
         
          <Link
            href={`/${lang}/contact`}
            className="hover:text-amber-500 transition-colors"
          >
            {t.header.contact}
          </Link>
        </nav>

        {/* অ্যাকশন বাটন এবং ল্যাঙ্গুয়েজ সুইচার */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* 🌐 ল্যাঙ্গুয়েজ টগল বাটন: ⚡ এখানে স্ক্রল কালার ফিক্স করা হয়েছে */}
          <Link
            href={getLanguageTogglePath()}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-full border text-xs font-bold transition active:scale-95 ${
              isScrolled
                ? "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
                : "bg-white/10 border-white/10 text-white hover:bg-white/20"
            }`}
          >
            <Globe
              size={14}
              className={isScrolled ? "text-amber-600" : "text-amber-400"}
            />
            <span>{lang === "bn" ? "English" : "বাংলা"}</span>
          </Link>

          {/* 📞 ডাইনামিক ফোন নাম্বার লিংক: ⚡ স্ক্রল করলে শ্যাডো ও হোভার ইফেক্ট রি-ডিফাইন করা হয়েছে */}
          <Link
            href={`tel:${t.header.phone || "01745607559"}`}
            className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-3 py-2 rounded-full font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Phone size={14} className="fill-current" />
            <span className="hidden sm:inline">
              {t.header.phone || "01745607559"}
            </span>
          </Link>

          {/* মোবাইল মেনু বাটন: স্ক্রল করলে আইকন ডার্ক হবে */}
          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden p-2 rounded-full transition ${
              isScrolled
                ? "bg-slate-100 text-slate-800 hover:bg-slate-200"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* 📱 মোবাইল ড্রয়ার মেনু: প্রজেক্টের সাথে মিল রেখে ক্লিন লাইট/ডার্ক মিক্স থিম */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[280px] bg-white border-r border-slate-200 z-50 md:hidden flex flex-col p-6 shadow-2xl justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                  <div className="relative w-24 h-8">
                    <Image
                      src="/eva-logo.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 bg-slate-100 rounded-full hover:bg-slate-200 transition text-slate-800"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* মোবাইল স্ক্রিনের মেনু লিংক */}
                <nav className="flex flex-col space-y-5 pt-8 font-bold text-base text-slate-800">
                  <Link
                    href={`/${lang}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-amber-600 pl-2 py-1 border-l-2 border-transparent hover:border-amber-500 transition"
                  >
                    {t.header.home}
                  </Link>
                  <Link
                    href={`/${lang}/vehicles`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-amber-600 pl-2 py-1 border-l-2 border-transparent hover:border-amber-500 transition"
                  >
                    {t.header.vehicles}
                  </Link>
                  <Link
                    href={`/${lang}/batteries`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-amber-600 pl-2 py-1 border-l-2 border-transparent hover:border-amber-500 transition"
                  >
                    {t.header.batteries}
                  </Link>
                 
                  <Link
                    href={`/${lang}/contact`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-amber-600 pl-2 py-1 border-l-2 border-transparent hover:border-amber-500 transition"
                  >
                    {t.header.contact}
                  </Link>
                </nav>
              </div>

              {/* মোবাইল ড্রয়ারের নিচের কল বাটন */}
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-2 font-semibold">
                  {lang === "bn"
                    ? "জরুরি প্রয়োজনে কল করুন"
                    : "Need Immediate Help?"}
                </p>
                <Link
                  href={`tel:${t.header.phone || "01745607559"}`}
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-black text-sm shadow-md transition-all"
                >
                  <Phone size={14} fill="currentColor" />
                  <span>{t.header.phone || "01745607559"}</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
