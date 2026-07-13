import Provider from "@/components/Provider/MainProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🎯 ডাইনামিক SEO, ফেভিকন এবং ক্রিয়েটর মেটাডাটা জেনারেট করার ফাংশন
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "bn" }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isBn = lang === "bn";

  return {
    title: isBn ? "ইভা ব্যাটারি অ্যান্ড অটোস" : "EVA Battery & Autos",
    description: isBn
      ? "চায়না থেকে আমদানিকৃত রিকশা এবং পানি ব্যাটারি"
      : "China Imported Rickshaws & Lead-acid Batteries",

    // 🚀 এখানে আপনার নাম ও পোর্টফোলিও লিঙ্ক অ্যাড করা হয়েছে
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

// 🚀 static export এর জন্য ল্যাঙ্গুয়েজ প্যারামস জেনারেট করা
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "bn" }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
