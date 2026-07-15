import CommonBanner from "@/components/Common/CommonBanner";
import Link from "next/link";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function TermsPage({ params }: PageProps) {
  const { lang } = await params;
  const isBn = lang === "bn";

  const badge = isBn ? "শর্তাবলী" : "Terms of Service";
  const title = isBn ? "আমাদের শর্তাবলী ও নিয়মাবলী" : "Our Terms & Conditions";
  const subtitle = isBn 
    ? "ইভা ব্যাটারি অ্যান্ড অটোস থেকে পণ্য ক্রয়ের নিয়ম ও শর্তসমূহ।" 
    : "Rules, guidelines, and terms governing your purchases at EVA Battery & Autos.";

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-900 pb-20">
      <CommonBanner 
        lang={lang === "bn" ? "bn" : "en"} 
        badge={badge} 
        title={title} 
        subtitle={subtitle} 
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 mt-16 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.03)] space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-slate-900">{isBn ? "১. পণ্য ও বিক্রয় শর্ত" : "1. Products and Sales Terms"}</h2>
        <p>
          {isBn 
            ? "ইভা ব্যাটারি অ্যান্ড অটোস চায়না থেকে আমদানিকৃত অটো-রিকশা এবং পানি ব্যাটারি সরাসরি পাইকারি ও খুচরা বিক্রয় করে থাকে। সমস্ত পণ্যের অর্ডার স্টকের ওপর নির্ভরশীল।"
            : "EVA Battery & Autos directly imports and supplies electric three-wheelers, lead-acid batteries, and spare parts. All orders and prices are subject to stock availability."}
        </p>
        
        <h2 className="text-xl font-bold text-slate-900">{isBn ? "২. ওয়ারেন্টি নীতি" : "2. Warranty Policy"}</h2>
        <p>
          {isBn 
            ? "আমাদের পানি ব্যাটারি এবং অন্যান্য পার্টসের ওয়ারেন্টি নির্ধারিত শর্ত সাপেক্ষে প্রদান করা হয়। কোনো প্রকার অপব্যবহার বা অননুমোদিত মেরামতের কারণে সৃষ্ট ত্রুটি ওয়ারেন্টির আওতাভুক্ত হবে না।"
            : "Warranties on lead-acid batteries are subject to specific product warranty policies. Normal wear and tear, modifications, or incorrect installations are not covered."}
        </p>

        <h2 className="text-xl font-bold text-slate-900">{isBn ? "৩. রিফান্ড ও রিটার্ন" : "3. Refunds & Returns"}</h2>
        <p>
          {isBn 
            ? "পণ্য কেনার পূর্বে ভালোভাবে পরীক্ষা করে নেওয়ার জন্য অনুরোধ করা হচ্ছে। বিক্রিত পণ্য ফেরত বা পরিবর্তন করতে চাইলে আমাদের সাথে সরাসরি যোগাযোগ করুন, যা আমাদের নীতি অনুযায়ী বিবেচনা করা হবে।"
            : "We advise customers to thoroughly inspect all products before purchase. Return or replacement request reviews are handled individually on a case-by-case basis."}
        </p>
        
        <div className="pt-4 text-center">
          <Link 
            href={`/${lang}`}
            className="inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
          >
            {isBn ? "হোমে ফিরে যান" : "Back to Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
