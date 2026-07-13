"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import React, { useState } from "react";

export default function ContactUs(): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // আপনার ফর্ম হ্যান্ডলিং সাবমিট লজিক এখানে হবে
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#0b1329] text-white min-h-screen pt-28 pb-16">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8">
        {/* 🚀 হেডার টাইটেল */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase  tracking-widest text-amber-500 font-bold bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-4xl mt-2 font-extrabold tracking-tight">
            Connect With Our <span className="text-amber-500">Experts</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Have questions about batteries, vehicles, or wholesale parts? Reach
            out, and we will get back to you within 24 hours.
          </p>
        </div>

        {/* 🛠️ মেইন কন্টেন্ট লেআউট */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* বাম পাশের কলাম: কন্টাক্ট ইনফরমেশন কার্ডস */}
          <div className="lg:col-span-5 space-y-6">
            {/* সরাসরি কল কার্ড */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex items-start space-x-4 shadow-xl"
            >
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-500">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Call Directly</h3>
                <a
                  href="tel:01745607559"
                  className="text-lg font-extrabold text-amber-400 hover:underline"
                >
                  01745607559
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  Available 9:00 AM - 8:00 PM (Sat-Thu)
                </p>
              </div>
            </motion.div>

            {/* ইমেইল কার্ড */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex items-start space-x-4 shadow-xl"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Email Support</h3>
                <a
                  href="mailto:info@evabd.com"
                  className="text-gray-300 hover:text-white transition text-sm sm:text-base font-semibold"
                >
                  info@evabd.com
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  For sales queries and partnerships
                </p>
              </div>
            </motion.div>

            {/* অফিস ঠিকানা কার্ড */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex items-start space-x-4 shadow-xl"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Head Office</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Kazia Kanda(indirapar), Eva Battery & Autos,
                  <br />
                  haluaghat Road, phulpur, Mymensingh, Dhaka, Bangladesh
                </p>
              </div>
            </motion.div>
          </div>

          {/* ডান পাশের কলাম: কন্টাক্ট ফর্ম */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white/[0.03] backdrop-blur-md border border-white/5 p-6 sm:p-8 rounded-3xl shadow-2xl relative"
          >
            <div className="flex items-center space-x-2 mb-6 text-amber-500">
              <MessageSquare size={18} />
              <h2 className="text-lg font-bold text-white">Send A Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 text-white transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 text-white transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your requirement here..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 text-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-xl text-sm transition shadow-lg flex items-center justify-center space-x-2 active:scale-95"
              >
                <span>Send Message</span>
                <Send size={14} />
              </button>
            </form>

            {/* সাকসেস নোটিফিকেশন অ্যালার্ট */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-6 left-6 right-6 bg-emerald-500 text-slate-950 font-bold text-sm text-center py-2.5 rounded-xl shadow-lg"
                >
                  Thank you! Your response has been recorded successfully.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
