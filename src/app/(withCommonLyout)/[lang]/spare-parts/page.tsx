import CommonBanner from "@/components/Common/CommonBanner";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function SparePartsPage({ params }: PageProps) {
  const { lang } = await params;
  const isBn = lang === "bn";

  const badge = isBn ? "খুচরা যন্ত্রাংশ" : "Spare Parts";
  const title = isBn 
    ? "ইজিবাইক ও রিকশার আসল খুচরা যন্ত্রাংশ" 
    : "Genuine Auto Rickshaw & Easy Bike Spare Parts";
  const subtitle = isBn 
    ? "মোটর, কন্ট্রোলার, চেসিস এবং অন্যান্য উচ্চ-মানের চায়না যন্ত্রাংশের নির্ভরযোগ্য আমদানিকারক ও বিক্রেতা।" 
    : "Your trusted importer and seller of high-quality China motors, controllers, chassis, and other parts.";

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-900 pb-20">
      <CommonBanner 
        lang={lang === "bn" ? "bn" : "en"} 
        badge={badge} 
        title={title} 
        subtitle={subtitle} 
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.03)] text-center max-w-3xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto text-amber-600">
            <Settings className="w-8 h-8 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isBn ? "খুচরা যন্ত্রাংশের ক্যাটালগ শীঘ্রই আসছে" : "Spare Parts Catalog Coming Soon"}
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isBn 
              ? "আমাদের চায়না আমদানিকৃত আসল খুচরা যন্ত্রাংশের (যেমন: শক্তিশালী মোটর, উন্নত কন্ট্রোলার, ড্রাম ব্রেক ও রিকশার অন্যান্য বডি পার্টস) সম্পূর্ণ তালিকাটি অনলাইনে যুক্ত করার কাজ চলছে। যেকোনো পার্টসের তথ্যের জন্য বা সরাসরি অর্ডার করতে আমাদের সাথে যোগাযোগ করুন।"
              : "We are currently setting up our online catalog for genuine China-imported spare parts (including motors, controllers, drum brakes, and other body components). Please contact us directly for parts availability and pricing."}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>{isBn ? "যোগাযোগ করুন" : "Contact Us"}</span>
              <ArrowRight size={16} />
            </Link>
            
            <a 
              href="tel:01745607559"
              className="inline-flex items-center justify-center space-x-2 border border-slate-300 hover:border-slate-400 bg-slate-50 px-6 py-3 rounded-xl font-bold text-sm text-slate-700 transition-all active:scale-95 cursor-pointer"
            >
              <span>{isBn ? "সরাসরি কল করুন" : "Call Directly"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
