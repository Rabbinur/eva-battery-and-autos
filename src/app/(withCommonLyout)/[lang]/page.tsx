import BatteryFocus from "@/components/home/BatteryFocus";
import CallToAction from "@/components/home/CallToAction";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSlider from "@/components/home/hero/HeroSlider";
import Partnership from "@/components/home/Partnership";
import ValueProp from "@/components/home/ValueProp";
import type { Metadata } from "next";

// 🛠️ টাইপ ডেфিনিশন
interface PageProps {
  params: Promise<{ lang: "en" | "bn" }>;
}

// 🚀 ১. স্ট্যাটিক সাইট বিল্ড/এক্সপোর্টের জন্য প্যারামস জেনারেট করা
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

// 🚀 ২. ডাইনামিক এসইও, ফেভিকন, কিওয়ার্ডস এবং ক্রিয়েটর ডেটা জেনারেট করার ফাংশন
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang;
  const isBn = lang === "bn";

  const title = isBn
    ? "ইভা ব্যাটারি অ্যান্ড অটোস | চায়না আমদানিকৃত রিকশা ও পানি ব্যাটারি"
    : "EVA Battery & Autos | China Imported Rickshaws & Lead-acid Batteries";

  const description = isBn
    ? "বাংলাদেশে পাইকারি মূল্যে উচ্চ-মানের চায়না ইলেকট্রিক অটো-রিকশা, প্রিমিয়াম পানি ব্যাটারি এবং আসল খুচরা যন্ত্রাংশের সরাসরি আমদানিকারক।"
    : "Direct importer of high-quality China electric auto-rickshaws, premium Lead-acid batteries, and genuine spare parts in Bangladesh at wholesale prices.";

  return {
    title,
    description,
    keywords: [
      "EVA Battery & Autos",
      "ইভা ব্যাটারি অ্যান্ড অটোস",
      "Eva Battery Phulpur",
      "ইভা ব্যাটারি ফুলপুর",
      "China imported auto rickshaw Bangladesh",
      "চায়না আমদানিকৃত রিকশা",
      "Lead-acid battery for easy bike Dhaka",
      "পানি ব্যাটারি",
      "Easy Bike Battery Price in Bangladesh",
      "ইজিবাইক ব্যাটারি",
      "Auto rickshaw spare parts wholesale",
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
    openGraph: {
      title,
      description,
      url: `https://www.evabd.com/${lang}`,
      siteName: "EVA Battery & Autos",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isBn
            ? "ইভা ব্যাটারি অ্যান্ড অটোস শোকেস"
            : "EVA Battery & Autos Showcase",
        },
      ],
      locale: isBn ? "bn_BD" : "en_US",
      type: "website",
    },
  };
}

// 🚀 ৩. মেইন হোম পেজ কম্পোনেন্ট
export default async function Home({ params }: PageProps) {
  // ⚡ Promise থেকে lang প্যারামিটারটি বের করে নেওয়া হচ্ছে
  const { lang } = await params;

  return (
    <main>
      {/* 🎯 আপনার প্রতিটি সেকশনে ডাইনামিক ল্যাঙ্গুয়েজ প্রপস পাস করা হলো */}
      <HeroSlider lang={lang} />
      <ValueProp lang={lang} />
      <FeaturedProducts lang={lang} />
      <BatteryFocus lang={lang} />
      <Partnership lang={lang} />
      <CallToAction lang={lang} />
    </main>
  );
}
