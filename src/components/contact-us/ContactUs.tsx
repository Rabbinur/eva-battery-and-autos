"use client";

import CommonBanner from "@/components/Common/CommonBanner";
import { translations } from "@/constants/locales";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import React, { useState } from "react";

export default function ContactUs({
  lang,
}: {
  lang: "en" | "bn";
}): React.JSX.Element {
  const t = translations[lang] || translations.bn;
  const c = t.contactPage;
  const bannerTitle: string =
    (c as any).title ||
    [(c as any).title1, (c as any).title2, (c as any).title3]
      .filter(Boolean)
      .join(" ");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen pb-16">
      {/* 🚀 রিইউজেবল কমন ব্যানার */}
      <CommonBanner
        lang={lang}
        badge={c.badge}
        title={bannerTitle}
        subtitle={c.desc}
      />

      {/* 🛠️ মেইন ফর্ম ও কার্ড কন্টেন্ট এরিয়া */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* বাম পাশের কলাম: কার্ডস */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200 p-6 rounded-2xl flex items-start space-x-4 shadow-md shadow-slate-100"
            >
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-600">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  {c.cardCall}
                </h3>
                <a
                  href="tel:01745607559"
                  className="text-lg font-extrabold text-amber-600 hover:underline tracking-wide"
                >
                  {t.header.phone}
                </a>
                <p className="text-xs text-slate-500 mt-1">{c.cardCallAvail}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200 p-6 rounded-2xl flex items-start space-x-4 shadow-md shadow-slate-100"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-600">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  {c.cardEmail}
                </h3>
                <a
                  href="mailto:info@evabd.com"
                  className="text-slate-700 hover:text-amber-600 transition text-sm sm:text-base font-semibold"
                >
                  info@evabd.com
                </a>
                <p className="text-xs text-slate-500 mt-1">{c.cardEmailDesc}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200 p-6 rounded-2xl flex items-start space-x-4 shadow-md shadow-slate-100"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-600">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  {c.cardOffice}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {t.footer.address}
                </p>
              </div>
            </motion.div>
          </div>

          {/* ডান পাশের কলাম: ফর্ম */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/50 relative"
          >
            <div className="flex items-center space-x-2 mb-6 text-amber-600">
              <MessageSquare size={18} />
              <h2 className="text-lg font-bold text-slate-900">
                {c.formTitle}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wide text-slate-500 mb-2 font-bold">
                  {c.labelName}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={c.placeholderName}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white text-slate-900 transition"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-slate-500 mb-2 font-bold">
                  {c.labelEmail}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={c.placeholderEmail}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white text-slate-900 transition"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-slate-500 mb-2 font-bold">
                  {c.labelMsg}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={c.placeholderMsg}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white text-slate-900 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-3 px-6 rounded-xl text-sm transition shadow-md hover:shadow-lg flex items-center justify-center space-x-2 active:scale-95"
              >
                <span>{c.btnSend}</span>
              </button>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-6 left-6 right-6 bg-emerald-500 text-white font-bold text-sm text-center py-2.5 rounded-xl shadow-lg px-4"
                >
                  {c.successMsg}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
