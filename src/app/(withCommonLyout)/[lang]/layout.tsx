import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import FloatingActions from "@/components/Common/FloatingActions";
import Provider from "@/components/Provider/MainProvider";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🎯 ল্যাঙ্গুয়েজ অনুযায়ী ডাইনামিক SEO, Favicon এবং Creator ডেটা জেনারেট করার ফাংশন
export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang;

  const isBn = lang === "bn";

  return {
    title: isBn ? "ইভা ব্যাটারি অ্যান্ড অটোস" : "EVA Battery & Autos",
    description: isBn
      ? "চায়না থেকে আমদানিকৃত রিকশা এবং পানি ব্যাটারি"
      : "China Imported Rickshaws & Lead-acid Batteries",

    // 🔑 সার্চ ইঞ্জিনের জন্য কিওয়ার্ডসমূহ
    keywords: [
      "EVA Battery & Autos",
      "ইভা ব্যাটারি অ্যান্ড অটোস",
      "Eva Battery Phulpur",
      "ইভা ব্যাটারি ফুলপুর",
      "China Imported Rickshaw Bangladesh",
      "চায়না আমদানিকৃত রিকশা",
      "Lead-acid Batteries",
      "পানি ব্যাটারি", // পানি ব্যাটারি
      "Easy Bike Battery Price in Bangladesh",
      "ইজিবাইক ব্যাটারি",
      "Electric Auto Rickshaw Parts",
      "অটো রিকশা পার্টস পাইকারি",
      "Eva Battery Mymensingh",
    ],

    authors: [
      { name: "Md Rabbinur Muktar", url: "https://rabbinurmuktar.vercel.app/" },
    ],
    creator: "Md Rabbinur Muktar",

    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}

// 🚀 SSG/Static Export-এর জন্য প্যারামস জেনারেট করা
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const language: "en" | "bn" = lang === "bn" ? "bn" : "en";

  return (
    <html lang={language}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div className="relative min-h-screen flex flex-col justify-between">
            {/* হেডারকে ল্যাঙ্গুয়েজ প্যারাম পাস করা হলো */}
            <Header lang={language} />

            <main className="flex-1">{children}</main>

            {/* ফ্লোটিং অ্যাকশন বাটনসমূহ (WhatsApp ও Call) */}
            <FloatingActions />

            <Footer lang={language} />
          </div>
        </Provider>
      </body>
    </html>
  );
}
