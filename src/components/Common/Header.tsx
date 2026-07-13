// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, Phone, User, X } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Header(): React.JSX.Element {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [isScrolled, setIsScrolled] = useState<boolean>(false);

//   // 🛠️ স্ক্রল ট্র্যাকিং লজিক
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true); // ২০ পিক্সেলের বেশি স্ক্রল করলে ব্যাকগ্রাউন্ড চেঞ্জ হবে
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     // 🛠️ স্টিকি মোড এবং ডাইনামিক ব্যাকগ্রাউন্ড ক্লাস অ্যাড করা হয়েছে
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         isScrolled
//           ? "bg-white/[0.03] backdrop-blur-xl border-b border-white/10 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 max-w-7xl w-full mx-auto">
//         {/* লোগো সেকশন: অরিজিনাল কালার ঠিক রেখে চারপাশের হালকা শ্যাডো ট্রিক */}
//         {/* <div className="relative w-28 sm:w-40 h-10 md:h-12 flex items-center">
//           <Image
//             src="/eva-logo.png"
//             alt="EVA Battery & Autos Logo"
//             fill
//             className="object-contain filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.6)] contrast-115"
//             priority
//           />
//         </div> */}
//         <div className="relative w-28 sm:w-36 h-10 md:h-12 flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-xl border border-white/10 shadow-sm">
//           <Image
//             src="/eva-logo.png"
//             alt="EVA Battery & Autos Logo"
//             fill
//             className="object-contain filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.7)] contrast-125"
//             priority
//           />
//         </div>
//         {/* ডেস্কটপ ন্যাভিগেশন */}
//         <nav
//           className={`hidden md:flex space-x-6 lg:space-x-8 font-medium px-6 py-2 rounded-full border text-sm transition-all duration-300 ${
//             isScrolled
//               ? "bg-transparent border-transparent text-white"
//               : "bg-white/5 backdrop-blur-md border-white/10 text-white"
//           }`}
//         >
//           <a href="#" className="hover:text-amber-400 transition-colors">
//             HOME
//           </a>
//           <a href="#" className="hover:text-amber-400 transition-colors">
//             VEHICLES
//           </a>
//           <a href="#" className="hover:text-amber-400 transition-colors">
//             BATTERIES
//           </a>
//           <a href="#" className="hover:text-amber-400 transition-colors">
//             PARTS
//           </a>
//           <a href="#" className="hover:text-amber-400 transition-colors">
//             CONTACT US
//           </a>
//         </nav>

//         {/* রাইট কর্নার অ্যাকশন এলিমেন্টস */}
//         <div className="flex items-center space-x-2 sm:space-x-4 text-white">
//           {/* কল বাটন */}
//           <a
//             href="tel:01745607559"
//             className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-900 px-3 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-95"
//           >
//             <Phone size={14} className="fill-current" />
//             <span className="hidden sm:inline">01745607559</span>
//           </a>

//           {/* ইউজার প্রোফাইল */}
//           <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
//             <User size={16} />
//           </div>

//           {/* mobile menu toggle */}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="md:hidden p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
//           >
//             <Menu size={20} />
//           </button>
//         </div>
//       </div>

//       {/* বাম পাশ থেকে অ্যানিমেটেড স্লাইড মেনু */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
//             />

//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed top-0 left-0 h-full w-[280px] bg-slate-900/95 backdrop-blur-xl border-r border-white/10 z-50 md:hidden flex flex-col p-6 text-white shadow-2xl justify-between"
//             >
//               <div>
//                 <div className="flex justify-between items-center pb-6 border-b border-white/10">
//                   <div className="relative w-24 h-8">
//                     <Image
//                       src="/eva-logo.png"
//                       alt="Logo Mobile"
//                       fill
//                       className="object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]"
//                     />
//                   </div>
//                   <button
//                     onClick={() => setIsOpen(false)}
//                     className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition"
//                   >
//                     <X size={18} />
//                   </button>
//                 </div>

//                 <nav className="flex flex-col space-y-5 pt-8 font-medium text-base tracking-wide">
//                   <a
//                     href="#"
//                     onClick={() => setIsOpen(false)}
//                     className="hover:text-amber-400 transition pl-2 border-l-2 border-transparent hover:border-amber-400 py-1"
//                   >
//                     HOME
//                   </a>
//                   <a
//                     href="#"
//                     onClick={() => setIsOpen(false)}
//                     className="hover:text-amber-400 transition pl-2 border-l-2 border-transparent hover:border-amber-400 py-1"
//                   >
//                     VEHICLES
//                   </a>
//                   <a
//                     href="#"
//                     onClick={() => setIsOpen(false)}
//                     className="hover:text-amber-400 transition pl-2 border-l-2 border-transparent hover:border-amber-400 py-1"
//                   >
//                     BATTERIES
//                   </a>
//                   <a
//                     href="#"
//                     onClick={() => setIsOpen(false)}
//                     className="hover:text-amber-400 transition pl-2 border-l-2 border-transparent hover:border-amber-400 py-1"
//                   >
//                     PARTS
//                   </a>
//                   <a
//                     href="#"
//                     onClick={() => setIsOpen(false)}
//                     className="hover:text-amber-400 transition pl-2 border-l-2 border-transparent hover:border-amber-400 py-1"
//                   >
//                     CONTACT US
//                   </a>
//                 </nav>
//               </div>

//               <div className="pt-6 border-t border-white/10">
//                 <p className="text-xs text-gray-400 mb-2">
//                   Need Immediate Help?
//                 </p>
//                 <a
//                   href="tel:01745607559"
//                   className="flex items-center justify-center space-x-2 w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-xl font-bold text-sm shadow-md"
//                 >
//                   <Phone size={14} fill="currentColor" />
//                   <span>Call: 01745607559</span>
//                 </a>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
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
          <a
            href={`/${lang}`}
            className="hover:text-amber-500 transition-colors"
          >
            {t.header.home}
          </a>
          <a
            href={`/${lang}/vehicles`}
            className="hover:text-amber-500 transition-colors"
          >
            {t.header.vehicles}
          </a>
          <a
            href={`/${lang}/batteries`}
            className="hover:text-amber-500 transition-colors"
          >
            {t.header.batteries}
          </a>
          <a
            href={`/${lang}/parts`}
            className="hover:text-amber-500 transition-colors"
          >
            {t.header.parts}
          </a>
          <a
            href={`/${lang}/contact`}
            className="hover:text-amber-500 transition-colors"
          >
            {t.header.contact}
          </a>
        </nav>

        {/* অ্যাকশন বাটন এবং ল্যাঙ্গুয়েজ সুইচার */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* 🌐 ল্যাঙ্গুয়েজ টগল বাটন: ⚡ এখানে স্ক্রল কালার ফিক্স করা হয়েছে */}
          <a
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
          </a>

          {/* 📞 ডাইনামিক ফোন নাম্বার লিংক: ⚡ স্ক্রল করলে শ্যাডো ও হোভার ইফেক্ট রি-ডিফাইন করা হয়েছে */}
          <a
            href={`tel:${t.header.phone || "01745607559"}`}
            className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-3 py-2 rounded-full font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Phone size={14} className="fill-current" />
            <span className="hidden sm:inline">
              {t.header.phone || "01745607559"}
            </span>
          </a>

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
                  <a
                    href={`/${lang}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-amber-600 pl-2 py-1 border-l-2 border-transparent hover:border-amber-500 transition"
                  >
                    {t.header.home}
                  </a>
                  <a
                    href={`/${lang}/vehicles`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-amber-600 pl-2 py-1 border-l-2 border-transparent hover:border-amber-500 transition"
                  >
                    {t.header.vehicles}
                  </a>
                  <a
                    href={`/${lang}/batteries`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-amber-600 pl-2 py-1 border-l-2 border-transparent hover:border-amber-500 transition"
                  >
                    {t.header.batteries}
                  </a>
                  <a
                    href={`/${lang}/parts`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-amber-600 pl-2 py-1 border-l-2 border-transparent hover:border-amber-500 transition"
                  >
                    {t.header.parts}
                  </a>
                  <a
                    href={`/${lang}/contact`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-amber-600 pl-2 py-1 border-l-2 border-transparent hover:border-amber-500 transition"
                  >
                    {t.header.contact}
                  </a>
                </nav>
              </div>

              {/* মোবাইল ড্রয়ারের নিচের কল বাটন */}
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-2 font-semibold">
                  {lang === "bn"
                    ? "জরুরি প্রয়োজনে কল করুন"
                    : "Need Immediate Help?"}
                </p>
                <a
                  href={`tel:${t.header.phone || "01745607559"}`}
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-black text-sm shadow-md transition-all"
                >
                  <Phone size={14} fill="currentColor" />
                  <span>{t.header.phone || "01745607559"}</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
